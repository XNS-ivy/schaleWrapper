# 📦 schalewrapper

> A simple Node.js wrapper for [Schale.gg](https://schale.gg) Blue Archive data — with multi-language support and local syncing.

---

## 📥 Installation

```bash
npm install schalewrapper
```

---

## 🌍 Supported Languages

- `en` (default)
- `jp`
- `kr`
- `cn`
- `tw`
- `th`
- `vi`

---

## 🔧 Data Sync

Before accessing data, sync it locally from SchaleDB:

```js
// <-- Update data
import { syncAllLanguages } from 'schalewrapper'

syncAllLanguages()
```

---

## 👧 Students

### 🔎 Get student by name

```js
// <-- Get Student By Name
import { getStudentByName } from 'schalewrapper'

const test = async () => {
  const results = getStudentByName('Hoshino', 'en')

  for (const s of results) {
    console.log(s)
  }
}

test()
```

### 🔎 Get student by ID

```js
// <-- Get Student By ID
import { getStudentById } from 'schalewrapper'

const student = getStudentById(1022, 'jp')
console.log(student)
```

### 📋 Get all students

```js
// <-- Get All Students
import { getAllStudents } from 'schalewrapper'

const all = getAllStudents('kr')
console.log(all.length)
```

---

## 🎒 Items

### 🔎 Get item by name

```js
// <-- Get Item By Name
import { getItemByName } from 'schalewrapper'

const test2 = async () => {
  const results = getItemByName('keystone', 'en')

  for (const item of results) {
    console.log(item)
  }
}

test2()
```

### 🔎 Get item by ID

```js
// <-- Get Item By ID
import { getItemById } from 'schalewrapper'

const item = getItemById(20001, 'en')
console.log(item)
```

### 📋 Get all items

```js
// <-- Get All Items
import { getAllItems } from 'schalewrapper'

const items = getAllItems('jp')
console.log(items.length)
```

---

## 📁 Data Files

Saved to `assets/data/<lang>/<file>.json` for offline access.

---