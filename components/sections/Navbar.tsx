"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import RazorpayButton from "../ui/RazorpayButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Why Attend", href: "#why-attend" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 transition-opacity hover:opacity-80 flex items-center gap-2">
            <Image
              src="/image.png"
              alt="The Trading Minds Logo"
              width={48}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
            <span className="font-bold text-xl text-primary-brand">The Trading Minds</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="text-sm font-medium text-slate-600 hover:text-primary-brand transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="w-auto">
                <RazorpayButton className="!py-2 !px-5 whitespace-nowrap" />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-brand hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 px-3 flex justify-center w-full">
              <RazorpayButton className="!py-2 !px-5 whitespace-nowrap" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
