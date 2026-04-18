"use client";
import { useState } from "react";

export default function CopyButton({ textToCopy }: { textToCopy: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset sau 2 giây
  };

  return (
    <button 
      onClick={handleCopy}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 w-full flex items-center justify-center gap-2 ${
        copied 
          ? "bg-green-500/10 text-green-400 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.2)]" 
          : "bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(8,145,178,0.2)]"
      }`}
    >
      {copied ? (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          Đã copy thành công!
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
          Chép Email ngay
        </>
      )}
    </button>
  );
}
