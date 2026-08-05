# Lesson 02｜package.json

## 本章目標

理解 Node.js 專案最重要的核心檔案：

```
package.json
```

不要死背欄位名稱。

而是理解：

它在整個 Node.js 生態系扮演什麼角色。

---

# package.json 是什麼？

一句話：

> package.json 是整個 Node.js 專案的 Blueprint（藍圖）。

它不是單純的設定檔。

它定義了：

- 這是什麼專案
- 需要哪些套件
- 有哪些指令可以執行

---

# package.json 的三個角色

## 1. 專案藍圖（Blueprint）

描述：

這是一個什麼專案。

例如：

```json
{
  "name": "20260730-portfolio"
}
```

---

## 2. 專案指令（Scripts）

```json
"scripts": {
  "dev": "next dev"
}
```

回答：

> 我要做什麼？

例如：

- 開發
- Build
- Start
- Lint

---

## 3. 套件需求（Dependencies）

回答：

> 我要用什麼來完成？

例如：

- React
- Next.js
- React DOM

---

# scripts

很多人以為：

```bash
npm run dev
```

是一個固定指令。

其實不是。

真正流程：

```text
npm run dev
        │
        ▼
npm
        │
        ▼
讀 package.json
        │
        ▼
找到 scripts.dev
        │
        ▼
執行：

next dev
```

所以：

如果：

```json
"dev": "echo 哈囉 Sam"
```

那：

```bash
npm run dev
```

只會：

```
哈囉 Sam
```

而不會啟動 Next.js。

---

# dependencies

回答：

> 網站執行時（Runtime）需要哪些套件。

例如：

```json
"dependencies": {
  "next": "...",
  "react": "...",
  "react-dom": "..."
}
```

這些套件：

最後都會跟著網站一起運作。

---

# devDependencies

回答：

> 開發（Development）與 Build 時需要哪些工具。

例如：

- TypeScript
- Tailwind CSS
- ESLint

它們的共同特色：

網站部署完成後。

瀏覽器並不需要它們。

例如：

TypeScript：

```
TypeScript
        │
Compile
        │
JavaScript
        │
Browser
```

Tailwind：

```
Tailwind
        │
Compile
        │
CSS
        │
Browser
```

所以：

它們屬於：

```
devDependencies
```

而不是：

```
dependencies
```

---

# Runtime 與 Development

理解：

dependencies

不是：

「重要的套件」

而是：

> Runtime（網站真正執行）需要的套件。

理解：

devDependencies

不是：

「比較不重要」

而是：

> Development / Build 時才需要的工具。

---

# package-lock.json

package.json：

回答：

> 我要什麼？

例如：

```
React 19.x
```

package-lock.json：

回答：

> 我這次真正安裝了什麼？

例如：

```
React 19.2.4
```

它的目的：

> 鎖定整個團隊使用完全相同的版本。

避免：

不同電腦安裝出不同版本。

---

# package.json 與 package-lock.json

可以理解成：

```
package.json
        │
        │
我要什麼
        │
        ▼

package-lock.json
        │
        │
真正安裝哪一版
```

---

# node_modules

node_modules

不是工具。

而是：

真正下載到硬碟上的套件。

例如：

```
node_modules/

react/
next/
typescript/
eslint/
```

---

# package.json、package-lock.json、node_modules 的關係

可以理解成：

```
package.json
        │
採購清單
        │
        ▼

package-lock.json
        │
採購紀錄
        │
        ▼

node_modules
        │
真正買回來放進倉庫（冰箱）的材料
```

真正重要的是：

```
package.json
package-lock.json
```

因為：

```
node_modules
```

可以透過：

```bash
npm install
```

重新建立。

---

# npm install 做了什麼？

流程：

```
package.json
        │
        ▼
package-lock.json（如果存在）
        │
        ▼
下載套件
        │
        ▼
node_modules
```

如果：

```
package-lock.json
```

不存在。

npm 就會依照：

```
package.json
```

重新解析符合條件的最新版本。

---

# 版本號（Semantic Versioning）

React：

```
19.2.4
```

代表：

```
19 . 2 . 4
│    │   │
│    │   └── Patch（修補）
│    └────── Minor（新增功能）
└────────── Major（重大更新）
```

---

# ^ 的意思

不是：

```
5 以後的版本
```

而是：

```
>=5.0.0
<6.0.0
```

允許：

所有：

```
5.x.x
```

但：

不允許：

```
6.x.x
```

---

# 我的思考誤區（My Misconceptions）

## 誤區一：npm run dev 是固定指令

### 我的原本理解

```
npm run dev
```

就是啟動 Next.js。

### 修正後

```
npm run dev
```

真正做的是：

```
npm
    │
讀 package.json
    │
找到 scripts.dev
    │
執行 next dev
```

### 為什麼容易誤解？

因為大部分教學只教輸入指令，沒有說明 npm 真正執行的流程。

---

## 誤區二：TypeScript 在 devDependencies 是因為它是程式語言

### 我的原本理解

TypeScript 是程式語言，所以放在：

```
devDependencies
```

### 修正後

真正的分類依據不是：

```
程式語言
vs
套件
```

而是：

```
Runtime
vs
Development
```

TypeScript 在 Build 完成後就不會出現在瀏覽器，因此屬於：

```
devDependencies
```

### 為什麼容易誤解？

容易依照「它是什麼」分類，而不是依照「它在哪個階段發揮作用」分類。

---

## 誤區三：^5 代表 5 以後的版本

### 我的原本理解

```
^5
```

代表：

```
5 以上
```

### 修正後

```
^5
```

代表：

```
>=5.0.0
<6.0.0
```

允許：

所有：

```
5.x.x
```

但：

不允許：

```
6.x.x
```

### 為什麼容易誤解？

直覺容易把 `^` 理解成「大於」，但 npm 的語意其實是允許同一個 Major Version 的相容更新。

---

## 誤區四：package-lock.json 存在時，npm install 還是會下載最新版

### 我的原本理解

React 發布新版後。

執行：

```bash
npm install
```

就會下載最新版。

### 修正後

如果：

```
package-lock.json
```

存在。

npm 會優先使用：

```
package-lock.json
```

鎖定的版本。

### 為什麼容易誤解？

容易把 package.json 當成唯一依據，而忽略 package-lock.json 的作用。

---

## 誤區五：node_modules 是工具

### 我的原本理解

```
node_modules
```

像：

製作蛋糕的工具。

### 修正後

```
node_modules
```

更像：

倉庫（冰箱）。

裡面存放的是：

真正下載回來的套件。

真正的工具是：

- Node.js
- npm

### 為什麼容易誤解？

因為平常很少直接查看 node_modules，容易把它和 Node.js、npm 混為一談。

---

# 本章一句話總結

> package.json 定義專案與需求；package-lock.json 鎖定實際安裝版本；node_modules 存放真正下載的套件；npm 則依照 package.json 與 package-lock.json 管理整個專案。

---

# 關鍵字（Keywords）

- package.json
- package-lock.json
- node_modules
- scripts
- dependencies
- devDependencies
- Runtime
- Development
- Build
- npm install
- npm run
- Semantic Versioning（SemVer）
- Major
- Minor
- Patch