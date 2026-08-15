import Image from "next/image";
import React from "react";

import { indexCardData } from "@/data/indexCardData"
import Button from "@/components/ui/Button"

export default function IndexCard() {
  return (
    <>
      {indexCardData.map((item) => (
        <React.Fragment key={item.title}>
          <Image
            className="col-start-1 col-span-3"
            src={item.image}
            alt={item.title}
          />

          <div className="col-start-4 col-span-5">
            <div className=" mb-12">
              <h2 className="font-extraBold text-subSectionTitle leading-subSectionTitle tracking-subSectionTitle">{item.title}</h2>
              <p className="font-Medium text-subContent leading-subContent tracking-subContent text-textTitle">{item.subtitle}</p>
            </div>

            <div className="mb-9">
              <p className="font-Medium text-subContent leading-subContent tracking-subContent">{item.role}</p>
              <p className="font-Medium text-content leading-content tracking-content">{item.description}</p>
              <p>{item.platform}</p>
            </div>

            <Button showLabel={false} label="" />
          </div>
        </React.Fragment>
      ))}
    </>
  );
}