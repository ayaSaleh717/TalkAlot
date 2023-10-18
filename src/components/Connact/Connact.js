import React from 'react'
import './Connact.css'
import SocialLinks from './../FeedBack/SocialLinks';
import Btn from './../Btn/Btn'


function Connact() {


  // const handleClick = () => {
  //   const clasStyle = document.getElementById('wrapper')
  //   clasStyle.style.display='inline'
  
  // }
  const handleClickwr1 = () => {
    const clasStyle = document.getElementById('wr2')
    clasStyle.style.display='inline'

    const nextStyle = document.getElementById('next_1')
    nextStyle.style.display='none'
    const restStyle = document.getElementById('rest_1')
    restStyle.style.display='none'

  
  }
  const handleClickwr2 = () => {
    const clasStyle = document.getElementById('wr3')
    clasStyle.style.display='inline'
    const nextStyle = document.getElementById('next_2')
    nextStyle.style.display='none'
    const restStyle = document.getElementById('rest_2')
    restStyle.style.display='none'
  
  }

  return (
    <section section className='con section' data-aos="fade-right">
    {/* <SocialLinks /> */}
    
    
    
      <Btn />
    



   <form className='connact'>
  <div class="wrapper" id='wrapper'>
  <h1>Join Us</h1>
    <div id="survey_options">
      <input type="text" name="survey_options[]" class="survey_options" size="50" placeholder="Name"  />
      <input type="text" name="survey_options[]" class="survey_options" size="50" placeholder="Email" />
      <input type="text" name="survey_options[]" class="survey_options" size="50" placeholder="Number" />
    </div>
    <div class="controls">
    <spam className='btn c-btn' onClick={handleClickwr1} id='next_1'>Next</spam>
      <button type="reset" className='btn c-btn'  id='rest_1'>Reset</button>
    </div>
  </div>

  <div class="wrapper wr2" id='wr2'>
  <h1><i class="fa-solid fa-arrow-right"></i></h1>
    <div id="survey_options">
    <textarea name="survey_options[]" className='textarea survey_options' rows="5" cols="40" placeholder='Write your message' ></textarea>    </div>
    <div class="controls">
    
      <spam className='btn c-btn'  onClick={handleClickwr2} id='next_2'>Next</spam>
      <button type="reset" className='btn c-btn'  id='rest_2'>Reset</button>
    </div>
  </div>
  <div class="wrapper wr3" id='wr3'>
  <h1><i class="fa-solid fa-check"></i></h1>
    <div id="survey_options">
    <p className='submited'>Perfect</p>
    <p className='submited'>Now Submit </p>
    <p className='submited'>Thank You , We will call you soon</p>
    </div>
    <div class="controls">
    <button type='submit' className='btn c-btn'>Submit</button>
      <button type="reset" className='btn c-btn'>Reset</button>
     
    </div>
  </div>
</form>
  
</section>





      
   
  )
}

export default Connact
