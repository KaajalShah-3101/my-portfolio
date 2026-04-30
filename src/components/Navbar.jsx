import { useState, useEffect } from 'react'

function Navbar() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-200"
      style={{
        padding: '2rem 4rem',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <a href="#hero" style={{ fontFamily: "'Urbanist', sans-serif", fontWeight: 700 }}
        className="text-white text-xl tracking-wide">
        Kaajal Shah
      </a>

      <div className="flex items-center gap-8">
        <a href="#about" className="text-white/70 hover:text-white transition-colors duration-300 text-sm tracking-widest uppercase">About</a>
        <a href="#projects" className="text-white/70 hover:text-white transition-colors duration-300 text-sm tracking-widest uppercase">Projects</a>
        <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-300 text-sm tracking-widest uppercase">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar