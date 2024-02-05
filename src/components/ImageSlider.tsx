import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SlideOne from '../assets/images/slider-badag.jpg';
import SlideTwo from '../assets/images/slider-badging.jpg';
import SlideThree from '../assets/images/slider-scale.jpg';
import SlideFour from '../assets/images/slider-scales.jpg';


function ImageSlider() {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
  };
  
  return (
      <div className=' px-[50px] border-2'>
          <Slider className='reactSlick' {...settings}>
        <div className=' border-2 bg-purple-400 p-[30px]'>
            <img src={SlideOne} className='w-[100%] h-[100%]' alt='slide-1'/>
        </div>
        <div>
            <img src={SlideTwo} className='w-[100%] h-[100%]' alt='slide-2'/>
        </div>
        <div>
            <img src={SlideThree} className='w-[100%] h-[100%]' alt='slide-3'/>
        </div>
        <div>
            <img src={SlideFour} className='w-[100%] h-[100%]' alt='slide-4'/>
        </div>
    </Slider>
    </div>
  )
}

export default ImageSlider