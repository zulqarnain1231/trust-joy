import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import { BsArrowRight } from "react-icons/bs";
import FilledBtn from "../Shared/Buttons/FilledBtn";

const BookCall = () => {
  return (
    <ComponentWrapper id="bookcall" style="lg:py-16 py-10">
      <div className="w-full flex items-center justify-center">
        <div className="lg:w-[80%] w-full flex flex-col items-center justify-center gap-6 bg-brand-main mx-auto rounded-[12px] md:pb-10 py-10 md:pt-16 px-5">
          <h2 className="lg:w-[80%] w-full text-white-main sm:text-4xl text-3xl text-center font-normal">
            Book a free call with one of our experts and get more customers from
            your Google Review
          </h2>
          <FilledBtn text="Book a free call" bgColor="bg-white-main" />

          <p className="text-white-off text-center sm:text-lg text-base font-normal">
            No sales, no risks, no commitments – only benefits.
          </p>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default BookCall;
