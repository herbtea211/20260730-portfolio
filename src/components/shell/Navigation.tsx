"use client";

import Link from "next/link";
import { navigation } from "@/data/navigation";
import Container from "@/components/shell/Container";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export default function Navigation() {
  const pathname = usePathname();
  const navRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const [hasOverflow, setHasOverflow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
  });

  const activeIndex = navigation.findIndex(
    (item) =>
      pathname === item.href ||
      pathname.startsWith(`${item.href}/`)
  );

  useLayoutEffect(() => {
    const activeItem = itemRefs.current[activeIndex];

    if (!activeItem) return;

    setIndicator({
      left: activeItem.offsetLeft,
      width: activeItem.offsetWidth,
    });
  }, [activeIndex]);

  useEffect(() => {
    const nav = navRef.current;

    if (!nav) return;

    const updateOverflow = () => {
      setHasOverflow(nav.scrollWidth > nav.clientWidth);
      setIsScrolled(nav.scrollLeft > 0);
    };

    const handleScroll = () => {
      setIsScrolled(nav.scrollLeft > 0);
    };

    updateOverflow();

    nav.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateOverflow);

    return () => {
      nav.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateOverflow);
    };
  }, []);

  return (
    <nav className="absolute inset-x-0 top-0 z-10 py-12">
      <Container>
        <div className="relative">
          <ul
            ref={navRef}
            className="relative flex w-[calc(100%_-_48px)] justify-start gap-4 overflow-x-auto pl-0 md:w-auto md:justify-center md:gap-8 md:overflow-visible"
          >
            {activeIndex >= 0 && (
              <span
                className="pointer-events-none absolute top-0 bottom-0 z-0 rounded-full bg-primary transition-[left,width] duration-300 ease-in-out"
                style={{
                  left: indicator.left,
                  width: indicator.width,
                }}
                aria-hidden="true"
              />
            )}

            {navigation.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <li
                  key={item.href}
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  className="relative z-10 shrink-0"
                >
                  <Link
                    href={item.href}
                    className="block rounded-full px-6 py-2 md:px-10"
                  >
                    <span
                      className={
                        isActive
                          ? "text-black"
                          : "text-textColor hover:text-textPrimary"
                      }
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {hasOverflow && !isScrolled && (
            <span
              className="text-sectionTitle pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 bg-background px-4 py-2 text-primary md:hidden"
              aria-hidden="true"
            >
              ⋯
            </span>
          )}
        </div>
      </Container>
    </nav>
  );
}