import Link from "next/link";

export default function BrandIdentityPage() {
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Header */}
        <section className="py-20">
          <div className="text-center mb-12">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center">
              <span className="text-4xl">🎨</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Brand Identity Design
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              스타트업을 위한 브랜드 아이덴티티 및 로고 디자인
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Illustrator</span>
              <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Photoshop</span>
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Brand Strategy</span>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Project Overview</h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">프로젝트 목표</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    기업의 핵심 가치를 반영한 브랜드 아이덴티티 구축
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    일관성 있고 기억에 남는 시각적 요소 개발
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    다양한 매체에서 활용 가능한 확장성 있는 디자인
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">주요 구성 요소</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    로고 디자인 (기본형, 수평형, 심볼형)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    컬러 팔레트 및 타이포그래피
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    브랜드 가이드라인 및 활용 예시
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Design Process</h2>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">1. Brand Research</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                클라이언트와의 심층 인터뷰를 통해 기업의 비전, 미션, 핵심 가치를 파악하고 경쟁사 분석을 진행했습니다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>핵심 발견사항:</strong> 기업의 혁신성과 신뢰성을 동시에 표현하는 것이 중요하다는 점이 확인되었습니다.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2. Concept Development</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                브랜드 리서치 결과를 바탕으로 여러 컨셉을 개발하고, 각각의 시각적 표현 방식을 탐구했습니다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>디자인 방향:</strong> 미니멀하면서도 강력한 임팩트를 주는 기하학적 형태를 중심으로 설계했습니다.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">3. Visual Identity Creation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Adobe Illustrator를 활용하여 로고와 브랜드 요소들을 제작하고, 다양한 크기와 배경에서의 활용성을 검증했습니다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>최종 결과:</strong> 확장성과 일관성을 모두 만족하는 브랜드 아이덴티티 시스템을 완성했습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Design */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Final Design</h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="text-center">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-green-500 to-blue-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-8xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">주요 디자인 특징</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 dark:text-blue-400 text-xl">🔤</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">타이포그래피</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">현대적이고 가독성 높은 폰트 선택</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 dark:text-green-400 text-xl">🎨</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">컬러 시스템</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">브랜드 가치를 반영한 컬러 팔레트</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 dark:text-purple-400 text-xl">📐</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">레이아웃</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">균형잡힌 비율과 공간 활용</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-20">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects/mobile-banking" className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center">
              ← Previous Project
            </Link>
            <Link href="/projects/ecommerce" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center">
              Next Project →
            </Link>
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