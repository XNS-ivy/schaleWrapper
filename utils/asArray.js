/**
 * Mengubah object dengan ID sebagai key jadi array of student
 * @param {object|array} input
 * @returns {array}
 */
export default function asArray(input) {
  if (Array.isArray(input)) return input
  if (typeof input === 'object' && input !== null) {
    return Object.values(input)
  }
  return []
}