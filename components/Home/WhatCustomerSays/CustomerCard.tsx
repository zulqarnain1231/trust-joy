import React from "react";
import NextImage from "@/components/Shared/Image/NextImage";
import { FcGoogle } from "react-icons/fc";

const CustomerCard = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 rounded-[10px] bg-[#E6E7FF] px-5 py-12 font-poppins cursor-pointer">
      <NextImage
        imageSrc="/Assets/Hero/Reviews.png"
        containerStyle="h-[16px] w-[100px]"
      />
      <FcGoogle className="text-2xl" />

      <p className="text-center text-base text-black-main font-normal">
        Lorem Ipsum is simply dummy text of the printing
      </p>
      <p className="text-center text-base text-black-main font-semibold">
        Luke Jhons
      </p>
      <NextImage
        imageSrc="/Assets/User.jpg"
        imageStyle="object-cover rounded-full pointer-events-none"
        containerStyle="h-[44px] w-[44px] rounded-full"
      />
    </div>
  );
};

export default CustomerCard;
