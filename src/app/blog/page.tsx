import Link from "next/link";
import { Post } from "@/types/post";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Không thể tải danh sách bài viết");
  }

  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center md:text-left mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 inline-block">
          Blog Kỹ thuật
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          Tổng cộng {posts.length} bài viết từ JSONPlaceholder API
        </p>
      </div>

      <div className="space-y-4">
        {posts.slice(0, 10).map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <Card className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all cursor-pointer mb-4">
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20">
                    Tác giả #{post.userId}
                  </Badge>
                  <span className="text-sm text-slate-500">
                    Bài #{post.id}
                  </span>
                </div>
                <CardTitle className="capitalize text-slate-100 hover:text-cyan-400 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 text-slate-400">
                  {post.body}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-sm text-cyan-400 font-medium inline-flex items-center gap-1">
                  Đọc tiếp
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
