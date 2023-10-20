import React, { useState } from 'react'
import NavLink from 'react-router-dom'
import './Header.css'
import DarkMode from '../DarkMode/Dark'
import logo from './../Assist/logo.png'

function Header() {

    const [added,setAdded] = useState(false)
    
 const addActive =()=>{

 }

//  const darkMode = ()=>{
  
//  }


 const handleClick = () => {
  const clasStyle = document.getElementById('wrapper')
  clasStyle.style.display='inline'
  const btnStylee = document.getElementById('btn')
  btnStylee.style.display='none'
}

  return (
    <nav class=" header navbar navbar-expand-lg  navbar-dark bg-dark
    coutainer_head" data-aos="fade-right">
    <div class=" navbar-brand ">
    <a class=" navbar-brand logo" href="#"> АНГЛИЙСКИЙ</a>
     <h6  className='logoTitle'>с носителями</h6>
    </div>
     {/* <a class=" navbar-brand logo" href="#">АНГЛИЙСКИЙ</a>
     <spam>с носителями</spam> */}

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

        <div class="collapse navbar-collapse menue" id="navbarSupportedContent">
            
            <ul class="navbar-nav mr-auto">
            <li class="nav-item  ma">
                <a class="menu-a" href="#wrapper" onClick={handleClick}>Contact <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item ma">
                <a class="menu-a" href="#social">Social </a>
            </li>
            <li class="nav-item ma">
                <DarkMode />
            </li>
            {/* <li class="nav-item dropdown ma">
                <a class=" dropdown-toggle menu-a" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
                </div>
      </li> */}
      
    </ul>
    
  </div>
</nav>
   
  )
}

export default Header




//  <section className='section_con header'>
//     <div className='coutainer_head'>
//         <div className='logo navbar-brand'>
//             <span className='logo-h1'>ThisLogo </span>
//         </div>
        
//         <div className='menue navbar-nav mr-auto'>
//             <ul  class="navbar-nav mr-auto">
            
//                 <li class="nav-item active">
//                     <a className='menu-a btn' href='#'>  Home </a>
//                     </li>
//                <li class="nav-item">
//                     <a className='menu-a btn' href='#'>  About  </a>
//                     </li>
//                 <li class="nav-item">
//                     <a className='menu-a btn' href='#'>  Contact  </a>
//                     </li>
//                  <li class="nav-item">
//                     <a className='menu-a btn' href='#'>  Join Us </a>
//                     </li>
//                 </ul>
//         </div>
//     </div>
      
//     </section>