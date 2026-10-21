/**
 * Service: PT Name Validator
 * Legal Foundation: UU No. 40 Tahun 2007 & PP No. 43 Tahun 2011
 */

const { getRegisteredPTs } = require('../../../database/db');

// Forbidden governmental, military, or offensive tokens
const FORBIDDEN_WORDS = [
  'kpk', 'kementerian', 'polisi', 'tni', 'mahkamah', 'kejaksaan', 'negara', 
  'bumn', 'presiden', 'dpr', 'mpr', 'republik', 'otoritas'
];

// Common Indonesian words for linguistic validation
const INDONESIAN_MARKERS = [
  'nusantara', 'abadi', 'perkasa', 'makmur', 'jaya', 'sentosa', 'karya', 
  'mandiri', 'digital', 'inovasi', 'cakrawala', 'berkah', 'solusi', 'lestari',
  'indonesia', 'utama', 'sejahtera', 'cemerlang', 'gemilang', 'megah'
];

function calculateLevenshtein(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1).toLowerCase() === a.charAt(j - 1).toLowerCase()) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

async function validatePTName(rawName) {
  const cleanName = (rawName || '').replace(/^pt\.?\s+/i, '').trim();
  const words = cleanName.split(/\s+/).filter(w => w.length > 0);
  
  const issues = [];
  const checks = {
    wordCount: words.length >= 3,
    indonesianLanguage: false,
    noForbiddenGovernmentTokens: true,
    phoneticConflictLow: true
  };

  // Rule 1: Minimum 3 words
  if (words.length < 3) {
    issues.push('Nama PT PMDN wajib memuat minimal 3 suku kata mandiri (Pasal 5 PP 43/2011).');
  }

  // Rule 2: Forbidden government or prohibited tokens
  for (const word of words) {
    const lower = word.toLowerCase();
    if (FORBIDDEN_WORDS.includes(lower)) {
      checks.noForbiddenGovernmentTokens = false;
      issues.push(`Frasa "${word}" dilarang karena menyerupai instansi/lembaga resmi negara.`);
    }
  }

  // Rule 3: Indonesian language check
  const indonesianMatches = words.filter(w => INDONESIAN_MARKERS.includes(w.toLowerCase()));
  checks.indonesianLanguage = indonesianMatches.length >= 1 || words.length >= 3;

  // Rule 4: Levenshtein distance check against active registered PTs in database (Supabase/SQLite)
  const registered = await getRegisteredPTs();
  let highestSimilarity = 0;
  let closestMatch = null;

  for (const item of registered) {
    const distance = calculateLevenshtein(cleanName, item.name);
    const maxLen = Math.max(cleanName.length, item.name.length);
    const similarity = 1 - (distance / maxLen);

    if (similarity > highestSimilarity) {
      highestSimilarity = similarity;
      closestMatch = item.name;
    }
  }

  const similarityPercentage = Math.round(highestSimilarity * 100);
  if (similarityPercentage > 75) {
    checks.phoneticConflictLow = false;
    issues.push(`Kemiripan fonetik sangat tinggi (${similarityPercentage}%) dengan PT terdaftar: "${closestMatch}".`);
  }

  // Calculate approval probability
  let probability = 96;
  if (!checks.wordCount) probability -= 55;
  if (!checks.noForbiddenGovernmentTokens) probability -= 40;
  if (!checks.phoneticConflictLow) probability -= 35;
  probability = Math.max(15, Math.min(99, probability));

  const isEligible = checks.wordCount && checks.noForbiddenGovernmentTokens && checks.phoneticConflictLow;

  return {
    rawName,
    formattedPTName: `PT ${cleanName.toUpperCase()}`,
    wordCount: words.length,
    words,
    isEligible,
    probability,
    similarityScore: similarityPercentage,
    closestMatch: closestMatch || 'Nihil',
    checks,
    issues,
    legalAdvice: isEligible 
      ? 'Nama ini memiliki tingkat distingsi tinggi dan memenuhi seluruh parameter PP 43/2011. Siap dipesan melalui voucher Ditjen AHU.' 
      : 'Diperlukan modifikasi susunan suku kata sebelum pemesanan voucher AHU resmi untuk mencegah penolakan sistem.'
  };
}

module.exports = { validatePTName };
