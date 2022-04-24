import React from 'react'
import "./footer.css"
import twitter from"../../assets/icons/twitte.png"
import insta from"../../assets/icons/insta.png"
import link from"../../assets/icons/link.png"
import send from"../../assets/icons/send.png"
function Footer() {
  return (
 
    <div className='footer'>
        <div className='first'>
          <h1>About us</h1>
          
            <p>Let your fans become active supporters of your Creative work</p>
    
        <div className='social'>
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
            <img className='link' src={link} alt="" />

        </div>
        </div>
    
        <div className='contact'>
          <h1>Subscribe</h1>
          <form action="">
          
            <input className='email' type="email" placeholder='email' /> 
            <button className='sub'><img className='send' src={send} alt="" /></button>
            <div  className='copy'>
            <p>© 2022 Delyce</p>
            </div>
            
           
          </form>
        </div>
    </div>
    // 
  
    
  )
}

export default Footer