import React from 'react'
import '../style/ImageComponent.css'


function ImageComponent(props) {
  return (
    <>
     <div className={props.name}>
        <img src={props.Imgbanner} alt='ImageBanner' />
    </div>
    </>
   
  )
}

export default ImageComponent