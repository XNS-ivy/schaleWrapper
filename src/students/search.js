import { getStudents, getStudentById } from './loader.js'

/**
 * Normalisasi string untuk pencarian
 * @param {string} name
 * @returns {string}
 */
function normalize(name) {
  return name.toLowerCase().replace(/（/g, '(').replace(/）/g, ')')
}

/**
 * Cari student berdasarkan nama
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