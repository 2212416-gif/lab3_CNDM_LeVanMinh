import Link from "next/link";

const projects = [
  {
    id: "schoolshop",
    title: "SchoolShop E-commerce",
    description: "Hệ thống thương mại điện tử full-stack với đầy đủ tính năng quản lý sản phẩm, giỏ hàng, thanh toán và tối ưu hóa trải nghiệm người dùng.",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma"],
    status: "Đang phát triển",
  },
  {
    id: "restaurant-management",
    title: "Restaurant Management System",
    description: "Công cụ phân tích tài chính (NPV, ROI, Payback) và tài liệu quản lý dự án nhằm số hóa toàn diện quy trình vận hành nhà hàng.",
    tech: ["Excel", "Project Management", "Data Analytics"],
    status: "Hoàn thành",
  },
  {
    id: "image-classification",
    title: "AI Clustering & Classification",
    description: "Hệ thống Machine Learning sử dụng thuật toán K-Means, DBSCAN và mô hình học sâu CNN để tự động phân loại hình ảnh.",
    tech: ["Python", "TensorFlow", "scikit-learn"],
    status: "Hoàn thành",
  }
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 inline-block">
          Dự án Thực tế
        </h1>
        <p className="text-slate-400 text-lg">Những ứng dụng và hệ thống mình đã xây dựng.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="glass rounded-xl p-6 flex flex-col h-full glass-hover group">
            <div className="flex justify-between items-start mb-4">
              <div className={`text-xs font-semibold px-2.5 py-1 rounded-full ${project.status === 'Hoàn thành' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                {project.status}
              </div>
              <svg className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </div>
            
            <h2 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all">
              <Link href={`/projects/${project.id || '1'}`} className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true"></span>
                {project.title}
              </Link>
            </h2>
            
            <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-slate-800 text-slate-300 border border-slate-700 text-xs px-2.5 py-1 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
