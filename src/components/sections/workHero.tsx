
import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";

type WorkHeroProps = {
  title: string;
  subtitle: string;
  role: string;
  description: ReactNode;
  image?: {
    src: StaticImageData;
    alt: string;
  };
};

export default function WorkHero({
  title,
  subtitle,
  role,
  description,
  image,
}: WorkHeroProps) {
  return (
    <section className="w-full bg-background-secondary pt-20 pb-20 md:py-30">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-8 md:grid-cols-8 md:px-[120px]">
        <div className="md:col-start-1 md:col-span-3">
          <h1 className="text-hero-responsive mb-2">
            {title}
          </h1>

          <p className="text-heroSubtitle-default text-textColor mb-8">
            {subtitle}
          </p>

          <p className="text-keyMessage-default text-white mb-2">
            {role}
          </p>

          <p className="text-caption-default">
            {description}
          </p>
        </div>

        {image && (
          <div className="md:col-start-5 md:col-span-4">
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={900}
              className="h-auto w-full object-contain rounded-[24px]"
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </div>
        )}
      </div>
    </section>
  );
}
