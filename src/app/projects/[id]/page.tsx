import Link from "next/link";
import { notFound } from "next/navigation";

// Tạm thời mock data trực tiếp ở đây để demo route
const projects = [
  { id: "schoolshop", title: "SchoolShop E-commerce", content: "Chi tiết về kiến trúc database và backend API của SchoolShop..." },
  { id: "restaurant-management", title: "Restaurant Management", content: "Chi tiết tính toán ROI và NPV..." },
  { id: "image-classification", title: "Image Classification & Clustering Models", content: "Chi tiết cài đặt các thuật toán K-Means, DBSCAN và mạng CNN để phân loại dữ liệu và hình ảnh." }
];

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find(p => p.id === id);

  if (!project) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Link href="/projects" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Quay lại danh sách dự án
      </Link>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-700">{project.content}</p>
    </div>
  );
}
