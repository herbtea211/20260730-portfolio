import WorkPage from "@/components/shell/WorkPage";
import WorkHero from "@/components/sections/workHero";
import Image from "next/image";
import GuidelineCarousel from "@/components/sections/GuidelineCarousel";

import guideline6 from "@/assets/image/work/design-guideline/guideline-6.png";
import guideline7 from "@/assets/image/work/design-guideline/guideline-7.png";
import guideline8 from "@/assets/image/work/design-guideline/guideline-8.png";






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
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-8 py-20 md:py-50 md:grid-cols-8 md:px-[120px]">
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
            <h2 className="pb-8 text-center text-sectionTitle-responsive">
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
            更新 Guideline 中的多項元件，使其更貼近電商需求與 UI 設計趨勢，在維持設計一致性的同時保留應用彈性，提升 Guideline 的實用性與延續性。
          </p>
        </div>
      </section>

    </WorkPage>
    
  );
}