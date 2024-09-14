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

const ImageSwiper = () =>{
    //coming as props
    var img_src=[
        "https://i.simpalsmedia.com/999.md/BoardImages/900x900/95c04d61675cf450b7dd55b1400abae3.jpg",
        "https://i.simpalsmedia.com/999.md/BoardImages/900x900/cef84f2b8b378fe7675465723afae6c6.jpg",
        "https://i.simpalsmedia.com/999.md/BoardImages/900x900/80532c24a7b7e600084798d894008c31.jpg",
        "https://i.simpalsmedia.com/999.md/BoardImages/900x900/90bce505e15b7ea4ad78d7e90ed250be.jpg"
    ]
    /*const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return(
        <div className={styles.wrapper}>
            <Slider {...settings}>
                {img_src.map((val, index)=>
                    <ImageItem src={val} index={index} key={index}/>
                )}
            </Slider>
        </div>
    )*/
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
            <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
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