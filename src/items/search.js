import { getItemId, getItems } from './loader.js'

/**
 * Normalization string for searching
 * @param {string} name
 * @returns {string}
 */
function normalize(name) {
  return name.toLowerCase()
}

/**
 * Find Item by specific name
 * @param {string} name
 * @param {string} lang
 * @returns {import('../../types/item').Item[]}
 */
export function getItemByName(name = '', lang = 'en') {
  const items = getItems(lang)
  const found = []
  const lc = normalize(name)

  for (const item of items) {
    if ([item?.Name, item?.PathName].some(n => n?.toLowerCase() === lc)) {
      return [item]
    }
    if ([item?.Name, item?.PathName, item?.Desc, item?.Desc2].some(n => n?.toLowerCase().includes(lc))) {
      found.push(item)
    }
  }

  return found
}

/**
 * Get all items
 * @param {string} lang
 * @returns {import('../../types/item').Item[]}
 */
export function getAllItems(lang = 'en') {
  return getItems(lang)
}

export function getItemById(id = Number() , lang = 'en'){
  return getItemId(Number(id), lang)
}