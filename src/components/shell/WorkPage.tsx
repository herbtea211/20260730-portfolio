import type { ReactNode } from "react";

type WorkPageProps = {
  children: ReactNode;
};

export default function WorkPage({ children }: WorkPageProps) {
  return (
    <div className="w-full pt-[120px]">
      <main className="w-full">
        {children}
      </main>
    </div>
  );
}
