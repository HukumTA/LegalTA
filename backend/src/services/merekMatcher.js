/**
 * Service: PDKI DJKI Trademark Matcher & Substantive Risk Engine
 * Legal Foundation: UU No. 20 Tahun 2016 tentang Merek dan Indikasi Geografis
 */

const { queryAll } = require('../../../database/db');

function simpleSoundex(s) {
  const str = (s || '').toUpperCase();
  if (!str) return '';
  const firstLetter = str[0];
  const mapping = {
    B: '1', F: '1', P: '1', V: '1',
    C: '2', G: '2', J: '2', K: '2', Q: '2', S: '2', X: '2', Z: '2',
    D: '3', T: '3',
    L: '4',
    M: '5', N: '5',
    R: '6'
  };

  let res = firstLetter;
  let prev = mapping[firstLetter] || '0';

  for (let i = 1; i < str.length; i++) {
    const code = mapping[str[i]] || '0';
    if (code !== '0' && code !== prev) {
      res += code;
    }
    prev = code;
  }
  return (res + '000').slice(0, 4);
}

function searchTrademarkSimilarity(brandName, niceClass = 42) {
  const cleanBrand = (brandName || '').trim().toUpperCase();
  const targetClass = parseInt(niceClass, 10) || 42;
  const brandSoundex = simpleSoundex(cleanBrand);

  // Fetch registered trademarks from database
  const trademarks = queryAll('SELECT * FROM registered_trademarks');

  const matches = [];
  let highestPhoneticSimilarity = 12; // Baseline

  for (const tm of trademarks) {
    const tmSoundex = simpleSoundex(tm.brand_name);
    const sameClass = tm.nice_class === targetClass;
    const sameSoundex = tmSoundex === brandSoundex;

    let matchScore = 15;
    if (sameClass) matchScore += 30;
    if (sameSoundex) matchScore += 40;
    if (cleanBrand.includes(tm.brand_name) || tm.brand_name.includes(cleanBrand)) {
      matchScore += 25;
    }

    matchScore = Math.min(95, matchScore);

    if (matchScore > highestPhoneticSimilarity) {
      highestPhoneticSimilarity = matchScore;
    }

    matches.push({
      brandName: tm.brand_name,
      niceClass: tm.nice_class,
      appNumber: tm.application_number,
      owner: tm.owner_name,
      status: tm.status,
      sameClass,
      conflictRisk: sameClass ? (matchScore > 50 ? 'Tinggi' : 'Sedang') : 'Nihil (Beda Kelas)'
    });
  }

  // Sort by potential conflict
  matches.sort((a, b) => (b.sameClass ? 1 : 0) - (a.sameClass ? 1 : 0));

  const rejectionRisk = highestPhoneticSimilarity > 60 ? 'TINGGI' : (highestPhoneticSimilarity > 35 ? 'SEDANG' : 'RENDAH');
  const passingProbability = 100 - highestPhoneticSimilarity;

  return {
    searchedTerm: cleanBrand,
    niceClass: targetClass,
    rejectionRisk,
    riskPercentage: highestPhoneticSimilarity,
    passingProbability,
    isAvailable: highestPhoneticSimilarity < 50,
    phoneticKey: brandSoundex,
    comparisons: matches.slice(0, 5),
    legalOpinion: {
      counselName: 'Adhitya Nugroho, S.H., LL.M.',
      counselRole: 'Managing Partner HKI LEGALTA (No. 1104/HKI-LEGALTA)',
      recommendationTier: rejectionRisk === 'RENDAH' ? 'Rekomendasi A+' : 'Rekomendasi B (Perlu Modifikasi)',
      statement: `Kata "${cleanBrand}" memiliki potensi registrasi yang ${rejectionRisk === 'RENDAH' ? 'sangat baik' : 'memerlukan kehati-hatian'} di Kelas Nice ${targetClass}. Pastikan etiket grafis logo memiliki karakter pembeda visual yang kuat untuk mempermudah pemeriksaan substantif DJKI Kemenkumham RI.`
    }
  };
}

module.exports = { searchTrademarkSimilarity };
