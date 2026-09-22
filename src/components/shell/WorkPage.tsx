import type { ReactNode } from "react";
import WorkSubNavigation from "@/components/shell/WorkSubNavigation";

type WorkPageProps = {
  children: ReactNode;
};

export default function WorkPage({ children }: WorkPageProps) {
  return (
    <div className="pt-[120px]">
      <WorkSubNavigation />

      {/* <main className="max-w-[1440px] mx-auto px-[120px] grid grid-cols-8 gap-8"> */}
        <main className="max-w-[1440px] mx-auto px-6 md:px-[120px] grid grid-cols-1 md:grid-cols-8 gap-8">
        {children}
      </main>
    </div>
  );
}