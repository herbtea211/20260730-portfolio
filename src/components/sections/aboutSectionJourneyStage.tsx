import { stages } from "@/data/aboutPageJourneyStage";
import Bullet from "@/components/ui/Bullet"

export default function JourneyStage() {
  return (
        <section className="relative">
            <div
                className="pointer-events-none absolute inset-0 mx-auto grid max-w-[1440px] grid-cols-8 gap-x-8 px-[120px]"
                aria-hidden="true"
            >
                <div className="col-start-4 mt-48 h-[calc(100%-6rem)] w-px bg-white/10" />
                <div className="col-start-5 h-full w-px bg-white/10" />
            </div>
            <div className="relative">
            {stages.map((item) => (
                <article
                key={item.number}
                className="relative mx-auto grid max-w-[1440px] grid-cols-8 gap-x-8 px-[120px] py-24"
                >
                <span className="col-span-3 col-start-1 text-[450px] font-bold leading-none text-white/10">
                    {item.number}
                </span>

                <div className="col-span-5 col-start-4 pb-8">
                    <h3 className="font-weight-Medium text-point leading-point tracking-point">{item.title}</h3>

                    <p className="font-weight-Medium text-subContent leading-subContent tracking-subContent">{item.description}</p>

                    <p className="font-weight-extraBold text-companyTitle leading-companyTitle tracking-companyTitle">Key Learnings</p>

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

                {item.diagonalLine && (
                    <div
                        className="absolute right-[30%] top-80 h-[400px] w-px origin-top rotate-45 bg-white/40"
                        aria-hidden="true"
                    />
                )}
                </article>
            ))}
            </div>
    </section>
  );
}