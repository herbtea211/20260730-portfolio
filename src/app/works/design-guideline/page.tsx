import WorkPage from "@/components/shell/WorkPage";
import WorkHero from "@/components/sections/workHero";
import WorkSectionTitle from "@/components/sections/WorkSectionTitle";
import WorkSectionSubtitle from "@/components/sections/WorkSectionSubtitle";
import Image from "next/image";
import Bullet from "@/components/ui/Bullet"

import guideline01 from "@/assets/image/Work/design-guideline/guideline-01.png";
import guideline02 from "@/assets/image/Work/design-guideline/guideline-02.png";
import guideline03 from "@/assets/image/Work/design-guideline/guideline-03.png";
import guideline04 from "@/assets/image/Work/design-guideline/guideline-04.png";
import guideline05 from "@/assets/image/Work/design-guideline/guideline-05.png";
import guideline06 from "@/assets/image/Work/design-guideline/guideline-06.png";
import guideline07 from "@/assets/image/Work/design-guideline/guideline-07.png";
import guideline08 from "@/assets/image/Work/design-guideline/guideline-08.png";
import guideline09 from "@/assets/image/Work/design-guideline/guideline-09.png";
import guideline10 from "@/assets/image/Work/design-guideline/guideline-10.png";
import guideline11 from "@/assets/image/Work/design-guideline/guideline-11.png";

