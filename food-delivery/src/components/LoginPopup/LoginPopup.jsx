import React, { useState } from 'react'
import './LoginPop.css'
import { assets } from '../../assert/assets'

const LoginPopup = (setShowLogin) => {

    const[currState,setCurrState]=useState("Login")

  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className='login-popup-title'>
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=''/>
            </div>
                <div className='login-popup-inputs'>
                {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required/>}
                    <input type="email" placeholder='Your Email' required/>
                    <input type='password' placeholder='Your Password' required/>
                </div>
                <button>{currState==="Sign up"?"Create account":"Login"}</button>
                <div className='login-popup-condition'>
                    <input type='checkbox' required/>
                    <p>I agree to the the term and condition</p>
                </div>
                {currState==="Login"?<p>Create a New Account? <span onClick={()=>setCurrState("Sign up")}>Click here</span></p>
                :<p>Aleady have account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>}
        </form>
    </div>
  )
}

export default LoginPopup