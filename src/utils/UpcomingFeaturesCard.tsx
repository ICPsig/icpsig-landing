import { Button, Image } from "antd";

import progressSVG from "../assets/progress.svg"
import buildSVG from "../assets/build.svg";
import { buildWithUsMailURL } from "../config";

type Props = {
    id: number;
    timeline: string;
    achieved: boolean;
    title: string;
    description: string;
}

const UpcomingFeaturesCard = ({
  timeline,
  title,
  description,
  achieved,
}: Props) => {
  return (
    <div className="flex flex-col sm:w-[480px]">
      <h2 className="py-2 px-4 bg-[#1A2A42] w-max rounded-xl mx-6 text-xl font-normal">
        {timeline}
      </h2>

      <div className="z-10">
        <Image
          src={progressSVG}
          preview={false}
          width={90}
          height={90}
          className="translate-y-14 bg-[#203A62] rounded-full"
        />

        <div
          className={`pt-16 pb-6 border-t-4 px-4 -z-10 ${
            achieved ? "border-[#1573FE]" : "border-gray-500"
          }`}
        >
          <h1 className="text-3xl font-bold">{title}</h1>

          <p className="text-lg text-[#8B8B8B] w-[80%]">{description}</p>
        </div>
      </div>

      {title === "Mini Apps" && (
        <div className="w-full px-4">
          <Button
            type="primary"
            className="text-[#1573FE] flex items-center justify-center mt-8 w-max"
            size="large"
            ghost
            href={buildWithUsMailURL}
          >
            <Image
              src={buildSVG}
              alt="icon-up"
              preview={false}
              height={20}
              width={20}
              className="text-white"
            />
            <p className="ml-2">Build with us</p>
          </Button>
        </div>
      )}
    </div>
  );
};

export default UpcomingFeaturesCard