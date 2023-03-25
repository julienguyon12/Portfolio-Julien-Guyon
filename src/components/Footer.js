import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../Style/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
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
      <p>&copy; 2023 Julien Guyon</p>
    </div>
  );
}

export default Footer;
