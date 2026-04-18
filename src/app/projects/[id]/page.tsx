import Link from "next/link";
import { notFound } from "next/navigation";

// Mock data
const projects = [
  { id: "schoolshop", title: "SchoolShop E-commerce", content: "Chi tiết về kiến trúc database (PostgreSQL + Prisma) và backend API của SchoolShop. Dự án tích hợp hệ thống thanh toán qua Stripe, tối ưu hóa caching với Redis và sử dụng Next.js SSR để tăng tốc độ tải trang." },
  { id: "restaurant-management", title: "Restaurant Management", content: "Chi tiết tính toán ROI và NPV. Áp dụng kỹ thuật phân tích số liệu để quyết định chiến lược đầu tư công nghệ vào nhà hàng." },
  { id: "image-classification", title: "Image Classification & Clustering Models", content: "Chi tiết cài đặt các thuật toán K-Means, DBSCAN và mạng CNN. Sử dụng tập dữ liệu phân loại động vật chuẩn, đạt độ chính xác 94% trên tập test." }
];

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) notFound();

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/projects" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium mb-8 transition-colors">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Quay lại danh sách dự án
      </Link>
      
      <article className="glass rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100">{project.title}</h1>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-8"></div>
        
        <div className="prose prose-invert prose-cyan max-w-none">
          <p className="text-slate-300 leading-relaxed text-lg">
            {project.content}
          </p>
        </div>
      </article>
    </div>
  );
}
