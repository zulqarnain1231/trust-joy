import React from "react";
import NextImage from "../Shared/Image/NextImage";
import SectionHeading from "../Shared/Typography/SectionHeading";
import SectionSubHeading from "../Shared/Typography/SectionSubHeading";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import * as Icons from "@/constants/Svg/Icons";

const Share = () => {
  const features = [
    "Creating relevant social media content doesn’t get easier than this!",
    "Generate lots of content in a small amount of time.",
    "Share on different social media platforms",
    "Sharing reviews is easier than ever",
  ];
  return (
    <ComponentWrapper id="share" style="lg:py-16 py-10">
      <div className="w-full grid lg:grid-cols-2 lg:gap-6 gap-10">
        <div className="w-full lg:h-full sm:h-[500px] h-[300px] flex items-center justify-start">
          <NextImage
            imageSrc="/Assets/Share.png"
            containerStyle="lg:w-[80%] w-full h-full"
          />
        </div>
        <div className="lg:w-[70%] w-full flex flex-col items-start justify-start gap-5">
          <SectionHeading text="Share" />
          <SectionSubHeading text="Share Reviews on Social Media" />
          <p className="text-sm text-black-off/80 font-normal">
            Share the best reviews on social media, generate posts that drive up
            to 3x more engagement than a text review, and see which customer
            reviews have driven the most business for you.
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
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Share;
