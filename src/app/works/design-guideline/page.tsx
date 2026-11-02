import WorkPage from "@/components/shell/WorkPage";
import WorkHero from "@/components/sections/workHero";
import Image from "next/image";
import guideline1 from "@/assets/image/work/design-guideline/guideline-1.png";
import GuidelineCarousel from "@/components/sections/GuidelineCarousel";





export default function Page() {
  return (
    <WorkPage>
      <WorkHero
        layout="full"
        title="露天市集 Guideline 重構"
        subtitle="重構設計規範，推動品牌形象更新。"
        role="Project Lead"
        description="重新整理 Guideline 架構與設計規範，支援品牌重構，提升設計一致性，並改善設計、開發與跨部門協作效率。"
      />
      <GuidelineCarousel />
    </WorkPage>
    
  );
}