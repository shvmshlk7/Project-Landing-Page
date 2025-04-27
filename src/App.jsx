import './index.css'
import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection';
import { ContainerScroll } from './components/ui/container-scroll-animation';
import Team from './components/Team';
import Members from './components/Members';
import Card from './components/Card';
import Footer from './components/footer';


function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ContainerScroll/>
      <Team/>  
      <Members/> 
      <Card/>
      <Footer/>
      
      


    </div>
  );
}

export default App;
