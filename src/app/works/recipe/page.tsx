import WorkPage from "@/components/shell/WorkPage";
import WorkHero from "@/components/sections/workHero";
import WorkSectionTitle from "@/components/sections/WorkSectionTitle";
import WorkSectionHeading from "@/components/sections/WorkSectionHeading";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";




export default function Page() {
  return (
    <WorkPage>
      <WorkHero
        title="配配方"
        subtitle="配方管理應用程式"
        role="Product Designer / IOS Mobile"
        description={
          <>
            餐飲工作中的配方、採買與成本管理，經常用人工計算，造成大量時間浪費。
            <br />
            配配方是一個針對餐飲工作者設計的App，將配方管理、份量換算與採買需求整合在同一個工作流程中，有效縮短時間，專注在更有價值的工作上。
          </>
        }
      />

    </WorkPage>
  );
}