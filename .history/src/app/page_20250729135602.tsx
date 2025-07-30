
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105">About</a>
              <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105">Skills</a>
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105">Projects</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center py-20">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">👨‍💻</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              안녕하세요! <span className="text-blue-600 dark:text-blue-400">디자이너</span>입니다
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              창의적이고 사용자 중심의 디자인을 만드는 것을 좋아합니다.
              아름다운 시각적 경험과 직관적인 인터페이스를 디자인하는 것에 열정을 가지고 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                프로젝트 보기
              </a>
              <a href="#contact" className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                연락하기
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">디자이너로서의 경험</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                안녕하세요! 저는 사용자 경험과 시각적 디자인에 열정을 가진 디자이너입니다. 
                사용자의 니즈를 이해하고, 아름답고 기능적인 디자인을 만드는 것을 좋아합니다.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Figma, Adobe Creative Suite, Sketch 등의 도구를 활용하여 
                현대적이고 직관적인 UI/UX 디자인을 제작하고 있습니다.
              </p>
                              <div className="flex flex-wrap gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
                    <span className="text-blue-800 dark:text-blue-200 font-medium">5+ Years Experience</span>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full">
                    <span className="text-green-800 dark:text-green-200 font-medium">50+ Designs</span>
                  </div>
                  <div className="bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full">
                    <span className="text-purple-800 dark:text-purple-200 font-medium">Creative Mind</span>
                  </div>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">주요 관심사</h4>
                             <ul className="space-y-3">
                 <li className="flex items-center text-gray-600 dark:text-gray-300">
                   <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                   UI/UX 디자인 (웹 & 모바일)
                 </li>
                 <li className="flex items-center text-gray-600 dark:text-gray-300">
                   <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                   브랜드 아이덴티티 디자인
                 </li>
                 <li className="flex items-center text-gray-600 dark:text-gray-300">
                   <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                   그래픽 디자인 & 일러스트레이션
                 </li>
                 <li className="flex items-center text-gray-600 dark:text-gray-300">
                   <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                   사용자 리서치 & 프로토타이핑
                 </li>
               </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Skills & Tools</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Design Tools</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Figma</span>
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Adobe XD</span>
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Sketch</span>
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">InVision</span>
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Creative Suite</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Photoshop</span>
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Illustrator</span>
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">InDesign</span>
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">After Effects</span>
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Design Skills</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">UI Design</span>
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">UX Research</span>
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Prototyping</span>
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Brand Design</span>
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Featured Designs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <a href="/projects/mobile-banking" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-6xl">📱</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Mobile Banking App</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    사용자 친화적인 모바일 뱅킹 애플리케이션 UI/UX 디자인
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">Figma</span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">Prototyping</span>
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">User Research</span>
                  </div>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:underline">
                    View Details →
                  </div>
                </div>
              </div>
            </a>

            {/* Project 2 */}
            <a href="/projects/brand-identity" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-6xl">🎨</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Brand Identity Design</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    스타트업을 위한 브랜드 아이덴티티 및 로고 디자인
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">Illustrator</span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">Photoshop</span>
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">Brand Strategy</span>
                  </div>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:underline">
                    View Details →
                  </div>
                </div>
              </div>
            </a>

            {/* Project 3 */}
            <a href="/projects/ecommerce" className="group">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-6xl">🖥️</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">E-commerce Website</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    온라인 쇼핑몰을 위한 반응형 웹사이트 UI/UX 디자인
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">Figma</span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">Adobe XD</span>
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">Responsive Design</span>
                  </div>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:underline">
                    View Details →
                  </div>
                </div>
              </div>
            </a>
          </div>
          
          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <a href="/projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
              View All Projects
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Get In Touch</h2>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-12 rounded-xl shadow-lg">
                             <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                 새로운 디자인 프로젝트나 브랜딩 작업에 대해 이야기하고 싶으시다면 언제든 연락주세요!
               </p>
                             <div className="flex flex-row justify-center items-center gap-12">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                     <span className="text-blue-600 dark:text-blue-400 text-xl">📧</span>
                   </div>
                   <div className="flex flex-col">
                     <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                     <a href="mailto:hello@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                       ilrang0902@naver.com
                     </a>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                     <span className="text-green-600 dark:text-green-400 text-xl">🎨</span>
                   </div>
                   <div className="flex flex-col">
                     <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Behance</h3>
                     <a href="#" className="text-green-600 dark:text-green-400 hover:underline">
                       behance.net/ilrang0902
                     </a>
                   </div>
                 </div>
               </div>
              <div className="mt-8 text-center">
                <a href="mailto:hello@example.com" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
                  메시지 보내기
                </a>
              </div>
            </div>
          </div>
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
