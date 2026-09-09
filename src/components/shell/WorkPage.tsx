import type { ReactNode } from "react";
import WorkSubNavigation from "@/components/shell/WorkSubNavigation";

type WorkPageProps = {
  children: ReactNode;
};

export default function WorkPage({ children }: WorkPageProps) {
  return (
    <div className="pt-[120px]">
      <WorkSubNavigation />

      <main>{children}</main>
    </div>
  );
}