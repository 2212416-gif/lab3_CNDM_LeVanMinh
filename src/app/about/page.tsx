export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center md:text-left mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 inline-block">
          Giới thiệu bản thân
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
          Đam mê công nghệ, liên tục học hỏi và khao khát xây dựng những phần mềm chất lượng cao mang lại giá trị thực tế.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            </div>
            <h2 className="text-2xl font-semibold">Giáo dục</h2>
          </div>
          <div className="space-y-4">
            <div className="border-l-2 border-cyan-500/30 pl-4 py-1">
              <h3 className="font-medium text-lg text-slate-100">Đại học Đà Lạt</h3>
              <p className="text-cyan-400 text-sm">Khoa Công nghệ Thông tin</p>
              <p className="text-slate-400 text-sm mt-1">MSSV: 2212416</p>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h2 className="text-2xl font-semibold">Kỹ năng chuyên môn</h2>
          </div>
          <ul className="grid grid-cols-1 gap-3">
            {[
              { name: "Full-Stack Web (Next.js, React, Node.js)", level: 90 },
              { name: "Database Design & API Development", level: 85 },
              { name: "Machine Learning (K-Means, CNN)", level: 75 },
              { name: "Cloud Architecture & DevOps", level: 60 }
            ].map((skill, index) => (
              <li key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-200">{skill.name}</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 opacity-80">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-1.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
