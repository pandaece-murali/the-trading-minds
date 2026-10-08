import { Users, ArrowRight, Quote } from "lucide-react";

export default function HostCredibility() {
  return (
    <section className="py-20 px-4 bg-slate-50 flex justify-center">
      <div className="max-w-[1200px] w-full flex flex-col lg:flex-row rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border border-slate-200/60">

        {/* Left Side: Dark Theme with Glassmorphism */}
        <div className="lg:w-[50%] bg-[#0f1115] relative p-8 lg:p-12 flex flex-col justify-between overflow-hidden">
          <div className="relative z-10 flex flex-col justify-center h-full gap-8">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6 w-fit backdrop-blur-sm">
              <Users className="w-5 h-5 text-amber-500" />
              <div className="flex flex-col">
                <span className="text-amber-500 font-bold text-sm leading-tight">50,000+</span>
                <span className="text-slate-300 text-xs leading-tight">Kannada Traders Trust Us</span>
              </div>
            </div>

            {/* Educator Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Pavan Joshi Card */}
              <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md overflow-hidden hover:bg-white/10 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full"></div>
                <div className="relative z-10">
                  <div className="w-full aspect-[4/5] mb-4 overflow-hidden rounded-xl bg-gradient-to-b from-white/5 to-transparent relative">
                    <img src="/p/DSC08306.JPG" alt="Pavan Joshi" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <h3 className="text-white font-bold text-xl">Pavan Joshi</h3>
                  <p className="text-amber-500 text-sm font-medium mb-3">Founder</p>
                  <p className="text-slate-400 text-xs leading-relaxed mb-5">
                    &quot;Helping Kannada traders build consistent wealth through practical education.&quot;
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-2">
                      <a href="https://www.linkedin.com/in/pavandjoshi" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                      </a>
                      <a href="https://www.instagram.com/pavanjoshii" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                      </a>
                    </div>
                    <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Dr. Vinay Kumar Shetty Card */}
              <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md overflow-hidden hover:bg-white/10 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full"></div>
                <div className="relative z-10">
                  <div className="w-full aspect-[4/5] mb-4 overflow-hidden rounded-xl bg-gradient-to-b from-white/5 to-transparent relative">
                    <img src="/vinay.jpeg" alt="Dr. Vinay Kumar Shetty" className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <h3 className="text-white font-bold text-xl">Dr. Vinay Kumar Shetty</h3>
                  <p className="text-amber-500 text-sm font-medium mb-3">Founder</p>
                  <p className="text-slate-400 text-xs leading-relaxed mb-5">
                    &quot;Simplifying the stock market for every Kannada trader.&quot;
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-2">
                      <a href="https://www.linkedin.com/in/dr-vinay-kumar-dinakar-6739b442" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                      </a>
                      <a href="https://www.instagram.com/vinay_shettyy" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                      </a>
                    </div>
                    <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Side: Light Theme Content */}
        <div className="lg:w-[50%] p-8 lg:p-12 flex flex-col justify-center relative">

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-amber-500"></div>
            <span className="text-slate-500 text-sm font-bold tracking-wider uppercase">Meet Our Educators</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
            50,000+ Kannada Traders&apos; Journey ಹಿಂದೆ ಇರುವ Educators ಅನ್ನು <span className="text-amber-500">Meet ಮಾಡಿ</span>
          </h2>

          <div className="flex flex-col gap-3 text-slate-600 text-sm sm:text-base mb-8 leading-relaxed">
            <p>
              <strong className="text-slate-900">Pavan Joshi & Vinay Shetty — Founders, The Trading Minds</strong>
            </p>
            <p>
              SEBI-registered Research Analyst entity (Reg. No. INH000023700), ಒಂದು mission ಮೇಲೆ built ಆಗಿದೆ: trading education ಅನ್ನು Kannada ದಲ್ಲಿ genuinely accessible ಮಾಡುವುದು.
            </p>
            <p>
              Equities, commodities ಮತ್ತು derivatives ಕ್ಷೇತ್ರಗಳಲ್ಲಿ combined 30+ years experience ಹೊಂದಿರುವ Pavan ಮತ್ತು Vinay, technical analysis, trading psychology ಮತ್ತು market fundamentals ಅನ್ನು ಯಾರೂ follow ಮಾಡಬಹುದಾದ lessons ಆಗಿ explain ಮಾಡುತ್ತಾರೆ — finance degree ಅಗತ್ಯವಿಲ್ಲ.
            </p>
            <p>
              ಅವರು ಈಗಾಗಲೇ ಸಾವಿರಾರು Kannada-speaking learnersಗೆ independent ಮತ್ತು confident market understanding ಪಡೆಯಲು guide ಮಾಡಿದ್ದಾರೆ. ಈಗ ನೀವು join ಮಾಡುವ ಅವಕಾಶ.
            </p>
          </div>

          <div className="mt-2">
            <a href="https://www.instagram.com/thetradingmindofficial?stkn=MThpNWRtNHV2N3VtaQ==" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition-opacity shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              Follow Our Official Page
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
