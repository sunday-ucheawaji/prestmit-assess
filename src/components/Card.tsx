import arrowRight from "../images/arrowright.png";

interface Props {
  icon: any;
  title: string;
  text1: string;
  text2: string;
}

function Card({ icon, title, text1, text2 }: Props) {
  return (
    <div className="font-sans">
      {icon}
      <h2 className="mb-3 mt-5 leading-[10px] font-[400]">{title}</h2>
      <p className="text-[#777777] text-[14px] ">{text1}</p>
      <p className="text-[#777777] text-[14px] ">{text2}</p>
      <div className="flex cursor-pointer mt-2 pb-2 w-[130px] items-center gap-2 border-b border-[#0a2640] ">
        <span className="text-[#0A2640] font-[700]  ">Explore page </span>
        <img src={arrowRight} alt="arrow right" />
      </div>
    </div>
  );
}

export default Card;
