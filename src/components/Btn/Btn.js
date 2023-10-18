import React from 'react'
import './Btn.css'

function Btn() {

const handleClick = () => {
  const clasStyle = document.getElementById('wrapper')
  clasStyle.style.display='inline'

  const btnStylee = document.getElementById('btn')
  btnStylee.style.display='none'


}
  return (
    <div className='button ' id='btn' >
    <button className='btn s-btn' onClick={handleClick} data-aos="fade-right">Join Us</button>
      
    </div>
  )
}

export default Btn
