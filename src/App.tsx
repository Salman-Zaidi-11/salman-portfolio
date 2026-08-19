import { lazy, Suspense, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import ScrollProgress from './components/ScrollProgress'

const Projects = lazy(() => import('./components/Projects'))
const Process = lazy(() => import('./components/Process'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const whatsappNumber = '923353023102'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Salman, I came across your portfolio and would like to connect.')}`

  return (
    <div className="min-h-screen bg-transparent text-[var(--text)]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--surface-strong)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--text)]">
        Skip to content
      </a>
      <ScrollProgress onVisibilityChange={setShowBackToTop} />
      <Navbar />
      <main id="main-content" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
        <Suspense fallback={null}>
          <Process />
        </Suspense>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </main>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className={`fixed ${showBackToTop ? 'bottom-24' : 'bottom-6'} right-6 z-[90] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#25D366]/85 text-white shadow-[0_12px_30px_-12px_rgba(37,211,102,0.9)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.04] hover:bg-[#25D366] hover:shadow-[0_18px_38px_-12px_rgba(37,211,102,0.95)] active:scale-95`}
      >
        <svg viewBox="0 0 32 32" aria-hidden="true" className="h-6 w-6 fill-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
          <path d="M16.02 4C9.6 4 4.4 9.11 4.4 15.46c0 2.16.59 4.24 1.7 6.08L4 28l6.78-1.98c1.77 1.04 3.8 1.58 5.96 1.58 6.42 0 11.62-5.11 11.62-11.46S22.44 4 16.02 4zm0 20.91c-1.87 0-3.67-.5-5.23-1.45l-.38-.22-4.02 1.17 1.12-3.9-.25-.4A9.15 9.15 0 0 1 6.7 15.46c0-5.05 4.19-9.14 9.32-9.14 5.13 0 9.32 4.09 9.32 9.14 0 5.05-4.19 9.15-9.32 9.15zm5.16-6.83c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.24-1.36-.83-.73-1.39-1.63-1.55-1.9-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.46-.84-2.01-.22-.54-.45-.47-.61-.48l-.52-.01c-.18 0-.48.07-.73.34-.25.28-.96.94-.96 2.28 0 1.34.98 2.64 1.12 2.82.14.18 1.93 2.96 4.7 4.14.66.28 1.18.45 1.58.58.66.21 1.27.18 1.75.11.53-.08 1.64-.67 1.87-1.31.23-.64.23-1.18.16-1.3-.07-.12-.25-.2-.54-.35z"/>
        </svg>
      </a>
    </div>
  )
}

export default App
