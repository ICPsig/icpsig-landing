import { Image } from "antd"

import rightUp from "../assets/right-up.svg";

type Props = {
    title: string;
    logo: string;
    shadow: string;
}

const SupportedNetworksCard = ({ title, logo, shadow } : Props) => {
  return (
    <div
      className={`relative h-18 w-[120px] sm:w-[150px] lg:h-[92px] lg:w-[200px] sm:my-8 my-4 flex flex-col items-center rounded-2xl bg-[#24272E] ${shadow} shadow-sm hover:shadow-none transition-all duration-150`}
    >
      <div className="relative flex items-center transform -translate-y-6 rounded-full h-fit w-fit">
        <Image src={logo} alt={title} preview={false} className="h-[32px] w-[32px] sm:h-[48px] sm:w-[48px] lg:h-[64px] lg:w-[64px]" />
      </div>

      <div className="relative -translate-y-4 sm:-translate-y-3">
        <h2 className="text-xs sm:text-sm lg:text-lg">
          {title}
          {/* <Image src={rightUp} alt="icon-up" preview={false} /> */}
        </h2>
      </div>
    </div>
  );
};

export default SupportedNetworksCard