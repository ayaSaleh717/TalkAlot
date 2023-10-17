import React from 'react';
import './Social.css'
import Visit from './../Visitor-Count/Visit';

function SocialLinks() {
  return (
    <section className='container_social'>

    <footer className="social-links">
      <a href="https://www.facebook.com" className='a-social'>
         <i class="fa-brands fa-facebook  icon">
          <spam className='span'>Facebook</spam>
          </i>
         
      </a>
      <a href="https://www.istagram.com " className='a-social'>
        <i class="fa-brands fa-instagram icon"><spam className='span'>Twiter</spam></i></a>
      <a href="https://www.Telegram.com" className='a-social'>
         <i class="fa-brands fa-telegram icon"><spam className='span'>Telegram</spam></i></a>
         <a href="https://www.twiter.com" className='a-social'>
         <i class="fa-brands fa-twitter icon"><spam className='span'>Instagram</spam></i>
      </a>
         <Visit />

    </footer>
   
    </section>
  );
}

export default SocialLinks;