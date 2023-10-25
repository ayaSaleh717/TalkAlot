import React, { Component } from 'react'
import video from './../Assist/video1.mp4'
import './video.css'
import Btn from '../Btn/Btn';
import Connact from '../Connact/Connact';

class Video extends Component {
  render() {
    return (
      <div className="video-container section" data-aos="fade-right">
            <video width="750" height="400" controls className='video' >
                <source src={video} type="video/mp4"/>
          </video>
          {/* <Connact /> */}
          {/* <Btn /> */}
        
      </div>
    );
  }   
}

export default Video