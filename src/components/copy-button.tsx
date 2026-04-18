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
      className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-200 transition-colors"
    >
      {copied ? "✓ Đã copy!" : "Copy Email"}
    </button>
  );
}
