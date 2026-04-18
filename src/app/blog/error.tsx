"use client";

export default function BlogError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
      </div>
      <h2 className="text-3xl font-bold text-slate-100 mb-4">Lỗi tải dữ liệu Blog</h2>
      <p className="text-slate-400 mb-8 max-w-md mx-auto">{error.message}</p>
      <button 
        onClick={() => reset()} 
        className="bg-red-500/20 text-red-400 border border-red-500/30 px-8 py-3 rounded-xl hover:bg-red-500/30 transition-colors shadow-lg shadow-red-500/10 font-medium"
      >
        Thử tải lại bài viết
      </button>
    </div>
  );
}
