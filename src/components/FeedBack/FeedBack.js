import {useState,useEffect} from 'react'
import image2 from './../Assist/p2.png'
import image3 from './../Assist/p3.png'
import image1 from './../Assist/p1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



import './feed.css'


const data = [
  {
    id:1, 
    image:[image1],
    title:"Alexander Kuznetsov ",
    subtitle:"Мне очень нравиться! Отличные и интересные преподователи! С каждым занятием, вижу как растут знания! "
  },
  {
    id:2, 
    image:[image3],
    title:"Maria Morozova 6  ",
    subtitle:"Please share your experience: how to cancel the test and move on to a new level of reality? "
  },
  {
    id:3, 
    image:[image2],
    title:"Natalya Fomina",
    subtitle:"Really great school!!! Excellent teachers and interesting system! Thank you very much!!! "
  },
  

]




function FeedBack() {


  // const [counter, setCounter] = useState(1);
  // const [loading, setLoading] = useState(true);
  // const [image, setImage] = useState( [3] );

  // function handelImage(){
  //   setCounter((counter + 1) % 5)
  //   setImage(imges[counter])
  // }

  // setInterval(handelImage,3000)
 
  return (
    <div className='feed'>
    <h2 className='client'>Clients & Reviews </h2>
    <Swiper 
     modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
     
    > 
    <div className='feedback'>
    
      
          {data.map(({id,image,title,subtitle}) => {
            return(
              <SwiperSlide key={id} className='feedback_container'>
               <div className='comment'>
                <img src={image}></img>
                <h4>{title}</h4>
                 </div>
          
          <p className='par'>{subtitle} </p>
          </SwiperSlide>
            )
          })}

      </div>
    </Swiper>
    <i className="fa-solid fa-arrow-right arrow" ></i> 
    {/* <span className='see_more'>See More</span> */}
    </div>
  
  )
}

export default FeedBack 



