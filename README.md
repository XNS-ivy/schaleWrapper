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

Before accessing any data, sync all language data locally from SchaleDB:

```js
import { syncAllLanguages } from 'schalewrapper'

await syncAllLanguages()
```

This will download and store data files into `./assets/data/<lang>`.

---

## 👧 Students

### 🔍 Find student by name

```js
import studentFetcher from 'schalewrapper'

const student = await studentFetcher.findStudentByName('hoshino', 'en')
console.log(student)
```

### 🔍 Find student by ID

```js
import studentFetcher from 'schalewrapper'

const student = await studentFetcher.findStudentById(10000, 'en')
console.log(student)
```

### 📋 Get all students

```js
import studentFetcher from 'schalewrapper'

const allStudents = await studentFetcher.findAllStudent('en')
console.log(allStudents.length)
```

---

## 🎒 Items

### 🔍 Find item by name

```js
import itemFetcher from 'schalewrapper'

const item = await itemFetcher.findItemByName('keystone', 'en')
console.log(item)
```

### 🔍 Find item by ID

```js
import itemFetcher from 'schalewrapper'

const item = await itemFetcher.findItemById(1, 'en')
console.log(item)
```

### 📋 Get all items

```js
import itemFetcher from 'schalewrapper'

const items = await itemFetcher.findAllItems('en')
console.log(items.length)
```

---

## 📁 Data Files

All data is stored offline in:

```
assets/data/<lang>/<file>.json
```

You can manually explore or load these files for custom processing.

---