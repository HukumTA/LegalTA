/**
 * Service: KBLI 2020 Search & OSS-RBA Risk Engine
 * Legal Foundation: PP No. 5 Tahun 2021 & Perpres No. 10/2021 jo Perpres 49/2021
 */

const { getKBLIItems } = require('../../../database/db');

async function searchKBLI(query = '', sector = 'all') {
  const cleanQ = (query || '').trim().toLowerCase();

  // Fetch KBLI items from database (Supabase or local fallback)
  const allItems = await getKBLIItems();

  const filtered = allItems.filter(item => {
    const textMatch = !cleanQ || 
      (item.code && item.code.toLowerCase().includes(cleanQ)) || 
      (item.title && item.title.toLowerCase().includes(cleanQ)) || 
      (item.description && item.description.toLowerCase().includes(cleanQ)) ||
      (item.sector_name && item.sector_name.toLowerCase().includes(cleanQ));

    const sectorMatch = sector === 'all' || 
      (item.category && item.category.toLowerCase() === sector.toLowerCase()) ||
      (item.sector_name && item.sector_name.toLowerCase().includes(sector.toLowerCase()));

    return textMatch && sectorMatch;
  });

  return {
    query: cleanQ,
    sector,
    totalResults: filtered.length,
    results: filtered
  };
}

module.exports = { searchKBLI };
