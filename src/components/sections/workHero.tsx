import type { ReactNode } from "react";

type WorkHeroProps = {
  title: string;
  subtitle: string;
  role: string;
  description: ReactNode;
};

export default function WorkHero({
  title,
  subtitle,
  role,
  description,
}: WorkHeroProps) {
  return (
    <section className="col-start-2 col-span-6 pt-55 pb-80">
      <h1 className="font-extraBold text-hero leading-hero tracking-hero text-textPrimaryColor">
        {title}
      </h1>

      <p className="mt-4 font-Medium text-subContent leading-subContent tracking-subContent text-[#989898]">
        {subtitle}
      </p>

      <p className="mt-2 font-Medium text-subContent leading-subContent tracking-subContent">
        {role}
      </p>

      <p className="mt-8 font-Medium text-content leading-content tracking-content">
        {description}
      </p>
    </section>
  );
}