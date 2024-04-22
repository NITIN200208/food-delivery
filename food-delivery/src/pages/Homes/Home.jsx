import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/ExploreMenu/Exploremenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownloader from '../../components/AppDownloader/AppDownloader'

const Home = () => {
const[category,setcategory]=useState("All");

  return (
    <div>
        <Header/>
        <Exploremenu category={category} setcategory={setcategory}/>
        <FoodDisplay category={category}/>
        <AppDownloader/>
    </div>
  )
}

export default Home