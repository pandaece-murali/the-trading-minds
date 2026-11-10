import { Check } from "lucide-react";
import RazorpayButton from "../ui/RazorpayButton";

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-8 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-primary-brand">Curriculum</h3>
          <p className="text-xl text-slate-600">Market ಅನ್ನು ನೀವು ನೋಡುವ ರೀತಿಯನ್ನು Change ಮಾಡುವ 3 Days</p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-yellow-500/30 before:to-transparent">

          {/* Day 1 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-accent-orange text-slate-900 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
              1
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-50 border border-primary-brand rounded-2xl shadow-sm hover:border-accent-pink hover:shadow-md transition-all">
              <div className="text-secondary-brand text-sm font-bold mb-2 tracking-wider uppercase">1st December, 7:30pm</div>
              <h4 className="text-xl font-bold mb-4 text-primary-brand">Market Basics, Confusion ಇಲ್ಲದೆ</h4>
              <ul className="space-y-3">
                <li className="flex gap-2 text-slate-700"><Check className="w-5 h-5 text-secondary-brand shrink-0" /> Stock market ನಿಜವಾಗಿ ಹೇಗೆ work ಮಾಡುತ್ತದೆ</li>
                <li className="flex gap-2 text-slate-700"><Check className="w-5 h-5 text-secondary-brand shrink-0" /> Key terms ಮತ್ತು concepts ಅನ್ನು simple languageನಲ್ಲಿ explain ಮಾಡುವುದು</li>
                <li className="flex gap-2 text-slate-700"><Check className="w-5 h-5 text-secondary-brand shrink-0" /> Prices ಏಕೆ move ಆಗುತ್ತವೆ — demand & supply</li>
                <li className="flex gap-2 text-slate-700"><Check className="w-5 h-5 text-secondary-brand shrink-0" /> How to use Ai screeners & automation to shortlist stocks</li>
              </ul>
            </div>
          </div>

          {/* Day 2 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-accent-orange text-slate-900 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
              2
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-50 border border-primary-brand rounded-2xl shadow-sm hover:border-accent-pink hover:shadow-md transition-all">
              <div className="text-secondary-brand text-sm font-bold mb-2 tracking-wider uppercase">2nd December, 7:30pm</div>
              <h4 className="text-xl font-bold mb-4 text-primary-brand">Charts, Risk & Real Discipline</h4>
              <ul className="space-y-3">
                <li className="flex gap-2 text-slate-700"><Check className="w-5 h-5 text-secondary-brand shrink-0" /> Candlesticks ಮತ್ತು technical chartsಗೆ Introduction</li>
                <li className="flex gap-2 text-slate-700"><Check className="w-5 h-5 text-secondary-brand shrink-0" /> Demand/supply zones, RSI & moving averages</li>
                <li className="flex gap-2 text-slate-700"><Check className="w-5 h-5 text-secondary-brand shrink-0" /> Disciplined traders ಬಳಸುವ core risk management principles</li>
                <li className="flex gap-2 text-slate-700"><Check className="w-5 h-5 text-secondary-brand shrink-0" /> Stop-losses ಅನ್ನು ಹೇಗೆ ಮತ್ತು ಏಕೆ use ಮಾಡುತ್ತಾರೆ</li>
                <li className="flex gap-2 text-slate-700"><Check className="w-5 h-5 text-secondary-brand shrink-0" /> How to use an Ai based automated software tool for trading</li>
              </ul>
            </div>
          </div>

          {/* Day 3 */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-accent-orange text-slate-900 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
              3
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-slate-50 border border-primary-brand rounded-2xl shadow-sm hover:border-accent-pink hover:shadow-md transition-all">
              <div className="text-secondary-brand text-sm font-bold mb-2 tracking-wider uppercase">3rd December</div>
              <h4 className="text-xl font-bold mb-4 text-primary-brand">Charts in Action & Mindset</h4>

              <div className="mb-4">
                <p className="font-semibold text-slate-900 mb-2">Session 1 (9:00 AM)</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2 text-slate-700"><Check className="w-4 h-4 text-secondary-brand shrink-0 mt-0.5" /> Chart-reading tools ಮತ್ತು indicatorsಗಳ practical walkthrough</li>
                  <li className="flex gap-2 text-slate-700"><Check className="w-4 h-4 text-secondary-brand shrink-0 mt-0.5" /> Live, guided chart analysis</li>
                  <li className="flex gap-2 text-slate-700"><Check className="w-4 h-4 text-secondary-brand shrink-0 mt-0.5" /> Practice live experience with mentor and ask doubts in live market</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-primary-brand/30">
                <p className="font-semibold text-slate-900 mb-2">Session 2 (7:30 PM)</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2 text-slate-700"><Check className="w-4 h-4 text-secondary-brand shrink-0 mt-0.5" /> Trading psychology ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು & Fear/Greed manage ಮಾಡುವುದು</li>
                  <li className="flex gap-2 text-slate-700"><Check className="w-4 h-4 text-secondary-brand shrink-0 mt-0.5" /> Disciplined, structured learning habit build ಮಾಡುವುದು</li>
                  <li className="flex gap-2 text-slate-700"><Check className="w-4 h-4 text-secondary-brand shrink-0 mt-0.5" /> A professional roadmap for your trading and investment journey</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-8"><span className="text-slate-900 font-semibold">Requirements:</span> None — curiosity ಮತ್ತು learn ಮಾಡುವ willingness ಸಾಕು.</p>
          <div className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 flex justify-center">
            <RazorpayButton text="Register Now " />
          </div>
        </div>
      </div>
    </section>
  );
}
