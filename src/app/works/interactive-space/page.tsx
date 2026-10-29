import WorkPage from "@/components/shell/WorkPage";
import WorkHero from "@/components/sections/workHero";
import Image from "next/image";

import interactiveSpace1 from "@/assets/image/work/interactive-space/interactive-space-1.png";
import interactiveSpace2 from "@/assets/image/work/interactive-space/interactive-space-2.png";
import interactiveSpace3 from "@/assets/image/work/interactive-space/interactive-space-3.png";
import interactiveSpace4 from "@/assets/image/work/interactive-space/interactive-space-4.png";
import interactiveSpace5 from "@/assets/image/work/interactive-space/interactive-space-5.png";
import interactiveSpace6 from "@/assets/image/work/interactive-space/interactive-space-6.png";
import interactiveSpace7 from "@/assets/image/work/interactive-space/interactive-space-7.png";
import interactiveSpace8 from "@/assets/image/work/interactive-space/interactive-space-8.png";
import interactiveSpace9 from "@/assets/image/work/interactive-space/interactive-space-9.png";
import interactiveSpace10 from "@/assets/image/work/interactive-space/interactive-space-10.png";
import interactiveSpace11 from "@/assets/image/work/interactive-space/interactive-space-11.png";
import interactiveSpace12 from "@/assets/image/work/interactive-space/interactive-space-12.png";







export default function Page() {
  return (
    <WorkPage>
      <WorkHero
        title="互動空間"
        subtitle="即時 3D 空間設計應用程式"
        role="Product Designer / mobile / web"
        description="在超擬真 3D 空間中，即時配置、替換家具與規格的空間設計工具，降低專業工具操作門檻，協助非專業使用者快速建立並比較不同方案，完成決策。"
        image={{
          src: interactiveSpace1,
          alt: "配配方 App 的配方列表與新增配方畫面",
        }}
      />
      <section className="w-full bg-background">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-8 py-20 md:grid-cols-8 md:px-[120px]">
          <div className="md:col-start-3 md:col-span-4">
            <h2 className="pb-12 text-center md:col-start-3 md:col-span-4 text-sectionTitle-responsive">
              隨時隨地，
              <br />
              身歷其境。
            </h2>
            <Image
              src={interactiveSpace2}
              alt="配配方 App 採購清單畫面"
              width={1200}
              height={900}
              className="mx-auto h-auto w-full object-contain  rounded-[24px]"
              sizes="(max-width: 767px) 100vw, 75vw"
            />
          </div>
          <p className="text-center md:col-start-3 md:col-span-4 text-keyMessage-default">
            『互動空間』打破了<span className="text-white">時間與空間</span>的限制，使用者可以隨時從一個原創空間開始，<span className="text-white">置入家具及生活用品</span>，在這裡四處閒逛，品嚐細節，感受未來精彩生活。
          </p>
        </div>
      </section>
      <section className="w-full bg-background">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-8 py-20 md:grid-cols-8 md:px-[120px]">
          <div className="md:col-start-2 md:col-span-6">
            <h2 className="pb-12 text-center text-sectionTitle-responsive">
              多重視野，
              <br />
              體驗無邊界。
            </h2>

            <Image
              src={interactiveSpace3}
              alt="互動空間全景操作介面"
              width={1200}
              height={900}
              className="mx-auto h-auto w-full rounded-[24px] object-contain md:px-40 md:pb-10"
              sizes="(max-width: 767px) 100vw, 75vw"
            />

            <div className="mt-4 flex flex-col gap-4 md:flex-row">
              <div className="w-full rounded-3xl bg-background-secondary p-6 md:w-1/3">
                <h3 className="mb-6 text-imageTitle-responsive text-white">
                  移動
                </h3>

                <Image
                  src={interactiveSpace4}
                  alt="互動空間移動操作"
                  width={1200}
                  height={900}
                  className="mx-auto block h-auto w-full max-w-[280px] object-contain"
                  sizes="(max-width: 767px) 100vw, 280px"
                />
              </div>

              <div className="w-full rounded-3xl bg-background-secondary p-6 md:w-1/3">
                <h3 className="mb-6 text-imageTitle-responsive text-white">
                  視角／升降
                </h3>

                <Image
                  src={interactiveSpace5}
                  alt="互動空間視角升降操作"
                  width={1200}
                  height={900}
                  className="mx-auto block h-auto w-full max-w-[280px] object-contain"
                  sizes="(max-width: 767px) 100vw, 280px"
                />
              </div>

              <div className="w-full rounded-3xl bg-background-secondary p-6 md:w-1/3">
                <h3 className="mb-6 text-imageTitle-responsive text-white">
                  視角／旋轉
                </h3>

                <Image
                  src={interactiveSpace6}
                  alt="互動空間視角旋轉操作"
                  width={1200}
                  height={900}
                  className="mx-auto block h-auto w-full max-w-[280px] object-contain"
                  sizes="(max-width: 767px) 100vw, 280px"
                />
              </div>
            </div>
          </div>

          <p className="text-center text-keyMessage-default md:col-start-3 md:col-span-4">
            豐富的操作系統突破了
            <span className="text-white">物理限制</span>，可以從
            <span className="text-white">任何角度</span>
            感受空間配置，用
            <span className="text-white">多重視野</span>
            感受未來生活。
          </p>
        </div>
      </section>
      <section className="w-full bg-background-secondary">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-8 py-20 md:flex-row md:items-start md:gap-6 md:px-[120px]">

          {/* 左側：文字 + 小圖 */}
          <div className="flex min-w-0 w-full flex-col gap-6 md:w-1/2">
            <div>
              <h2 className="mb-4 text-heroSubtitle-default">
                清晰的資訊層級
              </h2>

              <p className="text-keyMessage-default">
                將操作面板配置於畫面四周，並透過<span className="text-white">半透明層次</span>建立<span className="text-white">資訊層級</span>，在保留中央完整 3D 場景的同時，降低介面對內容的干擾。
              </p>
            </div>

            <Image
              src={interactiveSpace8}
              alt="互動空間家具資訊卡片"
              width={1200}
              height={900}
              className="h-auto w-full rounded-[24px] object-contain"
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </div>

          {/* 右側：長圖 */}
          <div className="w-full min-w-0 md:w-1/2">
            <Image
              src={interactiveSpace7}
              alt="互動空間完整資訊面板"
              width={900}
              height={1600}
              className="mx-auto h-auto w-full rounded-[24px] object-contain"
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
      <section className="w-full bg-background-secondary">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-8 py-20 md:grid-cols-8 md:px-[120px]">
          <h2 className="text-heroSubtitle-default md:col-span-8">
            截圖，馬上決定
          </h2>

          <div className="flex flex-col gap-6 md:col-span-8 md:flex-row">
            <Image
              src={interactiveSpace9}
              alt="互動空間截圖比價畫面一"
              width={1200}
              height={900}
              className="h-auto w-full rounded-[24px] object-contain md:w-1/2"
              sizes="(max-width: 767px) 100vw, 50vw"
            />

            <Image
              src={interactiveSpace10}
              alt="互動空間截圖比價畫面二"
              width={1200}
              height={900}
              className="h-auto w-full rounded-[24px] object-contain md:w-1/2"
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </div>

          <p className="text-keyMessage-default md:col-span-8">
            替換物件、切換材質或調整規格後立即<span className="text-white">截圖比價</span>，快速<span className="text-white">比較</span>不同配置方案，決策不中斷。
          </p>
        </div>
      </section>
    </WorkPage>
  );
}