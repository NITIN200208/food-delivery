import React from 'react'
import './AppDownloader.css'
import { assets } from '../../assert/assets'


const AppDownloader = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For BetterExperience download<br/>Tomato App</p>
        <div className='app-download-platfrom'>
            <img src={assets.play_store} alt=''/>
            <img src={assets.app_store} alt=''/>
            
        </div>
    </div>
  )
}

export default AppDownloader