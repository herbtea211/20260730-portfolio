import Image from "next/image";
import avatar from "@/assets/image/index/avatar.png"

import IndexCard from "@/components/sections/IndexCard"

export default function Home() {
  return (
          <main className="max-w-[1440px] mx-auto px-[120px] grid grid-cols-8 gap-8 mb-50">
              <section className="col-start-2 col-span-6 flex items-start gap-8 py-100">
                <div>
                  <Image
                    src={avatar}
                    alt="Sam"
                    width={122}
                    height={122}
                  />
                </div>
                <div>
                  <h1 className="font-hero font-extraBold text-hero leading-hero tracking-hero text-textPrimaryColor">理解問題，設計答案</h1>
                  <p className="font-Medium text-subContent leading-subContent tracking-subContent">
                    探索問題本質，以使用者研究、產品策略與系統思維，驅動產品決策。
                  </p>
                </div>
              </section>
                <div className="col-span-8 mb-4">
                  <h2 className=" font-bold text-sectionTitle leading-sectionTitle tracking-sectionTitle">Seleted Work</h2>
                  <p className="font-Medium text-subContent leading-subContent tracking-subContent text-textTitle">每一個設計，都有存在的理由</p>
                </div>
                <IndexCard></IndexCard>
            </main>
  );
}
