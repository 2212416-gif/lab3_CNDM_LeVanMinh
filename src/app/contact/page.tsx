import CopyButton from "@/components/copy-button";

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Liên hệ với tôi</h1>
      <p className="text-gray-700 mb-8">
        Nếu bạn có bất kỳ câu hỏi nào hoặc muốn trao đổi về cơ hội hợp tác, đừng ngần ngại liên hệ với tôi qua email dưới đây.
      </p>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center max-w-md mx-auto shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Email liên hệ</h2>
        <p className="text-lg text-gray-800 mb-6 font-medium">nguyenvana@sv.dlu.edu.vn</p>
        <CopyButton textToCopy="nguyenvana@sv.dlu.edu.vn" />
      </div>
    </div>
  );
}
