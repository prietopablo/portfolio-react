import Projects from './Projects/Projects';
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
      </div>
   )
}

export default Main;