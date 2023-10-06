"use client";
import React, { useState } from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import OutlinedBtn from "../Shared/Buttons/OutlinedBtn";
import Link from "next/link";

const Example = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `<iframe id=   "Trustjoy-widget-7-Google"  title=   "Trustjoy-widget-7-Google"`
    );
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <ComponentWrapper id="example" style="lg:py-16 py-10">
      <div className="w-full flex items-center justify-center">
        <div className="xl:w-[60%] lg:w-[70%] w-full flex flex-col items-start justify-start gap-4 border-2 border-white-secondary rounded-lg p-5">
          <p className="sm:text-xl text-lg text-black-secondary font-normal">
            Try it first using our example snippet
          </p>
          <p className="text-sm text-black-off/70 font-normal">
            Copy the snippet and paste it in your website builder, or code.
          </p>
          <div className="w-full h-[90px] flex px-3 items-center justify-center bg-[#F8F8FA] rounded-md border border-white-secondary">
            <p className="text-base font-normal text-brand-secondary">{`<iframe id=   "Trustjoy-widget-7-Google"  title=   "Trustjoy-widget-7-Google"`}</p>
          </div>
          <div className="w-full flex sm:flex-row flex-col items-center justify-start sm:gap-6 gap-3">
            <OutlinedBtn
              text={copied ? "Copied.." : "Copy the snippet"}
              event={copyToClipboard}
              style="text-sm text-black-main h-[45px] sm:w-[190px] w-full"
            />
            <Link
              className="text-sm text-black-main h-[45px] sm:w-[130px] w-full flex items-center justify-center rounded-[8px] border border-white-off"
              href={"https://jsfiddle.net/"}
            >
              Live demo
            </Link>

            <p className="text-sm text-brand-secondary fonr-normal">
              Implementation guides
            </p>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Example;
