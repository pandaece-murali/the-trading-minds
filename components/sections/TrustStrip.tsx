import { Users, Star, ShieldCheck, LineChart } from "lucide-react";

export default function TrustStrip() {
  return (
    <>
      {/* Trust & Credibility Strip (4 horizontal boxes) */}
      <section className="py-6 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-50 border border-slate-200 p-4 rounded flex flex-col gap-1 hover:border-primary-brand/50 transition-colors shadow-sm">
            <Users className="w-5 h-5 text-secondary-brand mb-1" />
            <p className="font-bold text-secondary-brand">50,000+ <span className="text-slate-800 text-sm font-normal">Students Trusted</span></p>
            <p className="text-[10px] text-slate-500 leading-tight">Join biggest Kannada community who have mastered trading.</p>
          </div>

          <a href="https://www.google.com/search?q=the+trading+minds+reviews" target="_blank" rel="noopener noreferrer" className="bg-slate-50 border border-slate-200 p-4 rounded flex flex-col gap-1 hover:border-primary-brand/50 transition-colors shadow-sm block">
            <Star className="w-5 h-5 text-secondary-brand mb-1" />
            <p className="font-bold text-secondary-brand">4.8 <span className="text-slate-800 text-sm font-normal">Ratings on Google</span></p>
            <p className="text-[10px] text-slate-500 leading-tight">Highly rated for delivering exceptional trading education.</p>
          </a>

          <div className="bg-slate-50 border border-slate-200 p-4 rounded flex flex-col gap-1 hover:border-primary-brand/50 transition-colors shadow-sm">
            <ShieldCheck className="w-5 h-5 text-secondary-brand mb-1" />
            <p className="font-bold text-secondary-brand">SEBI <span className="text-slate-800 text-sm font-normal">Registered Analyst</span></p>
            <p className="text-[10px] text-slate-500 leading-tight">Trusted and verified by regulatory authorities.</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-4 rounded flex flex-col gap-1 hover:border-primary-brand/50 transition-colors shadow-sm">
            <LineChart className="w-5 h-5 text-secondary-brand mb-1" />
            <p className="font-bold text-secondary-brand">30+ Years <span className="text-slate-800 text-sm font-normal">Experience</span></p>
            <p className="text-[10px] text-slate-500 leading-tight">Learn from educators with deep market expertise.</p>
          </div>
        </div>
      </section>
    </>
  );
}
