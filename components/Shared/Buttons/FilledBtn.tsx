import React from "react";
import { BsArrowRight } from "react-icons/bs";

type Props = {
  text: string;
  style?: string;
  bgColor?: string;
};

const FilledBtn: React.FC<Props> = ({
  text,
  style = "h-[45px] w-[240px] text-sm font-normal",
  bgColor = "bg-brand-main",
}: Props) => {
  return (
    <button
      className={`flex items-center justify-center gap-8 rounded-[8px] ${bgColor} ${
        bgColor == "bg-brand-main" ? "text-white-main" : "text-black-main"
      } ${style}`}
    >
      {text}
      <BsArrowRight
        className={`${
          bgColor == "bg-brand-main" ? "text-white-main" : "text-brand-main"
        } text-2xl`}
      />
    </button>
  );
};

export default FilledBtn;
