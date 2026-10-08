"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Masterclass ಯಾವ languageನಲ್ಲಿ conducted ಆಗುತ್ತದೆ?",
      a: "Sessions simple, easy-to-follow Englishನಲ್ಲಿ ನಡೆಯುತ್ತವೆ ಮತ್ತು better relatabilityಗಾಗಿ Kannada explanations ಕೂಡ ಇರುತ್ತವೆ. No complex jargon."
    },
    {
      q: "ಪ್ರತಿ session ಎಷ್ಟು long?",
      a: "ಪ್ರತಿದಿನ ಸುಮಾರು 1 to 1.5 hours, live only. Recordings ನೀಡಲಾಗುವುದಿಲ್ಲ — ಎಲ್ಲಾ sessions live attend ಮಾಡಿ."
    },
    {
      q: "ನಾನು ಹೇಗೆ join ಮಾಡುವುದು?",
      a: "Register on this page and complete the ₹99 payment. You'll instantly receive confirmation with joining details via email/WhatsApp."
    },
    {
      q: "ನಾನು ಒಂದು session miss ಮಾಡಿದರೆ?",
      a: "ಇದು live-only program ಮತ್ತು recordings ಇರುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ full experienceಗಾಗಿ ಎಲ್ಲಾ sessions attend ಮಾಡುವಂತೆ plan ಮಾಡಿ."
    },
    {
      q: "ಇದು stock tips ಅಥವಾ signals serviceನಾ?",
      a: "ಇಲ್ಲ. ಇದು purely educational program. ನಾವು buy/sell recommendations ಅಥವಾ trading signals ನೀಡುವುದಿಲ್ಲ. ನಿಮ್ಮ independent market understanding build ಮಾಡುವುದು ಇದರ goal."
    },
    {
      q: "The Trading Minds SEBI-registered ಆಗಿದೆಯೇ?",
      a: "ಹೌದು — SEBI-registered Research Analyst, Registration No. INH000023700, ಮತ್ತು investor educationಗಾಗಿ ಎಲ್ಲಾ sessions SEBI guidelines follow ಮಾಡುತ್ತವೆ."
    },
    {
      q: "Refund policy ಏನು?",
      a: "The ₹99 registration fee is non-refundable, given the nominal amount and the value of the educational content provided."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-white border-t border-slate-200 pb-32">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-primary-brand">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-primary-brand rounded-xl overflow-hidden bg-slate-50 shadow-sm">
              <button 
                onClick={() => toggleFaq(i)}
                className="w-full px-6 py-4 flex items-center justify-between font-medium text-left hover:bg-slate-100 transition-colors text-slate-800"
              >
                {faq.q}
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-4 pt-2 text-slate-600 leading-relaxed border-t border-primary-brand/30">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-secondary-brand/10 border border-primary-brand rounded-xl p-6 text-center shadow-sm">
          <h4 className="font-semibold text-primary-brand mb-2">Supportಗಾಗಿ ಯಾರನ್ನು contact ಮಾಡಬೇಕು?</h4>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> WhatsApp: +91 8951456331</span>
            <span className="hidden sm:inline">|</span>
            <span>Email: contact@thetradingminds.com</span>
            <span className="hidden sm:inline">|</span>
            <span>Mon–Sat, 10 AM–7 PM IST</span>
          </div>
        </div>
      </div>
    </section>
  );
}
