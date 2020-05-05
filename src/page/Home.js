import React from "react";
import Slider from "react-slick";
import slider1 from '../img/cgv-slider.jpg'
import slider2 from '../img/cgv-slider2.jpg'
import '../style/home.css'
export default function Home(props) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div >
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
<div class="slider-home">

        <Slider {...settings}>
          <div>
            <img src = {slider1} alt = "slider1" /> 
          </div>
          <div>
          <img src = {slider2} alt = "slider2" /> 
          </div>
         
         
        </Slider>
        </div>

      </div>
    );
  
}
