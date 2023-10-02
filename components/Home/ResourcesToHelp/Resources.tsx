import NextImage from "@/components/Shared/Image/NextImage";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import ResourcesCard from "./ResourcesCard";

const Resources = () => {
  const resources = [
    {
      image: "/Assets/Resources/Pic1.png",
      title:
        "How to Reply to Good Reviews + 3 Positive Review Response Examples",
    },
    {
      image: "/Assets/Resources/Pic2.png",
      title: "How to Get Google Reviews for Your Business: 3 Proven Strategies",
    },
    {
      image: "/Assets/Resources/Pic3.png",
      title: "Social Proof: What It Is & How to Use It For Marketing",
    },
  ];
  return (
    <ComponentWrapper id="resources" style="lg:py-16 py-10">
      <div className="w-full flex flex-col items-center justify-start sm:gap-16 gap-10">
        <h2 className="text-black-main text-center text-[38px] leading-[50px] font-normal font-poppins">
          Resources to help improve your online reputation
        </h2>
        <p className="text-black-off text-center lg:w-[60%] w-full text-lg font-normal">
          Learn various ways to leverage your online reviews to turn your
          customers into raving fans and help your business stand out from the
          competition.
        </p>
        <div className="w-full grid lg:grid-cols-3 lg:gap-8 gap-10">
          {resources.map((item: any, index: number) => (
            <ResourcesCard key={index} title={item.title} image={item.image} />
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Resources;
