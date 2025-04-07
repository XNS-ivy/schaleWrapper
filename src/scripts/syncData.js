import { mkdir, writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import { resolve, dirname } from 'path'
import axios from 'axios'
import { getDirname } from '../../utils/dirname.js'

const __dirname = getDirname(import.meta.url)

const langs = ['cn', 'jp', 'en', 'tw', 'kr', 'th']
const files = [
  'students.min.json',
  'localization.json',
  'equipment.json',
  'items.json',
  'furniture.json',
  'raids.json'
]

async function downloadJSON(lang, file) {
  const url = `https://schaledb.com/data/${lang}/${file}`
  const outputPath = resolve(__dirname, `../../assets/data/${lang}/${file}`)

  try {
    const dir = dirname(outputPath)
    if (!existsSync(dir)) {
      await mkdir(dir, { recursive: true })
    }

    const res = await axios.get(url)
    const json = JSON.stringify(res.data, null, 2)
    await writeFile(outputPath, json, 'utf-8')

    console.log(`[OK] Downloaded ${file} for ${lang}`)
  } catch (err) {
    console.error(`[ERR] ${file} (${lang}):`, err.message)
  }
}

export async function syncAllLanguages() {
  for (const lang of langs) {
    for (const file of files) {
      await downloadJSON(lang, file)
    }
  }
}