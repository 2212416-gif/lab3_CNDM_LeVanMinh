import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 border border-slate-700 shadow-xl">
        <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
      </div>
      <h2 className="text-3xl font-bold text-slate-100 mb-4">Bài viết không tồn tại</h2>
      <p className="text-slate-400 mb-10 max-w-md mx-auto text-lg">
        Bài viết bạn tìm trên Blog có thể đã bị xóa hoặc đường dẫn (slug) không chính xác.
      </p>
      <Link 
        href="/blog" 
        className="px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all backdrop-blur-md"
      >
        Trở về danh sách Blog
      </Link>
    </div>
  );
}
