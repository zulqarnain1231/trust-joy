import React from "react";
import FilledBtn from "../Shared/Buttons/FilledBtn";
import NextImage from "../Shared/Image/NextImage";
import SectionHeading from "../Shared/Typography/SectionHeading";
import SectionSubHeading from "../Shared/Typography/SectionSubHeading";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import * as Icons from "../../constants/Svg/Icons";
import { BsArrowRight } from "react-icons/bs";

const Display = () => {
  const features = [
    "Official API integrations",
    "Create unlimited reviews widgets that load fast on your website.",
    "Sync all reviews in a single click and create a live widget",
    "Google rich reviews widget",
  ];
  return (
    <ComponentWrapper id="display" style="lg:py-16 py-10">
      <div className="w-full grid lg:grid-cols-2 lg:gap-6 gap-10">
        <div className="w-full lg:h-full sm:h-[500px] h-[300px] flex items-center justify-start">
          <NextImage
            imageSrc="/Assets/Display.png"
            containerStyle="lg:w-[90%] w-full h-full"
          />
        </div>
        <div className="lg:w-[70%] w-full flex flex-col items-start justify-start gap-5">
          <SectionHeading text="Display" />
          <SectionSubHeading text="Choose from a wide range of widgets for your website." />
          <p className="text-sm text-black-off/80 font-normal">
            Customize the Google review widget for your website, you will only
            need to copy the provided JavaScript code or use iframe code to
            embed it in the HTML code of your website. The widget will appear
            immediately on your website.
          </p>
          <div className="w-full flex flex-col items-start justify-start gap-2">
            {features.map((item: string, index: number) => (
              <div
                key={index}
                className="w-full flex items-center justify-start gap-2"
              >
                <Icons.Verified
                  fill=""
                  stroke=""
                  ClassName="h-[16px] w-[16px] flex-shrink-0"
                />
                <p className="text-black-main text-sm font-normal">{item}</p>
              </div>
            ))}
          </div>

          <button
            className={`h-[45px] sm:w-[220px] w-full flex items-center justify-center gap-6 rounded-[8px] border border-white-off text-black-main text-sm font-normal `}
          >
            See all examples
            <BsArrowRight className="text-brand-main text-xl" />
          </button>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Display;
