import { mkdir, writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import { dirname, resolve } from 'path'
import axios from 'axios'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const langs = ['cn', 'jp', 'en', 'tw', 'kr', 'th']
const file = 'students.min.json'

async function downloadJSON(lang) {
  const url = `https://schaledb.com/data/${lang}/${file}`
  const outputPath = resolve(__dirname, `../assets/data/${lang}/${file}`)

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
    console.error(`[ERR] ${lang}:`, err.message)
  }
}

async function downloadAll() {
  for (const lang of langs) {
    await downloadJSON(lang)
  }
}

export async function syncAllLanguages() {
  for (const lang of langs) {
    await downloadJSON(lang)
  }
}