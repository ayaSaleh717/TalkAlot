import React from 'react'
import './home.css'
import Chang from './Chang'
import Video from './../video/Video'
import About from '../About/About'
import ChangeText  from '../../components/ChangeText/ChangeText'
import Ch_Text from '../ChangeText/Ch_Text'
import Change from './Change'

function Home() {
  return (
    <section className='section_con home section' data-aos="fade-right" >
            <div className='changing-text'>
            <div className='change-text'>
                <Change />
                </div>
                <div className='Why'>
                     <h1>«почему мы? </h1>  
                      <p>мы выводим на речь на первом уроке
                        берем с 0
                        вся грамматика в понятных схемах
                        сразу применяется в речи»
                        <Ch_Text />
                        </p>
                        

                        {/* <ChangeText /> */}
                        </div> 
                                
        </div>

        
           
           
      
    </section>
  )
}

export default Home
