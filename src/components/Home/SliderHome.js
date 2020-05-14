import React from 'react'
import Slider from 'react-slick'
import slider1 from '../../img/cgv-slider.jpg';
import slider2 from '../../img/cgv-slider2.jpg';

export default function SliderHome() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
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
    )
}
