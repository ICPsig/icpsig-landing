
import { Image } from "antd";
import icpLogo from "../assets/icp.svg"

type Props = {
  logo?: string;
  leftText?: string;
  rightText?: string;
  rightColor?: string;
};

const GradientButton = ({
  logo = icpLogo,
  leftText = "Powered by",
  rightText = "ICP",
  rightColor = "#E6007A",
}: Props) => {
  return (
    <div>
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-tilt"></div>
        <button className="relative px-4 py-2 bg-black rounded-lg leading-none flex items-center">
          <span className="pr-4 text-gray-100 text-base">{leftText}</span>
          <span className="flex item-center space-x-2">
            <Image
              src={logo}
              width={25}
              height={25}
              alt="ICP"
              preview={false}
              className="rounded-full"
            />
          </span>
          <span className={`pl-2 text-[${rightColor}] group-hover:font-semibold transition duration-1000 text-base`}>
            {rightText}
          </span>
        </button>
      </div>
    </div>
  );
};

export default GradientButton;
