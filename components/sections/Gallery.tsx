"use client";

import ImageSlider from "../ui/ImageSlider";

export default function Gallery() {
  const categories = [
    {
      id: "family",
      label: "Meet 'The Trading Minds' Family",
      images: [
        "/student/s.JPG",
        "/student/s1.JPG",
        "/student/s3.jpeg",
        "/student/s4.JPG",
        "/T/t3.JPG",
        "/T/t4.JPG",
        "/T/t5.JPG",
        "/T/t8.JPG",
        "/T/t9.jpeg",
      ],
    },
    {
      id: "Event",
      label: "Event Gallery",
      images: [
        "/event/DSC_0032.JPG",
        "/event/DSC_0149.JPG",
        "/event/DSC_0541.JPG",
        "/event/DSC_8211.JPG",
        "/event/DSC_8803.JPG",
      ],
    },
  ];

  return (
    <section className="py-12 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4 text-primary-brand">Gallery — Inside The Trading Minds Experience</h3>
        <p className="text-slate-600 mb-12">ನಮ್ಮ Live Sessionsನ ಒಂದು Glimpse. Packed live classesದಿಂದ real Q&A momentsವರೆಗೆ — ಸಾವಿರಾರು learners ಈಗಾಗಲೇ part ಆಗಿರುವ experience ನೋಡಿ.</p>

        <div className="flex flex-col">
          {categories.map((cat) => (
            <ImageSlider key={cat.id} categoryLabel={cat.label} images={cat.images} />
          ))}
        </div>
      </div>
    </section>
  );
}
