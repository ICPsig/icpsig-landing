import { Button, Image } from "antd";
import rightArrow from "../assets/right-arrow.svg"

import icpLogo from "../assets/icp.svg"

import ScrollButton from "../utils/ScrollButton";
import { goToAppURL } from "../config";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-[85vh] w-[70%] flex flex-col justify-center items-center">
      <h1 className="text-4xl lg:text-5xl text-center font-bold tracking-wider z-10">
        Your gateway to the{" "}
        <span className="bg-clip-text bg-gradient-to-b from-white via-[#AFCFFF] to-[#AFCFFF] text-[#1573FE] text-[2.5rem] lg:text-[3.5rem]">
          Ultimate MultiSig
        </span>{" "}
        experience on Internet Computer
      </h1>

      <p className="text-[#8B8B8B] text-center mt-8 text-sm sm:text-base z-10">
        Experience a new era of asset management with ICPsig. An all-improved
        <br className="hidden sm:inline" />
        MultiSig experience on the Internet Computer Blockchain.
      </p>

      <Button
        type="primary"
        size="large"
        className="bg-[#1573FE] flex items-center justify-center mt-8 text-lg px-5 shadow-[#1573fe5c] shadow-xl z-10"
        href={goToAppURL}
        target="_blank"
      >
        Go to app
        <Image
          src={rightArrow}
          preview={false}
          className="ml-2"
          height={20}
          width={20}
        />
      </Button>

      {/* hero button */}
      <div className="mt-12 z-10">
        <div className="flex bg-[#1F232C] px-2 py-2 sm:py-1 rounded-xl border border-gray-500 justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-30 bg-gradient-to-r from-[#20242C] via-[#342034] to-[#20242C]">
          <span className={`mx-2 text-xs sm:text-lg`}>Powered By</span>
          <Image
            src={icpLogo}
            alt="ICP"
            preview={false}
            width="20px"
            height="20px"
          />
          <span className={`mx-2 text-xs sm:text-lg text-[#E6007A] font-bold`}>
            Internet Computer
          </span>
        </div>
      </div>

      {/* scroll button */}
      <div
        className="hidden sm:mt-24 sm:inline z-10"
        onClick={() =>
          document
            .querySelector("#dashboard")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ScrollButton />
      </div>
    </div>
  );
};

export default Hero;
