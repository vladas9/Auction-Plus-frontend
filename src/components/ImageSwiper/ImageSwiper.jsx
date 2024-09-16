/*import React, {useState, useRef, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ImageSwiper.module.css"

const ImageItem = ({src, index, key}) =>{
  return(
    <div key={key} className={styles.slider__item} style={{backgroundImage:`url(${src})`}}>

    </div>

  )
}

const ImageSwiper = ({img_src}) =>{
  //coming as props
  console.log(img_src)
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="slider-container">
      <Slider 
        asNavFor={nav2} 
        ref={slider => (sliderRef1 = slider)}
        arrows={false}>
        {img_src.map((val, i)=>
          <ImageItem key={i} src={val}/>
        )}
      </Slider>
      <br/>
      <div>
        <Slider
          asNavFor={nav1}
          ref={slider => (sliderRef2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {img_src.map((val, i)=>
        
              <img key={i} src={val} alt="" />
        
          )}
        
        </Slider>
      </div>
    </div>
  );
}*/

import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ImageSwiper.module.css'; // Assuming you have your styles

// ImageItem component to display the larger image
const ImageItem = ({ src, key }) => {
  return (
    <div key={key} className={styles.slider__item} style={{ backgroundImage: `url(${src})` }}>
      {/* If you want to overlay any content on the image, you can do it here */}
      </div>
    );
  };
  
// Custom arrows for the thumbnail slider
const PrevArrow = ({ onClick }) => (
  <button className={styles.prevArrow} onClick={onClick}>
    &larr;
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className={styles.nextArrow} onClick={onClick}>
    &rarr;
  </button>
);

// Main ImageSwiper component
const ImageSwiper = ({ img_src }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  
  // Use refs to reference the two sliders
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  // Set the slider references on mount
  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  return (
    <div className={styles.sliderContainer}>
      {/* Main slider for large images */}
      <Slider
        asNavFor={nav2} // Navigation linked to thumbnails
        ref={sliderRef1} // Attach the reference
        arrows={false} // Disable default arrows (you can add custom ones if needed)
        slidesToShow={1}
        swipeToSlide={true}
      >
        {img_src.map((val, i) => (
          <ImageItem key={i} src={val} />
        ))}
      </Slider>

      <br />

      {/* Custom layout for the thumbnail slider with arrows */}
      <div className={styles.thumbnailContainer}>
        {/* Left arrow */}
        <PrevArrow onClick={() => sliderRef2.current.slickPrev()} />

        {/* Thumbnail slider */}
        <div className={styles.second_slider_container}>
          <Slider
            asNavFor={nav1} // Navigation linked to main slider
            ref={sliderRef2} // Attach the reference
            slidesToShow={3} // Show 3 thumbnails
            swipeToSlide={true} // Allow swiping
            focusOnSelect={true} // Focus on the selected thumbnail
            arrows={false} // Disable default arrows
          >
            {img_src.map((val, i) => (
              <div key={i} className={styles.thumbnailWrapper}>
                <img src={val} alt={`Thumbnail ${i}`} className={styles.thumbnailImage} />
              </div>
            ))}
          </Slider>
        </div>

        {/* Right arrow */}
        <NextArrow onClick={() => sliderRef2.current.slickNext()} />
      </div>
    </div>
  );
};

export default ImageSwiper;
  