import React from "react";

type Props = {
  name: string;
};
const IndustryCard: React.FC<Props> = ({ name }: Props) => {
  return (
    <div className="h-[120px] w-[365px] flex items-center justify-start gap-5 bg-[#E6E7FF] rounded-[800px] px-5 mx-4 cursor-pointer">
      <span className="h-[91px] w-[94px] bg-white-main rounded-full"></span>
      <p className="text-base text-black-off/80 font-normal font-poppins">
        {name}
      </p>
    </div>
  );
};

export default IndustryCard;
