import React from 'react';
import './Social.css'

function SocialLinks() {
  return (
    <section className='container_social'>
    <footer className="social-links">
      <a href="https://www.facebook.com" className='a-social'>
         <i class="fa-brands fa-facebook"></i>
      </a>
      <a href="https://www.istagram.com" className='a-social'>
        <i class="fa-brands fa-instagram"></i></a>
      <a href="https://www.Telegram.com" className='a-social'>
         <i class="fa-brands fa-telegram"></i></a>
         <a href="https://www.twiter.com" className='a-social'>
         <i class="fa-brands fa-twitter"></i>
      </a>
     
    </footer>
    </section>
  );
}

export default SocialLinks;