export default function Page() {
  return (
    <WorkPage>
      <WorkHero
        title="露天市集 Design Guideline"
        subtitle="Supporting Brand Refresh Through a Unified Guideline"
        role="Project Lead"
        description="重新整理 Guideline 架構與設計規範，支援品牌重構，提升設計一致性，並改善設計、開發與跨部門協作效率。"
      />
      <section className="col-start-2 col-span-6 pb-40">
      <WorkSectionTitle>01 Overview｜專案概述</WorkSectionTitle>
      <WorkSectionSubtitle>|| Background</WorkSectionSubtitle>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        品牌重構期間，負責主導 Design Guideline 重構專案，重新整理 Guideline 架構、完善設計規範與文件，建立一致的設計標準，支援品牌重構與產品開發。
      </p>
      <WorkSectionSubtitle>|| Key Contributions</WorkSectionSubtitle>
      <ul>
        <li
            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
        >
            <Bullet />主導 Design Guideline 重構專案。
        </li>
        <li
            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
        >
            <Bullet />重新整理 Guideline Framework。
        </li>
        <li
            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
        >
            <Bullet />完善既有 Design Token 與 Component 規範。
        </li>
        <li
            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
        >
            <Bullet />制定 Guideline 文件結構與撰寫規範。
        </li>
    </ul>
    </section>
        <section className="col-start-2 col-span-6 pb-40">
      <WorkSectionTitle>02 Discovery｜現況盤點</WorkSectionTitle>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        在正式展開 Guideline 重構前，我先盤點既有 Guideline 的使用情況，並向前端與美術協作部門收集實際使用經驗與意見，整理出過去 Guideline 長期發展中需要改善的重點，作為後續重構的依據。
      </p>
      <WorkSectionSubtitle>|| Guideline 規範逐漸鬆散</WorkSectionSubtitle>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        Guideline 長期累積後，整體規範逐漸缺乏一致性，部分組件說明不夠完整，增加誤用與溝通成本。
      </p>
      <WorkSectionSubtitle>|| 既有組件不符合新品牌定位</WorkSectionSubtitle>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        隨著品牌重構，目標族群轉向 15–30 歲的新世代，部分組件仍沿用早期設計，未能符合新目標族群的操作習慣與互動模式。
      </p>
      <WorkSectionSubtitle>|| 品牌規範缺乏跨部門整合</WorkSectionSubtitle>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        Guideline 與美術部門的協作機制不足，導致品牌視覺缺乏一致的規範與應用方式。
      </p>
      <WorkSectionSubtitle>|| 缺乏完整的開發規格文件</WorkSectionSubtitle>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        Guideline 缺少對應的規格文件，前端開發缺乏一致的實作依據，增加溝通與維護成本。
      </p>
    </section>
        <section className="col-start-2 col-span-6 pb-40">
      <WorkSectionTitle>03 Framework Refinement｜架構重整</WorkSectionTitle>
      <p className="text-subContent leading-subContent tracking-subContent pb-8">
        根據盤點結果，我補足既有規範缺漏、新增平面設計規範，並重新整理 Component 與 Composition，提升 Guideline 的完整性與維護效率。
      </p>
      <Image
        src={guideline01}
        alt=""
      />
    </section>
    <section className="col-start-2 col-span-6 pb-40">
      <WorkSectionTitle>04 Key Improvements｜關鍵改善</WorkSectionTitle>
      <WorkSectionSubtitle>|| 互動元件更新</WorkSectionSubtitle>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        配合品牌重構後的新目標族群（15–30 歲），重新檢視 Guideline 中的互動元件，依不同需求導入、優化或重新定義組件，讓 Guideline 持續與產品發展及 UI 設計趨勢保持一致。
      </p>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        範例
      </p>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        新增sheet
      </p>
      <Image
        src={guideline02}
        alt=""
        className="pb-10"
      />
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        統整List
      </p>
      <div className="md:flex pb-12">
        <div>
          <p className="text-subContent leading-subContent tracking-subContent pb-6">
            重新整理 List 規範，統一不同情境下的結構與使用方式，提升設計一致性與後續擴充性。
          </p>
          <Image
            src={guideline03}
            alt=""
          />
        </div>
        <div>
          <p className="text-subContent leading-subContent tracking-subContent pb-6 pt-10">
            實際範例
          </p>
          <Image
            src={guideline04}
            alt=""
          />
        </div>
      </div>
      <WorkSectionSubtitle>|| 組件文件標準化</WorkSectionSubtitle>
      <Image
        src={guideline05}
        alt=""
        className="pb-20"
      />
      <WorkSectionSubtitle>|| Design Token 建立</WorkSectionSubtitle>
      <p className="text-subContent leading-subContent tracking-subContent">
        建立 Figma Design Token，將 Color、Typography、Shadow、Border、Border Radius、Spacing 與 Opacity 等設計屬性系統化管理，提供團隊一致且可重複使用的設計基礎，提升設計一致性與後續維護效率。
      </p>
      <Image
        src={guideline06}
        alt=""
        className="pb-20"
      />

      <WorkSectionSubtitle>|| 視覺設計原則</WorkSectionSubtitle>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        配合品牌重構方向，優先建立色彩使用與 Banner 構圖等核心視覺設計原則，作為 UI 與品牌視覺設計共同遵循的依據，逐步建立一致的品牌識別。
      </p>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        範例:color應用
      </p>
      <Image
        src={guideline07}
        alt=""
      />
      <p className="text-subContent leading-subContent tracking-subContent pb-6 pt-10">
        範例:Banner設計規範
      </p>
      <Image
        src={guideline08}
        alt=""
      />
    </section>
    <section className="col-start-2 col-span-6 pb-40">
      <WorkSectionTitle>05 Key Challenges | 關鍵挑戰</WorkSectionTitle>
      <WorkSectionSubtitle>|| 跨部門溝通與協調困難</WorkSectionSubtitle>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        業務、美術與 UI 團隊擁有不同的工作目標，因此關注的議題也不同。專案初期，彼此缺乏對需求的理解，導致 Design Guideline 難以真正被採納。
      </p>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        Solution
      </p>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        我先理解各部門的工作目標，再以對方關注的議題作為溝通切入點，例如：點擊率，頁面瀏覽率，讓 Guideline 的價值更容易被理解與接受。
      </p>
      <Image
        src={guideline09}
        alt=""
        className="pb-20 mx-auto"
      />
      <WorkSectionSubtitle>|| 設計變更帶來的開發成本</WorkSectionSubtitle>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        我先理解各部門的工作目標，再以對方關注的議題作為溝通切入點，例如：點擊率，頁面瀏覽率，讓 Guideline 的價值更容易被理解與接受。
      </p>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">Solution</p>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        我主動向前端取得實際的程式碼，研究 Token 的實作方式，並與前端共同調整 Token Mapping，同時提前與前端同步後續可能的設計調整方向，讓設計規範與實際開發保持一致，降低後續設計變更帶來的修改成本。
      </p>
      <Image
        src={guideline10}
        alt=""
        className="pb-20 mx-auto"
      />
      <WorkSectionSubtitle>|| Guideline 的跨部門採用頻率低</WorkSectionSubtitle>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        Guideline 建立完成後，前端與其他部門仍沿用既有的工作流程，缺乏方便的查閱方式，使 Guideline 難以真正落實於日常協作。
      </p>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">Solution</p>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        我評估並導入適合團隊使用的 Guideline 線上平台，將設計規範集中管理，讓不同部門都能依照自己的工作方式快速查閱與使用，降低資訊取得成本，提升 Guideline 在日常協作中的採用率。
      </p>
      <Image
        src={guideline11}
        alt=""
        className="pb-20 mx-auto"
      />
    </section>
    <section className="col-start-2 col-span-6 pb-40">
      <WorkSectionTitle>06｜Project Impact 專案成果</WorkSectionTitle>
      <WorkSectionSubtitle>|| 完成 Guideline 全面升級</WorkSectionSubtitle>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        全面重整 Guideline 的架構、內容與規範，使其更符合品牌重構方向，並重新成為支撐產品設計與開發的重要基礎。
      </p>
      <WorkSectionSubtitle>|| 提升 Guideline 的實用性與採用率</WorkSectionSubtitle>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        重新整理 Guideline 架構與內容，提升文件的可讀性與查找效率，讓 Guideline 重新成為團隊日常工作的依據。
      </p>
      <WorkSectionSubtitle>|| 重新定位 Art Team 的角色</WorkSectionSubtitle>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        透過 Guideline 重整與品牌重構，讓 Art Team 從單純產出介面，轉變為共同維護品牌一致性的重要角色。
      </p>
      <WorkSectionSubtitle>|| 重新建立跨部門協作共識</WorkSectionSubtitle>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        重新對齊設計與前端的協作方式，提升跨部門合作效率，讓設計規範更容易落實於產品開發流程。
      </p>
      <WorkSectionSubtitle>|| 改善長期累積的設計問題</WorkSectionSubtitle>
      <p className="text-subContent leading-subContent tracking-subContent pb-6">
        重新整理既有設計規範與工作流程，逐步改善長期累積的設計問題，建立更穩定且容易維護的設計基礎。
      </p>
    </section>
    </WorkPage>
    
  );
}