import React from 'react';
import './Social.css'

function SocialLinks() {
  return (
    <section className='container_social section'  >

    <div className="social-links" data-aos="fade-right"  id='social'>
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
        
     
   
    </div>
    
    </section>
  );
}

export default SocialLinks;