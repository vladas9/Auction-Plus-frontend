import React, {useState, useRef, useEffect} from "react";
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
      <h4>First Slider</h4>
      <Slider 
        asNavFor={nav2} 
        ref={slider => (sliderRef1 = slider)}
        arrows={false}>
        {img_src.map((val, i)=>
          <ImageItem key={i} src={val}/>
        )}
      </Slider>
      <h4>Second Slider</h4>
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
  );
}

export default ImageSwiper;