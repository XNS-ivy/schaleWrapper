import { existsSync, readFileSync } from 'fs'
import { resolve } from 'path'
import { getDirname } from '../../utils/dirname.js'
import asArray from '../../utils/asArray.js'

const __dirname = getDirname(import.meta.url)

const langs = ['cn', 'jp', 'en', 'tw', 'kr', 'th', 'vi']
const itemMap = new Map()
let _initted = false

export function initItemMap() {
  if (_initted) return
  for (const lang of langs) {
    const filePath = resolve(__dirname, `../../assets/data/${lang}/items.json`)
    if (!existsSync(filePath)) continue

    const data = asArray(JSON.parse(readFileSync(filePath, 'utf-8')))
    itemMap.set(lang, data)
  }
  _initted = true
}

export function getItems(lang = 'en') {
  initItemMap()
  return itemMap.get(lang) || []
}

export function getItemId(id, lang = 'en') {
  initItemMap()
  return itemMap.get(lang)?.find(item => item.Id === id)
}