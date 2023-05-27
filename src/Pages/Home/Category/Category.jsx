import React from 'react';
import "swiper/css/pagination";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"
import img5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Category = () => {
    return (
       <section>
         <SectionTitle
            subHeading={"From 11.00am to 10.00pm"}
            heading={"Order Online"}
            ></SectionTitle>
         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-16"
      >
        <SwiperSlide>
            <img src={img1}alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img2}alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Pizza</h3>

        </SwiperSlide>
        <SwiperSlide>
        <img src={img3}alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Soup</h3>

        </SwiperSlide>
        <SwiperSlide> 
            <img src={img4}alt="" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>desserts</h3>

        </SwiperSlide>
        <SwiperSlide>
        <img src={img5}alt="" />
        <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salad</h3>

        </SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
       </section>
    );
};

export default Category;