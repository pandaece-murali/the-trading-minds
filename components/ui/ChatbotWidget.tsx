"use client";

import { MessageCircle } from "lucide-react";

export default function ChatbotWidget() {
  return (
    <div className="fixed bottom-24 right-4 z-[60] flex flex-col items-end gap-2 group">
      <div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-200 text-sm font-medium text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
        Hi! How can we help you? 👋
      </div>
      <button 
        onClick={() => alert("AI-sensy/WATI Integration will be triggered here. Need your script snippet/API keys to fully integrate!")}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all hover:scale-110 flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
