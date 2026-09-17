import WorkSectionTitle from "@/components/sections/WorkSectionTitle";
import WorkSectionSubtitle from "@/components/sections/WorkSectionSubtitle";
import Image from "next/image";
import Bullet from "@/components/ui/Bullet"

export default function ResumePage () {
    return (
        <main className="max-w-[1440px] mx-auto px-[120px] grid grid-cols-8 gap-8 mb-50">
        <section className="col-start-2 col-span-6 items-start gap-8 py-100">
            <WorkSectionTitle><p className="text-sectionTitle leading-sectionTitle tracking-sectionTitle text-textPrimaryColor">Summary</p></WorkSectionTitle>
            <p className="text-subContent leading-subContent tracking-subContent pb-6">
                擁有<span className="text-textPrimaryColor">7年以上 UI／UX</span> 設計經驗，具備平面設計、前端開發與 Product Design 的跨領域背景。<span className="text-textPrimaryColor">善於探索問題本質</span>，透過<span className="text-textPrimaryColor">使用者研究、產品策略與系統思維</span>，規劃兼顧使用者需求與商業目標的產品體驗，並將策略有效落實於產品設計與開發流程。
            </p>
        </section>
        <section className="col-start-2 col-span-6 pb-40">
            <WorkSectionTitle><p className="text-sectionTitle leading-sectionTitle tracking-sectionTitle text-textPrimaryColor">Expertise</p></WorkSectionTitle>
            <div className="flex">
                <div className="pr-12">
                    <WorkSectionSubtitle>|| Product Design</WorkSectionSubtitle>
                    <ul className="pb-10">
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
                    <ul className="pb-17">
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
        
        </main>
    )
}