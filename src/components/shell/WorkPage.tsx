import type { ReactNode } from "react";

type WorkPageProps = {
  children: ReactNode;
};

export default function WorkPage({ children }: WorkPageProps) {
  return (
    <div className="w-full">
      <main className="w-full">
        {children}
      </main>
    </div>
  );
}
