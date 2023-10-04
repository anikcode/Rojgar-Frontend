import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import MS from "../images/microsoft-logo.png";
import FB from "../images/facebook-logo.png";
import SW from "../images/swiggy-logo.png";
import ZT from "../images/zomato-logo.png";
import WM from "../images/walmart-logo.png";
import GL from "../images/google-logo.png";
import AP from "../images/apple-logo.png";
import AZ from "../images/amazon-logo.png";
import SC from "../images/sharechat-logo.png";
import FK from "../images/flipkart-logo.png";
import ED from "../images/expedia-logo.jpeg";
import TT from "../images/twitter-logo.png";
import TCS from "../images/tcs-logo.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function SwiperDrawer() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img
              src={AP}
              style={{ maxWidth: "100px", height: "100px", margin: "10px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={MS}
              style={{ maxWidth: "100px", height: "100px", margin: "10px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={FB}
            style={{ maxWidth: "100px", height: "100px", margin: "10px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={SW}
              style={{ maxWidth: "100px", height: "100px", margin: "10px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={ZT}
              style={{ maxWidth: "100px", height: "100px", margin: "10px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={WM}
              style={{ maxWidth: "100px", height: "100px", margin: "10px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={GL}
              style={{ maxWidth: "100px", height: "100px", margin: "10px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={AZ}
              style={{ maxWidth: "100px", height: "100px", margin: "10px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={SC}
              style={{ maxWidth: "100px", height: "100px", margin: "10px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={FK}
              style={{ maxWidth: "100px", height: "100px", margin: "10px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={ED}
              style={{ maxWidth: "100px", height: "100px", margin: "10px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={TT}
              style={{ maxWidth: "100px", height: "100px", margin: "10px" }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src={TCS}
              style={{ maxWidth: "100px", height: "100px", margin: "10px" }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
