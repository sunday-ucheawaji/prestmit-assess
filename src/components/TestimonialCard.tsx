import React from "react";

interface Props {
  height: boolean;
  text: string;
  image: React.ReactNode;
  name: string;
  email: string;
}
function TestimonialCard({ height, text, image, name, email }: Props) {
  return (
    <div
      className={`w-[300px] bg-[#ffffff] rounded-[12px] p-[35px]  shadow-lg text-[#000] flex flex-col gap-3 ${
        height ? "h-[290px]" : "h-[230px]"
      }`}
    >
      <p className="text-[18px] font-[400] font-sans ">{text}</p>
      <div className="flex justify-start items-center gap-2">
        {image}{" "}
        <div className="flex flex-col">
          <span className="text-[#0A2640] text-[14px] font-[700]">{name}</span>
          <span className="text-[#0A2640] text-[12px]">{email}</span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
