import React from "react";
import NextImage from "../Shared/Image/NextImage";
import SectionHeading from "../Shared/Typography/SectionHeading";
import SectionSubHeading from "../Shared/Typography/SectionSubHeading";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import * as Icons from "@/constants/Svg/Icons";

const GoogleRichSnippets = () => {
  const features = [
    "Increase Google search visibility.",
    "Get a better position in the Google search",
    "Increase website traffic",
    "Climb up the search engine results",
  ];
  return (
    <ComponentWrapper id="googlerichsnippets" style="lg:py-16 py-10">
      <div className="w-full grid lg:grid-cols-2 lg:gap-6 gap-10">
        <div className="lg:w-[70%] w-full flex flex-col items-start justify-start gap-5">
          <SectionHeading text="Google Rich Snippets " />
          <SectionSubHeading
            text="Drive Google traffic with simple SEO snippets
"
          />
          <p className="text-sm text-black-off/80 font-normal">
            Add Star Ratings to Your Search Results 🤩
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
        <div className="w-full lg:h-full sm:h-[500px] h-[300px] flex items-center justify-end">
          <NextImage
            imageSrc="/Assets/GoogleRich.png"
            containerStyle="lg:w-[90%] w-full h-full"
          />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default GoogleRichSnippets;
