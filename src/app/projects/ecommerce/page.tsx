import Link from "next/link";

export default function EcommercePage() {
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
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
              <span className="text-4xl">🖥️</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              E-commerce Website
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              온라인 쇼핑몰을 위한 반응형 웹사이트 UI/UX 디자인
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Figma</span>
              <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Adobe XD</span>
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Responsive Design</span>
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
                    사용자 친화적인 쇼핑 경험 제공
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    모든 디바이스에서 최적화된 반응형 디자인
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    구매 전환율을 높이는 UI/UX 설계
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">주요 기능</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    상품 검색 및 필터링 시스템
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    장바구니 및 결제 프로세스
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    사용자 계정 및 주문 관리
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">1. User Research & Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                타겟 사용자 그룹을 정의하고, 기존 쇼핑몰의 사용자 여정을 분석하여 개선점을 도출했습니다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>주요 발견사항:</strong> 사용자들은 빠른 상품 검색과 간편한 결제 과정을 가장 중요하게 생각한다는 점이 확인되었습니다.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2. Information Architecture</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                사이트맵과 사용자 플로우를 설계하여 직관적인 네비게이션 구조를 구축했습니다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>디자인 원칙:</strong> 3클릭 이내에 원하는 상품을 찾을 수 있도록 카테고리 구조를 최적화했습니다.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">3. Responsive Design</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                모바일 퍼스트 접근법으로 디자인을 시작하여 모든 화면 크기에서 최적의 사용자 경험을 제공하도록 설계했습니다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>기술적 고려사항:</strong> 터치 인터페이스와 데스크톱 마우스 인터페이스를 모두 고려한 상호작용 디자인을 적용했습니다.
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
              <div className="w-80 h-48 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-6xl">🖥️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">주요 디자인 특징</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 dark:text-blue-400 text-xl">📱</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">반응형 레이아웃</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">모든 디바이스에서 최적화된 화면</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 dark:text-green-400 text-xl">🔍</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">직관적 검색</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">빠르고 정확한 상품 검색</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 dark:text-purple-400 text-xl">💳</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">간편 결제</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">원클릭 결제 및 다양한 결제 수단</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-20">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects/brand-identity" className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center">
              ← Previous Project
            </Link>
            <Link href="/projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center">
              Back to Projects
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