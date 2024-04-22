import React from 'react'
import { assets } from '../assert/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
     <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt=''/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid expedita necessitatibus reiciendis, tempora id voluptates a eum magni 
                   voluptatem repellendus, aspernatur rem qui fugiat delectus iste pariatur! Soluta, quos voluptas!</p>       
           <div className='footer-socials-icons'>
              <img src={assets.facebook_icon} alt=''/>
              <img src={assets.twitter_icon} alt=''/>
              <img src={assets.linkedin_icon} alt=''/>
           </div>
        </div>

            <div className='footer-content-center'>
                <h2>Company</h2>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </div>

         <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>+91-8382828383</ul>
            <ul>contact@tomato.com</ul>
         </div>
     </div>
     <hr style={{width:'100%'}} />
     <p className='footer-copyright'>Copyright-All Right Reserved Copyright-All Right Reserved.</p>
    </div>
  )
}

export default Footer