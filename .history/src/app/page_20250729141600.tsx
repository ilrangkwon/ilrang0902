
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
        <section className="text-center py-32">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <span className="text-5xl font-bold text-white relative z-10 transform hover:scale-110 transition-transform duration-300">👨‍💻</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              안녕하세요! <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">디자이너</span>입니다
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              창의적이고 사용자 중심의 디자인을 만드는 것을 좋아합니다.
              아름다운 시각적 경험과 직관적인 인터페이스를 디자인하는 것에 열정을 가지고 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up">
              <a href="#projects" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative z-10">프로젝트 보기</span>
              </a>
              <a href="#contact" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
                <span className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="relative z-10">연락하기</span>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">디자이너로서의 경험</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                안녕하세요! 저는 사용자 경험과 시각적 디자인에 열정을 가진 디자이너입니다. 
                사용자의 니즈를 이해하고, 아름답고 기능적인 디자인을 만드는 것을 좋아합니다.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                Figma, Adobe Creative Suite, Sketch 등의 도구를 활용하여 
                현대적이고 직관적인 UI/UX 디자인을 제작하고 있습니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg">
                  <span className="font-medium">5+ Years Experience</span>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg">
                  <span className="font-medium">50+ Designs</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg">
                  <span className="font-medium">Creative Mind</span>
                </div>
              </div>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
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
        <section id="skills" className="py-32">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SKILLS AND TOOLS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Design Tools</h3>
                              <div className="space-y-3">
                  <div className="flex justify-between items-center group">
                    <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Figma</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" style={{width: '95%'}}></div>
                    </div>
                  </div>
                                  <div className="flex justify-between items-center group">
                    <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Adobe XD</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center group">
                    <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Sketch</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center group">
                    <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">InVision</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" style={{width: '80%'}}></div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Creative Suite</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center group">
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">Photoshop</span>
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">Illustrator</span>
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">InDesign</span>
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">After Effects</span>
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Design Skills</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center group">
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">UI Design</span>
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">UX Research</span>
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">Prototyping</span>
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center group">
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">Brand Design</span>
                  <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">프로젝트트</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <a href="/projects/mobile-banking" className="group">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-4 cursor-pointer border border-gray-200/50 dark:border-gray-700/50 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="text-6xl relative z-10 transform group-hover:rotate-12 transition-transform duration-300">📱</span>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Mobile Banking App</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    사용자 친화적인 모바일 뱅킹 애플리케이션 UI/UX 디자인
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm shadow-lg transform group-hover:scale-105 transition-transform duration-300">#Figma</span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm shadow-lg transform group-hover:scale-105 transition-transform duration-300">#Prototyping</span>
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm shadow-lg transform group-hover:scale-105 transition-transform duration-300">#User Research</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Project 2 */}
            <a href="/projects/brand-identity" className="group">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-4 cursor-pointer border border-gray-200/50 dark:border-gray-700/50 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="text-6xl relative z-10 transform group-hover:rotate-12 transition-transform duration-300">🎨</span>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Brand Identity Design</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    스타트업을 위한 브랜드 아이덴티티 및 로고 디자인
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm shadow-lg transform group-hover:scale-105 transition-transform duration-300">#Illustrator</span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm shadow-lg transform group-hover:scale-105 transition-transform duration-300">#Photoshop</span>
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm shadow-lg transform group-hover:scale-105 transition-transform duration-300">#Brand Strategy</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Project 3 */}
            <a href="/projects/ecommerce" className="group">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-4 cursor-pointer border border-gray-200/50 dark:border-gray-700/50 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="text-6xl relative z-10 transform group-hover:rotate-12 transition-transform duration-300">🖥️</span>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">E-commerce Website</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    온라인 쇼핑몰을 위한 반응형 웹사이트 UI/UX 디자인
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm shadow-lg transform group-hover:scale-105 transition-transform duration-300">#Figma</span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm shadow-lg transform group-hover:scale-105 transition-transform duration-300">#Adobe XD</span>
                    <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm shadow-lg transform group-hover:scale-105 transition-transform duration-300">#Responsive Design</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          
          {/* View All Projects Button */}
          <div className="text-center mt-16">
            <a href="/projects" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block">
              View All Projects
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Get In Touch</h2>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-12 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                             <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                 새로운 디자인 프로젝트나 브랜딩 작업에 대해 이야기하고 싶으시다면 언제든 연락주세요!
               </p>
                                           <div className="flex flex-row justify-center items-center gap-12">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Email</h3>
                    <a href="mailto:ilrang0902@naver.com" className="text-blue-600 dark:text-blue-400 hover:underline transform group-hover:scale-105 transition-transform duration-300">
                      ilrang0902@naver.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <span className="text-white text-xl">🎨</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Behance</h3>
                    <a href="https://behance.net/ilrang0902" target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 hover:underline transform group-hover:scale-105 transition-transform duration-300">
                      behance.net/ilrang0902
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <a href="mailto:hello@example.com" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block">
                  메시지 보내기
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2024 Designer Portfolio. Made with ❤️ using Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
