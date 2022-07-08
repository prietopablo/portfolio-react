import './Projects.css';

function Projects() {
  return (
    <div className="main-section projects">
      <h3 className="title">projects</h3>
      <div className="content">
         
        <h2 className="project-title">microscope web</h2>
        <h3 className="project-role">Role :  Product owner / Back-end lead developer</h3>

        <ul className="project-technologies">
          <li>Node.js (express)</li>
          <li>PostgresQL</li>
          <li>React</li>
          <li>Axios</li>
          <li>Redux</li>
        </ul>
        

        <p className="project-text">In a team of 4 students from my accelerated training at O’Clock, I developed a web adaptation of Microscope. It’s a game/book meant to create amazing stories in a collaborative way. That’s my first serious project !</p>

        <h4>Purpose</h4>

        <p className="project-text">This project has multiple objectives. I wanted to present an app idea that will fully exploit the stack we learned during our training (We worked a lot on the SQL Database). I wished to work on challenging problems with no premade solutions (I do love problem solving). I wanted to use Socket.io (set aside for our v1).</p>

        <h4>Timeline</h4>

        <h5>Sprint 0, Design phase, 6 days</h5>

        <ul className="design">
          <li>wireframes</li>
          <li>user stories</li>
          <li>ER model</li>
          <li>app structure</li>
          <li>Minimal Viable Product elaboration</li>
        </ul>

        <p className="project-text">In hindsight, we didn’t estimate properly the needed time to develop the MVP app. It was too ambitious for a first project, I would say. But we are now developing a more satisfying version without the former deadline. The v2 will be done at the end of august.</p>

        <h5>Sprint 1, Data, integration & connexion, 7 days</h5>

        <ul className="development">
          <li>Initial setup of the PosgresQL database (working with sqitch)</li>
          <li>Express server with basic routes, controllers and datamapper</li>
          <li>Use of JWT</li>
          <li>app structure</li>
          <li>Server deployment on Heroku</li>
          <li>React app creation</li>
          <li>Redux setup </li>
          <li>Semantic Ui</li>
          <li>Basic routes</li>
          <li>Axios request for login and account registration</li>
          <li>Login middleware</li>
        </ul>

        <p className="project-text">This sprint was meant to develop the app foundations and having functional user accounts, with basic authentication. A significant time was dedicated to create a significatice dialogue between the client and the server.</p>

        <h5>Sprint 2, 7 days - Algorithms & game representation and Sprint 3, Troubleshooting, fixes & public presentation, 7 days</h5>

        <ul className="development">
          <li>Sqitch versionings</li>
          <li>Problem solving to integrate game mechanics in controllers</li>
          <li>Further middlewares implementation to segment access with JWT</li>
          <li>JSON response structure for front request, game, user, …</li>

          <li>Submit forms conception for game element creation in the DOM</li>
          <li>Middleware implementation</li>
          <li>Adding game element implementation</li>
          <li>Lobby and game board creation</li>

          <li>Bug fixes</li>
        </ul>
        
        <a>Live presentation</a>

        <p className="project-text"> As of now (01/07/22), the app can be considered a prototype. But I wanted to celebrate our work anyway with this small v1. Of course we are working on a fuller better release !</p>
      </div>
    </div>
  );
}

export default Projects;