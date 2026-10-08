import { Star } from "lucide-react";

export default function Outcomes() {
  return (
    <section className="py-8 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-primary-brand">What You&apos;ll Walk Away With</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Stock market fundamentals ಬಗ್ಗೆ clear understanding",
            "Charts, indicators ಮತ್ತು technical analysis basicsಗೆ practical exposure",
            "ನಿಮ್ಮ own decision-makingಗೆ guide ಮಾಡುವ risk management principles",
            "Markets ಬಗ್ಗೆ calmer ಮತ್ತು more disciplined mindset",
            "Session ನಂತರ independent ಆಗಿ learning ಮುಂದುವರಿಸಲು confidence"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-secondary-brand/20 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 text-secondary-brand" />
              </div>
              <p className="text-slate-700 font-medium">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
