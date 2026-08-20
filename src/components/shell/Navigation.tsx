"use client";

import Link from "next/link";
import { navigation } from "@/data/navigation";
import Container from "@/components/shell/Container";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="absolute inset-x-0 top-0 z-10 py-12">
      <Container>
        <ul className="flex justify-center gap-8">
          {navigation.map((item) => {
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