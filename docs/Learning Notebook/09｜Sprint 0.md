# Lesson 09｜Sprint 0.5｜Git Workflow（一）

> 日期：2026-08-03
>
> 專案：20260730-portfolio
>
> Sprint：Sprint 0.5 - Git Workflow

---

# 本章目標

本章不急著學 Git 指令。

目標只有一個：

> 理解 Git 應該管理什麼，以及為什麼有些檔案不能交給 Git 管理。

---

# Git 真正要管理的是什麼？

Git 並不是管理整個資料夾。

而是：

> 管理專案的來源（Source）。

例如：

```text
Source
│
├── src/
├── docs/
├── package.json
└── package-lock.json
```

這些都是專案真正的來源。

應該交給 Git 管理。

---

# Generated（產物）

有些資料夾不是來源。

而是：

根據來源重新產生。

例如：

```text
package.json
package-lock.json
        │
        ▼
npm install
        │
        ▼
node_modules/
```

以及：

```text
src/
public/
        │
        ▼
npm run dev
        │
        ▼
.next/
```

因此：

```
node_modules/
.next/
```

都不應該交給 Git。

---

# Source vs Generated

建立一個工程思維：

```
Source
        │
        ▼
Generated
```

Git：

只追蹤：

```
Source
```

不追蹤：

```
Generated
```

---

# .gitignore 是什麼？

一句話：

> .gitignore 是提供給 Git 讀取的規則檔。

作用：

告訴 Git：

哪些檔案不要納入版本控制。

不是：

給人看的文件。

而是：

Git 自己會讀取的設定檔。

---

# .gitignore 第一個例子

```gitignore
/node_modules
```

原因不是：

資料夾很大。

真正原因是：

```
node_modules
```

可以由：

```text
package.json
package-lock.json
```

重新建立。

所以：

不需要版本控制。

---

# .gitignore 第二個例子

```gitignore
/.next/
```

原因：

```
.next
```

是：

Next.js Build 與開發時產生的資料。

可以透過：

```bash
npm run dev
```

重新建立。

因此：

不用交給 Git。

---

# .gitignore 第三個例子

```gitignore
.env*
```

.env：

存放：

- API Key
- Secret Key
- Database Password
- 各台電腦自己的設定

例如：

```env
OPENAI_API_KEY=sk-xxxxxxxx
```

如果交給 GitHub。

任何能存取 Repository 的人。

都有可能看到這些敏感資訊。

因此：

每台電腦：

都應該建立自己的：

```
.env
```

而不是：

交給 Git 管理。

---

# .gitignore 目前三種類型

## 1. Generated（可重新產生）

```
node_modules/

.next/
```

原因：

可以重新建立。

---

## 2. System Files（系統檔）

```
.DS_Store
```

原因：

不是專案的一部分。

---

## 3. Local Configuration（本機設定）

```
.env
.env.local
```

原因：

每台電腦都可能不同。

而且通常包含敏感資訊。

---

# 今天最重要的觀念

不要背：

```gitignore
node_modules
.next
.env
```

而要知道：

> 為什麼 Git 不應該追蹤它們。

---

# 本章一句話總結

> Git 應該追蹤 Source，而不是 Generated；.gitignore 的目的，就是告訴 Git 哪些檔案應該被忽略。

---

# 關鍵字（Keywords）

- Git
- Repository
- Source
- Generated
- .gitignore
- node_modules
- .next
- .env
- Local Configuration
- System Files
- Version Control