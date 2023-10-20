import React, { useState, useEffect } from 'react'
import './home.css'

const Change = () => {
  const words = [
  ["естественная среда", "живой язык", "контекст","лайфстайл" ],
  ["живой язык","естественная среда",  "контекст","лайфстайл" ],
  ["контекст","естественная среда", "живой язык", "лайфстайл" ]
  ];
  // const words = [
    // ["First1", 'First2', "First3"],
    // ["Second1", "Second2", "Second3"],
    // ["Third1", "Third2", "Third3"]
  // ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWordIndex2, setCurrentWordIndex2] = useState(0);
  const [currentArray, setCurrentArray] = useState(words[currentWordIndex]);
  const [currentWord, setCurrentWord] = useState(words[currentWordIndex][currentWordIndex2]);


useEffect(() => {
    const displayWordsWithInterval = () => {
      let intervalld;

      const startInterval = () => {
      intervalld = setInterval(() => {
          setCurrentWordIndex2((currentWordIndex2) => (currentWordIndex2 + 1) % currentArray.length);
          setCurrentWord(currentArray[currentWordIndex2]);
      }, 100);
    };

const switchArray = () => {
    setCurrentWordIndex((currentWordIndex) => (currentWordIndex + 1) % words.length);
    setCurrentArray (words[currentWordIndex]);
    setCurrentWordIndex2(0);
    setCurrentWord(words[currentWordIndex][0]);
    clearInterval(intervalld);
    setTimeout(startInterval, 2000);
};

startInterval();
setInterval(switchArray, 4000);
    };
displayWordsWithInterval();


}, [currentArray, currentWordIndex, currentWordIndex2, words]);






return (
  <section className='Change'>
  {/* <h1 >TALK A LOT - это</h1> */}
          <h1 className='change-title'>{currentWord}</h1>
          {/* <h1 className='title_'>и мы тебя этим обеспечим</h1> */}
    
  </section>



     
);
};
export default Change 