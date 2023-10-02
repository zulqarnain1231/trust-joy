import NextImage from "@/components/Shared/Image/NextImage";
import SectionHeading from "@/components/Shared/Typography/SectionHeading";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import ItemCard from "./ItemCard";

const HowItWorks = () => {
  const works = [
    {
      title: "Collect Reviews",
      image: "/Assets/HowWorks/CollectReviews.png",
      detail:
        " Collect reviews from your happy customers with Trustjoy NFC Card",
    },
    {
      title: "Reply Reviews",
      image: "/Assets/HowWorks/ReplyReviews.png",
      detail: " Use Trustjoy AI to help you reply to Google reviews faster",
    },
    {
      title: "Share Reviews",
      image: "/Assets/HowWorks/ShareReviews.png",
      detail: " Share reviews on social media with just a few clicks",
    },
  ];
  return (
    <ComponentWrapper id="howitworks" style="lg:py-16 py-10">
      <div className="w-full flex flex-col items-center justify-start gap-5">
        <SectionHeading text="How it works" />
        <p className="text-black-off/70 text-xl text-center font-normal font-dmSans">
          Trustjoy is an all-in-one solution for your review marketing process.
        </p>
        <div className="w-full grid lg:grid-cols-3 gap-8">
          {works.map((item: any, index: number) => (
            <ItemCard
              key={index}
              title={item.title}
              image={item.image}
              detail={item.detail}
            />
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default HowItWorks;
