import { Image } from 'antd';

import subpointIcon from "../assets/subpoint-icon.svg";

type Props = {
  id: number;
  title: string;
  titleIcon: string;
  description: string;
  subDescription: string;
  imageURL: string;
  subPoints: string[];
};

const SampleCard = ({id, title, titleIcon, description, subDescription, imageURL, subPoints }: Props) => {
  return (
    <div
      className={`w-full flex items-center justify-between ${
        id % 2 === 0 && "flex-row-reverse"
      } flex-col xl:flex-row`}
    >
      <div className="w-[300px] sm:w-[480px] flex justify-center flex-col">
        <h2 className="text-[#8B8B8B] flex flex-row items-center text-sm sm:text-base uppercase mb-3">
          <span className="mr-3">
            <img src={titleIcon} alt={title} />
          </span>
          {title}
        </h2>

        <h1 className="text-md sm:text-lg md:text-4xl font-bold">
          {description}
        </h1>

        <h2 className="text-[#8B8B8B] text-sm sm:text-base mt-4 mb-8">
          {subDescription}
        </h2>

        {subPoints.map((point) => {
          return (
            <p
              className="text-sm flex items-center mb-3 sm:text-base"
              key={point}
            >
              <img src={subpointIcon} alt="subpoint" className="mr-3 h-5 w-5" />
              {point}
            </p>
          );
        })}
      </div>

      <div className="lg:w-[680px] sm:w-[600px] xl:w-[700px]">
        <Image src={imageURL} alt="sample" preview={false} />
      </div>
    </div>
  );
}

export default SampleCard