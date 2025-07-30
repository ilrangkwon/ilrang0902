import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      id: "mobile-banking",
      title: "Mobile Banking App",
      description: "사용자 친화적인 모바일 뱅킹 애플리케이션 UI/UX 디자인",
      icon: "📱",
      gradient: "from-blue-500 to-purple-600",
      tags: ["Figma", "Prototyping", "User Research"],
      category: "Mobile App Design"
    },
    {
      id: "brand-identity",
      title: "Brand Identity Design",
      description: "스타트업을 위한 브랜드 아이덴티티 및 로고 디자인",
      icon: "🎨",
      gradient: "from-green-500 to-blue-600",
      tags: ["Illustrator", "Photoshop", "Brand Strategy"],
      category: "Brand Design"
    },
    {
      id: "ecommerce",
      title: "E-commerce Website",
      description: "온라인 쇼핑몰을 위한 반응형 웹사이트 UI/UX 디자인",
      icon: "🖥️",
      gradient: "from-purple-500 to-pink-600",
      tags: ["Figma", "Adobe XD", "Responsive Design"],
      category: "Web Design"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Portfolio
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link>
              <Link href="/#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</Link>
              <Link href="/projects" className="text-blue-600 dark:text-blue-400 font-semibold">Projects</Link>
              <Link href="/#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <section className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-blue-600 dark:text-blue-400">Designs</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            다양한 디자인 프로젝트들을 확인해보세요. 각 프로젝트의 상세한 디자인 과정과 결과물을 살펴볼 수 있습니다.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="group">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                    <span className="text-6xl">{project.icon}</span>
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:underline">
                      View Details →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Back to Home */}
        <section className="py-20 text-center">
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
            ← Back to Home
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2024 Designer Portfolio. Made with ❤️ using Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
} 