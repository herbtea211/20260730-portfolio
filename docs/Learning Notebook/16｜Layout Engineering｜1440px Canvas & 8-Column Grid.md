16｜Layout Engineering｜1440px Canvas & 8-Column Grid

日期：2026-08-15
專案：20260730-portfolio

本章目標

將 Figma 的 Layout Grid 真正轉換成網站的 CSS Grid，並建立整個首頁共用的 Layout 規則。

Figma 設定：

Canvas：1440px
Margin：120px
Columns：8
Gutter：32px
Type：Stretch
01｜1440px Canvas

最外層：

<main className="max-w-[1440px] mx-auto">

其中：

max-w-[1440px]
→ 最大畫布寬度 1440px


mx-auto
→ 水平置中
02｜Canvas Margin

Figma 的左右 Margin：

120px

直接使用：

px-[120px]

因此最終最外層 Layout：

<main className="max-w-[1440px] mx-auto px-[120px]">

可用內容寬度：

1440 - 120 - 120
= 1200px
03｜8-Column Grid

建立：

grid grid-cols-8

意思：

display: grid
+
8 Columns

因此整體：

<main className="
  max-w-[1440px]
  mx-auto
  px-[120px]
  grid
  grid-cols-8
">
04｜Gutter

Figma：

Gutter = 32px

Tailwind：

gap-8

因此完整 Grid：

<main className="
  max-w-[1440px]
  mx-auto
  px-[120px]
  grid
  grid-cols-8
  gap-8
">
05｜Stretch

Figma：

Type = Stretch

不需要另外建立 CSS class。

grid-cols-8
→ repeat(8, 1fr)

本身就會讓 Columns 根據可用空間伸縮。

06｜Column Position

可以指定 Element 從哪一個 Column 開始：

col-start-2

代表：

從第 2 Column 開始
07｜Column Span

可以指定 Element 佔幾個 Columns：

col-span-6

代表：

佔 6 Columns

因此：

<section className="col-start-2 col-span-6">

代表：

8 Columns


1 │ 2 3 4 5 6 7 │ 8
    ←── 6 cols ──→
08｜Hero Layout

首頁 Hero 的設定：

Start：Column 2
Span：6 Columns

因此：

<section className="col-start-2 col-span-6">

Hero 本身直接使用最外層 Grid。

不另外建立：

grid
grid-cols-8
09｜不重複建立 Grid

這次確認了一個重要 Layout 原則：

整個首頁使用同一套最外層 Columns。

不要：

Page Grid
└── IndexCard
    └── Another Grid

而是：

Page Grid
├── Hero
├── Selected Work
├── IndexCard Card
├── IndexCard Card
└── IndexCard Card

所有內容直接使用最外層 Grid。

10｜React Fragment 與 Grid

當一張 Card 需要輸出多個 Grid Item 時：

<React.Fragment key={item.title}>
  <Image ... />


  <div>
    ...
  </div>
</React.Fragment>

Fragment 不會產生 DOM Element。

因此不會破壞最外層 Grid：

Grid
├── Image
├── Content
├── Image
├── Content
└── ...

而不是：

Grid
└── div
    ├── Image
    └── Content
本章核心觀念

Figma Layout Grid 與工程 Layout 的對應：

Figma
  ↓
1440px Canvas
  ↓
120px Margin
  ↓
1200px Content Area
  ↓
8 Columns
  ↓
32px Gutter
  ↓
CSS Grid
  ↓
col-start / col-span

最重要的工程原則：

Layout Grid 是頁面的共用結構，而不是每個 Component 自己建立一套 Grid。