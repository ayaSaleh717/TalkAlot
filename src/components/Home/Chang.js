import React, { Component } from 'react';
import './home.css';

const textArray = ['естественная среда ','живой язык','контекст','лайфстайл'
    ];

class Chang extends Component {
  constructor() {
    super();
    this.state = { 
      textIdx: 0 , 
      changeing: true};
  }
 


  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 }); 
    }, 500);
    this.state.changeing= !this.state.changeing;
   
     
  }

  











  componentDidUnmount() {
    clearInterval(this.timeout);
    // clearInterval(this.timeo);      setInterval(  this.timeout ='new tex' ,1000);    
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];
   
       return (
      <section className='Change'>
      <h1>TALK A LOT - это</h1>
        <h3 className='change-title'>{textThatChanges}</h3>
        <h6 className='title_'>и мы тебя этим обеспечим</h6>

        
      </section>
    )
  }
}

export default Chang;