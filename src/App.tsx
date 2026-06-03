import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Services from './components/Services'
// import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <main className="container-max mx-auto px-4 py-12 sm:px-6 md:px-10 lg:px-12">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        {/* <Resume /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
