import WorkPage from "@/components/shell/WorkPage";
import WorkHero from "@/components/sections/workHero";

import recipeImage01 from "@/assets/image/work/recipe/recipe-1.png";
import recipeImage02 from "@/assets/image/work/recipe/recipe-2.png";
import recipeImage03 from "@/assets/image/work/recipe/recipe-3.png";
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

    </WorkPage>
  );
}