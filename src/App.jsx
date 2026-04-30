import Grainient from './components/Grainient'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-black min-h-screen text-white">

      <Navbar />

      {/* HERO */}
      <section id="hero" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Grainient className="absolute inset-0" />
        </div>
        
        {/* Split layout */}
        <div className="relative z-10 w-full flex items-center" 
          style={{ padding: '0 6rem', gap: '4rem' }}>
          
          {/* Left — fixed width */}
          <div className="flex flex-col gap-4" style={{ width: '45%' }}>
            <p className="text-white/50 text-sm tracking-widest uppercase">digital portfolio</p>
            <h1 className="font-black leading-none" style={{ fontFamily: "'Urbanist', sans-serif", fontSize: 'clamp(4rem, 8vw, 7rem)' }}>
              Kaajal<br />Shah
            </h1>
            <p className="text-white/60 text-lg mt-2">let's build something.</p>
          </div>

          {/* Right — fixed width */}
          <div style={{ width: '45%' }} className="flex justify-center">
            <div className="w-64 h-72 shrink-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center">
              <p className="text-white/20 text-sm">Image coming soon</p>
            </div>
          </div>

        </div>

        {/* Bottom fade to black */}
        <div className="absolute bottom-0 left-0 right-0 h-32 z-10" 
          style={{ background: 'linear-gradient(to bottom, transparent, #000000)' }} />
      </section>

      <About />
      <Projects />
      <Contact />

    </div>
  )
}

export default App