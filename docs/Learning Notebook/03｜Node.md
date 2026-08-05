# Lesson 03｜Node.js、npm、npx

## 本章目標

理解：

```
Node.js
npm
npx
```

三者的角色與分工。

不要把它們混在一起。

建立 Node.js 生態系的完整心智模型。

---

# 為什麼要學這一章？

建立 Next.js 專案時，我們輸入的是：

```bash
npx create-next-app
```

平常又會使用：

```bash
npm install
npm run dev
```

有時候又會看到：

```bash
node app.js
```

很多初學者會把：

- node
- npm
- npx

當成同一個東西。

其實它們負責完全不同的工作。

---

# Node.js 是什麼？

Node.js 是：

> JavaScript Runtime（執行環境）。

它的工作只有一個：

> 執行 JavaScript。

例如：

```bash
node app.js
```

就是：

Node.js 執行：

```
app.js
```

---

# npm 是什麼？

npm 不是 Node.js 的指令。

而是：

> Node.js 官方隨附（Bundled）的 Package Manager（套件管理工具）。

它負責：

- 安裝套件
- 管理套件
- 管理專案
- 執行 package.json 的 scripts

例如：

```bash
npm install

npm uninstall

npm run dev
```

---

# npx 是什麼？

npx 是 npm 提供的工具。

它的工作是：

> 臨時下載並執行 npm Package。

例如：

```bash
npx create-next-app
```

真正流程：

```
npx
        │
        ▼
下載 create-next-app（如果本機沒有）
        │
        ▼
立即執行
```

所以：

建立 Next.js 專案時。

不用事先安裝：

```
create-next-app
```

---

# Node.js、npm、npx 的關係

```
Node.js
│
├── node
│      │
│      └── 執行 JavaScript
│
├── npm
│      │
│      ├── 安裝套件
│      ├── 管理套件
│      └── 執行 package.json scripts
│
└── npx
       │
       └── 臨時下載並執行 npm Package
```

---

# node 與 npm 的差別

node：

回答：

> 如何執行 JavaScript？

例如：

```bash
node app.js
```

npm：

回答：

> 如何管理這個專案？

例如：

```bash
npm install

npm run dev
```

---

# npx 與 npm 的差別

npm：

主要負責：

> 安裝（Install）

例如：

```bash
npm install react
```

npx：

主要負責：

> 執行（Execute）

例如：

```bash
npx create-next-app
```

---

# 第二次執行 npx

例如：

```bash
npx create-next-app
```

第一次：

如果本機沒有：

```
create-next-app
```

npx：

會：

```
下載

↓

執行
```

第二次：

如果已有可用版本。

通常：

直接使用。

沒有才重新下載。

---

# 我的思考誤區（My Misconceptions）

## 誤區一：npm 是 Node.js 的指令

### 我的原本理解

npm 是 Node.js 的指令。

### 修正後

npm 是：

Node.js 官方隨附的套件管理工具。

### 為什麼容易誤解？

因為每天都在輸入：

```bash
npm install
```

容易把：

工具

誤認為：

指令。

---

## 誤區二：npx 是建立專案的工具

### 我的原本理解

npx 是拿來建立 Next.js 專案。

### 修正後

npx 是：

臨時執行 npm Package。

建立 Next.js：

只是：

其中一個用途。

例如：

```bash
npx eslint

npx prettier

npx tsc
```

也都可以使用。

### 為什麼容易誤解？

因為第一次接觸：

npx

通常就是：

```
create-next-app
```

容易把：

用途

當成：

本質。

---

## 誤區三：npx 可以執行，是因為可以控制本機

### 我的原本理解

npx 可以控制本機，所以能執行程式。

### 修正後

真正原因是：

npx 會先下載（如果需要）Package。

再立即執行。

### 為什麼容易誤解？

容易從結果推論。

而沒有去思考：

它是如何做到的。

---

# 本章一句話總結

> Node.js 提供 JavaScript 執行環境；npm 管理專案與套件；npx 臨時下載並執行 npm Package。

---

# 關鍵字（Keywords）

- Node.js
- Runtime
- node
- npm
- Package Manager
- npx
- Execute
- Install
- create-next-app
- package