import Projects from './Projects/Projects';
import Experiences from './Experiences/Experiences';
import Education from './Education/Education';
import Skills from './Skills/Skills';


import './Main.css';

function Main() {
   return (
      <div className="main">
         <Projects />
         <Skills />
         <Education />
         <Experiences />
      </div>
   )
}

export default Main;