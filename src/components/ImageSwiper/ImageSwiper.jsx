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
    <span className="material-symbols-outlined">
      arrow_back
    </span>
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className={styles.nextArrow} onClick={onClick}>
    <span className="material-symbols-outlined">
      arrow_forward
    </span>
  </button>
);

// Main ImageSwiper component
const ImageSwiper = ({ img_src }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  img_src.length > 1 ? img_src : img_src[1] = img_src[0]; // Just to handle case when there is only one photo

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
        arrows={false} 
        slidesToShow={1}
        swipeToSlide={true}
      >
        {img_src.map((val, i) => (
          <ImageItem key={i} src={val} />
        ))}
      </Slider>

      

      {/* Custom layout for the thumbnail slider with arrows */}
      <div className={styles.thumbnailContainer}>
        <PrevArrow onClick={() => sliderRef2.current.slickPrev()} />

        <div className={styles.second_slider_container}>
          <Slider
            asNavFor={nav1} 
            ref={sliderRef2}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={false}
          >
            {img_src.map((val, i) => (
              <div key={i} className={styles.thumbnailWrapper}>
                <img src={val} alt={`Thumbnail ${i}`} className={styles.thumbnailImage} />
              </div>
            ))}
          </Slider>
        </div>

        <NextArrow onClick={() => sliderRef2.current.slickNext()} />
      </div>
    </div>
  );
};

export default ImageSwiper;
  