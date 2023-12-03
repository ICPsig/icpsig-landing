import { ElementType, useRef } from "react";
import { Button, Image } from "antd";

import progressSVG from "../assets/progress.svg"
import buildSVG from "../assets/build.svg";
import { buildWithUsMailURL, upcomingFeaturesData } from "../config";
import UpcomingFeaturesCard from "../utils/UpcomingFeaturesCard";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

import ScrollContainer from "react-indiana-drag-scroll";

const UpcomingFeatures: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);

  const scroll = (shift: number) => {
    scrollContainerRef!.current!.scrollLeft += shift;
  }

    return (
      <div className="w-[80%] rounded-3xl pt-12 pb-6 px-12 sm:py-16 sm:px-8 flex flex-col bg-gradient-to-br from-[#203F70] via-[#242723] to-[#242723]">
        <div className="flex justify-between">
          <h1 className="text-2xl sm:text-4xl font-bold mb-8">
            Upcoming features
          </h1>

          <div className="hidden sm:flex">
            <Button
              className="bg-[#1B2028] rounded-full cursor-pointer sm:flex border-none justify-center items-center"
              icon={<ArrowLeftOutlined className="text-white" />}
              onClick={() => scroll(-200)}
            />
            <Button
              className="bg-[#1B2028] rounded-full cursor-pointer hidden sm:flex border-none justify-center items-center ml-2"
              icon={<ArrowRightOutlined className="text-white" />}
              onClick={() => scroll(200)}
            />
          </div>
        </div>

        {/* for large screens */}
        {/* <ScrollContainer
          className="scroll-container cursor-grab"
          horizontal
          hideScrollbars
          innerRef={dragRef}
        > */}
        <div ref={scrollContainerRef} className="w-full overflow-x-scroll scroll-smooth no-scrollbar hidden sm:block">
            <div ref={dragRef} className='flex w-[1500px]'>
              {upcomingFeaturesData.map((data) => {
                return <UpcomingFeaturesCard key={data.id} {...data} />;
              })}
            </div>
        </div>
        {/* </ScrollContainer> */}

        {/* for small screens */}
        <div className="flex flex-col sm:hidden">
          {upcomingFeaturesData.map(
            ({ timeline, title, description, id, achieved }) => {
              return (
                <div
                  className={`w-full border-l-2 h-max flex ${
                    achieved
                      ? "border-[#1573FE]"
                      : id === 3
                      ? "border-none"
                      : "border-gray-500"
                  }`}
                  key={id}
                >
                  <div className="-translate-x-8 -translate-y-5">
                    <Image
                      src={progressSVG}
                      preview={false}
                      height={60}
                      width={60}
                    />
                  </div>

                  <div className="h-max my-2 -translate-y-5">
                    <h2 className="py-1 px-2 bg-[#1A2A42] w-max rounded-xl mx-4 text-md font-normal">
                      {timeline}
                    </h2>

                    <div className="px-4">
                      <h1 className="text-xl font-bold">{title}</h1>

                      <p className="text-sm text-[#8B8B8B]">{description}</p>
                    </div>

                    {title === "Mini Apps" && (
                      <div className="">
                        <Button
                          type="primary"
                          className="text-[#1573FE] flex items-center justify-center mt-2 py-4 px-2 mx-4 rounded-lg w-max"
                          size="small"
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
                </div>
              );
            }
          )}
        </div>
      </div>
    );
}

export default UpcomingFeatures;
