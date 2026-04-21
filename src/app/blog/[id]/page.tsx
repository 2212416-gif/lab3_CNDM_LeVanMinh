import Link from "next/link";
import { notFound } from "next/navigation";
import { Post, User, Comment } from "@/types/post";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

async function getUser(userId: number): Promise<User> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!res.ok) {
    throw new Error("Không thể tải thông tin tác giả");
  }

  return res.json();
}

async function getComments(postId: number): Promise<Comment[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );

  if (!res.ok) {
    return [];
  }

  return res.json();
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const [post, comments] = await Promise.all([
    getPost(id),
    getComments(Number(id)),
  ]);
  const author = await getUser(post.userId);

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm mb-8"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Quay lại danh sách
      </Link>

      <article className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
            Tác giả #{post.userId}
          </Badge>
          <span className="text-slate-500 text-sm">Bài #{post.id}</span>
        </div>

        <h1 className="text-3xl font-bold mb-6 capitalize text-slate-100">
          {post.title}
        </h1>

        <div className="flex items-center gap-3 mb-6 text-sm text-slate-400">
          <span>
            Tác giả:{" "}
            <strong className="text-slate-200">{author.name}</strong>
          </span>
          <span>•</span>
          <span>{author.email}</span>
        </div>

        <Separator className="bg-white/10 mb-6" />

        <div className="text-slate-300 whitespace-pre-line leading-relaxed mb-8">
          {post.body}
        </div>

        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h3 className="font-semibold mb-2 text-slate-200">Về tác giả</h3>
          <p className="text-slate-400 text-sm">
            <strong className="text-slate-300">{author.name}</strong> (@{author.username}) —{" "}
            {author.company.name}
          </p>
          <p className="text-slate-500 text-sm italic mt-1">{author.company.catchPhrase}</p>
        </div>
      </article>

      {/* Comments section */}
      <section>
        <h2 className="text-xl font-bold mb-4 text-slate-200">
          Bình luận ({comments.length})
        </h2>
        <div className="space-y-4">
          {comments.map((comment) => (
            <Card key={comment.id} className="bg-white/5 border-white/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-slate-300">
                  {comment.name}
                </CardTitle>
                <p className="text-xs text-cyan-400">{comment.email}</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-sm">{comment.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
