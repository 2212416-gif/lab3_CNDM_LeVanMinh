import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Website Portfolio",
    description: "Website cá nhân xây dựng bằng Next.JS và Tailwind CSS với thiết kế glassmorphism hiện đại.",
    tech: ["Next.JS", "Tailwind CSS", "TypeScript"],
    status: "Đang phát triển",
    github: "https://github.com/2212416-gif/lab2_CNDM_LeVanMinh",
  },
  {
    title: "Ứng dụng Quản lý Công việc",
    description: "Ứng dụng Todo App với React và Local Storage, hỗ trợ drag-and-drop, filter theo trạng thái.",
    tech: ["React", "CSS Modules", "JavaScript"],
    status: "Hoàn thành",
    github: "#",
  },
  {
    title: "API RESTful",
    description: "API quản lý sản phẩm với Node.js và Express, hỗ trợ JWT authentication và pagination.",
    tech: ["Node.js", "Express", "MongoDB"],
    status: "Hoàn thành",
    github: "#",
  },
  {
    title: "Chat Realtime",
    description: "Ứng dụng chat realtime với Socket.IO, hỗ trợ nhiều phòng chat và thông báo trực tiếp.",
    tech: ["React", "Socket.IO", "Node.js"],
    status: "Đang phát triển",
    github: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 inline-block">
          Dự án
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          Các dự án tôi đã và đang phát triển trong quá trình học tập.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-white/5 border-white/10 hover:bg-white/8 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-slate-100">
                  {project.title}
                </CardTitle>
                <Badge
                  variant={
                    project.status === "Hoàn thành" ? "default" : "secondary"
                  }
                  className={
                    project.status === "Hoàn thành"
                      ? "bg-green-500/20 text-green-400 border-green-500/30"
                      : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                  }
                >
                  {project.status}
                </Badge>
              </div>
              <CardDescription className="text-slate-400">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="border-white/10 text-slate-400"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Xem trên GitHub
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
