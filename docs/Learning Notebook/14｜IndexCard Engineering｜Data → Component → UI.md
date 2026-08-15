Lesson 14｜IndexCard Engineering｜Data → Component → UI

日期：2026-08-15
專案：20260730-portfolio

本章目標

將首頁的作品卡片從單純 JSX，整理成：

Data
  ↓
IndexCard Component
  ↓
Reusable UI

核心是讓作品內容與 UI 結構分離。

01｜IndexCard Data

建立：

src/
├── data/
│   └── indexCardData.ts
│
└── components/
    └── sections/
        └── IndexCard.tsx

資料放在：

src/data/indexCardData.ts

Component 不直接寫死作品內容，而是取得：

import { indexCardData } from "@/data/indexCardData";

再透過：

indexCardData.map(...)

產生每一張 Card。

02｜Data → Component

目前的資料流：

indexCardData
      ↓
    map()
      ↓
 IndexCard
      ↓
     UI

因此新增作品時，只需要增加 Data：

Data 改變
    ↓
Component 自動產生新的 Card

不需要複製一份 JSX。

03｜map() 與 key

目前：

{indexCardData.map((item) => {
  return (
    ...
  );
})}

每一個 item 代表一筆作品資料。

React 需要知道每個產生出的元素是哪一個項目，因此使用：

key={item.title}

例如：

<div key={item.title}>

key 是 React 用來辨識列表項目的識別值。

04｜IndexCard Component 結構

目前 Component 的責任：

IndexCard
├── Image
├── Title
├── Subtitle
├── Role
├── Description
├── Platform
└── Button

Data 則負責：

title
subtitle
role
description
platform
image

因此：

Data
→「內容是什麼」


Component
→「內容怎麼呈現」
05｜Image 與 Data

使用 Next.js：

import Image from "next/image";

圖片來源直接來自 Data：

<Image
  src={item.image}
  alt={item.title}
/>

這讓每張 Card 可以使用不同圖片，而 Component 本身不需要知道實際檔案名稱。

06｜Component 分層

IndexCard 放在：

src/components/sections/

而 Button 放在：

src/components/ui/

目前開始形成：

components/
├── shell/
│   ├── Container
│   └── Navigation
│
├── sections/
│   └── IndexCard
│
└── ui/
    ├── Button
    └── ActionArrow

責任不同：

shell
→ 全站結構


sections
→ 頁面區塊


ui
→ 可重用 UI 元件
本章核心觀念

IndexCard 開始真正使用：

Data-driven Component

完整關係：

indexCardData
      ↓
     map
      ↓
 IndexCard
      ↓
 ┌───────────────┐
 │ Image         │
 │ Title         │
 │ Subtitle      │
 │ Information   │
 │ Button        │
 └───────────────┘

這讓「作品資料」與「作品卡片的 UI 結構」各自負責自己的事情。