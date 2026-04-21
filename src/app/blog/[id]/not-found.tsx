import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="text-center py-16">
      <h2 className="text-2xl font-bold mb-4 text-slate-100">Bài viết không tồn tại</h2>
      <p className="text-slate-400 mb-6">
        Bài viết bạn tìm kiếm không tồn tại hoặc đã bị xóa.
      </p>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Quay lại danh sách bài viết
      </Link>
    </div>
  );
}
