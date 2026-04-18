import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Le Van Minh | Software Engineer",
  description: "Personal portfolio of Le Van Minh, IT student and software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased text-slate-100 flex flex-col min-h-screen">
        <header className="fixed top-0 w-full z-50 glass border-b-0 border-white/5">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tight">
              LVM.
            </Link>
            <nav className="hidden md:flex space-x-8 font-medium text-sm text-slate-300">
              <Link href="/" className="hover:text-cyan-400 transition-colors">Trang chủ</Link>
              <Link href="/about" className="hover:text-cyan-400 transition-colors">Giới thiệu</Link>
              <Link href="/projects" className="hover:text-cyan-400 transition-colors">Dự án</Link>
              <Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
              <Link href="/contact" className="hover:text-cyan-400 transition-colors">Liên hệ</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 pt-28 pb-16 px-6 max-w-6xl mx-auto w-full">
          {children}
        </main>
        <footer className="py-8 text-center text-sm text-slate-500 border-t border-white/5 mt-auto">
          &copy; {new Date().getFullYear()} Le Van Minh. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
