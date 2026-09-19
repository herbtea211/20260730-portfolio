import WorkPage from "@/components/shell/WorkPage";
import WorkHero from "@/components/sections/workHero";
import WorkSectionTitle from "@/components/sections/WorkSectionTitle";
import WorkSectionSubtitle from "@/components/sections/WorkSectionSubtitle";
import Image from "next/image";
// import interactivespace01 from "@/assets/image/Work/interactive-space/interactive-space-01.png";
import interactivespace02 from "@/assets/image/Work/interactive-space/interactive-space-02.png";
import interactivespace03 from "@/assets/image/Work/interactive-space/interactive-space-03.png";
import interactivespace04 from "@/assets/image/Work/interactive-space/interactive-space-04.png";
import interactivespace05 from "@/assets/image/Work/interactive-space/interactive-space-05.png";
import interactivespace06 from "@/assets/image/Work/interactive-space/interactive-space-06.png";
import interactivespace07 from "@/assets/image/Work/interactive-space/interactive-space-07.png";
import interactivespace08 from "@/assets/image/Work/interactive-space/interactive-space-08.png";
import interactivespace09 from "@/assets/image/Work/interactive-space/interactive-space-09.png";
import interactivespace10 from "@/assets/image/Work/interactive-space/interactive-space-10.png";
import interactivespace11 from "@/assets/image/Work/interactive-space/interactive-space-11.png";
import interactivespace12 from "@/assets/image/Work/interactive-space/interactive-space-12.png";
import interactivespace13 from "@/assets/image/Work/interactive-space/interactive-space-13.png";
import interactivespace14 from "@/assets/image/Work/interactive-space/interactive-space-14.png";
import interactivespace15 from "@/assets/image/Work/interactive-space/interactive-space-15.png";
import interactivespace16 from "@/assets/image/Work/interactive-space/interactive-space-16.png";
import interactivespace17 from "@/assets/image/Work/interactive-space/interactive-space-17.png";

import recipe08 from "@/assets/image/Work/recipe/recipe-08.png";



