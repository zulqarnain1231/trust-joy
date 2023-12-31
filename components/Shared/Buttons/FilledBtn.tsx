"use client";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

type Props = {
  text: string;
  style?: string;
  bgColor?: string;
  event?: any;
  route?: string;
};

const FilledBtn: React.FC<Props> = ({
  text,
  event = () => {},
  route = "/",
  style = "h-[45px] sm:w-[240px] w-full text-sm font-normal",
  bgColor = "bg-brand-main",
}: Props) => {
  return (
    <Link
      href={route}
      onClick={event}
      className={`flex items-center justify-center gap-8 rounded-[8px] ${bgColor} ${
        bgColor == "bg-brand-main"
          ? "text-white-main hover:bg-brand-secondary/80 hover:duration-200"
          : "text-black-main"
      } ${style}`}
    >
      {text}
      <BsArrowRight
        className={`${
          bgColor == "bg-brand-main" ? "text-white-main" : "text-brand-main"
        } text-2xl`}
      />
    </Link>
  );
};

export default FilledBtn;
