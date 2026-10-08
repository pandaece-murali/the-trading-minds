export default function MediaCoverage() {
  const logos = [
    { src: "/tv9.png", alt: "TV9 Kannada" },
    { src: "/z.png", alt: "Zee Kannada News" },
    { src: "/indian.png", alt: "Indian Startup News" },
    { src: "/image copy.png", alt: "Vijayavani" },
    { src: "/m.png", alt: "Vartha Bharati" },
  ];

  // Duplicate for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 px-4 bg-white border-y border-slate-200/60 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-10 text-slate-500 uppercase tracking-wider">
          As Seen On
        </h3>
        
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:w-20 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:w-20 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:z-10">
          <div 
            className="flex w-max"
            style={{ animation: 'slide 30s linear infinite' }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="w-40 md:w-56 h-24 mx-6 relative flex items-center justify-center transition-all duration-300 shrink-0"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
      `}} />
    </section>
  );
}
