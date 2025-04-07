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

This will download and store data files into:

```
./assets/data/<lang>/
```

---

## 👧 Students

### 🔍 Find student by name

```js
import { findStudentByName } from 'schalewrapper'

const student = await findStudentByName('hoshino', 'en')
console.log(student)
```

### 🔍 Find student by ID

```js
import { findStudentById } from 'schalewrapper'

const studentId = await findStudentById(10000, 'en')
console.log(studentId)
```

### 📋 Get all students

```js
import { findAllStudent } from 'schalewrapper'

const allStudents = await findAllStudent('en')
console.log(allStudents.length)
```

---

## 🎒 Items

### 🔍 Find item by name

```js
import { findItemByName } from 'schalewrapper'

const itemName = await findItemByName('keystone', 'en')
console.log(itemName)
```

### 🔍 Find item by ID

```js
import { findItemById } from 'schalewrapper'

const itemId = await findItemById(1, 'en')
console.log(itemId)
```

### 📋 Get all items

```js
import { findAllItems } from 'schalewrapper'

const items = await findAllItems('en')
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