import { getStudents, getStudentId } from './loader.js'

/**
 * Normalization string for searching
 * @param {string} name
 * @returns {string}
 */
function normalize(name) {
  return name.toLowerCase().replace(/（/g, '(').replace(/）/g, ')')
}

/**
 * Find Student by specific name
 * @param {string} name
 * @param {string} lang
 * @returns {import('../../types/student').Student[]}
 */
export function getStudentByName(name = '', lang = 'en') {
  const students = getStudents(lang)
  const found = []
  const lc = normalize(name)

  for (const s of students) {
    if ([s?.Name, s?.PathName, s?.DevName].some(n => n?.toLowerCase() === lc)) {
      return [s]
    }
    if (
      [s?.Name, s?.PathName, s?.DevName, s?.FamilyName, s?.PersonalName, s?.CharacterVoice]
        .some(n => n?.toLowerCase().includes(lc))
    ) {
      found.push(s)
    }
  }

  return found
}

export function getAllStudents(lang = 'en') {
  return getStudents(lang)
}

export function getStudentById(id, lang = 'en') {
  return getStudentId(Number(id), lang)
}