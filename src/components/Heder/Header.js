import React, { useState } from 'react'
import NavLink from 'react-router-dom'
import './Header.css'

function Header() {

    const [added,setAdded] = useState(false)
    
 const addActive =()=>{

 }

  return (
    <nav class=" header navbar navbar-expand-lg  navbar-dark bg-dark
    coutainer_head">
     <a class=" navbar-brand logo" href="#">Logo</a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

        <div class="collapse navbar-collapse menue" id="navbarSupportedContent">
            
            <ul class="navbar-nav mr-auto">
            <li class="nav-item  ma">
                <a class="menu-a" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item ma">
                <a class="menu-a" href="#">Link</a>
            </li>
            <li class="nav-item dropdown ma">
                <a class=" dropdown-toggle menu-a" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
                </div>
      </li>
      
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