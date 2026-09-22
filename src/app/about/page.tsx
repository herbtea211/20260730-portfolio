import Image from "next/image";
import heroBackground from "@/assets/image/about/page-hero-BG.png";
import JourneyStage from "@/components/sections/aboutSectionJourneyStage"

export default function AboutPage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* <section className="relative w-full max-w-[1440px] mx-auto overflow-hidden"> */}
      <section className="relative w-full mx-auto overflow-hidden">
        <Image
          src={heroBackground}
          alt=""
          priority
          className="
            relative left-1/2 -translate-x-1/2
            block h-auto max-w-none
            w-[900px] md:w-full
      "
        />

        <div className="absolute inset-0 mx-auto grid max-w-[1440px] grid-cols-1 md:grid-cols-8 gap-x-8 px-8 md:px-[120px]">
          <h1 className="col-span-full md:col-span-6 md:col-start-2 pt-35 md:pt-100 text-white font-weight-extraBold text-hero-mobile md:text-hero md:leading-hero md:tracking-hero">
            時間是人生最寶貴的資源。
            <br />
            好設計，就是把時間留給最重要的人、事、物。
          </h1>
        </div>
      </section>
      <section className="relative">
        <div
          className="mx-auto mt-6 h-[240px] w-px bg-white/40"
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-8 md:gap-x-8 px-[120px]">
          <p className="pt-12 pb-12 col-span-4 col-start-3 text-center text-white font-weight-Medium text-point leading-point tracking-point">
            運用使用者研究
            <br />
            產品策略
            <br />
            系統思維
          </p>
        </div>
        <div className="mx-auto grid max-w-[1440px] grid-cols-3 gap-x-8 px-4 md:grid-cols-8 md:px-[120px]">
          <div
            // className="col-span-2 col-start-1 mx-auto"
            className="col-span-1 col-start-1 mx-auto md:col-span-2 md:col-start-1"
            aria-hidden="true"
          >
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36 4L68 60H4L36 4Z"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>

          <div
            className="col-span-1 col-start-2 mx-auto h-[72px] w-px bg-white/40 md:col-span-2 md:col-start-4"
            aria-hidden="true"
          />

          <div
            className="col-span-1 col-start-3 mx-auto size-[72px] rounded-full border border-white/40 md:col-span-2 md:col-start-7"
            aria-hidden="true"
          />
        </div>
        <div className="mx-auto md:grid max-w-[1440px] md:grid-cols-8 md:gap-x-8 px-[120px]">
          <p className="pt-12 pb-12 col-span-4 col-start-3 text-center text-white font-weight-Medium text-point leading-point tracking-point">
            洞察問題本質
            <br />
            真正解決問題
          </p>
        </div>
        <div
          className="mx-auto mt-6 h-[240px] w-px bg-white/40"
          aria-hidden="true"
        />
      </section>
      <section className="mx-auto max-w-[1440px] px-[120px]">
        <h2 className="pt-20 md:pt-50 md:pb-50 text-center text-primary font-weight-extraBold text-sectionTitle leading-sectionTitle tracking-sectionTitle">
          我如何一步步成為 Product Designer
        </h2>
      </section>
      <section>
        <JourneyStage/>
      </section>
    </main>
  );
}