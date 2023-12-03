import React from "react";

import { Image } from "antd";

type Props = {
  name: string;
  imageURL: string;
  title: string;
  description: string;
};

const ReviewCard = ({ name, imageURL, title, description }: Props) => {
  return (
    <div className="flex flex-col w-full sm:w-[480px] border border-gray-500 rounded-xl my-5 p-5 bg-[#24272E]">
      <div className="flex flex-row items-center mb-2">
        <Image src={imageURL} alt={name} preview={false} />
        <div className="mx-2">
          <h1 className="text-base font-bold">{name}</h1>
          <h2 className="text-sm text-[#8B8B8B] font-normal">{title}</h2>
        </div>
      </div>

      <p>{description}</p>
    </div>
  );
};

export default ReviewCard;
