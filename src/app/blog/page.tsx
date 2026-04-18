import Link from "next/link";

const posts = [
  {
    slug: "hieu-ro-ve-nextjs-app-router",
    title: "Hiểu rõ về Next.js App Router và Server Components",
    excerpt: "Khám phá cách App Router thay đổi hoàn toàn cách chúng ta xây dựng ứng dụng React, tối ưu SEO và Web Vitals.",
    date: "14/10/2023",
    category: "Next.js"
  },
  {
    slug: "ung-dung-k-means-trong-phan-tich-du-lieu",
    title: "Ứng dụng thuật toán K-Means trong phân tích dữ liệu thực tế",
    excerpt: "Thuật toán phân cụm K-Means là gì? Phân tích ví dụ sử dụng Python và thư viện scikit-learn để gom nhóm dữ liệu khách hàng.",
    date: "02/09/2023",
    category: "Machine Learning"
  },
  {
    slug: "toi-uu-hoa-tai-nguyen-he-thong",
    title: "Kinh nghiệm tối ưu hóa Database query với PostgreSQL",
    excerpt: "Làm thế nào để hệ thống E-commerce chịu tải được hàng ngàn request mỗi giây mà không bị nghẽn ở tầng Database?",
    date: "25/08/2023",
    category: "Database"
  }
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center md:text-left mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 inline-block">
          Blog Kỹ thuật
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          Chia sẻ kiến thức, kinh nghiệm lập trình và những bài học chuyên môn mình đúc kết được trong quá trình học tập và làm việc.
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <article key={index} className="glass rounded-2xl p-6 md:p-8 glass-hover transition-all">
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
              <span className="text-cyan-400 font-medium px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                {post.category}
              </span>
              <time className="text-slate-500 flex items-center">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                {post.date}
              </time>
            </div>
            
            <h2 className="text-2xl font-bold mb-3 text-slate-100 hover:text-cyan-400 transition-colors">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            
            <p className="text-slate-400 leading-relaxed mb-6">
              {post.excerpt}
            </p>
            
            <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-cyan-300">
              Đọc tiếp
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
