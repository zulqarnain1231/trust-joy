import React from "react";

type Props = {
  text: string;
  style?: string;
};

const OutlinedBtn: React.FC<Props> = ({
  text,
  style = "h-[45px] w-[104px] text-sm font-normal",
}: Props) => {
  return (
    <button
      className={`flex items-center justify-center rounded-[8px] border border-white-off text-black-main ${style} `}
    >
      {text}
    </button>
  );
};

export default OutlinedBtn;
