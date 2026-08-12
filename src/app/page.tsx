import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex items-start gap-8">
        <div>
          <Image
            src="/Avatar.png"
            alt="Sam"
            width={122}
            height={122}
          />
        </div>

        <div>
          <h1 className="font-hero font-extraBold text-hero leading-hero tracking-hero">理解問題，設計答案</h1>
          <p className="font-weight-Medium text-subContent leading-subContent tracking-subContent">
            探索問題本質，以使用者研究、產品策略與系統思維，驅動產品決策。
          </p>
        </div>
      </section>
    </>
  );
}
