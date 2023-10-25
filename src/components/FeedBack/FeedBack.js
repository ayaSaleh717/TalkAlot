import {useState,useEffect} from 'react'
import image1 from './../Assist/1.png'
import image2 from './../Assist/2.png'
import image3 from './../Assist/3.png'
import image4 from './../Assist/4.png'

import './feed.css'

function FeedBack() {

  const imges = [
    image1,
    image2,
    image3,
    image4
  ]

  const [counter, setCounter] = useState(1);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState( imges[3] );

  function handelImage(){
    setCounter((counter + 1) % 5)
    setImage(imges[counter])
  }

  // setInterval(handelImage,3000)
 
  return (
   <section className='feedback'>
    <div className='feedback-container'>
      <img className='feedback_img' src={image} alt='comment' />
      <i className="fa-solid fa-arrow-right arrow" onClick={handelImage}></i>
    </div>
   </section>
  )
}

export default FeedBack