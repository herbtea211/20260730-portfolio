
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

const mobileWorkLinks = [
  {
    label: "配配方",
    href: "/works/recipe",
  },
  {
    label: "互動空間",
    href: "/works/interactive-space",
  },
  {
    label: "露天Guideline",
    href: "/works/design-guideline",
  },
];

export default function Navigation() {
  const pathname = usePathname();

  const navRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
  });

  const activeIndex = navigation.findIndex(
    (item) =>
      pathname === item.href ||
      (item.href !== "/" && pathname.startsWith(`${item.href}/`))
  );

  // Desktop Active Indicator
  useLayoutEffect(() => {
    const activeItem = itemRefs.current[activeIndex];

    if (!activeItem) return;

    setIndicator({
      left: activeItem.offsetLeft,
      width: activeItem.offsetWidth,
    });
  }, [activeIndex]);

  // Mobile Menu: Lock body scroll and support Escape
  useEffect(() => {
    if (!isMenuOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-background pl-4 pt-6 pb-6 md:pl-0 md:pt-15">

      {/* Mobile Navigation */}
      <div className="relative z-50 md:hidden">
        <Container>
          <div className="flex items-center justify-between">

            {/* Home Icon */}
            <Link
              href="/"
              aria-label="Home"
              onClick={() => setIsMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m3 10 9-7 9 7" />
                <path d="M5 9v11h14V9" />
                <path d="M9 20v-7h6v7" />
              </svg>
            </Link>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "關閉選單" : "開啟選單"}
              aria-expanded={isMenuOpen}
              className="mr-4 flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
            >
              <span
                className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
                  isMenuOpen
                    ? "translate-y-[7px] rotate-45"
                    : ""
                }`}
              />

              <span
                className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`h-[2px] w-6 rounded-full bg-white transition-all duration-300 ${
                  isMenuOpen
                    ? "-translate-y-[7px] -rotate-45"
                    : ""
                }`}
              />
            </button>

          </div>
        </Container>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <Container>
          <div className="relative">
            <ul
              ref={navRef}
              className="relative flex w-auto justify-center gap-8 overflow-visible"
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
                      className="flex items-center justify-center rounded-full px-10 py-2"
                    >
                      {item.href === "/" ? (
                        <svg
                          viewBox="0 0 24 24"
                          className={`h-7 w-7 ${
                            isActive
                              ? "text-background"
                              : "text-white"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-label="Home"
                        >
                          <path d="m3 10 9-7 9 7" />
                          <path d="M5 9v11h14V9" />
                          <path d="M9 20v-7h6v7" />
                        </svg>
                      ) : (
                        <span
                          className={
                            isActive
                              ? "text-imageTitle-default text-background"
                              : "text-imageTitle-default text-white hover:text-textPrimary"
                          }
                        >
                          {item.label}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-40 flex min-h-dvh items-center justify-center bg-background px-8 transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-10">
          {mobileWorkLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={() => setIsMenuOpen(false)}
              className="text-sectionTitle-responsive text-textPrimaryColor transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

    </nav>
  );
}
