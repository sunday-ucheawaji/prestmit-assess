import React from "react";

interface Props {
  image1: React.ReactNode;
  image2: React.ReactNode;
}

function AdvertCard({ image1, image2 }: Props) {
  return (
    <div className="flex relative justify-between w-full" >
      <div>{image1}</div>
      <div className="absolute left-[20%] bottom-[-15%] text-right " >{image2}</div>
    </div>
  );
}

export default AdvertCard;
