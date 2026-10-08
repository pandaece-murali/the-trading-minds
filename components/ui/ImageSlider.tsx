"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageSlider({ images, categoryLabel }: { images: string[], categoryLabel: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 640) setItemsPerView(2);
      else setItemsPerView(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, images.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <div className="mb-16 last:mb-0">
      <h4 className="text-2xl font-bold mb-6 text-slate-800 text-center">{categoryLabel}</h4>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-12">
        {/* Slider Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {images.map((imgSrc, i) => (
              <div key={i} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3">
                <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200 aspect-[4/3] bg-slate-100 group relative">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={imgSrc}
                    alt={`${categoryLabel} image ${i + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-white border border-slate-200 text-slate-800 rounded-full shadow hover:bg-slate-50 transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-white border border-slate-200 text-slate-800 rounded-full shadow hover:bg-slate-50 transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
}
