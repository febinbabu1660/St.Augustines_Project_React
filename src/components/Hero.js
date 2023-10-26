import React from 'react'
import '../style/Hero.css';





function Hero(props) {
  return (
    <>
    
    
    <div className={props.name}>

      <img src={props.banner} alt='BannerImg' />
      
      
    </div>
    <div className={props.heroText}>
    <h1>{props.heading}</h1>
       <p>{props.paragraph}</p>
       <button>
        {props.btn_name}
       </button>
    </div>
    </>
    
   
  )
}

export default Hero