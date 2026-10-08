"use client";

import ImageSlider from "../ui/ImageSlider";

export default function PressGallery() {
  const images = [
    "/press/p2.jpg",
    "/press/p3.jpeg",
    "/press/p4.jpg",
    "/press/p5.jpeg",
    "/press/p8.jpg",
    "/press/p7.jpg"
  ];

  return (
    <section className="py-8 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col">
          <ImageSlider categoryLabel="Press Gallery" images={images} />
        </div>
      </div>
    </section>
  );
}
