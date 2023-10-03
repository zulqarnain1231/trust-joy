import React from "react";
import Marquee from "react-fast-marquee";
import IndustryCard from "./IndustryCard";
const Industries = () => {
  const industries = [
    "Dental",
    "Real estate",
    "Home services",
    "Insurance",
    "Automotive",
    "Restaurants",
    "Personal services",
  ];
  return (
    <section
      id="customers"
      className="w-full flex flex-col items-center  justify-start gap-10 lg:py-16 py-10"
    >
      <h2 className="text-black-main text-center text-[38px] leading-[50px] font-normal font-poppins">
        Here are just a few of the industries we serve
      </h2>
      <Marquee direction="right" pauseOnHover>
        {industries.map((item: string, index: number) => (
          <IndustryCard key={index} name={item} />
        ))}
      </Marquee>
      <Marquee direction="left" pauseOnHover>
        {industries.map((item: string, index: number) => (
          <IndustryCard key={index} name={item} />
        ))}
      </Marquee>
    </section>
  );
};

export default Industries;
