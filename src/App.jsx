import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Treatments from './components/Treatments'

function App() {

  return (
    <div className='flex flex-col items-center font-inter text-sd-grey mx-6 text-2xl'>
      <div id='content' className='xl:w-[1360px]'>
        <Header />
        <main className='flex flex-col'>
          <Hero />
          <Treatments />
        </main>
      </div>
    </div>
  )
}

export default App
