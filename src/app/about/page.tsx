import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src=""
          alt=""
          fill
          priority
          className="object-cover"
        />

        <div className="relative mx-auto grid min-h-screen max-w-[1440px] grid-cols-8 gap-x-8 px-[120px]">
          <h1 className="col-span-6 col-start-2 self-start pt-24 text-white">
            時間是人生最寶貴的資源。
            <br />
            好設計，就是把時間留給最重要的人、事、物。
          </h1>
        </div>
      </section>
    </main>
  );
}