import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {

  return (
    <main className='flex flex-col items-center font-inter mx-6 text-2xl'>
      <div id='content' className='xl:w-[1360px]'>
        <Header />
        <Hero />
      </div>
    </main>
  )
}

export default App
