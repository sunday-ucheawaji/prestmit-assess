import React from "react";

interface Props {
  text: string;
  image: React.ReactNode;
  smallImage: React.ReactNode;
  name: string;
}
function PropositionCard({ text, image, smallImage, name }: Props) {
  return (
    <div
      className={`w-[300px] bg-[#ffffff] rounded-[12px] p-[35px]   text-[#000] flex flex-col gap-3 h-[230px]`}
    >
      {image}
      <div>
        <span className="text-[#0A2640] font-[700]">Category</span>{" "}
        <span className="text-[#777777] text-[12px] ">November 22, 2021</span>
      </div>
      <div className="flex justify-start items-center gap-2">
        <p className="text-[14px] font-[400] font-sans ">{text}</p>
      </div>
      <div className="flex justify-start gap-4">
        {smallImage}
        <span className="text-[#000] text-[12px] ">{name}</span>
      </div>
    </div>
  );
}

export default PropositionCard;
