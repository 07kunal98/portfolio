import Navbar from './components/Navbar';
import './App.css';
import LandingScreen from './components/LandingScreen';
import Work from './components/Work';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import SocialMedia from './components/SocialMedia';

function App() {
  return (
    <div className='scroll-smooth'>
      <Navbar/>
      <LandingScreen/>
      <Work/>
      <Skills/>
      <Projects/>
      <Contact/>
      <AboutMe/>
      <SocialMedia/>
      
    </div>
  );
}

export default App;
