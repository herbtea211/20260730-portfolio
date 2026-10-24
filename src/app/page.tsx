import Image from "next/image";
import avatar from "@/assets/image/index/avatar.png"

import IndexCard from "@/components/sections/IndexCard"

export default function Home() {
  return (
          <main className="max-w-[1440px] mx-auto px-6 md:px-[120px] grid grid-cols-1 md:grid-cols-8 gap-8 mb-50">
              <section className="col-start-2 col-span-6 flex flex-col items-center gap-8 py-50 md:py-100 md:flex-row md:items-start">
                <div>
                  <Image
                    src={avatar}
                    alt="Sam"
                    width={122}
                    height={122}
                  />
                </div>
                <div>
                  <h1 className="text-hero-default">理解問題，設計答案</h1>
                  <p className="text-keyMessage-default">
                    探索問題本質，以使用者研究、產品策略與系統思維，驅動產品決策。
                  </p>
                </div>
              </section>
                <div className="col-span-8 mb-4">
                  <h2 className="text-heroSubtitle-default">Selected Work</h2>
                  <p className="text-keyMessage-default">每一個設計，都有存在的理由</p>
                </div>
                <IndexCard></IndexCard>
            </main>
  );
}
