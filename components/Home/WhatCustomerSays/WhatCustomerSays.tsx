import React from "react";
import Marquee from "react-fast-marquee";
import CustomerCard from "./CustomerCard";
const WhatCustomerSays = () => {
  return (
    <section
      id="customers"
      className="w-full flex flex-col items-center  justify-start gap-10 lg:py-16 py-10"
    >
      <h2 className="text-black-main text-center text-[38px] leading-[50px] font-normal font-poppins">
        What our customers are saying
      </h2>
      <Marquee pauseOnHover>
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
      </Marquee>
    </section>
  );
};

export default WhatCustomerSays;
