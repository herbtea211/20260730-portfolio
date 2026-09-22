import { stages } from "@/data/aboutPageJourneyStage";
import Bullet from "@/components/ui/Bullet";

export default function JourneyStage() {
  return (
    <section className="relative pb-[240px]">
      <div
        className="pointer-events-none absolute inset-0 mx-auto hidden max-w-[1440px] grid-cols-8 gap-x-8 px-[120px] md:grid"
        aria-hidden="true"
      >
        <div className="col-start-4 mt-48 h-[calc(100%-6rem)] w-px bg-white/10" />
        <div className="col-start-5 h-full w-px bg-white/10" />
      </div>

      <div className="relative">
        {stages.map((item) => (
          <article
            key={item.number}
            className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-8 md:grid-cols-8 md:gap-x-8 md:px-[120px] md:py-24"
          >
            <span className="translate-x-50 translate-y-60 col-span-1 text-[180px] font-bold leading-none text-white/10 md:col-span-3 md:col-start-1 md:text-[450px]">
              {item.number}
            </span>

            <div className="col-span-1 pb-8 md:col-span-5 md:col-start-4">
              <h3 className="pb-3 font-weight-Medium text-point leading-point tracking-point">
                {item.title}
              </h3>

              <p className="pb-8 font-weight-Medium text-subContent leading-subContent tracking-subContent">
                {item.description}
              </p>

              <div className="flex flex-col gap-6 md:flex-row">
                <p className="font-weight-extraBold text-companyTitle leading-companyTitle tracking-companyTitle">
                  {item.company}
                </p>

                <div>
                  <p className="pb-4 font-weight-extraBold text-companyTitle leading-companyTitle tracking-companyTitle">
                    Key Learnings
                  </p>

                  <ul>
                    {item.learnings.map((learning) => (
                      <li
                        key={learning}
                        className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                      >
                        <Bullet />
                        {learning}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {item.diagonalLine && (
              <div
                className="absolute right-[30%] top-80 hidden h-[400px] w-px origin-top rotate-45 bg-white/40 md:block"
                aria-hidden="true"
              />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}