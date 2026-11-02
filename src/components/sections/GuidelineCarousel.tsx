
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import backgroundImage from "@/assets/image/work/design-guideline/guideline-1.png";
import cardImage1 from "@/assets/image/work/design-guideline/guideline-2.png";
import cardImage2 from "@/assets/image/work/design-guideline/guideline-3.png";
import cardImage3 from "@/assets/image/work/design-guideline/guideline-4.png";
import cardImage4 from "@/assets/image/work/design-guideline/guideline-5.png";

const cards = [
  {
    id: 1,
    image: cardImage1,
    description: "以全新的色彩規範\n塑造更年輕的品牌形象",
  },
  {
    id: 2,
    image: cardImage2,
    description: "圓形、全圓角、矩形\n形狀的定義讓用戶清楚\n了解與組件的互動方式",
  },
  {
    id: 3,
    image: cardImage3,
    description: "灰階、遮罩\n讓用戶關注在當前的任務上，一步步輕鬆達到目標",
  },
  {
    id: 4,
    image: cardImage4,
    description: "字體層級\n顯示資訊的重要程度\n引導用戶專注在重要資訊",
  },
];

export default function GuidelineCarousel() {
  const cardRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [step, setStep] = useState(0);

  const maxIndex = cards.length - 1;

  useEffect(() => {
    const updateStep = () => {
      if (!cardRef.current) return;

      const cardWidth = cardRef.current.getBoundingClientRect().width;
      const gap = window.innerWidth >= 768 ? 32 : 24;

      setStep(cardWidth + gap);
    };

    updateStep();

    const observer = new ResizeObserver(updateStep);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((index) => Math.max(0, index - 1));
  };

  const handleNext = () => {
    setCurrentIndex((index) => Math.min(maxIndex, index + 1));
  };

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-20">
      {/* 固定背景圖片 */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Carousel */}
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 px-8 md:grid-cols-8 md:px-[120px]">

        {/* Section Title */}
        <div className="mb-6 md:col-start-2 md:col-span-7">
          <h2 className="text-sectionTitle-responsive">
            第一步，捲起袖子。
          </h2>
        </div>

        {/* Carousel Track */}
        <div className="w-screen overflow-hidden md:col-start-2 md:col-span-7">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out md:gap-8"
            style={{
              transform: `translateX(-${currentIndex * step}px)`,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={card.id}
                ref={index === 0 ? cardRef : null}
                className="relative aspect-[385/296] w-[calc(75vw-18px)] shrink-0 overflow-hidden rounded-2xl bg-background-secondary md:h-[296px] md:w-[385px]"
              >
                <Image
                  src={card.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 75vw, 385px"
                />

                {/* 說明文字 */}
                <div className="absolute inset-0 flex items-start justify-center p-6 md:p-8">
                  <p className="w-full whitespace-pre-line text-center text-base font-medium leading-relaxed tracking-wide text-white md:text-lg">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex w-screen items-center justify-start gap-2 md:col-start-2 md:col-span-7">

          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            aria-label="Previous card"
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background-secondary text-white transition-opacity ${
              currentIndex === 0 ? "opacity-60" : "opacity-100"
            }`}
          >
            <span aria-hidden="true">←</span>
          </button>

          {/* Pagination */}
          <div className="flex items-center gap-1">
            {cards.map((card, index) => (
              <span
                key={card.id}
                aria-label={`Card ${index + 1}`}
                aria-current={currentIndex === index ? "step" : undefined}
                className={`h-3 rounded-full bg-background-secondary transition-all duration-300 ${
                  currentIndex === index ? "w-9" : "w-3"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            aria-label="Next card"
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background-secondary text-white transition-opacity ${
              currentIndex === maxIndex ? "opacity-60" : "opacity-100"
            }`}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
