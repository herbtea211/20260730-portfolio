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
  const [isIndicatorReady, setIsIndicatorReady] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(false);

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

    setIndicator({
      left: activeItem.offsetLeft,
      width: activeItem.offsetWidth,
      height: activeItem.offsetHeight,
    });

    if (!isIndicatorReady) {
      setIsIndicatorReady(true);
      return;
    }

    setIsTransitionEnabled(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
      });
    });
  }, [activeIndex, isIndicatorReady]);

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
            {activeIndex >= 0 && isIndicatorReady && (
              <span
                className={`pointer-events-none absolute top-0 bottom-0 z-0 rounded-full border-2 border-primary ${
                  isTransitionEnabled
                    ? "transition-[left,width,height] duration-[1000ms] ease-in-out"
                    : ""
                }`}
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
        </div>
      </Container>
    </nav>
  );
}