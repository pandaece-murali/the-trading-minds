import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-8 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-16 text-primary-brand">Student Testimonials</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { text: "Stock market ತುಂಬಾ complex ಎಂದು ನಾನು ಯಾವಾಗಲೂ ಅಂದುಕೊಂಡಿದ್ದೆ. ಈ masterclass ಅದನ್ನು ನಾನು actually follow ಮಾಡಬಹುದಾದ ರೀತಿಯಲ್ಲಿ break down ಮಾಡಿತು.", name: "Sachin", image: "/sachine.jpeg" },
            { text: "Clear, practical ಮತ್ತು genuinely easy to understand — technical parts ಕೂಡ ನನಗೆ ಅರ್ಥವಾಯಿತು.", name: "Daksha Hegde", image: "/t.png" },
            { text: "Zeroದಿಂದ start ಮಾಡಿದ ನನಗೆ, guess ಮಾಡುವ ಬದಲು basics ಅರ್ಥವಾಗಿದೆ ಎಂಬ feeling ಈಗ ಬಂದಿದೆ.", name: "Shravan Shanbagh", image: "sh.png" }
          ].map((t, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-8 relative shadow-sm">
              <div className="text-secondary-brand/20 absolute top-4 right-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              <div className="flex gap-1 text-primary-brand mb-6">

                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-700 mb-6 italic leading-relaxed relative z-10">&quot;{t.text}&quot;</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">Masterclass Attendee</p>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* View More Testimonials Link */}
        <div className="mt-12 text-center">
          <a
            href="https://share.google/R9TF50UbEZiBiG99L"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 font-medium rounded-full transition-colors border border-slate-200 shadow-sm"
          >
            View More Student Testimonials
            <Star className="w-4 h-4 text-secondary-brand" />
          </a>
        </div>
      </div>
    </section>
  );
}
