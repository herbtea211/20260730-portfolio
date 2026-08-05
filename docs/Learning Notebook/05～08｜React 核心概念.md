# Lesson 05～08｜React 核心概念

## 本章目標

建立 React 最重要的四個核心觀念：

- Data
- Component
- State
- Props

---

# React 為什麼存在？

React 並不是為了：

- JSX
- Virtual DOM
- Hook

而誕生。

真正原因是：

> 管理 Data 與 UI 的關係。

---

# Data 驅動 UI

以前：

```
資料改變

↓

自己修改 DOM
```

React：

```
資料改變

↓

React 更新 UI
```

所以：

永遠：

修改資料。

不要修改畫面。

---

# Component

React 認為：

所有 UI 都是 Component。

例如：

```
Page

Header

Card

Button

Icon
```

都只是：

不同大小的 Component。

---

# Component 與 Figma

Figma：

```
Master Component

↓

Instance
```

React：

```
Component

↓

Component Instance
```

兩者概念完全相同。

---

# State

State：

就是：

> 會影響 UI 的資料。

例如：

```
likes = 128
```

畫面：

```
❤️128
```

當：

```
likes = 129
```

React：

重新計算 UI。

最後：

只更新真正改變的 DOM。

---

# Props

Props：

就是：

> Component 的輸入（Input）。

例如：

```
Button

↓

Text = 登入

Text = 註冊

Text = 送出
```

Component：

只有一份。

Props：

決定每一次如何顯示。

---

# Instance（實例）

Instance：

就是：

> 根據同一份 Component 建立出來的一個實際存在的元件。

例如：

```
Button Component

↓

<Button />

<Button />

<Button />
```

不是：

三個 Component。

而是：

一個 Component

+

三個 Instance

+

三組不同的 Props。

---

# React 的核心模型

```
Data
    │
    ▼
State
    │
    ▼
Component
    │
    ▼
Props
    │
    ▼
Instance
    │
    ▼
UI
```

---

# React 最重要的思想

```
不要操作 UI

↓

操作 Data
```

```
Data

↓

UI
```

永遠保持同步。

---

# 我的思考誤區（My Misconceptions）

## 誤區一：React 是操作畫面的工具

### 我的原本理解

React 幫助操作 DOM。

### 修正後

React 真正管理的是：

Data 與 UI 的關係。

---

## 誤區二：Component 只是 Button 或 Card

### 我的原本理解

只有小元件才是 Component。

### 修正後

Page、Layout、Card、Button 都是 Component。

只是責任不同。

---

## 誤區三：Component 等於 class

### 我的原本理解

Component 是 class。

### 修正後

Component 是概念。

class、function、template 都只是不同的實作方式。

---

## 誤區四：Props 就是文字或參數

### 我的原本理解

Props 只是改文字。

### 修正後

Props 是 Component 的輸入。

決定同一個 Component 如何產生不同的實例。

---

## 誤區五：Component 最大的價值是效率

### 我的原本理解

Component 可以少寫很多程式。

### 修正後

真正的價值是：

UI 只有一份定義（Single Source of Truth）。

修改一次。

所有實例一起更新。

---

# 本章一句話總結

> React 是一個以 Data 驅動 UI 的框架，透過 Component、State、Props 與 Instance 建立可維護、可重用且一致的使用者介面。

---

# 關鍵字（Keywords）

- React
- Data
- UI
- Component
- State
- Props
- Instance
- Re-render
- Single Source of Truth
- Design System
- Figma Component
- Atomic Design