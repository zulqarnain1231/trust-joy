import React from "react";

type Props = {
  text: string;
  style?: string;
  event?: any;
};

const OutlinedBtn: React.FC<Props> = ({
  text,
  event = () => {},
  style = "h-[45px] sm:w-[104px] w-full text-sm font-normal",
}: Props) => {
  return (
    <button
      onClick={event}
      className={`flex items-center justify-center rounded-[8px] border border-white-off text-black-main ${style} `}
    >
      {text}
    </button>
  );
};

export default OutlinedBtn;
