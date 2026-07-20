import { lazy, Suspense } from 'react'
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
  return (
    <div className="min-h-screen bg-transparent text-[var(--text)]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--surface-strong)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--text)]">
        Skip to content
      </a>
      <ScrollProgress />
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
    </div>
  )
}

export default App
