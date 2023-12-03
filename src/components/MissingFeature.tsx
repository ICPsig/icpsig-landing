import { Button, Image } from "antd";


import blueRightUpSVG from "../assets/blue-right-up.svg";

const MissingFeature = () => {
  return (
    <div className="w-full pt-[260px] pb-20 sm:pt-40 sm:pb-20 flex flex-col justify-center items-center bg-ellipse bg-object bg-center bg-no-repeat">
      <div className="sm:mt-32 sm:mb-18 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center">Missing a feature?</h1>

        <a href="mailto:contact@premiurly.in" target="_blank" rel="noreferrer">
          <Button
            type="primary"
            className="text-[#1573FE] flex items-center text-base font-semibold mt-6"
            size="large"
            ghost
          >
            <p className="mr-2">Let us know</p>
            <Image
              src={blueRightUpSVG}
              alt="icon-up"
              preview={false}
              className="text-white"
            />
          </Button>
        </a>

      </div>
    </div>
  );
};

export default MissingFeature;
