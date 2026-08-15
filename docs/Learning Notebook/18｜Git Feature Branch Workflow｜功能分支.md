18｜Git Feature Branch Workflow｜功能分支

日期：2026-08-15
專案：20260730-portfolio

本章目標

首頁完成並 Push 到 main 後，開始為下一個功能建立獨立的 Git Branch。

今天第一次實際使用：

Local Branch
      ↓
Remote Branch
      ↓
Feature Development
01｜為什麼要開 Feature Branch

首頁已經完成：

main
 ↓
Homepage Complete

接下來要開發 About Page。

因此不直接繼續修改 main，而是建立：

feature/about-page

概念：

main
 │
 └── feature/about-page
          ↓
      About Page

這樣 About Page 的開發不會直接影響已完成的 main。

02｜建立 Local Branch

使用：

git switch -c feature/about-page

這個指令同時完成兩件事：

建立 branch
    ↓
feature/about-page


切換 branch
    ↓
目前就在 feature/about-page

因此不需要另外執行：

git switch feature/about-page
03｜Local Branch 與 Remote Branch

建立：

git switch -c feature/about-page

之後：

Local
├── main
└── feature/about-page

此時 GitHub 上還沒有：

origin/feature/about-page

因為目前只建立了 Local Branch。

04｜同步到 GitHub

使用：

git push -u origin feature/about-page

這一步才會把 Branch 推到 GitHub。

結果：

Local
├── main
└── feature/about-page
          │
          │ push
          ▼
GitHub / origin
├── main
└── feature/about-page
05｜-u 的作用
git push -u origin feature/about-page

其中：

-u
↓
--set-upstream

作用是建立：

feature/about-page
        ↓
origin/feature/about-page

的追蹤關係。

因此之後在這個 Branch：

git push

Git 就知道要 Push 到：

origin/feature/about-page

不需要每次再寫完整 Branch 名稱。

06｜目前的 Branch Workflow

現在 Portfolio 開始使用：

main
 │
 ├── 已完成首頁
 │
 └── feature/about-page
          │
          ├── 開發 About
          ├── commit
          └── push

完成 About Page 後，再進行：

feature/about-page
        ↓
Merge
        ↓
main
07｜目前的工程意義

這次建立 Feature Branch 後，Git 的角色從單純：

版本紀錄

進一步變成：

功能開發流程管理

Branch 可以代表：

一個正在獨立開發的功能或工作單位。

目前：

feature/about-page

代表：

About Page 的開發工作。

本章核心觀念
main
→ 穩定的主要版本


feature/about-page
→ About Page 的獨立開發環境


git push -u
→ 建立 Local Branch 與 Remote Branch 的追蹤關係

完整流程：

main
 ↓
git switch -c feature/about-page
 ↓
Local Feature Branch
 ↓
git push -u origin feature/about-page
 ↓
GitHub Feature Branch
 ↓
開始開發 About