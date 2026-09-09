"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { workSubNavigation } from "@/data/workSubNavigation";
import Container from "@/components/shell/Container";

export default function WorkSubNavigation() {
  const pathname = usePathname();

  return (
    <nav>
      <Container>
        <ul className="flex justify-center gap-8">
          {workSubNavigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    isActive
                      ? "rounded-full bg-primary px-10 py-2 text-black"
                      : "text-textColor hover:text-textPrimary"
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}