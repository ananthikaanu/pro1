import React, { useEffect } from 'react'
import "./Banner.css"
import axios from 'axios'
import {API_KEY} from './constant'

function Banner() {
  useEffect(() => {
       axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then(( response)=>{
         console.log(response)
       })
  },[])
  return (
    <div className='banner'>
        <div className='content'>
           <h1 className='title'>Movie Name </h1>
             <div className='banner-buttons'>
               <button className='button'> Play </button>
               <button className='button'> My List </button>
             </div>
             <h1 className='description'>A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history  to print billions of euros in the Royal Mint of Spain. </h1>
        </div>
        <div className='fade_bottom'></div>
    </div>
  )
}

export default Banner
