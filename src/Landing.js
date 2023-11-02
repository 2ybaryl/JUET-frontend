import Navbar from './components/Common/Navbar'
import Footer from './components/Common/Footer'
import About from './components/Landing-Page/About'
import Alumini from './components/Landing-Page/Alumini'
import LatestEvents from './components/Landing-Page/LatestEvents'
import News from './components/Landing-Page/News'
import Marketing from './components/Landing-Page/Marketing'
import Programs from './components/Landing-Page/Programs'
import './App.css';
function LandingPage() {
    return (
      <div className="LandingPage">
        
        <Navbar />
        {/* <Footer/> */}
        <About/>
        <Marketing/>
        <Programs/>
        <LatestEvents/>
        <News/>
        {/* <Alumini/> */}
        <Footer/>
    
      </div>
    );
  }
  
  export default LandingPage;