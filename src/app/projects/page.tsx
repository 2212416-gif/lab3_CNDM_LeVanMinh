import Link from "next/link";

const projects = [
  {
    id: "schoolshop",
    title: "SchoolShop E-commerce",
    description: "Hệ thống thương mại điện tử full-stack với đầy đủ tính năng quản lý sản phẩm, giỏ hàng và tối ưu hóa trải nghiệm người dùng.",
    tech: ["Next.JS", "Tailwind CSS", "API", "Database"],
    status: "Đang phát triển",
  },
  {
    id: "restaurant-management",
    title: "Restaurant Management System",
    description: "Phân tích tài chính (NPV, ROI, Payback) và tài liệu quản lý dự án cho hệ thống nhà hàng.",
    tech: ["Excel", "Project Management", "Financial Analysis"],
    status: "Hoàn thành",
  },
  {
    id: "image-classification",
    title: "Image Classification & Clustering Models",
    description: "Cài đặt thuật toán K-Means, DBSCAN và mô hình CNN để phân loại dữ liệu và hình ảnh.",
    tech: ["Python", "Machine Learning", "Orange Data Mining"],
    status: "Hoàn thành",
  }
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Dự án của tôi</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold mb-2">
              <Link href={`/projects/${project.id || '1'}`} className="hover:text-blue-600">
                {project.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="mb-4">
              <span className="text-sm font-semibold text-gray-500 mr-2">Công nghệ:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className={`text-sm px-2 py-1 rounded ${project.status === 'Hoàn thành' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {project.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
