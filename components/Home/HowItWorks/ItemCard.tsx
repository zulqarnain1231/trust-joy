import NextImage from "@/components/Shared/Image/NextImage";
import React from "react";

type Props = {
  image: string;
  title: string;
  detail: string;
};

const ItemCard: React.FC<Props> = ({ image, title, detail }: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 rounded-[20px] border-2 border-white-off px-5 py-7">
      <NextImage imageSrc={image} containerStyle="w-[220px] h-[235px]" />
      <p className="text-brand-main text-xl font-normal text-center">{title}</p>
      <p className="text-black-off/60 text-lg font-normal text-center font-dmSans">
        {detail}
      </p>
    </div>
  );
};

export default ItemCard;
