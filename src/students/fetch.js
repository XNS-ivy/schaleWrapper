import { getStudentByName, getAllStudents, getStudentById } from './search.js'

/**
 * Finds students by name.
 * @param {string} name - The name of the student to search for.
 * @param {string} lang - The language code (e.g., 'en', 'jp').
 * @returns {Promise<Object[]>|null} - A list of matching student objects.
 */
const findStudentByName = async (name = '', lang = '') => {
    const result = getStudentByName(name, lang)
    return result[0] || null
}

/**
 * Retrieves all students.
 * @param {string} lang - The language code for localization.
 * @returns {Promise<Object[]>} - A list of all student objects.
 */
const findAllStudent = async (lang = '') => {
    const result = await getAllStudents(lang)
    return result
}

/**
 * Finds a student by ID.
 * @param {number} id - The unique ID of the student.
 * @param {string} lang - The language code for localization.
 * @returns {Promise<Object|null>} - The student object if found, otherwise null.
 */
const findStudentById = async (id = Number(), lang = '') => {
    const result = await getStudentById(id, lang)
    return result
}

export { findAllStudent, findStudentById, findStudentByName }