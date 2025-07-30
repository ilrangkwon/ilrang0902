import Link from "next/link";

export default function MobileBankingPage() {
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
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-4xl">📱</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Mobile Banking App
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              사용자 친화적인 모바일 뱅킹 애플리케이션 UI/UX 디자인
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Figma</span>
              <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Prototyping</span>
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">User Research</span>
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
                    직관적이고 사용하기 쉬운 뱅킹 인터페이스 설계
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    보안성을 고려한 사용자 인증 프로세스
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    모든 연령대의 사용자가 쉽게 사용할 수 있는 접근성
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">주요 기능</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    계좌 잔액 조회 및 거래 내역
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    간편 송금 및 자동이체 설정
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    생체인증 및 보안 알림
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">1. User Research</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                다양한 연령대의 사용자들을 대상으로 인터뷰를 진행하여 뱅킹 앱 사용 시 겪는 어려움과 니즈를 파악했습니다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>주요 발견사항:</strong> 사용자들은 복잡한 메뉴 구조보다는 자주 사용하는 기능에 빠르게 접근할 수 있는 것을 원한다는 점이 확인되었습니다.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2. Wireframing</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                사용자 리서치 결과를 바탕으로 핵심 기능들을 중심으로 한 와이어프레임을 제작했습니다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>디자인 원칙:</strong> 3클릭 이내에 원하는 기능에 도달할 수 있도록 메뉴 구조를 단순화했습니다.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">3. Prototyping</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Figma를 활용하여 인터랙티브한 프로토타입을 제작하고 사용자 테스트를 진행했습니다.
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>개선사항:</strong> 사용자 테스트를 통해 홈 화면의 정보 배치와 네비게이션 구조를 최적화했습니다.
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
              <div className="w-64 h-96 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6">
                <span className="text-6xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">주요 디자인 특징</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 dark:text-blue-400 text-xl">🎯</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">직관적 네비게이션</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">하단 탭 바를 통한 빠른 기능 접근</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-600 dark:text-green-400 text-xl">🔒</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">보안 중심 설계</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">생체인증과 보안 알림 시스템</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 dark:text-purple-400 text-xl">📊</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">데이터 시각화</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">차트와 그래프를 통한 정보 전달</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-20">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects" className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center">
              ← Back to Projects
            </Link>
            <Link href="/projects/brand-identity" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center">
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