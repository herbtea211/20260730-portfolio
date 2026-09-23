"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { workSubNavigation } from "@/data/workSubNavigation";
import Container from "@/components/shell/Container";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export default function WorkSubNavigation() {
  const pathname = usePathname();
  const navRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const [hasOverflow, setHasOverflow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    height: 0,
  });

  const activeIndex = workSubNavigation.findIndex(
    (item) => pathname === item.href
  );

  useLayoutEffect(() => {
    const activeItem = itemRefs.current[activeIndex];

    if (!activeItem) return;

    const previousHref = sessionStorage.getItem(
      "workSubNavigationActive"
    );

    const previousIndex = workSubNavigation.findIndex(
      (item) => item.href === previousHref
    );

    const previousItem = itemRefs.current[previousIndex];

    if (previousItem && previousIndex !== activeIndex) {
      setIndicator({
        left: previousItem.offsetLeft,
        width: previousItem.offsetWidth,
        height: previousItem.offsetHeight,
      });

      requestAnimationFrame(() => {
        setIndicator({
          left: activeItem.offsetLeft,
          width: activeItem.offsetWidth,
          height: activeItem.offsetHeight,
        });
      });
    } else {
      setIndicator({
        left: activeItem.offsetLeft,
        width: activeItem.offsetWidth,
        height: activeItem.offsetHeight,
      });
    }

    sessionStorage.setItem(
      "workSubNavigationActive",
      workSubNavigation[activeIndex]?.href ?? ""
    );
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

  useEffect(() => {
    const nav = navRef.current;

    if (!nav) return;

    const secondLastIndex = workSubNavigation.length - 2;

    if (activeIndex >= secondLastIndex) {
      requestAnimationFrame(() => {
        nav.scrollTo({
          left: nav.scrollWidth,
          behavior: "smooth",
        });
      });
    }
  }, [activeIndex]);

  return (
    <nav>
      <Container>
        <div className="relative">
          <ul
            ref={navRef}
            className="relative flex w-full justify-start gap-4 overflow-x-auto pl-0 md:w-auto md:justify-center md:gap-8 md:overflow-visible"
          >
            {activeIndex >= 0 && (
              <span
                className="pointer-events-none absolute z-0 rounded-full border-2 border-primary transition-[left,width,height] duration-300 ease-in-out"
                style={{
                  left: indicator.left,
                  width: indicator.width,
                  height: indicator.height,
                }}
                aria-hidden="true"
              />
            )}

            {workSubNavigation.map((item, index) => {
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
                          ? "text-primary"
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

          {/*
          {hasOverflow && !isScrolled && (
            <button
              type="button"
              className="absolute right-0 top-0 z-20 flex h-full w-15 items-center justify-end bg-background pr-4 text-sectionTitle text-primary md:hidden"
              aria-label="顯示更多選項"
            >
              ⋯
            </button>
          )}
          */}
        </div>
      </Container>
    </nav>
  );
}