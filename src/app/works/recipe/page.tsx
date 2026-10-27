import WorkPage from "@/components/shell/WorkPage";
import WorkHero from "@/components/sections/workHero";

import recipeImage01 from "@/assets/image/work/recipe/recipe-1.png";
import recipeImage02 from "@/assets/image/work/recipe/recipe-2.png";
import recipeImage03 from "@/assets/image/work/recipe/recipe-3.png";
import recipeImage04 from "@/assets/image/work/recipe/recipe-4.png";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";




export default function Page() {
  return (
    <WorkPage>
      <WorkHero
        title="配配方"
        subtitle="Side Project"
        role="協助廚師節省時間的配方管理、物料採購的工具應用程式"
        description={
          <>
            Product Designer / IOS Mobile
          </>
        }
        image={{
          src: recipeImage01,
          alt: "配配方 App 的配方列表與新增配方畫面",
}}
      />
      <section className="w-full">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-8 py-20 md:grid-cols-8 md:px-[120px]">
          <h2 className="md:col-start-1 md:col-span-6 text-sectionTitle-responsive">
            好管理，省時間。
          </h2>

          <div className="grid grid-cols-1 gap-8 md:col-span-8 md:grid-cols-2">
            <div className="relative flex min-w-0 flex-col justify-end overflow-hidden rounded-3xl bg-background-secondary h-[300px] md:h-auto">
              <Image
                src={recipeImage02}
                alt="配配方 App 配方管理畫面"
                width={1200}
                height={900}
                className="relative z-0 mt-auto h-auto w-full object-contain"
                sizes="(max-width: 767px) 100vw, 50vw"
              />

              <p className="absolute left-1/2 top-6 z-10 w-[82%] -translate-x-1/2 text-center text-keyMessage-default text-white">
                隨時查看與調整，捨棄繁瑣工具與紙本紀錄，創意不受限，盡情探索料理的無限可能。
              </p>
            </div>
            <div className="relative flex min-w-0 flex-col justify-end overflow-hidden rounded-3xl bg-background-secondary h-[300px] md:h-auto">
              <Image
                src={recipeImage03}
                alt="配配方 App 配方管理畫面"
                width={1200}
                height={900}
                className="relative z-0 mt-auto h-auto w-full object-contain"
                sizes="(max-width: 767px) 100vw, 50vw"
              />

              <p className="absolute left-1/2 top-6 z-10 w-[82%] -translate-x-1/2 text-center text-keyMessage-default text-white">
                精準掌控用量，依需求靈活換算，專注料理，無論少量試作或大量製備，讓每一次創作更得心應手。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-background">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-8 py-20 md:grid-cols-8 md:px-[120px]">
          <div className="md:col-start-3 md:col-span-4">
            <Image
              src={recipeImage04}
              alt="配配方 App 採購清單畫面"
              width={1200}
              height={900}
              className="mx-auto h-auto w-full object-contain"
              sizes="(max-width: 767px) 100vw, 75vw"
            />
          </div>

          <h2 className="text-center md:col-start-3 md:col-span-4 text-sectionTitle-responsive">
            一鍵整合，
            <br />
            高效採購。
          </h2>

          <p className="text-center md:col-start-2 md:col-span-6 text-keyMessage-default">
            無論是成品半成品，點選配方後直接<span className="text-white">生成採購清單，自動整合</span>所需食材與用量，省去逐項查找與手動彙整的時間。無論日常備料或大量製備，都能快速掌握採購需求，減少遺漏與重複整理，讓<span className="text-white">前置作業更有效率。</span>
          </p>
        </div>
      </section>
      <section className="w-full bg-background-secondary py-20">
        {/* 標題：沿用 8 欄格線 */}
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-8 md:grid-cols-8 md:px-[120px]">
          <h2 className="text-center text-[36px] font-bold tracking-[6px] text-textPrimaryColor sm:text-[48px] sm:tracking-[8px] md:col-span-8 md:text-[70px] md:font-extrabold md:leading-[96px] md:tracking-[10px]">
            HOW TO DO?
          </h2>

          <p className="text-center text-keyMessage-default text-[#989898] md:col-span-8">
            實務參與
          </p>
        </div>

        {/* 雙側背景：全寬，不受 max-w-[1440px] 限制 */}
        <div className="mt-4 grid w-full grid-cols-2 gap-4 md:gap-8">
          {/* 左側：背景延伸至視窗左邊，內容靠右 */}
          <div className="flex min-w-0 justify-end rounded-r-3xl bg-[#151515] py-8 pl-2 pr-3 text-right sm:pr-8 md:py-10 md:pr-12">
            <div>
              <h3 className="text-imageTitle-responsive text-white">
                獨立甜點工作室
              </h3>

              <div className="my-3 ml-auto h-px w-full bg-[#989898] md:my-4" />

              <ul className="space-y-3 text-keyMessage-default text-white">
                <li>配方換算</li>
                <li>成本計算</li>
                <li>原料採購</li>
              </ul>
            </div>
          </div>

          {/* 右側：背景延伸至視窗右邊，內容靠左 */}
          <div className="flex min-w-0 justify-start rounded-l-3xl bg-[#151515] py-8 pl-3 pr-2 text-left sm:pl-8 md:py-10 md:pl-12">
            <div>
              <h3 className="text-imageTitle-responsive text-white">
                大型餐飲集團
              </h3>

              <div className="my-3 h-px w-full bg-[#989898] md:my-4" />

              <ul className="space-y-3 text-keyMessage-default text-white">
                <li>每日備料</li>
                <li>餐點製作</li>
                <li>製作量判斷</li>
                <li>採購需求估算</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-background-white text-background">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-16 py-20 md:grid-cols-8 md:px-[120px]">
          <h2 className="text-center md:col-span-8 text-sectionTitle-default">
            關鍵流程
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-8">
            <div className="pb-4">
              <h3 className="text-center text-heroSubtitle-default">
                實際體驗
              </h3>
              <div className="my-3 h-px w-full bg-textColor" />
              <p className="text-keyMessage-default text-background">
                執行各項工作節點，觀察需求與問題。
              </p>
            </div>

            <div className="pb-4">
              <h3 className="text-center text-heroSubtitle-default">
                挖掘痛點
              </h3>
              <div className="my-3 h-px w-full bg-textColor" />
              <p className="text-keyMessage-default text-background">
                分析問題背後的原因，將其轉化為痛點後，產出解決方案。
              </p>
            </div>

            <div className="pb-4">
              <h3 className="text-center text-heroSubtitle-default">
                產品落地
              </h3>
              <div className="my-3 h-px w-full bg-textColor" />
              <p className="text-keyMessage-default text-background">
                思考核心功能後規劃架構，串聯成完整系統，設計中一邊建立 Design System，完成 MVP 產品。
              </p>
            </div>
          </div>

          <div className="flex justify-center md:col-span-8 pt-4 md:pt-20 [&_button]:bg-background [&_button]:text-primary [&_button]:shadow-none">
            <Link
              href="https://www.figma.com/proto/H4qxpb5olzM8NlCdJ1cCXy/%E9%85%8D%E9%85%8D%E6%96%B9-prototype?node-id=1-199&page-id=0%3A1&starting-point-node-id=1%3A199&t=DtuqgF3Alpl2XY2I-1&scaling=contain&content-scaling=fixed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button showLabel={true} label="prototype" />
            </Link>
          </div>
        </div>
      </section>
    </WorkPage>
  );
}