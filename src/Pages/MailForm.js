import React from 'react';
import '../Style/MailForm.css';
import emailjs from '@emailjs/browser';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function MailForm() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const name = e.target.elements.name.value;
    const message = e.target.elements.message.value;
    const subject = e.target.elements.subject.value;
    var templateParams = {
      email,
      name,
      message,
      subject,
    };
    emailjs
      .send(
        'service_hkzvf12',
        'template_x8zjycq',
        templateParams,
        'VBnRiFm3j9Ehja2Xa'
      )
      .then(() => {
        // console.log('SUCCESS!', response.status, response.text);
        const send = document.getElementById('send');
        const formMain = document.getElementById('formMain');
        send.classList.remove('hide');
        formMain.classList.add('hide');
      })
      .catch((err) => {
        alert('Erreur veuillez renvoyer votre mail', err);
      });
  };
  return (
    <div className='mail-form'>
      <form onSubmit={handleSubmit}>
        <div className='head'>
          <CloseIcon
            onClick={() => {
              navigate(-1);
            }}
          />
          <h1>Contact </h1>
          <p>Merci de renseigner tous les champs</p>
        </div>
        <div className='form-main' id='formMain'>
          <label>Votre Nom:</label>
          <input type='text' placeholder='Nom' name='fullName' id='name' />
          <label>Votre Email:</label>
          <input
            type='email'
            placeholder='abcd@xyz.com'
            name='email'
            id='email'
            required
          />
          <label>Objet:</label>
          <input
            type='subject'
            placeholder="Offre d'emplois"
            name='text'
            id='subject'
            required
          />
          <label>Message:</label>
          <textarea
            placeholder='Votre Message'
            name='message'
            id='message'
            required
          ></textarea>
          <input type='submit' value='Send' />
        </div>
        <div className='send hide' id='send'>
          <h3>Message envoyé</h3>
          <CheckCircleIcon />
          <p>Merci pour votre email. Je vous recontacte au plus vite.</p>
        </div>
      </form>
    </div>
  );
}

export default MailForm;
