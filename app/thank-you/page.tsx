"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Check,
  ArrowRight,
  Mail,
  Clock,
  Users,
  Star,
  ShieldCheck,
  Menu,
  X
} from "lucide-react";

// Official WhatsApp Logo Component
function WhatsAppLogo({ className = "w-6 h-6", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

// Official Telegram Logo Component
function TelegramLogo({ className = "w-6 h-6", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

export default function ThankYouPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 font-sans selection:bg-[#5D196C]/20 flex flex-col">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
              <Image
                src="/image.png"
                alt="The Trading Minds Logo"
                width={48}
                height={48}
                className="h-10 sm:h-12 w-auto object-contain"
                priority
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-950 flex items-center gap-1.5">
                  THE TRADING MINDS
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-slate-500 tracking-normal">
                  Learn. Understand. Trade with Discipline.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
              <a
                href="#community"
                onClick={(e) => scrollToSection(e, "community")}
                className="hover:text-[#5D196C] transition-colors"
              >
                Community
              </a>
              <a
                href="#learn"
                onClick={(e) => scrollToSection(e, "learn")}
                className="hover:text-[#5D196C] transition-colors"
              >
                Learn
              </a>
              <a
                href="#support"
                onClick={(e) => scrollToSection(e, "support")}
                className="hover:text-[#5D196C] transition-colors"
              >
                Support
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-4 space-y-2 text-sm font-semibold">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 px-3 rounded-lg text-slate-700 hover:bg-purple-50 hover:text-[#5D196C]"
            >
              Webinar
            </Link>
            <a
              href="#community"
              onClick={(e) => scrollToSection(e, "community")}
              className="block py-2 px-3 rounded-lg text-slate-700 hover:bg-purple-50 hover:text-[#5D196C]"
            >
              Community
            </a>
            <a
              href="#learn"
              onClick={(e) => scrollToSection(e, "learn")}
              className="block py-2 px-3 rounded-lg text-slate-700 hover:bg-purple-50 hover:text-[#5D196C]"
            >
              Learn
            </a>
            <a
              href="#support"
              onClick={(e) => scrollToSection(e, "support")}
              className="block py-2 px-3 rounded-lg text-slate-700 hover:bg-purple-50 hover:text-[#5D196C]"
            >
              Support
            </a>
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 w-full space-y-12 sm:space-y-16">

        {/* Registration Confirmed Hero Section */}
        <section className="text-center relative">
          {/* Subtle Decorative Background Elements */}
          <div className="absolute top-0 left-1/4 -translate-x-1/2 w-48 h-48 bg-purple-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute top-10 right-1/4 translate-x-1/2 w-48 h-48 bg-purple-300/30 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Central Confirmation Icon with celebration accents */}
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-purple-100/90 flex items-center justify-center shadow-inner ring-8 ring-purple-50">
              <Check className="w-12 h-12 sm:w-14 sm:h-14 text-[#5D196C] stroke-[3]" />
            </div>

            {/* Confetti / Sparkle Accents */}
            <span className="absolute -top-1 -left-2 w-2 h-2 rounded-full bg-purple-400"></span>
            <span className="absolute top-2 -right-3 w-2.5 h-2.5 rounded-full bg-purple-600"></span>
            <span className="absolute -bottom-1 -left-4 w-2.5 h-2.5 rounded-full bg-purple-500"></span>
            <span className="absolute bottom-3 -right-2 w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            <span className="absolute -top-3 left-1/2 w-1.5 h-3 rotate-45 rounded-full bg-purple-700"></span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-3">
            Registration <span className="text-[#5D196C]">Confirmed!</span>
          </h1>

          <div className="max-w-xl mx-auto space-y-2 text-slate-600 text-base sm:text-lg">
            <p className="font-semibold text-slate-800">
              You&apos;re officially registered for <span className="text-slate-950 font-bold">The Trading Minds Webinar.</span>
            </p>
            <p className="text-slate-600 font-normal text-sm sm:text-base">
              Your seat has been successfully reserved. We&apos;re excited to have you with us!
            </p>
          </div>
        </section>

        {/* Join Our Communities Section */}
        <section id="community" className="space-y-6 pt-2 scroll-mt-24">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Join Our <span className="text-[#5D196C]">Communities</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Stay connected to receive webinar reminders, important announcements, learning resources and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* WhatsApp Community Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-green-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50/50 rounded-full blur-2xl -z-10 group-hover:bg-green-100/50 transition-colors" />

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md shadow-green-500/20">
                    <WhatsAppLogo className="w-8 h-8" color="#ffffff" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      WhatsApp Community
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3">
                  {[
                    "Webinar reminders",
                    "Important announcements",
                    "Learning resources",
                    "Be part of our active community"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm sm:text-base font-medium">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-green-600 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* whatsapp link */}
              <div className="pt-8">
                <a
                  href="https://chat.whatsapp.com/FHrSw0N0cgABhCBhQr8yY4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <WhatsAppLogo className="w-5 h-5" color="#ffffff" />
                  <span>Join WhatsApp Community</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Telegram Community Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50/50 rounded-full blur-2xl -z-10 group-hover:bg-sky-100/50 transition-colors" />

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#0088cc] text-white flex items-center justify-center shadow-md shadow-sky-500/20">
                    <TelegramLogo className="w-8 h-8" color="#ffffff" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      Telegram Community
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3">
                  {[
                    "Updates & announcements",
                    "Market insights",
                    "Learning resources",
                    "Community discussions"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm sm:text-base font-medium">
                      <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-sky-600 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href="https://t.me/+R_gNkUxzBJ20hWea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#0088cc] hover:bg-[#0077b5] text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <TelegramLogo className="w-5 h-5" color="#ffffff" />
                  <span>Join Telegram Community</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <script
          src="https://app.chirpxp.com/embed.js"
          data-program="https://app.chirpxp.com/the_trading_minds/r/the_trading_minds_ambassador_program_h50j"
          data-mode="inline"
          data-look="form"
          data-width="520"
          data-align="center"
          data-radius="12"
          data-shadow="1"
        ></script>

        {/* Up-sell / Next Step Section */}
        <section id="learn" className="scroll-mt-24">
          <div className="bg-gradient-to-br from-purple-50/70 via-white to-purple-50/40 rounded-3xl border-2 border-purple-200/80 p-6 sm:p-10 shadow-sm relative overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Heading, Pitch, Price */}
              <div className="lg:col-span-6 space-y-4">
                <span className="inline-block bg-purple-100 text-[#5D196C] text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  TAKE THE NEXT STEP
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                  Want to <span className="text-[#5D196C]">Go Further?</span>
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  The webinar is just the beginning. Continue your learning journey with The Trading Minds for just
                </p>

                <div className="pt-2">
                  <div className="text-5xl sm:text-6xl font-black text-[#5D196C] tracking-tight">
                    ₹499
                  </div>
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-1.5 bg-purple-100/90 text-[#5D196C] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      <span>•</span> ONE-TIME ACCESS <span>•</span> LIFETIME VALUE
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Features & CTA Button */}
              <div className="lg:col-span-6 space-y-6 lg:border-l lg:border-purple-100 lg:pl-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-800 text-sm sm:text-base leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-[#5D196C] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                    </div>
                    <span>
                      <strong className="font-bold text-slate-950">Recording of 3 sessions</strong> will be provided which covers fundamentals &amp; technicals
                    </span>
                  </li>

                  <li className="flex items-start gap-3 text-slate-800 text-sm sm:text-base leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-[#5D196C] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                    </div>
                    <span>
                      <strong className="font-bold text-slate-950">1 week of tool access</strong> which would be taught in 2nd Session
                    </span>
                  </li>

                  <li className="flex items-start gap-3 text-slate-800 text-sm sm:text-base leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-[#5D196C] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                    </div>
                    <span>
                      <strong className="font-bold text-slate-950">Free PDF of &quot;Profitable Trader&quot;</strong>, a book launched by Trading minds which talks about key attributes one needs to follow to win the market
                    </span>
                  </li>
                </ul>

                <div className="pt-3">
                  <a
                    href="https://rzp.io/rzp/94QRkpBq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#5D196C] hover:bg-[#4a1256] text-white font-bold text-base py-4 px-8 rounded-xl shadow-lg shadow-purple-900/10 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Continue Learning – ₹499</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Stats Strip */}
        <section className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center px-4 pt-2 sm:pt-0">
              <div className="flex items-center gap-2 mb-1 text-[#5D196C]">
                <Users className="w-6 h-6" />
                <span className="text-2xl sm:text-3xl font-black text-slate-900">50,000+</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                LEARNERS TRUST US
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center px-4 pt-4 sm:pt-0">
              <div className="flex items-center gap-2 mb-1 text-[#5D196C]">
                <Star className="w-6 h-6 fill-[#5D196C]" />
                <span className="text-2xl sm:text-3xl font-black text-slate-900">4.8 ★</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                GOOGLE RATING
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center px-4 pt-4 sm:pt-0">
              <div className="flex items-center gap-2 mb-1 text-[#5D196C]">
                <ShieldCheck className="w-6 h-6" />
                <span className="text-2xl sm:text-3xl font-black text-slate-900">30+</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                YEARS OF EXPERIENCE
              </span>
            </div>
          </div>
        </section>

        {/* Need Help? Contact Details Section */}
        <section id="support" className="space-y-6 pt-2 scroll-mt-24">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Need <span className="text-[#5D196C]">Help?</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Have a question about the webinar or your registration? Our team is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* WhatsApp Contact */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                  <WhatsAppLogo className="w-6 h-6" color="#25D366" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    WhatsApp
                  </span>
                  <span className="text-base font-bold text-slate-900 block mt-0.5">
                    +91 8951456331
                  </span>
                </div>
              </div>

              <div>
                <a
                  href="https://wa.me/918951456331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 border border-green-200 text-green-700 hover:bg-green-50 font-bold text-sm py-2.5 px-4 rounded-xl transition-colors"
                >
                  <WhatsAppLogo className="w-4 h-4" color="#15803d" />
                  <span>Chat with Us</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Email Contact */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#5D196C] flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Email
                  </span>
                  <span className="text-sm sm:text-base font-bold text-slate-900 block mt-0.5 break-all">
                    contact@thetradingminds.com
                  </span>
                </div>
              </div>

              <div>
                <a
                  href="mailto:contact@thetradingminds.com"
                  className="w-full inline-flex items-center justify-center gap-2 border border-purple-200 text-[#5D196C] hover:bg-purple-50 font-bold text-sm py-2.5 px-4 rounded-xl transition-colors"
                >
                  <span>Send an Email</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Support Hours */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#5D196C] flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Support Hours
                  </span>
                  <div className="text-sm sm:text-base font-bold text-slate-900 block mt-0.5">
                    <p>Mon – Sat</p>
                    <p className="text-slate-600 font-medium text-xs sm:text-sm">10 AM – 7 PM IST</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Active during working hours</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


