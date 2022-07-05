import './Header.css';

function Header() {
   return (
      <nav className="nav">

         <div className="title">
            <h1>Pablo Prieto</h1>
            <h2>JavaScript Fullstack Developer</h2>
         </div>
         <ul className="contact">
            <li><span>phone :</span> +33619395038</li>
            <li><span>mail :</span> prietopablo88@gmail.com</li>
            <li><span>location :</span> Asnières-sur-Seine, 92600, France</li>
         </ul>
         <div className="portrait"></div>

      </nav>
   )
}

export default Header;