export default function Page() {
  return (
    <WorkPage>
      <WorkHero
        title="互動空間"
        subtitle="即時 3D 空間設計應用程式"
        role="Product Designer / mobile / web"
        description="在超擬真 3D 空間中，即時配置、替換家具與規格的空間設計工具，降低專業工具操作門檻，協助非專業使用者快速建立並比較不同方案，完成決策。"
      />
      <iframe
       className="col-start-2 col-span-6 -mt-4"
       title="vimeo-player"
       src="https://player.vimeo.com/video/952197467?h=f91f9b3b2f" width="640" height="360"
       frameBorder="0"
       referrerPolicy="strict-origin-when-cross-origin"
       allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"   allowFullScreen></iframe>
      {/* <section className="col-start-2 col-span-6 pb-4">
        <Image
          src={interactivespace01}
          alt="互動空間產品畫面"
        />
      </section> */}

      <section className="col-start-2 col-span-6 pb-40">
        <WorkSectionTitle>01 Overview｜專案概述</WorkSectionTitle>

        <WorkSectionSubtitle>|| Background</WorkSectionSubtitle>

        <p  className="text-subContent leading-subContent tracking-subContent pb-6">
          加入團隊時，產品仍處於概念階段。
          <br />
          專案從產品研究開始，逐步探索市場機會、產品差異性與目標用戶，並將研究結果轉化為產品策略與互動設計，完成具有商業價值的產品。
        </p>

        <WorkSectionSubtitle>|| MVP 核心能力</WorkSectionSubtitle>

          <Image
            src={interactivespace02}
            alt="物件互動"
            className="pt-10"
          />
      </section>
      <section className="col-start-2 col-span-6 pb-40">
        <WorkSectionTitle>02 Competitive Research｜競品研究</WorkSectionTitle>

        <WorkSectionSubtitle>
          || Analysis Framework｜分析框架
        </WorkSectionSubtitle>

        <p className="text-subContent leading-subContent tracking-subContent pb-4">
          針對市場代表性產品，從功能、操作、體驗與使用族群四個面向進行分析。
        </p>

        <Image
          src={interactivespace03}
          alt="物件功能"
        />
      </section>
      <section className="col-start-2 col-span-6">
        <WorkSectionTitle>03 Key Findings｜關鍵發現</WorkSectionTitle>

        <p className="text-subContent leading-subContent tracking-subContent text-textPrimaryColor">
          現有產品難以同時兼顧高擬真度與低學習成本。
        </p>

        <p className="text-subContent leading-subContent tracking-subContent pb-4">
          競品分析顯示，專業 3D 工具具備較完整的空間設計能力，但操作與學習門檻較高；面向一般使用者的工具雖較容易上手，卻往往犧牲場景擬真度與空間探索體驗。
        </p>

        <WorkSectionSubtitle>|| 四象限分析</WorkSectionSubtitle>

        <Image
          src={interactivespace04}
          alt="競品四象限分析"
        />

        <p className="flex items-center justify-center text-center text-textPrimaryColor text-subSectionTitle leading-subSectionTitle tracking-subSectionTitle font-weight-bold py-40">
          高擬真場景 × 低學習成本 × 直覺視角操作＝差異化產品
        </p>
      </section>
      <section className="col-start-2 col-span-6 pb-40">
        <WorkSectionTitle>04 Target Users｜目標用戶</WorkSectionTitle>

        <WorkSectionSubtitle>|| 潛在市場</WorkSectionSubtitle>

        <Image
          src={interactivespace05}
          alt="潛在市場 Persona"
          className="pb-20"
        />

        <WorkSectionSubtitle>|| 優先目標用戶</WorkSectionSubtitle>

        <Image
          src={interactivespace06}
          alt="優先目標用戶 Persona"
          className="pb-20"
        />

        <WorkSectionSubtitle>|| Why this user?</WorkSectionSubtitle>

        <Image
          src={interactivespace07}
          alt="Why this user"
        />

        <p className="flex items-center justify-center text-center text-textPrimaryColor text-subSectionTitle leading-subSectionTitle tracking-subSectionTitle font-weight-bold py-40">
          「許多需求只需要設計師 20% 的能力，但市場上沒有 0.2 個設計師。」
        </p>
      </section>
      <section className="col-start-2 col-span-6 pb-40">
        <WorkSectionTitle>05 Product Strategy｜產品策略</WorkSectionTitle>
        <p className="text-subContent leading-subContent tracking-subContent pb-4">
          <span className="text-textPrimaryColor">將專業 3D 空間設計能力，轉化為非專業使用者也能直接操作的核心任務。</span><br/>捨棄完整取代專業 3D 工具，而是聚焦方案展示、即時調整與決策確認，降低空間溝通過程中的操作與時間成本。
        </p>
        <Image
          src={interactivespace08}
          alt="Why this user"
        />
      </section>
      <section className="col-start-2 col-span-6 pb-40">
        <WorkSectionTitle>06 Product Architecture｜產品架構</WorkSectionTitle>
        <p className="text-subContent leading-subContent tracking-subContent pb-10">
          將產品功能拆分為人物控制與物件操作兩大模組，建立一致且易於理解的互動架構。
        </p>
        <Image
          src={interactivespace09}
          alt="Why this user"
        />
      </section>
      <section className="col-start-2 col-span-6 pb-40">
        <WorkSectionTitle>07 Key User Journey｜核心使用流程</WorkSectionTitle>
        <p className="text-subContent leading-subContent tracking-subContent pb-10">
          使用者可在同一工作流程中反覆比較與調整不同方案，即時確認商品資訊與價格，快速完成空間規劃與報價決策。
        </p>
        <Image
          src={interactivespace10}
          alt="Why this user"
        />
      </section>
      <section className="col-start-2 col-span-6 pb-40">
        <WorkSectionTitle>08 Design Implementation｜設計落地</WorkSectionTitle>
        <p className="text-subContent leading-subContent tracking-subContent pb-10">
          設計從操作模式、工作區配置與決策資訊三個面向出發，將「簡化操作」、「支援探索」與「決策支援」三項產品策略，轉化為實際的產品體驗。
        </p>
        <WorkSectionSubtitle>|| 熟悉的操作模式</WorkSectionSubtitle>
        <p className="text-subContent leading-subContent tracking-subContent pb-10">
          借鑑成熟的第一人稱 3D 操作模式，Web 採用 WASD + 滑鼠，Mobile 則設計 三區控制面板，讓不同平台的使用者皆能快速熟悉空間探索與物件操作。同時，配合 Unreal Engine 既有的互動模組，降低客製化開發成本，加速產品開發與驗證。
        </p>
        <p className="text-subContent leading-subContent tracking-subContent pb-2">Web</p>
        <Image
          src={interactivespace11}
          alt="Why this user"
          className="pb-10"
        />
        <p className="text-subContent leading-subContent tracking-subContent pb-2">Mobile</p>
        <Image
          src={interactivespace12}
          alt="Why this user"
          className="pb-10"
        />
        <Image
          src={interactivespace13}
          alt="Why this user"
          className="pb-10"
        />
        <p className="text-subContent leading-subContent tracking-subContent pb-4">採用使用者熟悉的互動模式，並善用開發框架既有能力，加速產品落地。</p>
        <div className="flex items-start gap-3 pb-10">
          <Image
            src={recipe08}
            alt=""
          />
          <p className="text-subContent leading-subContent tracking-subContent text-textPrimaryColor">簡化操作</p>
        </div>
        <WorkSectionSubtitle>|| 保留工作視野</WorkSectionSubtitle>
        <p className="text-subContent leading-subContent tracking-subContent pb-4">將操作面板配置於畫面四周，並透過半透明介面與明暗層次建立資訊層級，在保留中央完整 3D 場景的同時，降低介面對內容的干擾。</p>
          <Image
            src={interactivespace14}
            alt=""
            className="pb-10"
          />
        <div className="flex items-start gap-3 pb-10">
          <Image
            src={recipe08}
            alt=""
          />
          <p className="text-subContent leading-subContent tracking-subContent text-textPrimaryColor">支援探索</p>
        </div>
        <WorkSectionSubtitle>|| 即時視覺回饋</WorkSectionSubtitle>
        <p className="text-subContent leading-subContent tracking-subContent pb-4">替換物件、切換材質或調整規格後立即更新場景，讓使用者能快速比較不同配置方案，保持探索流程的連續性。</p>
          <Image
            src={interactivespace15}
            alt=""
            className="pb-10"
          />
        <div className="flex items-start gap-3 pb-10">
          <Image
            src={recipe08}
            alt=""
          />
          <p className="text-subContent leading-subContent tracking-subContent text-textPrimaryColor">支援探索</p>
        </div>
        <WorkSectionSubtitle>|| 漸進式資訊呈現</WorkSectionSubtitle>
        <p className="text-subContent leading-subContent tracking-subContent pb-4">預設僅顯示方案比較所需的關鍵資訊；需要更多商品細節時，再透過展開查看更多內容，在資訊完整性與閱讀效率之間取得平衡。</p>
          <Image
            src={interactivespace16}
            alt=""
            className="pb-10"
          />
        <div className="flex items-start gap-3 pb-10">
          <Image
            src={recipe08}
            alt=""
          />
          <p className="text-subContent leading-subContent tracking-subContent text-textPrimaryColor">決策支援</p>
        </div>
        <WorkSectionSubtitle>|| 支援方案截圖比較</WorkSectionSubtitle>
        <p className="text-subContent leading-subContent tracking-subContent pb-4">讓不同方案能快速並列比較，協助設計師、業主與廠商推進決策。</p>
          <Image
            src={interactivespace17}
            alt=""
            className="pb-10"
          />
        <div className="flex items-start gap-3 pb-10">
          <Image
            src={recipe08}
            alt=""
          />
          <p className="text-subContent leading-subContent tracking-subContent text-textPrimaryColor">決策支援</p>
        </div>
      </section>

    </WorkPage>
  );
}