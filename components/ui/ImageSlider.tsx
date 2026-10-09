"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: string[];
  categoryLabel: string;
  priorityFirstSlide?: boolean;
  autoPlayInterval?: number; // Duration between slides in ms (default: 3000ms)
}

export default function ImageSlider({
  images,
  categoryLabel,
  priorityFirstSlide = false,
  autoPlayInterval = 3000,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  // Responsive items-per-view calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, images.length - itemsPerView);
  const activeIndex = Math.min(currentIndex, maxIndex);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const current = Math.min(prev, maxIndex);
      return current >= maxIndex ? 0 : current + 1;
    });
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const current = Math.min(prev, maxIndex);
      return current <= 0 ? maxIndex : current - 1;
    });
  }, [maxIndex]);

  // Autoplay timer with configurable speed and hover pause
  useEffect(() => {
    if (isHovered || images.length <= itemsPerView || autoPlayInterval <= 0) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [nextSlide, isHovered, images.length, itemsPerView, autoPlayInterval]);

  // Swipe gesture support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    const threshold = 40;

    if (diff > threshold) {
      nextSlide();
    } else if (diff < -threshold) {
      prevSlide();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const totalSteps = maxIndex + 1;

  return (
    <div
      className="mb-16 last:mb-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h4 className="text-2xl font-bold mb-6 text-slate-800 text-center">{categoryLabel}</h4>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-12">
        {/* Slider Container */}
        <div
          className="overflow-hidden select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateX(-${activeIndex * (100 / itemsPerView)}%)` }}
          >
            {images.map((imgSrc, i) => {
              // Priority for initial visible slides if requested
              const isInitialVisible = priorityFirstSlide && i < itemsPerView;

              return (
                <div key={i} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3">
                  <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200 aspect-[4/3] bg-slate-100 group relative">
                    <Image
                      src={imgSrc}
                      alt={`${categoryLabel} image ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 360px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={isInitialVisible}
                      loading={isInitialVisible ? "eager" : "lazy"}
                      quality={80}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons */}
        {images.length > itemsPerView && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-white/95 hover:bg-white text-slate-800 rounded-full shadow-md hover:shadow-lg border border-slate-200 transition-all focus:outline-none focus:ring-2 focus:ring-primary-brand active:scale-95"
              aria-label="Previous image"
              type="button"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-white/95 hover:bg-white text-slate-800 rounded-full shadow-md hover:shadow-lg border border-slate-200 transition-all focus:outline-none focus:ring-2 focus:ring-primary-brand active:scale-95"
              aria-label="Next image"
              type="button"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </>
        )}

        {/* Pagination Dots */}
        {totalSteps > 1 && (
          <div className="flex justify-center items-center gap-1.5 mt-4">
            {Array.from({ length: totalSteps }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                type="button"
                className={`transition-all duration-300 rounded-full h-2 ${
                  activeIndex === idx
                    ? "w-6 bg-primary-brand"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
