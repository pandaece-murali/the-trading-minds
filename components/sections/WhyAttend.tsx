import { Check } from "lucide-react";

export default function WhyAttend() {
  return (
    <section id="why-attend" className="py-8 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary-brand">Masterclass Attend ಮಾಡುವುದು ಏಕೆ Important?</h3>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-red-50/50 border border-red-200 rounded-2xl p-8 shadow-sm">
            <h4 className="text-xl font-semibold text-red-600 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">?</span>
              ಈ MasterClass attend  ಆಗುವ ಮೊದಲು
            </h4>
            <ul className="space-y-4">
              {[
                "ಎಲ್ಲಿ start ಮಾಡಬೇಕು ಎಂಬುದೇ Confuse ಆಗುವುದು",
                "Charts ಅಥವಾ market data ಹೇಗೆ read ಮಾಡಬೇಕು ಎಂಬುದು ತಿಳಿಯದಿರುವುದು",
                "Conflicting information ಮತ್ತು random tipsಗಳಿಂದ Overwhelmed ಆಗುವುದು",
                "Stock market \"ತಮ್ಮಂಥವರಿಗಾಗಿ ಅಲ್ಲ\" ಎಂದು ಅನಿಸುವುದು"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <span className="text-red-500 mt-1 font-bold">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-secondary-brand/10 border border-primary-brand/30 rounded-2xl p-8 shadow-sm">
            <h4 className="text-xl font-semibold text-secondary-brand mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-secondary-brand/20 flex items-center justify-center">!</span>
              ಈ Masterclass ನಂತರ...
            </h4>
            <ul className="space-y-4">
              {[
                "Markets ಹೇಗೆ function ಆಗುತ್ತವೆ ಎಂಬುದರ clear framework",
                "Risk management principles ಬಗ್ಗೆ basic understanding",
                "Informed strategy ಮತ್ತು random noise ನಡುವಿನ difference ಗುರುತಿಸುವ ability",
                "ಮುಂದೆ independent ಆಗಿ learning ಮುಂದುವರಿಸಿ market knowledge build ಮಾಡಿಕೊಳ್ಳಲು foundation"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-secondary-brand shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
