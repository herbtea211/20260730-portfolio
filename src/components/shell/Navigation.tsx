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

  const handleOverflowClick = () => {
    navRef.current?.scrollTo({
      left: navRef.current.scrollWidth,
      behavior: "smooth",
    });
  };

  const handleItemClick = (index: number) => {
    const nav = navRef.current;

    if (!nav) return;

    const lastTwoStartIndex = navigation.length - 2;

    if (index >= lastTwoStartIndex) {
      nav.scrollTo({
        left: nav.scrollWidth,
        behavior: "smooth",
      });
      return;
    }

    if (index <= 1) {
      nav.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="absolute inset-x-0 top-0 z-10 py-12">
      <Container>
        <div className="relative">
          <ul
            ref={navRef}
            className="relative flex w-[calc(100%_-_60px)] justify-start gap-4 overflow-x-auto pl-0 md:w-auto md:justify-center md:gap-8 md:overflow-visible"
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
                    onClick={() => handleItemClick(index)}
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
            <button
              type="button"
              onClick={handleOverflowClick}
              className="absolute right-0 top-0 flex h-full w-20 items-center justify-end bg-background pr-4 text-sectionTitle text-primary md:hidden"
              aria-label="顯示更多選項"
            >
              ⋯
            </button>
          )}
        </div>
      </Container>
    </nav>
  );
}