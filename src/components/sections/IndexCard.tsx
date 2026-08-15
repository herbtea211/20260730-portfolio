import Image from "next/image";
import avatar from "@/assets/image/index/avatar.png"

import { indexCardData } from "@/data/indexCardData"
import Button from "@/components/ui/Button"

export default function IndexCard() {
    return (
        <>
            {indexCardData.map((item) => {
                return (
                        <div key={item.title}>
                            <Image
                                src={item.image}
                                alt={item.title}
                            />
                            <div>
                                <h2>{item.title}</h2>
                                <p>{item.subtitle}</p>
                            </div>
                            <div>
                                <p>{item.role}</p>
                                <p>{item.description}</p>
                                <p>{item.platform}</p>
                            </div>
                            <Button showLabel={true} label="專案"/>
                        </div>

                )
            })}
        </>

    )


}