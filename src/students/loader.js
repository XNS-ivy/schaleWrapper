import { existsSync, readFileSync } from 'fs'
import { resolve } from 'path'
import asArray from '../../utils/asArray.js'
import { getDirname } from '../../utils/dirname.js'

const __dirname = getDirname(import.meta.url)

const langs = ['cn', 'jp', 'en', 'tw', 'kr', 'th', 'vi']
const studentMap = new Map()
let _initted = false

const skillKeyMap = {
  Ex: 'ex',
  Public: 'normal',
  GearPublic: 'normal',
  Passive: 'passive',
  WeaponPassive: 'passive',
  ExtraPassive: 'sub',
}

export function initStudentMap() {
  if (_initted) return
  for (const lang of langs) {
    const filePath = resolve(__dirname, `../../assets/data/${lang}/students.min.json`)
    if (!existsSync(filePath)) continue

    const data = asArray(JSON.parse(readFileSync(filePath, 'utf-8')))
    for (const s of data) {
      const skills = []
      for (const key in s.Skills) {
        if (key in skillKeyMap) {
          skills.push({
            SkillType: skillKeyMap[key],
            ...s.Skills[key],
          })
        }
      }
      s.Skills = skills
    }
    studentMap.set(lang, data)
  }
  _initted = true
}

export function getStudents(lang = 'en') {
  initStudentMap()
  return studentMap.get(lang) || []
}

export function getStudentId(id, lang = 'en') {
  initStudentMap()
  return studentMap.get(lang)?.find(s => s.Id === id)
}