import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import * as Icons from "../../../constants/Svg/Icons";
import NextImage from "@/components/Shared/Image/NextImage";
import FilledBtn from "@/components/Shared/Buttons/FilledBtn";

const Hero = () => {
  return (
    <ComponentWrapper id="hero" style="w-full lg:mt-16 mt-10 pb-10">
      <div className="w-full h-full flex flex-col items-center justify-center gap-10">
        <div className="w-full flex flex-col items-center justify-start gap-3">
          <h1 className="text-brand-main text-center sm:text-5xl text-4xl font-normal">
            The most powerful way to collect reviews
          </h1>
          <h1 className="text-black-main text-center sm:text-5xl text-4xl font-normal">
            Get more reviews, win more customers
          </h1>
        </div>

        <div className="w-full flex sm:flex-nowrap flex-wrap items-center justify-center gap-6">
          {[
            "Get More Reviews, Faster",
            "No technical skills required",
            "Display on Your Website",
          ].map((item: string, index: number) => (
            <div key={index} className="flex items-center justify-start gap-2">
              <Icons.Verified fill="" stroke="" ClassName="h-[16px] w-[16px]" />
              <p className="text-sm text-black-off font-normal">{item}</p>
            </div>
          ))}
        </div>
        <div className="lg:w-[60%] w-full flex flex-col items-center justify-start gap-3">
          <NextImage
            imageSrc="/Assets/Hero/Reviews.png"
            containerStyle="h-[20px] w-[120px]"
          />
          <h2 className="text-xl text-black-off/80 text-center font-normal">
            Complete review tool that helps you collect, display, reply, share
            and utilize reviews in ways that bring you the best results!
          </h2>
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-3">
          <FilledBtn
            text="Get started for free!"
            style="h-[70px] sm:w-[270px] w-full text-base font-normal"
          />
          <p className="text-center text-black-off/80 text-xs font-normal">
            No creditcard required.{" "}
            <span className="text-brand-main cursor-pointer">See pricing</span>
          </p>
        </div>
        {/* laptop image here */}
        <div className="w-full grid xl:grid-cols-[130px,950px,130px] lg:grid-cols-[.7fr,3fr,.7fr] gap-10">
          <div className="w-full h-full flex flex-col items-center justify-start">
            <NextImage
              imageSrc="/Assets/Hero/GoogleReview.png"
              containerStyle="lg:w-full w-[200px] h-[120px]"
            />
          </div>
          <div className="w-full xl:h-[530px] sm:h-[400px] h-[250px]">
            <NextImage
              imageSrc="/Assets/Hero/Laptop.png"
              containerStyle="w-full h-full"
            />
          </div>
          <div className="w-full h-full flex flex-col items-center justify-end">
            <NextImage
              imageSrc="/Assets/Hero/GoogleReview.png"
              containerStyle="lg:w-full w-[200px] h-[120px]"
            />
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;
