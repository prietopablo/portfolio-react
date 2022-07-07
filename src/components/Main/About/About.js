import './About.css';

function About() {
  return (
    <div className="main-section about">
      <h3 className="title">About</h3>
      <div className="content">
         <p>
            Je suis un développeur web issu d'une reconversion professionnelle. Je m'épanouis pleinement depuis que j'ai débuté cette transition. J'ai vraiment une passion pour cette activité et je suis dans la réalisation d'un portfolio pour le montrer !
          </p>
          <p>
            J'ai suivi une formation intensive de développeur JavaScript Full stack avec O'clock avec une spécialité Data & API. J'ai un socle de compétences web tel que :
            HTML5/CSS3, JavaScript, Node.js, Mise en place de serveur Express, base de données PostgresQL, Modèle Conceptuel de Données.
          </p>
          <p>
            Je suis à la recherche d'un environnement de travail qui permettra de consolider mes nouvelles compétences. J'aimerais donc un contrat en présentiel où les interactions sont fertiles. Mais je ne suis pas fermé au télétravail partiel cela dit.
          </p>
      </div>
    </div>
  );
}

export default About;