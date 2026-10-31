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
      <section className="w-full bg-background">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-8 py-20 md:grid-cols-8 md:px-[120px]">

          <h2 className="pb-10 md:py-20 text-center text-[36px] font-bold tracking-[6px] text-textPrimaryColor sm:text-[48px] sm:tracking-[8px] md:col-span-8 md:text-[70px] md:font-extrabold md:leading-[96px] md:tracking-[10px]">
            HOW TO DO?
          </h2>

          <h3 className="text-heroSubtitle-default md:col-start-2 md:col-span-6">
            競品分析
          </h3>

          {/* 四象限分析圖 */}
          <div className="md:col-start-2 md:col-span-6">
            <Image
              src={interactiveSpace11}
              alt="競品分析四象限定位圖"
              width={1200}
              height={900}
              className="mx-auto h-auto w-full rounded-[24px] object-contain"
              sizes="(max-width: 767px) 100vw, 75vw"
            />
          </div>

          <h3 className="pt-20 text-center text-heroSubtitle-default text-white md:col-span-8">
            高擬真場景 × 低學習成本＝最佳產品定位
          </h3>

        </div>
      </section>

      {/* Slogan */}
      <section className="w-full bg-background">
        <div className="mx-auto w-full max-w-[1440px] px-8 py-20 md:py-50 md:px-[120px]">
          <h2 className="text-center text-textPrimaryColor text-sectionTitle-responsive">
            市場只需要設計師 20% 的能力，
            <br/>但沒人在賣。
          </h2>
        </div>
      </section>
      <section className="w-full bg-background">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-8 py-20 md:grid-cols-8 md:px-[120px]">

          <h2 className="text-heroSubtitle-default md:col-start-2 md:col-span-6">
            優先目標用戶
          </h2>

          {/* 左側：人物卡片 */}
          <div className="flex w-full flex-col items-center justify-between gap-6 rounded-3xl bg-background-secondary px-6 py-6 text-center md:col-start-2 md:col-span-2">

            <h3 className="text-caption-default text-white">
              孫承勳
            </h3>

            <Image
              src={interactiveSpace12}
              alt="優先目標用戶孫承勳"
              width={300}
              height={300}
              className="h-[144px] w-[144px] rounded-full object-cover"
            />

            <p className="text-caption-default text-white">
              窗簾承包商 / 業務經理
            </p>

          </div>

          {/* 右側：挑戰內容 */}
          <div className="flex w-full flex-col rounded-3xl bg-background-secondary px-6 py-6 md:col-start-4 md:col-span-4">

            <h3 className="mb-4 text-imageTitle-responsive text-textColor">
              挑戰
            </h3>

            <p className="text-caption-default text-white">
              與業主初期的討論過程中，業主總是想看看各種樣式搭配，即使帶著厚重的實體樣式本，業主還是經常因為無法想像實際的空間搭配而猶豫不決，需要一直產出渲染圖，來回討論。
            </p>

          </div>

        </div>
      </section>
      <section className="w-full bg-background pb-10 md:pb-20">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-8 py-20 md:grid-cols-8 md:px-[120px]">

          {/* 標題 */}
          <h2 className="text-heroSubtitle-default md:col-start-2 md:col-span-6">
            Why this user?
          </h2>

          {/* 內容區 */}
          <div className="flex flex-col items-center gap-6 md:col-start-2 md:col-span-6 md:flex-row md:items-stretch md:justify-between">

            {/* 左側 Card */}
            <div className="w-full rounded-3xl bg-background-secondary px-8 py-8 md:w-[40%]">
              <h3 className="mb-4 text-imageTitle-responsive text-textPrimaryColor">
                高時間成本
              </h3>

              <p className="text-keyMessage-default text-white">
                快速展示不同材質、規格與搭配方案，用戶廠商能即時回應業主需求，省去渲染示意圖與等待確認的時間，提升提案的溝通效率，投入更多心力在客戶服務與工程推進。
              </p>
            </div>

            {/* 加號 */}
            <div className="self-center text-[48px] font-bold leading-none text-white">
              +
            </div>

            {/* 右側 Card */}
            <div className="w-full rounded-3xl bg-background-secondary px-8 py-8 md:w-[40%]">
              <h3 className="mb-4 text-imageTitle-responsive text-textPrimaryColor">
                高改善潛力
              </h3>

              <p className="text-keyMessage-default text-white">
                透過即時比較不同材質、規格與搭配效果，協助業主更快理解方案差異、做出選擇，加速決策與成交。
              </p>
            </div>

          </div>
        </div>
      </section>
      <section className="w-full bg-background-white text-background">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-8 pt-20 pb-36 md:grid-cols-8 md:px-[120px]">
          {/* 大標題 */}
          <h2 className="text-center text-sectionTitle-responsive md:col-span-8">
            設計之外
          </h2>

          {/* 第一段：設計師 + 文件 */}
          <div className="md:col-start-2 md:col-span-6">
            <h3 className="border-b border-[#989898] pb-4 text-heroSubtitle-default">
              設計師 + 文件
            </h3>

            <p className="pt-4 text-keyMessage-default text-[#646464]">
              在沒有 PM 的情況下，我透過<span className="text-background">設計稿加入文字說明</span>，整理產品需求、操作流程與互動規則，讓工程師能依據設計文件進行開發。
              <br />
              設計師可以<span className="text-background">跨出使用者體驗，透過系統化的設計文件</span>，串聯產品與工程，執行產品落地。
            </p>
          </div>

          {/* 第二段：研究 → 產品 */}
          <div className="mt-8 md:col-start-2 md:col-span-6">
            <h3 className="border-b border-[#989898] pb-4 text-heroSubtitle-default">
              研究 → 產品
            </h3>

            <p className="pt-4 text-keyMessage-default text-[#646464]">
              面對陌生的產業領域，我透過<span className="text-background">競品分析與 Persona</span> 設計方法，逐步理解市場環境與使用者需求，並將研究發現轉化為具體的產品定位與策略。
              <br />
              這段經驗讓我理解，<span className="text-background">產品策略不是憑空想像</span>，而是透過<span className="text-background">研究與分析</span>，逐步釐清產品的價值、目標用戶與未來發展方向。
            </p>
          </div>
        </div>
      </section>
    </WorkPage>
  );
}