import WorkPage from "@/components/shell/WorkPage";
import WorkHero from "@/components/sections/workHero";
import Image from "next/image";
import GuidelineCarousel from "@/components/sections/GuidelineCarousel";

import guideline6 from "@/assets/image/work/design-guideline/guideline-6.png";
import guideline7 from "@/assets/image/work/design-guideline/guideline-7.png";
import guideline8 from "@/assets/image/work/design-guideline/guideline-8.png";
import guideline9 from "@/assets/image/work/design-guideline/guideline-9.png";
import guideline10 from "@/assets/image/work/design-guideline/guideline-10.png";
import guideline11 from "@/assets/image/work/design-guideline/guideline-11.png";
import guideline12 from "@/assets/image/work/design-guideline/guideline-12.png";
import guideline13 from "@/assets/image/work/design-guideline/guideline-13.png";
import guideline14 from "@/assets/image/work/design-guideline/guideline-14.png";






export default function Page() {
  return (
    <WorkPage>
      <WorkHero
        layout="full"
        title="露天市集 Guideline 重構"
        subtitle="重構設計規範，推動品牌形象更新。"
        role="Project Lead"
        description="重新整理 Guideline 架構與設計規範，支援品牌重構，提升設計一致性，並改善設計、開發與跨部門協作效率。"
      />
      <GuidelineCarousel />
      <section className="w-full bg-background">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-8 pt-20 pb-10 md:pt-40 md:pb-20 md:grid-cols-8 md:px-[120px]">
          <div className="md:col-start-3 md:col-span-4">
            <h2 className="text-center md:col-start-3 md:col-span-4 text-sectionTitle-responsive">
              重整文件，
              <br />
              全面升級。
            </h2>

            <Image
              src={guideline6}
              alt="Guideline 設計規範"
              width={1200}
              height={900}
              className="mx-auto -mt-10 h-auto w-full object-contain rounded-[24px]"
              sizes="(max-width: 767px) 100vw, 75vw"
            />
          </div>

          <p className="text-center md:col-start-3 md:col-span-4 text-keyMessage-default">
            重新整理 Guideline 架構與設計規範，使其更貼近<span className="text-white">品牌重構</span>方向，並逐步改善長期累積的設計問題，重新成為<span className="text-white">支撐產品與開發</span>的重要基礎。
          </p>
        </div>
      </section>

      <section className="w-full bg-background">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-8 py-20 md:grid-cols-8 md:px-[120px]">
          <div className="md:col-start-3 md:col-span-4">
            <h2 className="pb-8 text-center text-heroSubtitle-default">
              元件更新
            </h2>

            <div className="flex items-center justify-center gap-8">
              <Image
                src={guideline7}
                alt="更新後的電商元件畫面"
                width={1200}
                height={900}
                className="h-auto w-[calc(50%-16px)] rounded-[24px] object-contain"
                sizes="(max-width: 767px) 45vw, 35vw"
              />

              <Image
                src={guideline8}
                alt="更新後的會員資料元件畫面"
                width={1200}
                height={900}
                className="h-auto w-[calc(50%-16px)] rounded-[24px] object-contain"
                sizes="(max-width: 767px) 45vw, 35vw"
              />
            </div>
          </div>

          <p className="text-center md:col-start-3 md:col-span-4 text-keyMessage-default">
            更新 Guideline 中的多項元件，使其更貼近<span className="text-white">電商需求與 UI 設計趨勢</span>，在維持設計一致性的同時保留應用彈性，提升 Guideline 的實用性與延續性。
          </p>
        </div>
      </section>

      <section className="w-full bg-background-secondary">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-8 py-20 md:grid-cols-8 md:px-[120px]">
          <div className="md:col-start-2 md:col-span-6">
            <h2 className="pb-8 text-center text-sectionTitle-responsive">
              重新定位，
              <br />
              全新角色。
            </h2>

            <div className="flex items-center justify-center gap-4 md:gap-8">
              <Image
                src={guideline9}
                alt="Marketing Visual 1"
                width={1200}
                height={900}
                className="h-auto w-[calc((100%-64px)/3)] rounded-[12px] md:rounded-[24px] object-contain"
                sizes="(max-width: 767px) 30vw, 25vw"
              />

              <Image
                src={guideline10}
                alt="Marketing Visual 2"
                width={1200}
                height={900}
                className="h-auto w-[calc((100%-64px)/3)] rounded-[12px] md:rounded-[24px] object-contain"
                sizes="(max-width: 767px) 30vw, 25vw"
              />

              <Image
                src={guideline11}
                alt="Marketing Visual 3"
                width={1200}
                height={900}
                className="h-auto w-[calc((100%-64px)/3)] rounded-[12px] md:rounded-[24px] object-contain"
                sizes="(max-width: 767px) 30vw, 25vw"
              />
            </div>
          </div>

          <p className="text-center md:col-start-3 md:col-span-4 text-keyMessage-default">
            透過協調 ART team 的視覺需求，將原本<span className="text-white">獨立於 Guideline 之外</span>的 Marketing Visuals <span className="text-white">整合至統一的色彩系統中</span>，在保留品牌創作彈性的同時，提升 UI 與品牌視覺的一致性。
          </p>
        </div>
      </section>


      <section className="w-full bg-background-secondary">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-8 py-20 md:grid-cols-8 md:px-[120px]">

          {/* Section Content */}
          <div className="md:col-start-2 md:col-span-6">

            {/* Section Title */}
            <h2 className="pb-8 text-center text-heroSubtitle-default">
              Banner統一結構
            </h2>

            {/* Banner Structure Diagram */}
            <div className="grid grid-cols-3 items-stretch gap-2 md:gap-8 text-keyMessage-default">

              {/* Left: Material */}
              <div className="flex h-full items-center justify-center rounded-[8px] bg-background">
                <span className="text-white">
                  素材
                </span>
              </div>

              {/* Center: Content */}
              <div className="flex h-full min-h-[240px] flex-col justify-between gap-2 md:min-h-[320px]">

                <div className="flex flex-1 items-center justify-center rounded-[8px] bg-background">
                  <span className="text-white">
                    主標題
                  </span>
                </div>

                <div className="flex flex-1 items-center justify-center rounded-[8px] bg-background">
                  <span className="text-white">
                    副標題
                  </span>
                </div>

                <div className="flex flex-1 items-center justify-center rounded-[8px] bg-background">
                  <span className="text-white">
                    Action
                  </span>
                </div>

              </div>

              {/* Right: Material */}
              <div className="flex h-full items-center justify-center rounded-[8px] bg-background">
                <span className="text-white">
                  素材
                </span>
              </div>

            </div>

            {/* Banner Images */}
            <div className="mt-7 flex flex-col gap-4">

              <Image
                src={guideline12}
                alt="Banner 設計範例一"
                width={1200}
                height={900}
                className="h-auto w-full rounded-[12px] object-contain md:rounded-[24px]"
                sizes="(max-width: 767px) 100vw, 75vw"
              />

              <Image
                src={guideline13}
                alt="Banner 設計範例二"
                width={1200}
                height={900}
                className="h-auto w-full rounded-[12px] object-contain md:rounded-[24px]"
                sizes="(max-width: 767px) 100vw, 75vw"
              />

              <Image
                src={guideline14}
                alt="Banner 設計範例三"
                width={1200}
                height={900}
                className="h-auto w-full rounded-[12px] object-contain md:rounded-[24px]"
                sizes="(max-width: 767px) 100vw, 75vw"
              />

            </div>
          </div>

          {/* Description */}
          <p className="text-center md:col-start-2 md:col-span-6 text-keyMessage-default">
            透過建立 Banner 結構規範，將素材、主標題、副標題與行動按鈕納入 Guideline 的設計原則，讓不同設計師在製作行銷視覺時有所依循，確保<span className="text-white">設計規範能落實於實際產出</span>，提升品牌視覺的<span className="text-white">一致性</span>與 Guideline <span className="text-white">的應用性</span>。
          </p>

        </div>
      </section>
      <section className="w-full bg-background-white text-background">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-8 pt-20 pb-36 md:grid-cols-8 md:px-[120px]">
          {/* 大標題 */}
          <h2 className="text-center text-sectionTitle-responsive md:col-span-8">
            挑戰
          </h2>

          {/* 第一段：設計師 + 文件 */}
          <div className="md:col-start-2 md:col-span-6">
            <h3 className="border-b border-[#989898] pb-4 text-heroSubtitle-default">
              要我改？憑什麼？
            </h3>

            <p className="pt-4 text-keyMessage-default text-[#646464]">
              業務、美術與 UI 團隊對行銷視覺規範有不同的工作目標，因此關注的議題也不同，業務重績效、美術重自主性、ＵＩ講求一致性。
              <br />
              我先理解各部門的工作目標，再以對方關注的議題作為溝通切入點，例如：點擊率、規範彈性，讓跨部門同仁願意接受 Guideline重構的陣痛期。 
            </p>
          </div>

          {/* 第二段：研究 → 產品 */}
          <div className="mt-8 md:col-start-2 md:col-span-6">
            <h3 className="border-b border-[#989898] pb-4 text-heroSubtitle-default">
              我很忙，以後再說...
            </h3>

            <p className="pt-4 text-keyMessage-default text-[#646464]">
              Guideline完成後，前端需要修改樣式與 Token Mapping，結果前端根本不想改。
              <br />
              我主動向前端團隊取得程式碼，研究 Token 的實作方式，並共同調整 Token Mapping，同時提前與前端同步後續可能的設計調整方向，讓設計規範與實際開發保持一致，降低後續設計變更帶來的修改成本。
            </p>
          </div>
        </div>
      </section>




    </WorkPage>
    
  );
}