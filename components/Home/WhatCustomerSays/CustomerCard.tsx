import React from "react";

const CustomerCard = () => {
  return (
    <div className="w-[260px] flex flex-col items-center justify-start gap-6 rounded-[10px] border-2 border-white-off p-3 font-poppins mx-4">
      <div className="w-full flex flex-col items-center justify-start gap-2">
        <p className="text-black-main text-base font-normal">Name</p>
        <p className="text-sm text-black-off/80 font-normal">Company</p>
      </div>
      <p className="text-center text-base text-black-main font-normal">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </p>
    </div>
  );
};

export default CustomerCard;
