import React from "react";
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
    const settings = {
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
    )
}

export default ImageSwiper;