import { existsSync, readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import asArray from '../../utils/asArray.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

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

export function getItemById(id, lang = 'en') {
  initItemMap()
  return itemMap.get(lang)?.find(item => item.Id === id)
}