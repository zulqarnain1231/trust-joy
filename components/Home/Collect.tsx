import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import SectionHeading from "../Shared/Typography/SectionHeading";
import SectionSubHeading from "../Shared/Typography/SectionSubHeading";
import * as Icons from "../../constants/Svg/Icons";
import FilledBtn from "../Shared/Buttons/FilledBtn";
import NextImage from "../Shared/Image/NextImage";
const Collect = () => {
  return (
    <ComponentWrapper id="collect" style="lg:py-16 py-10">
      <div className="w-full grid lg:grid-cols-2 lg:gap-6 gap-10">
        <div className="lg:w-[70%] w-full flex flex-col items-start justify-start gap-5">
          <SectionHeading text="Collect" />
          <SectionSubHeading text="Collect hundreds of new reviews with only one tap" />
          <p className="text-sm text-black-off/80 font-normal">
            Trustjoy Review Collector Card works with NFC technology. After the
            purchase, you can direct your customers with a single tap to your
            Google Business Profile, so they can easily leave a review on their
            phone.
          </p>
          <div className="w-full flex flex-col items-start justify-start gap-2">
            <div className="w-full flex items-center justify-start gap-2">
              <Icons.Verified
                fill=""
                stroke=""
                ClassName="h-[16px] w-[16px] flex-shrink-0"
              />
              <p className="text-black-main text-base font-normal">
                Collecting Google reviews with Trustjoy is fast and easy.
              </p>
            </div>
            <p className="text-sm text-black-off/80 font-normal">
              Connect your Google account connect with your Google business
              location
            </p>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-2">
            <div className="w-full flex items-center justify-start gap-2">
              <Icons.Verified
                fill=""
                stroke=""
                ClassName="h-[16px] w-[16px] flex-shrink-0"
              />
              <p className="text-black-main text-base font-normal">
                Collect reviews and video testimonials.
              </p>
            </div>
            <p className="text-sm text-black-off/80 font-normal">
              Using our automated process, optimized for conversions.
            </p>
          </div>
          <FilledBtn
            text="I want one, too"
            style="sm:w-[330px] w-full h-[45px] text-sm font-normal"
          />
        </div>
        <div className="w-full lg:h-full sm:h-[500px] h-[300px] flex items-center justify-end">
          <NextImage
            imageSrc="/Assets/Mobile.png"
            containerStyle="lg:w-[90%] w-full h-full"
          />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Collect;
