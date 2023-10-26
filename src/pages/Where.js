import React from 'react'
import Hero from '../components/Hero'
import BannerImg from "../assests/Images/Rectangle 354.png"
import ImgBanner from "../assests/Images/Rectangle 120.png"
import TextComponent from '../components/TextComponent'
import ImageComponent from '../components/ImageComponent'
import Fivecards from '../components/Fivecards'
import Footer from '../components/Footer'
import Navbar2 from '../components/Navbar2'


function Where() {
  return (
    <div>

    <Navbar2 />

      <Hero 
        name="hero"
        banner={BannerImg}
        heroText="where-banner-text"
        />


        <TextComponent 
          name="Second-content"
          title="Where We Are"
          paragraph="Therefore call nothing your own, but let everything be yours in common. Food and clothing shall be distributed to 
          each of you by your superior, not equally to all, for all do not enjoy equal health, but rather according to each one’s
           need. For so you read in the Acts of the Apostles that “they had all things in common, and each was given what 
          he needed” 
          (Acts 4:32, 35)."
        />


        <ImageComponent 
        
        name="Img-div"
        Imgbanner={ImgBanner}

        />

        <TextComponent 
          name="Fourth-content"
          title="The Order is in 50 Different Countries!"
          paragraph="Lorem ipsum dolor sit amet. Sed saepe quibusdam aut aliquam delectus ex reprehenderit nesciun
          t id quos omnis aut fugiat praese  Est libero minus ut reprehenderit voluptatum At suscipit rerum. 
          Ut corporis doloremque qui voluptas nemo ut ratione itaque aut numquam quam!"
        />

      <Fivecards />

        

      <Footer />



    </div>
  )
}

export default Where