// src/utils/dirname.js
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export function getDirname(importMetaUrl) {
  try {
    return dirname(fileURLToPath(importMetaUrl))
  } catch {
    return __dirname || process.cwd()
  }
}