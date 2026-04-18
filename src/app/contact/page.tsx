import CopyButton from "@/components/copy-button";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 inline-block">
          Kết nối với mình
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Bạn có dự án cần hợp tác, câu hỏi chuyên môn hay đơn giản chỉ muốn giao lưu công nghệ? Hãy liên hệ qua email dưới đây.
        </p>
      </div>
      
      <div className="glass rounded-2xl p-8 md:p-12 text-center max-w-md mx-auto relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/30">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          
          <h2 className="text-xl font-semibold mb-2 text-slate-100">Gửi Email</h2>
          <p className="text-2xl text-cyan-400 mb-8 font-medium tracking-wide">2212416@dlu.edu.vn</p>
          
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-cyan-400 blur-md opacity-20 rounded-lg"></div>
            <div className="relative bg-[#020617] p-1 rounded-xl">
              <CopyButton textToCopy="2212416@dlu.edu.vn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
