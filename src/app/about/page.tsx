export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Giới thiệu</h1>
      <div className="space-y-4 text-gray-700">
        <p>
          Xin chào! Mình là sinh viên ngành Công nghệ Thông tin tại Đại học Đà Lạt.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Học vấn & Thông tin</h2>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="font-medium">Đại học Đà Lạt</p>
          <p className="text-gray-500">MSSV: 2212416</p>
          <p className="text-gray-500">Chuyên ngành: Công nghệ Thông tin</p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Kỹ năng nổi bật</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Phát triển Full-stack với Next.js & React</li>
          <li>Thiết kế cơ sở dữ liệu & API</li>
          <li>Machine Learning cơ bản (K-Means, DBSCAN, CNN)</li>
          <li>Sử dụng công cụ AI hỗ trợ code (Cursor)</li>
        </ul>
      </div>
    </div>
  );
}
