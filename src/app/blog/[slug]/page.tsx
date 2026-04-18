import Link from "next/link";
import { notFound } from "next/navigation";

const posts = [
  {
    slug: "hieu-ro-ve-nextjs-app-router",
    title: "Hiểu rõ về Next.js App Router và Server Components",
    content: "Next.js App Router cung cấp khả năng server-side rendering mặc định, giúp tối ưu hóa SEO và Web Vitals. Server Components giúp giảm tải client bundle size đáng kể, mang lại tốc độ duyệt web mượt mà...",
    date: "14/10/2023",
    category: "Next.js"
  },
  {
    slug: "ung-dung-k-means-trong-phan-tich-du-lieu",
    title: "Ứng dụng thuật toán K-Means trong phân tích dữ liệu thực tế",
    content: "K-Means là thuật toán phân cụm không giám sát hiệu quả. Trong bài này chúng ta dùng Python và scikit-learn để nhóm dữ liệu khách hàng theo mức độ tương đồng hành vi mua sắm...",
    date: "02/09/2023",
    category: "Machine Learning"
  },
  {
    slug: "toi-uu-hoa-tai-nguyen-he-thong",
    title: "Kinh nghiệm tối ưu hóa Database query với PostgreSQL",
    content: "Tối ưu hóa Database Query bao gồm việc dùng index phù hợp, giải quyết các N+1 query problem qua Prisma, và sử dụng Redis cache để quản trị session hiệu quả...",
    date: "25/08/2023",
    category: "Database"
  }
];

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto py-10">
      <Link href="/blog" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium mb-8 transition-colors">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        Quay lại danh sách Blog
      </Link>
      
      <article className="glass rounded-2xl p-8 md:p-12 shadow-2xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-cyan-400 font-medium px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20 text-sm">
            {post.category}
          </span>
          <span className="text-slate-400 text-sm">{post.date}</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-slate-100 leading-tight">
          {post.title}
        </h1>
        
        <div className="prose prose-invert prose-cyan max-w-none text-lg">
          <p className="text-slate-300 leading-relaxed">
            {post.content}
          </p>
        </div>
      </article>
    </div>
  );
}
