import './Projects.css';

function Projects() {
  return (
    <div className="main-section projects">
      <h3>projects</h3>
      <div className="content">
         <ul className="date">
          <li>début</li>
          <li>fin</li>
         </ul>
         <div className="details">
          <div className="details-title"><h4 className="company">company</h4><span className="location">location</span></div>
          <ul className="details-points">
            <li>point point point point point point</li>
            <li>point point point point point point </li>
            <li>point point point point point point </li>
          </ul>
         </div>
      </div>
    </div>
  );
}

export default Projects;