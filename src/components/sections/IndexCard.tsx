import Image from "next/image";
import Link from "next/link";

import { indexCardData } from "@/data/indexCardData";
import Button from "@/components/ui/Button";

export default function IndexCard() {
  return (
    <>
      {indexCardData.map((item) => (
        <div
          key={item.title}
          className="col-span-8 grid grid-cols-8 gap-8 mb-20"
        >
          <Link
            href={item.href}
            className="rounded-[24px] group col-span-8 overflow-hidden md:col-start-1 md:col-span-3"
          >
            <Image
              className="h-auto w-full transition-transform duration-300 ease-in-out md:group-hover:scale-[1.1]"
              src={item.image}
              alt={item.title}
            />
          </Link>

          <div className="col-span-8 md:col-start-4 md:col-span-5">
            <div className="mb-4 md:mb-12">
              <h2 className="text-heroSubtitle-default">
                {item.title}
              </h2>

              <p className="text-keyMessage-default">
                {item.subtitle}
              </p>
            </div>

            <div className="mb-4 md:mb-9">
              <p className="text-keyMessage-default text-white">
                {item.role}
              </p>

              <p className="text-caption-default">
                {item.description}
              </p>

              <p className="text-caption-default">{item.platform}</p>
            </div>

            <Link href={item.href}>
              <Button showLabel={false} label="" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}