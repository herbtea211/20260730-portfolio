import type { ReactNode } from "react";

type WorkPageProps = {
  children: ReactNode;
};

export default function WorkPage({ children }: WorkPageProps) {
  return (
    <div className="pt-[120px]">
        <main className="max-w-[1440px] mx-auto px-8 md:px-[120px] md:grid md:grid-cols-8 md:gap-8">
        {children}
      </main>
    </div>
  );
}