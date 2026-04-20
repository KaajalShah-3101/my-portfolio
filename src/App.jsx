import Grainient from './components/Grainient'

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <Grainient className="absolute inset-0 z-0" />

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center px-8">
          <h1 className="text-6xl font-bold mb-4">Kaajal Shah</h1>
          <p className="text-xl text-white/60">Designer · Developer · Creator</p>
        </div>
      </div>
    </div>
  )
}

export default App