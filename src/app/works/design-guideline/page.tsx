import WorkPage from "@/components/shell/WorkPage";
import WorkHero from "@/components/sections/workHero";

export default function Page() {
  return (
    <WorkPage>
      <WorkHero
        title="露天市集 Design Guideline"
        subtitle="Supporting Brand Refresh Through a Unified Guideline"
        description="重新整理 Guideline 架構與設計規範，支援品牌重構，提升設計一致性，並改善設計、開發與跨部門協作效率。"
      />
    </WorkPage>
  );
}