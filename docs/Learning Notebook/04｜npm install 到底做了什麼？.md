# Lesson 04｜npm install 到底做了什麼？

## 本章目標

理解：

```bash
npm install
```

真正做了哪些事情。

不要只理解成：

> 下載套件。

---

# npm install 是什麼？

一句話：

> npm install 是根據 package.json 與 package-lock.json 建立（或重建）node_modules 的流程。

下載套件：

只是其中一步。

---

# npm install 的完整流程

```
package.json
        │
        ▼
讀取需求
        │
        ▼
package-lock.json（如果存在）
        │
        ▼
確認版本
        │
        ▼
下載套件
        │
        ▼
建立 node_modules
        │
        ▼
建立 / 更新 package-lock.json
```

---

# package.json

回答：

> 我要什麼？

例如：

```
React
Next.js
Tailwind
```

---

# package-lock.json

回答：

> 真正安裝哪一版？

例如：

```
React 19.2.4
```

它負責：

鎖定版本。

---

# node_modules

回答：

> 真正下載到硬碟上的套件。

例如：

```
react/

next/

typescript/
```

---

# node_modules 可以刪除嗎？

可以。

只要：

```
package.json

package-lock.json
```

還在。

重新執行：

```bash
npm install
```

即可完整重建。

---

# 為什麼 Git 不需要提交 node_modules？

真正重要的是：

```
package.json

package-lock.json
```

因為：

```
node_modules
```

可以重新下載。

所以：

通常：

```
Git

✔ package.json

✔ package-lock.json

✘ node_modules
```

---

# Blueprint（藍圖）

package.json：

像：

建築藍圖。

```
Blueprint

↓

npm install

↓

真正蓋出房子
```

因此：

只有：

```
package.json
```

沒有：

```
npm install
```

就不會有：

```
node_modules
```

---

# package.json 被刪掉會怎樣？

即使：

```
node_modules
```

還存在。

也不能算是一個完整的 Node.js 專案。

因為：

Blueprint 已經消失。

不知道：

- 我是誰
- 我要哪些套件
- 有哪些 scripts
- 如何 Build
- 如何執行

---

# package.json 的真正定位

package.json 不只是：

設定檔。

它更是：

> Node.js 專案唯一正式定義（Project Definition）。

它定義：

```
我是誰

我要什麼

我要做什麼
```

---

# 我的思考誤區（My Misconceptions）

## 誤區一：npm install 就只是下載套件

### 我的原本理解

npm install：

就是下載套件。

### 修正後

真正流程：

```
讀 package.json

↓

確認版本

↓

下載

↓

建立 node_modules

↓

更新 package-lock.json
```

### 為什麼容易誤解？

因為：

下載套件：

是最容易看見的結果。

---

## 誤區二：先建立 node_modules，再建立 package-lock.json

### 我的原本理解

node_modules 應該先建立。

### 修正後

它們都是：

npm install

流程的一部分。

並不是：

完全分開的兩件事。

### 為什麼容易誤解？

容易把：

安裝流程。

想成：

一步一步完全切開。

---

## 誤區三：只要有 node_modules 就算完整專案

### 我的原本理解

node_modules 還在。

專案應該還能運作。

### 修正後

真正重要的是：

```
package.json
```

因為：

它才是專案定義。

### 為什麼容易誤解？

容易把：

下載好的套件。

當成：

專案本身。

---

# 本章一句話總結

> npm install 根據 package.json 與 package-lock.json 建立 node_modules；真正重要的是 package.json，它定義了整個 Node.js 專案。

---

# 關鍵字（Keywords）

- npm install
- package.json
- package-lock.json
- node_modules
- Blueprint
- Project Definition
- Install
- Dependency
- Runtime
- Development