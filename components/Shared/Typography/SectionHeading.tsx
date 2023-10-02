import React from "react";

type Props = {
  text: string;
};
const SectionHeading: React.FC<Props> = ({ text }: Props) => {
  return (
    <h2 className="text-brand-main text-left font-normal font-caveat sm:text-5xl text-4xl">
      {text}
    </h2>
  );
};

export default SectionHeading;
