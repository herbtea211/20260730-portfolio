17｜Page Layout Integration｜Global Grid → Sections

日期：2026-08-15
專案：20260730-portfolio

本章目標

將前面建立的 Grid 真正套進首頁，理解：

Page 負責整體 Layout，Section / Component 使用 Page 提供的 Grid。

01｜Global Grid

首頁最外層：

<main className="
  max-w-[1440px]
  mx-auto
  px-[120px]
  grid
  grid-cols-8
  gap-8
">

這一層負責：

Canvas
Margin
Columns
Gutter

因此它是首頁的 Global Layout Grid。

02｜Hero 使用 Global Grid

Hero 不需要再建立自己的 Grid。

只需要指定：

<section className="col-start-2 col-span-6">

意思：

從 Column 2 開始
佔 6 Columns

因此：

Global Grid
│
├── Column 1
├── Column 2 ───────────────┐
├── Column 3                │
├── Column 4      Hero      │
├── Column 5                │
├── Column 6                │
├── Column 7                │
└── Column 8 ───────────────┘
03｜IndexCard 使用 Global Grid

同樣的原則套用到 IndexCard。

不要在：

IndexCard

裡面重新建立：

grid grid-cols-8

而是直接使用最外層 Grid。

例如：

<React.Fragment key={item.title}>
  <Image ... />


  <div>
    ...
  </div>
</React.Fragment>

這些元素直接成為 Global Grid 的 Grid Items。

04｜Layout Responsibility

現在開始建立明確的責任分工：

Page
 ↓
Global Layout
 ↓
Section Position
 ↓
Component UI

例如：

main
│
├── Hero
│
├── Selected Work
│
└── IndexCard

main 決定：

1440px
120px Margin
8 Columns
32px Gutter

Hero 決定：

從哪一欄開始
佔幾欄

Component 本身則負責：

內容
Typography
Color
Interaction
05｜避免 Component 自己決定 Page Grid

我們確認：

不要讓 IndexCard 自己建立：

<div className="grid grid-cols-8">

因為這會造成：

Page Grid
    ↓
IndexCard Grid
    ↓
另一套 Columns

導致不同 Component 的 Columns 不一定對齊。

正確：

Page
└── Global Grid
    ├── Hero
    ├── Selected Work
    └── IndexCard

所有 Section 共用同一套 Column System。

06｜最精簡 HTML 結構

今天也確立：

不要為了 Layout 而增加沒有必要的 Wrapper。

如果元素本身就能直接成為 Grid Item：

<section />

就不要再包：

<div>
  <section />
</div>

如果需要把多個 JSX 元素分組，但不能增加 DOM：

<React.Fragment>
本章核心觀念

今天真正建立的是 Layout Responsibility：

Page
 ↓
控制整體 Layout


Section
 ↓
決定自己在 Grid 的位置


Component
 ↓
負責自己的 UI


Data
 ↓
負責內容

因此整個 Portfolio 開始形成：

Data
  ↓
Component
  ↓
Section
  ↓
Global Layout
  ↓
Page

而不是每個 Component 各自建立自己的 Layout System。