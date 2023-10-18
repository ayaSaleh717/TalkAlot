import React,{useState} from 'react'
import './dark.css'



const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(true)
  const body = document.querySelector('body')
  const toggle = document.getElementsByClassName('.toggle')


  function togl(){
    body.classList.toggle("light")
    setDarkMode(!darkMode)

  }

    
  return (
    <div className='dark-mode '>
    <a className='toggle menu-a' onClick={togl}> {darkMode ?" Light mode" : "Dark Mode" }</a> 
    </div>
  )
}

export default DarkMode
