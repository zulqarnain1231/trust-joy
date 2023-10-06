"use client";

import React from "react";
import CustomerCard from "./CustomerCard";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";

function CustomNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute top-[122px] -right-2 h-[36px] w-[36px] flex items-center justify-center rounded-full bg-white-main  text-black-main  border-[3px] border-solid border-white-off hover:border-r-brand-main hover:border-t-brand-main hover:border-b-brand-main"
      onClick={onClick}
    >
      <FiChevronRight className="text-2xl" />
    </button>
  );
}

function CustomPrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className="absolute top-[122px] -left-2 h-[36px] w-[36px] flex items-center justify-center rounded-full bg-white-main  text-black-main  border-[3px] border-solid border-white-off hover:border-l-brand-main hover:border-t-brand-main hover:border-b-brand-main z-10"
      onClick={onClick}
    >
      <FiChevronLeft className="text-2xl" />
    </button>
  );
}

const WhatCustomerSays = () => {
  const settings = {
    dots: false,
    infinite: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <ComponentWrapper id="customers" style="w-full lg:py-16 py-10">
      <div className="w-full flex flex-col items-center  justify-start md:gap-16 gap-12">
        <h2 className="text-black-main text-center text-[38px] leading-[50px] font-normal font-poppins">
          What our customers are saying
        </h2>
        <div className="w-full categories">
          <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6, 7].map((item: any, index: number) => (
              <CustomerCard key={index} />
            ))}{" "}
          </Slider>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default WhatCustomerSays;
