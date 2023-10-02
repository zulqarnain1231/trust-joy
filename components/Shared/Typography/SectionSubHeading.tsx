import React from "react";

type Props = {
  text: string;
};

const SectionSubHeading: React.FC<Props> = ({ text }: Props) => {
  return (
    <h3 className="text-black-main sm:text-4xl text-3xl font-normal">{text}</h3>
  );
};

export default SectionSubHeading;
