import React, { Component } from 'react';
// import './Home.css';

const textArray = ['  АНГЛИЙСКИЙ ЭТОсреда- стиль жизни ',
    '  и мы за это отвечаем'];

class Chang extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 2000);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    return (
      <section className='Change'>
        <h1>{textThatChanges}</h1>
        
      </section>
    )
  }
}

export default Chang;