import WorkPage from "@/components/shell/WorkPage";
import WorkHero from "@/components/sections/workHero";

export default function Page() {
  return (
    <WorkPage>
      <WorkHero
        title="互動空間"
        subtitle="即時 3D 空間設計應用程式"
        description="在超擬真 3D 空間中，即時配置、替換家具與規格的空間設計工具，降低專業工具操作門檻，協助非專業使用者快速建立並比較不同方案，完成決策。"
      />
    </WorkPage>
  );
}