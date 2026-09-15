import WorkSectionTitle from "@/components/sections/WorkSectionTitle";
import WorkSectionSubtitle from "@/components/sections/WorkSectionSubtitle";
import Image from "next/image";
import Bullet from "@/components/ui/Bullet"

export default function ResumePage () {
    return (
        <>
        <section className="col-start-2 col-span-6 pb-40">
            <WorkSectionTitle>Summary</WorkSectionTitle>
            <p className="text-subContent leading-subContent tracking-subContent pb-6">
                擁有 7 年以上 UI／UX 設計經驗，具備平面設計、前端開發與 Product Design 的跨領域背景。善於探索問題本質，透過使用者研究、產品策略與系統思維，規劃兼顧使用者需求與商業目標的產品體驗，並將策略有效落實於產品設計與開發流程。
            </p>
            
        </section>
        <section className="col-start-2 col-span-6 pb-40">
            <WorkSectionTitle>Expertise</WorkSectionTitle>
            <div className="flex">
                <div>
                    <WorkSectionSubtitle>|| Product Design</WorkSectionSubtitle>
                    <ul>
                        <li
                            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                        >
                            <Bullet />Problem Exploration
                        </li>
                        <li
                            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                        >
                            <Bullet />User Research
                        </li>
                        <li
                            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                        >
                            <Bullet />Product Discovery
                        </li>
                        <li
                            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                        >
                            <Bullet />Product Strategy
                        </li>
                        <li
                            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                        >
                            <Bullet />Product Decision
                        </li>
                    </ul>
                    <WorkSectionSubtitle>|| Systems</WorkSectionSubtitle>
                    <ul>
                        <li
                            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                        >
                            <Bullet />Design System Building
                        </li>
                        <li
                            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                        >
                            <Bullet />Component-based Design
                        </li>
                        <li
                            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                        >
                            <Bullet />Cross-functional Collaboration
                        </li>
                    </ul>
                </div>
                <div>
                <WorkSectionSubtitle>|| Experience Design</WorkSectionSubtitle>
                    <ul>
                        <li
                            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                        >
                            <Bullet />User Flow
                        </li>
                        <li
                            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                        >
                            <Bullet />Interaction Design
                        </li>
                        <li
                            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                        >
                            <Bullet />Wireframing
                        </li>
                        <li
                            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                        >
                            <Bullet />UX Design
                        </li>
                    </ul>
                    <WorkSectionSubtitle>|| Technology</WorkSectionSubtitle>
                    <ul>
                        <li
                            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                        >
                            <Bullet />HTML / CSS
                        </li>
                        <li
                            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                        >
                            <Bullet />JavaScript
                        </li>
                        <li
                            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                        >
                            <Bullet />Vue.js
                        </li>
                        <li
                            className="flex items-center gap-2 font-weight-Medium text-subContent leading-subContent tracking-subContent"
                        >
                            <Bullet /> AI-assisted Workflow
                        </li>
                    </ul>

                </div>

            </div>
            
        </section>
        
        </>
    )
}