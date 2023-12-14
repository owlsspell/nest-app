import Swiper from './components/Swiper'
import './App.css'
import Navbar from './components/Navbar'
import AddSection from './components/AddSection'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Navbar />
      <div className='bg-gradient-to-b from-primary from-70% to-base-100 h-[calc(100vh-125px)] grid grid-cols-1 md:grid-cols-3 grid-rows-1 p-10'>
        <div className='col-span-1 md:col-span-2 my-auto md:p-10' >
          <Swiper />
        </div>
        <div className='col-span-1 my-auto p-5 mr-5'>
          <h1 className='text-2xl text-right md:text-6xl	'>Book store</h1>
          <p className='text-xl text-right mt-3'>Magic book app</p>
        </div>
      </div>
      <AddSection />
      <Footer />
    </>
  )
}

export default App
