import { PiChartPieSliceDuotone } from "react-icons/pi";

interface Props {
  text: string;
  color: string;
}

function LogoVary({ text, color }: Props) {
  console.log(`text-[${color}]`);

  return (
    <div className="flex items-center gap-1">
      <PiChartPieSliceDuotone color={color} size="45px" />
      <span className={`font-[700] text-[30px] text-[${color}] `}>{text}</span>
    </div>
  );
}

export default LogoVary;
