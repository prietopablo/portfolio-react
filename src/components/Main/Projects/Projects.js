import './Projects.css';

function Projects() {
  return (
    <div className="main-section projects">
      <h3 className="title">projects</h3>
      <div className="content">
         
        <p>Role :  Product owner / Back-end lead developer

        Node.js (express) / PostgresQL / React / Axios / Redux

        In a team of 4 students from my accelerated training at O’Clock, I developed a web adaptation of Microscope. It’s a game/book meant to create amazing stories in a collaborative way. That’s my first serious project !

        Purpose

        This project has multiple objectives. I wanted to present an app idea that will fully exploit the stack we learned during our training (We worked a lot on the SQL Database). I wished to work on challenging problems with no premade solutions (I do love problem solving). I wanted to use Socket.io (set aside for our v1).

        Timeline

        02/06/2022  - 08/06/2022 - Sprint 0, Design phase

        wireframe, user stories, ER model, app structure and Minimal Viable Product elaboration.

        In hindsight, we didn’t estimate properly the needed time to develop the MVP app. It was too ambitious for a first project, I would say. But we are now developing a more satisfying version without the former deadline. The v2 will be done at the end of august.

        09/06/2022 - 16/06/2022 - Sprint 1

        Initial setup of the PosgresQL database (working with sqitch)
        Express server with basic routes, controllers and datamapper
        Use of JWT
        Server deployment on Heroku

        React app creation
        Redux setup 
        Semantic Ui
        Basic routes 
        Axios request for login and account registration
        Login middleware

        This sprint was meant to develop the app foundations and having functional user accounts, with basic authentication. A significant time was dedicated to create a significatice dialogue between the client and the server.

        16/06/2022 - 22/06/2022 - Sprint 2 and 23/06/2022 - 1/07/2022 - sprint 3

        Sqitch versioning
        Problem solving to integrate game mechanics in controllers
        Further middlewares implementation to segment access with JWT
        JSON response structure for front request, game, user, …

        Submit forms conception for game element creation in the DOM
        Middleware implementation
        Adding game element implementation
        Lobby and game board creation

        Bug fixes

        presentation—->
        La promotion Blob Blue présente ses projets de fin de formation !

        As of now (01/07/22), the app can be considered a prototype. But I wanted to celebrate our work anyway with this small v1. Of course we are working on a fuller better release !
        </p>


      </div>
    </div>
  );
}

export default Projects;