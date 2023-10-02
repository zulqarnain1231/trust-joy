import React from "react";
import ComponentWrapper from "../../Shared/Wrappers/ComponentWrapper";
import SectionHeading from "../../Shared/Typography/SectionHeading";
import CustomAccordion from "./Accordion";
const Faqs = () => {
  return (
    <ComponentWrapper id="faqs" style="lg:py-16 py-10">
      <div className="w-full flex flex-col items-center justify-start gap-12">
        <SectionHeading text="FAQs about Google reviews" />
        <div className="lg:w-[80%] w-full mx-auto bg-[#F9FAFB] sm:p-6 p-4 rounded-[20px]">
          <CustomAccordion />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Faqs;
