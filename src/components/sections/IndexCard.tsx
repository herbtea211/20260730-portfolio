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
          <Image
            className="col-span-8 md:col-start-1 md:col-span-3"
            src={item.image}
            alt={item.title}
          />

          <div className="col-span-8 md:col-start-4 md:col-span-5">
            <div className="mb-4 md:mb-12">
              <h2 className="font-extraBold text-subSectionTitle leading-subSectionTitle tracking-subSectionTitle">
                {item.title}
              </h2>

              <p className="font-Medium text-subContent leading-subContent tracking-subContent text-textTitle">
                {item.subtitle}
              </p>
            </div>

            <div className="mb-4 md:mb-9">
              <p className="font-Medium text-subContent leading-subContent tracking-subContent">
                {item.role}
              </p>

              <p className="font-Medium text-content leading-content tracking-content">
                {item.description}
              </p>

              <p>{item.platform}</p>
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