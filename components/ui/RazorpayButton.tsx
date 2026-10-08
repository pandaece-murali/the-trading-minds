"use client";

import { ArrowRight } from "lucide-react";

interface RazorpayButtonProps {
  text?: string;
  className?: string;
}

export default function RazorpayButton({
  text = "Book My Seat-Just ₹99",
  className = ""
}: RazorpayButtonProps) {
  return (
    <a
      href="https://pages.razorpay.com/pl_TfODzGC84tS3Cw/view"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-[#82468f] hover:bg-[#6c3a77] text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 w-full ${className}`}
    >
      <span className="text-sm md:text-base">{text}</span>
    </a>
  );
}
