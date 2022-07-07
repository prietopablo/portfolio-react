import Projects from './Projects/Projects';
import Experiences from './Experiences/Experiences';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import Presentation from './Presentation/Presentation';
import About from './About/About';

import './Main.css';

function Main() {
   return (
      <div className="main">
         <Presentation />
         <About />          
         <Skills />
         <Projects />
         {/*<Education />
         <Experiences /> */}
      </div>
   )
}

export default Main;