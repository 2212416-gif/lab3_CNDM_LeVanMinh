import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-8 animate-fade-in">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        Available for new opportunities
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
        Full-Stack <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
          Software Engineer
        </span>
      </h1>
      
      <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-light">
        Xin chào, mình là Sinh viên Đại học Đà Lạt. Mình chuyên xây dựng hệ thống web an toàn, giao diện người dùng tương tác cao, và áp dụng Machine Learning vào ứng dụng thực tế.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link 
          href="/projects" 
          className="px-8 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_30px_rgba(8,145,178,0.5)] transform hover:-translate-y-1"
        >
          Khám phá Dự án
        </Link>
        <Link 
          href="/contact" 
          className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all transform hover:-translate-y-1 backdrop-blur-md"
        >
          Liên hệ ngay
        </Link>
      </div>
    </div>
  );
}
