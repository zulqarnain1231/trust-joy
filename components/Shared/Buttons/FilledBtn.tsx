import React from "react";
import { BsArrowRight } from "react-icons/bs";

type Props = {
  text: string;
  style?: string;
};

const FilledBtn: React.FC<Props> = ({
  text,
  style = "h-[45px] w-[240px] text-sm font-normal",
}: Props) => {
  return (
    <button
      className={`flex items-center justify-center gap-8 rounded-[8px] bg-brand-main text-white-main ${style}`}
    >
      {text} <BsArrowRight className="text-white-main text-2xl" />
    </button>
  );
};

export default FilledBtn;
