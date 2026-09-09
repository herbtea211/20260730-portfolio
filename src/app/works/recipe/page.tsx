import WorkPage from "@/components/shell/WorkPage";
import WorkHero from "@/components/sections/workHero";

export default function Page() {
  return (
    <WorkPage>
      <WorkHero
        title="配配方"
        subtitle="配方管理應用程式"
        description="實務餐飲工作中的配方、採買與成本管理，經常用人工或簡易工具計算，造成大量時間浪費。"
      />
    </WorkPage>
  );
}