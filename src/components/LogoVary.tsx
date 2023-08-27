import { PiChartPieSliceDuotone } from "react-icons/pi";

interface Props {
  text: string;
  color: string;
}

function LogoVary({ text, color }: Props) {
  return (
    <div className="flex items-center gap-1">
      <PiChartPieSliceDuotone className="rotate rotate-90" color={color} size="45px" />
      <span className={`font-[700] text-[30px] text-[#fff] `}>{text}</span>
    </div>
  );
}

export default LogoVary;
