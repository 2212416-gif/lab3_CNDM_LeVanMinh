import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-800 opacity-80 mb-8">404</h1>
      <h2 className="text-3xl font-bold text-slate-100 mb-4">Không tìm thấy trang</h2>
      <p className="text-slate-400 mb-10 max-w-md mx-auto text-lg">
        Trang bạn đang cố gắng truy cập không tồn tại hoặc đã bị gỡ bỏ.
      </p>
      <Link 
        href="/" 
        className="px-8 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_30px_rgba(8,145,178,0.5)] transform hover:-translate-y-1"
      >
        Quay lại Trang chủ
      </Link>
    </div>
  );
}
