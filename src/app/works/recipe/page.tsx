import WorkPage from "@/components/shell/WorkPage";
import WorkHero from "@/components/sections/workHero";

import recipeImage01 from "@/assets/image/work/recipe/recipe-1.png";
import recipeImage02 from "@/assets/image/work/recipe/recipe-2.png";
import recipeImage03 from "@/assets/image/work/recipe/recipe-3.png";
import recipeImage04 from "@/assets/image/work/recipe/recipe-4.png";
import WorkSectionTitle from "@/components/sections/WorkSectionTitle";
import WorkSectionHeading from "@/components/sections/WorkSectionHeading";
import Image, { type StaticImageData } from "next/image";
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
          <h2 className="md:col-start-1 md:col-span-6 text-sectionTitle-default">
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
          <div className="md:col-start-4 md:col-span-6">
            <Image
              src={recipeImage04}
              alt="配配方 App 採購清單畫面"
              width={1200}
              height={900}
              className="mx-auto h-auto w-full object-contain"
              sizes="(max-width: 767px) 100vw, 75vw"
            />
          </div>

          <h2 className="text-center md:col-start-2 md:col-span-6 text-sectionTitle-default">
            一鍵整合，
            <br />
            高效採購。
          </h2>

          <p className="text-center md:col-start-2 md:col-span-6 text-keyMessage-default">
            無論是成品半成品，點選配方後直接<span className="text-white">生成採購清單，自動整合</span>所需食材與用量，省去逐項查找與手動彙整的時間。無論日常備料或大量製備，都能快速掌握採購需求，減少遺漏與重複整理，讓<span className="text-white">前置作業更有效率。</span>
          </p>
        </div>
      </section>

    </WorkPage>
  );
}