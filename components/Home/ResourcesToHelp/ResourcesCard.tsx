import NextImage from "@/components/Shared/Image/NextImage";
import React from "react";

type Props = {
  title: string;
  image: string;
};

const ResourcesCard: React.FC<Props> = ({ title, image }: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-5">
      <NextImage imageSrc={image} containerStyle="w-full h-[270px]" />
      <p className="lg:text-left text-center sm:text-xl text-lg text-black-secondary font-normal font-poppins">
        {title}
      </p>
    </div>
  );
};

export default ResourcesCard;
