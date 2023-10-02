import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import NextImage from "../Shared/Image/NextImage";

const TrustedBy = () => {
  return (
    <ComponentWrapper id="trustedby" style="lg:py-16 py-10">
      <div className="w-full flex flex-col items-center justify-start gap-6">
        <h3 className="text-center text-brand-main text-2xl font-normal">
          Trusted by +10,000 users from +100 countries
        </h3>
        <div className="w-full flex md:flex-nowrap flex-wrap items-center justify-center gap-5">
          {[1, 2, 3, 4].map((item: any, index: number) => (
            <NextImage
              key={index}
              imageSrc="/Assets/Logo.png"
              containerStyle="h-[56px] w-[172px]"
            />
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default TrustedBy;
