import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header.jsx'
import Exploremenu from '../../components/ExploreMenu/Exploremenu.jsx'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx'
import AppDownload from '../../components/AppDownload/AppDownload.jsx'

const Home = () => {
  const [category,setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <Exploremenu 
      category={category}
      setCategory={setCategory}
      />
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home
