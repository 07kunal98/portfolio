import Navbar from './components/Navbar';
import './App.css';
import LandingScreen from './components/LandingScreen';
import Work from './components/Work';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <LandingScreen/>
      <Work/>
      <Skills/>
      <Projects/>
      <Contact/>
      
    </div>
  );
}

export default App;
