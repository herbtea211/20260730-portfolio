
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
  layout?: "split" | "full";
};

export default function WorkHero({
  title,
  subtitle,
  role,
  description,
  image,
  layout = "split",
}: WorkHeroProps) {
  const isFullLayout = layout === "full";

  return (
    <section className="w-full bg-background-secondary pt-40 pb-20 md:pt-60 md:pb-30">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-8 md:grid-cols-8 md:px-[120px]">
        <div
          className={
            isFullLayout
              ? "md:col-span-8"
              : image
                ? "md:col-span-8 lg:col-start-1 lg:col-span-3"
                : "md:col-span-8"
          }
        >
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

        {!isFullLayout && image && (
          <div className="md:col-span-8 lg:col-start-5 lg:col-span-4">
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={900}
              className="h-auto w-full rounded-[24px] object-contain"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
          </div>
        )}
      </div>
    </section>
  );
}
