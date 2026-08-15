Lesson 15｜Button Engineering｜Reusable UI Component

日期：2026-08-15
專案：20260730-portfolio

本章目標

將首頁作品卡片中的 Button 抽離成獨立 UI Component：

IndexCard
    ↓
Button
    ↓
ActionArrow

建立可重複使用的 UI 元件，而不是把 Button 寫死在 IndexCard 裡。

01｜Button Component

建立：

src/components/ui/Button.tsx

由：

components/sections/IndexCard

使用：

import Button from "@/components/ui/Button";

架構：

IndexCard
    ↓
UI Button
02｜為什麼 Button 放在 ui

目前 Components 的分類：

components/
├── shell/
├── sections/
└── ui/

Button 不屬於特定 Section。

它可以被：

IndexCard
About
Resume
其他 Section

重複使用。

因此放在：

components/ui/

而不是：

components/sections/
03｜Boolean Props

Button 加入：

interface ButtonProps {
  showLabel: boolean;
}

使用：

export default function Button({ showLabel }: ButtonProps) {

showLabel 用來控制文字是否顯示。

04｜Conditional Rendering

Button：

{showLabel && <span>{label}</span>}

意思：

showLabel === true
        ↓
     Render


showLabel === false
        ↓
   不 Render

因此：

<Button showLabel={true} />

可以顯示 Label。

而：

<Button showLabel={false} />

則不顯示 Label。

這是 React 的 Conditional Rendering。

05｜Label 也成為 Prop

原本 Button 文字寫死：

<span>專案</span>

後來改成：

interface ButtonProps {
  showLabel: boolean;
  label: string;
}

並使用：

<span>{label}</span>

因此：

<Button
  showLabel={true}
  label="專案"
/>

Button 不需要知道固定文字。

06｜interface

使用：

interface ButtonProps {
  showLabel: boolean;
  label: string;
}

interface 用來定義 Props 的資料形狀。

ButtonProps
├── showLabel → boolean
└── label     → string

Component：

export default function Button({
  showLabel,
  label,
}: ButtonProps)

TypeScript 會依照這個規格檢查 Props。

07｜ActionArrow Component

箭頭也被抽離：

src/components/ui/
├── Button.tsx
└── ActionArrow.tsx

Button：

import ActionArrow from "@/components/ui/ActionArrow";

使用：

<ActionArrow />

因此：

Button
└── ActionArrow

形成 Component Composition。

08｜SVG 使用 currentColor

Arrow SVG：

<path
  stroke="currentColor"
  ...
/>

currentColor 會取得目前元素的 color。

因此 Button：

color
 ↓
文字
 ↓
SVG currentColor
 ↓
箭頭

Button 不需要另外控制箭頭顏色。

09｜Button Default State

目前 Default：

Background → primary
Text       → background
Arrow      → background
Border     → none

因此：

bg-primary
text-background
10｜Button Hover State

Hover：

Background → transparent
Border     → primary / 2px
Text       → primary
Arrow      → primary

使用：

hover:bg-transparent
hover:text-primary

並透過內嵌陰影：

hover:shadow-[inset_0_0_0_2px_var(--primary)]

製作 2px 內緣框線。

為什麼不用 border-2

因為 Border 會影響元素尺寸。

使用 inset：

Border
↓
畫在元素內部
↓
不改變外部尺寸

避免 Hover 時 Button 發生 Layout Shift。

11｜Typography

Button Label 使用既有 Typography Token：

font-bold
text-subContent
leading-subContent
tracking-subContent

最後確認：

Roboto
Weight → 700

原本 font-Medium 為 500，實際視覺過細，因此改成：

font-bold
12｜ActionArrow 尺寸

Arrow 最後調整為：

className="size-4"

即：

16 × 16px

線條：

strokeWidth="2.8"
本章核心觀念

Button 的工程結構：

IndexCard
    ↓
Button
    ├── Label
    └── ActionArrow

而 Button 的狀態由 Props 與 CSS State 決定：

Props
 ↓
Conditional Rendering


CSS
 ↓
Default / Hover

因此 Button 成為真正可以跨 Section 重複使用的 UI Component。