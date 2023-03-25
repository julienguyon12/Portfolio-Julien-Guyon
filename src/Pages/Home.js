import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../Style/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Julien Guyon</h2>
        <div className='prompt'>
          <p>
            Ingénieur ICAM en reconversion autodidacte dans le développement
            front-end.
          </p>
          <a
            href='https://github.com/julienguyon12'
            target='_blank'
            rel='noreferrer'
          >
            <GitHubIcon />
          </a>
          <a
            href='https://www.linkedin.com/in/julien-guyon-9079a0189'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon />
          </a>
          <Link to='/MailForm'>
            <EmailIcon />
          </Link>
        </div>
      </div>
      <div className='skills'>
        <h1>Compétence</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-end</h2>
            <span>
              ReactJS, Javascript, CSS, Sass, HTML, NPM, Git, MaterialUI,
              EmailJS, Ajax
            </span>
          </li>
          <li className='item'>
            <h2>Professionnelles</h2>
            <span>Management, Gestion de projet, Planning, Budget, Ventes</span>
          </li>
          <li className='item'>
            <h2>Langues</h2>
            <span>
              Francais (maternelle), Anglais (courant), Espagnol (avancé)
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
