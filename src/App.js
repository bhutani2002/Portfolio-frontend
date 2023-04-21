// import { Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navba from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
// import ProjectCard from './components/Project/ProjectCard';
import Project from './components/Project/Projects';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import { Newsletter } from './components/NewsLetterSub/NewsLetterSub';
import Goto from './components/GoTo/Goto';
import Footer from './components/Footer/Footer';
import ToolTip from './components/ToolTip/ToolTip';
import Scrollmain from './components/Scroll/Scrollmain';
import Events from './components/Events/Events';
import { ToastContainer } from 'react-toastify';
// import ParticleBack from './components/Particles/ParticleBack';
// import Scrollbars from 'react-custom-scrollbars';


function App() {
  return (
    <div className="App">
      {/* <Scrollbars style = {{width: "100%", height: "100%"}}> */}
      {/* <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/"></Route>
        </Routes>
      </Router> */}
      <Navba/>
      <Banner/>
      <Skills/>
      {/* <ProjectCard/>
      <ProjectCard/> */}
      <Project/>
      {/* <Skills/> */}
      <Events/>
      <Experience/>
      <Newsletter/>
      <Contact/>
      <Footer/>
      <Goto/>
      {/* <ParticleBack/> */}
      {/* <ToolTip/> */}
      {/* </Scrollbars> */}
      {/* <Scrollmain/> */}
      <ToastContainer/>
    </div>
  );
}

export default App;
