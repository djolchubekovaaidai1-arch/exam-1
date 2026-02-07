import About from "./components/About/About"
import BestSelling from "./components/BestSelling/BestSelling"
import Categories from "./components/Categories/Categories"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Testimonials from "./components/Testimonials/Testimonials"

function App() {


  return (
   <div>
    <Header/>
    <Hero/>
    <BestSelling/>
    <About/>
    <Categories/>
    <Testimonials/>
    <Footer/>
   </div>
  )
}

export default App
