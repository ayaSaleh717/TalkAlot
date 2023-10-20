  import React, { useState, useEffect } from 'react'
  import './home.css'


  const Change = () => {
  const words = [
  ['естественная среда ','живой язык','контекст','лайфстайл'],
  ['контекст','лайфстайл','живой язык'],
  ['естественная среда ','живой язык','лайфстайл']
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWordIndex2, setCurrentWordIndex2] = useState(0);
  const [currentArray, setCurrentArray] = useState(words[currentWordIndex]);
  const [currentWord, setCurrentWord] = useState("");

  const displayWordsWithInterval = () => {
  let intervalld;
  const startInterval = () => {
    intervalld = setInterval(() => {
      setCurrentWordIndex2((currentWordIndex2) => (currentWordIndex2 + 1) % currentArray.length);
    }, 100);
  };

  const switchArray = () => {
  setCurrentWordIndex((currentWordIndex) => (currentWordIndex + 1) % words.length);
  setCurrentWordIndex2 (0) ;
  clearInterval (intervalld);
  setTimeout (startInterval, 2000);
  }
  startInterval();
  setInterval (switchArray, 4000);
}
  useEffect(() => {
  setCurrentWord(currentArray[currentWordIndex2]) ;
  }, [currentWordIndex2, currentArray]);

  useEffect(() => {
    setCurrentArray (words[ currentWordIndex]) ;
  }, [words, currentWordIndex]);


  useEffect(() => {
  displayWordsWithInterval();
  },[])

  return (
    <section className='Change'>
      <h1>TALK A LOT - это</h1>
        <h3 className='change-title'>{currentWord}</h3>
        <h6 className='title_'>и мы тебя этим обеспечим</h6>
        </section>

  )
  }
  export default Change