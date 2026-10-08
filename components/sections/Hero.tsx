import { Calendar, Clock, Video, BookOpen } from "lucide-react";
import RazorpayButton from "../ui/RazorpayButton";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-16 px-4 bg-white">
      {/* Top Titles */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <p className="text-secondary-brand font-medium mb-4">
          SEBI Reg. No. INH000023700 | Educational webinar ಮಾತ್ರ. ಇದು investment advice ಅಲ್ಲ.
        </p>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-tight text-primary-brand">
          <span className="border-b-2 border-primary-brand pb-1">Market ಬಗ್ಗೆ </span>, ಕೇಳೋದು ಸಾಕು —<br className="hidden md:block" /> ಈಗ ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ಸಮಯ
        </h1>
        <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
          ಮೊದಲ ಬಾರಿಗೆ stock market ಅನ್ನು simple, practical ಮತ್ತು ನಿಮ್ಮದೇ ಭಾಷೆಯಲ್ಲಿ ಕಲಿಯಿರಿ. No jargon. No shortcuts. Just real understanding.
        </p>
      </div>

      {/* 2-Column Hero */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">

        {/* Left Video Element */}
        <div className="relative aspect-video border-2 border-primary-brand rounded-lg overflow-hidden bg-slate-100 group shadow-[0_0_30px_-5px_rgba(93,25,108,0.2)]">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/glrX_vFsiqo?autoplay=1&mute=0&loop=1&playlist=glrX_vFsiqo&controls=0"
            title="The Trading Minds - Hero Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Details */}
        <div className="flex flex-col justify-center">
          <h3 className="text-center md:text-left text-lg font-semibold mb-6 text-primary-brand">
            Take your initial step toward becoming a <span className="text-secondary-brand">Stock Market expert.</span>
          </h3>

          {/* Details Box */}
          <div className="border border-slate-200 rounded-3xl p-6 mb-6 bg-slate-50 relative shadow-sm">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-50 px-4 text-xs text-slate-500 border border-slate-200 rounded-full">
              Workshop Details
            </div>

            <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-sm mt-2">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-secondary-brand shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-500 text-xs">Date:</p>
                  <p className="font-semibold text-slate-900">1st, 2nd, 3rd Nov</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary-brand shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-500 text-xs">Time:</p>
                  <p className="font-semibold text-slate-900">7:30 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Video className="w-5 h-5 text-secondary-brand shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-500 text-xs">Workshop:</p>
                  <p className="font-semibold text-slate-900">Zoom</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-secondary-brand shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-500 text-xs">Language:</p>
                  <p className="font-semibold text-slate-900">Kannada & English</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 flex justify-center">
            <RazorpayButton text="Join Now — Limited Seats" />
          </div>
        </div>
      </div>
    </section>
  );
}
