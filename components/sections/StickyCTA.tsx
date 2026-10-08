import RazorpayButton from "../ui/RazorpayButton";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 z-50 transform translate-y-0 shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.1)]">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-bold text-slate-900">Offer Ends Soon — Join 50,000+ Kannada Learners.</p>
          <p className="text-xs text-slate-500">SEBI Registered · Reg. No. INH000023700</p>
        </div>
        <div className="w-full sm:w-auto bg-slate-50 border border-slate-200 rounded-lg p-1 min-w-[200px] flex justify-center">
          <RazorpayButton text="Reserve My Seat — Only ₹99" />
        </div>
      </div>
    </div>
  );
}
