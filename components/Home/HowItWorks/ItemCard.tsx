import NextImage from "@/components/Shared/Image/NextImage";
import React from "react";

type Props = {
  image: string;
  title: string;
  detail: string;
};

const ItemCard: React.FC<Props> = ({ image, title, detail }: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 rounded-[20px] border-2 border-white-secondary px-5 py-7 shadow-sm">
      <NextImage imageSrc={image} containerStyle="w-[130px] h-[140px]" />
      <p className="text-brand-main text-xl font-normal text-center">{title}</p>
      <p className="text-black-off/60 text-lg font-normal text-center font-dmSans">
        {detail}
      </p>
    </div>
  );
};

export default ItemCard;
