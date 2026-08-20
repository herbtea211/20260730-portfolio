import Image from "next/image";
import heroBackground from "@/assets/image/about/page-hero-BG.png";

export default function AboutPage() {
  return (
    <main>
      <section className="relative mx-auto max-w-[1440px] overflow-hidden">
        <Image
          src={heroBackground}
          alt=""
          priority
          className="h-auto w-full"
        />

        <div className="absolute inset-0 mx-auto grid max-w-[1440px] grid-cols-8 gap-x-8 px-[120px]">
          <h1 className="col-span-6 col-start-2 pt-60 text-white font-weight-extraBold text-hero leading-hero tracking-hero">
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
        <div className="mx-auto grid max-w-[1440px] grid-cols-8 gap-x-8 px-[120px]">
          <p className="pt-12 pb-12 col-span-4 col-start-3 text-center text-white font-weight-Medium text-point leading-point tracking-point">
            運用使用者研究
            <br />
            產品策略
            <br />
            系統思維
          </p>
        </div>
        <div className="mx-auto grid max-w-[1440px] grid-cols-8 gap-x-8 px-[120px]">
          <div
            className="col-span-2 col-start-1 mx-auto"
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
            className="col-span-2 col-start-4 mx-auto h-[72px] w-px bg-white/40"
            aria-hidden="true"
          />

          <div
            className="col-span-2 col-start-7 mx-auto size-[72px] rounded-full border border-white/40"
            aria-hidden="true"
          />
        </div>
        <div className="mx-auto grid max-w-[1440px] grid-cols-8 gap-x-8 px-[120px]">
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
        <h2 className="pt-50 pb-50 text-center text-primary font-weight-extraBold text-sectionTitle leading-sectionTitle tracking-sectionTitle">
          我如何一步步成為 Product Designer
        </h2>
      </section>
    </main>
  );
}