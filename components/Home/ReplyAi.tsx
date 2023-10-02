import React from "react";
import FilledBtn from "../Shared/Buttons/FilledBtn";
import NextImage from "../Shared/Image/NextImage";
import SectionHeading from "../Shared/Typography/SectionHeading";
import SectionSubHeading from "../Shared/Typography/SectionSubHeading";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";

const ReplyAi = () => {
  return (
    <ComponentWrapper id="replyai" style="lg:py-16 py-10">
      <div className="w-full grid lg:grid-cols-2 lg:gap-6 gap-10">
        <div className="lg:w-[70%] w-full flex flex-col items-start justify-start gap-5">
          <SectionHeading text="Reply AI" />
          <SectionSubHeading text="Beat Competitors With AI-Generated Reviews" />
          <p className="text-sm text-black-off/80 font-normal">
            25% of people struggle with what to write in a review, while 42%
            don't have time to write one. Trustjoys AI-crafted review options
            make it easy for customers to provide quick feedback!
          </p>
          <div className="w-full flex flex-col items-start justify-start gap-4">
            <p className="text-base text-black-main/90 font-normal">
              Use an AI to help you reply to Google reviews faster
            </p>
            <p className="text-sm text-black-off/80 font-normal">
              No inspiration? Lack of time to reply to all customer reviews you
              receive on Google? No problem; this powerful tool reads the
              customer review and, with one click of a Write AI review’ button,
              will show you a customized reply message that you can approve and
              click reply. Let Trustjoy's AI technology generate personalized
              responses to reviews, saving you time and ensuring every review
              gets attention. Save tons of time with AI and make your reviewers
              happier by replying with reach messages on time.
            </p>
          </div>
        </div>
        <div className="w-full lg:h-full sm:h-[500px] h-[300px] flex items-center justify-end">
          <NextImage
            imageSrc="/Assets/ReplyAi.png"
            containerStyle="xl:w-[90%] w-full h-full"
          />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default ReplyAi;
