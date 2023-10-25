import {useState} from 'react'
import './Connact.css'
import SocialLinks from './../FeedBack/SocialLinks';
import Btn from './../Btn/Btn'


function Connact() {

  const [name, setName] = useState("Your Name")
  const [number, setNumber] = useState("Your Number")
  const [email, setEmail] = useState("Your Email")
  const [num, setNum] = useState(0)
  const [message, setMessage] = useState("Your Message ")
  const [red, setRed] = useState(false)
  const [validEmail, setValidEmail] = useState(true)

  
 



  const handleClickwr1 = () => {
    if(num <3){ console.log(num)
      window.alert("Please Fill All The Fields")
     
    }else if (document.getElementsByClassName("email").pattern != "@gmail.com") {
     window.alert('unvalid email, please enter a valid email')
      setValidEmail (false);
    }
    else{
    const clasStyle = document.getElementById('wr2')
    clasStyle.style.display='inline'
    const nextStyle = document.getElementById('next_1')
    nextStyle.style.display='none'
    const restStyle = document.getElementById('rest_1')
    restStyle.style.display='none'
    setRed(true)
  }


  
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
    



   <form className='connact' method="POST" >
  <div class="wrapper" id='wrapper'>
  <h1>Join Us</h1>
    <div id="survey_options">
      <input type="text"
             name="survey_options[]" 
             class="survey_options" 
             size="50" 
             readOnly={red}
             placeholder={name}
             onChange={(e) =>{
                    setName(e.target.value) 
                  setNum(num + 1)
                    }}
                    required
                    />
      <input type="text"
             name="survey_options[]" 
             class="survey_options email" 
             size="50"
             readOnly={red}
             placeholder={email} 
             pattern=".+@gmail.com"
              onChange={(e) => {
                          setNumber(e.target.value)
                          setNum(num + 1)
              }}
              required
             />
             
      <input type="text"
             name="survey_options[]"
             class="survey_options"
             size="50"
             placeholder={number} 
             readOnly={red}
             onChange={(e) => {
                          setEmail(e.target.value)
                          setNum(num + 1)
                        
                        }}
                        required
             />
    </div>
    <div class="controls">
    <spam className='btn c-btn'
          onClick={handleClickwr1}
           id='next_1'>Next</spam>
      <button type="reset" className='btn c-btn'  id='rest_1'>Reset</button>
    </div>
  </div>

  <div class="wrapper wr2" id='wr2'>
  <h1><i class="fa-solid fa-arrow-right"></i></h1>
    <div id="survey_options">
    <textarea  type='text'
              name="survey_options[]"
               className='textarea survey_options'
                rows="5" cols="40"
                 placeholder={message}
                //  readOnly={red} 
                 ></textarea>   
             </div>
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
