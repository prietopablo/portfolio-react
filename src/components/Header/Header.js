import './Header.css';

function Header() {
   return (
      <nav className="nav">
         <div className="nav-title">
            <h1>Pablo Prieto</h1>
         </div>
         <ul className="nav-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">Timeline</a></li>
         </ul>
         <ul className="nav-links icons">
            <li><a href="#">Github</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">mail</a></li>
         </ul>
      </nav>
   )
}

export default Header;