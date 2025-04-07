import { getItemByName, getItemById, getAllItems } from "./search.js"

/**
 * Finds an item by name and returns the first match.
 * @param {string} name - The name of the item to search for.
 * @param {string} lang - The language code (e.g., 'en', 'jp').
 * @returns {Promise<Object|null>} - The first matching item object, or null if none found.
 */
const findItemByName = async (name, lang) => {
    const result = getItemByName(name, lang)
    return result[0] || null
}

/**
 * Finds an item by ID.
 * @param {number} id - The unique ID of the item.
 * @param {string} lang - The language code (default is 'en').
 * @returns {Promise<Object|null>} - The item object if found, otherwise null.
 */
const findItemById = async (id = Number(), lang = 'en') => {
    return getItemById(id, lang)
}

/**
 * Retrieves all items.
 * @param {string} lang - The language code for localization (e.g., 'en', 'jp').
 * @returns {Promise<Object[]>} - A list of all item objects.
 */
const findAllItems = async (lang = 'en') => {
    return getAllItems(lang)
}

export { findItemById, findItemByName, findAllItems }