import './Presentation.css';

import { FaGithub, FaLinkedin, FaScroll, FaMailBulk } from "react-icons/fa"

function Presentation() {
  return (    
      <header className="presentation">
        <h1 className="presentation-title">Hi !</h1>
        <p className="presentation-text">I'm Pablo Prieto, a junior web developer. I imagine, build apps and interfaces for the web.</p>
        <ul className="presentation-links">
          <li>
            <a href="https://drive.google.com/file/d/1aL5UOL1MN167Q3-crwDdFCXZtfH7F421/view?usp=sharing"><FaScroll /> <span>curriculum vitae</span></a>
          </li>
          <li>
            <a href="mailto:prietopablo88@gmail.com"><FaMailBulk /> <span>prietopablo88@gmail.com</span></a>
          </li>
          <li>
          <a href="https://github.com/PrietoPablo"><FaGithub /> <span>Github</span></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/pablo-prieto-636a068a/"><FaLinkedin /> <span>LinkedIn</span></a>
          </li>
        </ul>
      </header>
    
  );
}

export default Presentation;