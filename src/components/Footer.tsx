import { Button, Image, Input } from "antd";

import { YoutubeFilled } from "@ant-design/icons";
import GlassMorphicButton from "../utils/GlassMorphicButton";

import icpsigLogo from "../assets/icpsig.svg"
import icpLogo from "../assets/icp.svg"
import twitterLogo from "../assets/twitter.svg"
import discordLogo from "../assets/discord.svg"
import wink from "../assets/wink.svg";
import signup from "../assets/sign-up.svg"
import rightUp from "../assets/right-up.svg"
import azeroFunds from '../assets/azero-funds.png';
import { footerData } from "../config";
// import { useState } from "react";

type Props = {};

const Footer = (props: Props) => {
  // const [userEmail, setUserEmail] = useState('');

  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#24272E]">
      <div className="w-[90%] sm:w-[80%] py-8 lg:py-12 flex flex-col lg:flex-row flex-wrap justify-between items-center border-b border-gray-400">
        <div className="flex flex-col w-full lg:w-max justify-center items-start">
          <h1 className="text-xl font-bold md:text-2xl">
            ICPsig
          </h1>
        </div>

        {/* <div className="flex my-4 flex-col sm:flex-row w-full lg:w-max">
          <Input
            onChange={(e) => setUserEmail(e.target.value)}
            type="email"
            placeholder="Enter your email address"
            required
            className="bg-transparent text-white placeholder:text-gray-500 w-full sm:w-max focus:ring-0 focus:ring-offset-0 border-gray-500 h-8"
          />
          <Button
            type="primary"
            className="flex justify-center items-center my-2 sm:my-0 bg-[#1573FE] sm:text-base text-xs py-4 sm:py-3 sm:w-max px-3 sm:ml-2 rounded-lg"
          >
            <p className="mr-2">Sign me up</p>
            <Image src={signup} preview={false} />
          </Button>
        </div> */}
      </div>

      <div className="w-full py-6 flex flex-col-reverse flex-wrap justify-between items-center sm:py-8 sm:flex-row sm:justify-between sm:w-[80%]">
        {/* footer left section with links */}
        <div className="w-full justify-around sm:justify-center flex flex-row sm:w-max sm:my-2 sm:py-2 px-4 sm:px-0">
          {footerData.map(({ sectionHeader, sectionItems }) => {
            return (
              <div className="flex flex-col mr-4 md:mr-16">
                <h2 className="font-bold my-1 sm:text-lg text-xs">
                  {sectionHeader}
                </h2>

                {sectionItems.map(({ title, url, linkIcon, icon }) => {
                  return (
                    <a
                      className="text-[#8B8B8B] flex items-center font-normal hover:underline cursor-pointer sm:text-lg text-xs"
                      href={url}
                      target={linkIcon ? "_blank" : "_self"}
                    >
                      {icon && <YoutubeFilled className='text-[#FF0000] mr-2' />}
                      {title}
                      {linkIcon && (
                        <Image
                          src={rightUp}
                          className="ml-2"
                          alt="icon-up"
                          preview={false}
                          width={10}
                          height={14}
                        />
                      )}
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className="w-full py-6 sm:w-max flex sm:flex-col justify-between items-center sm:justify-center sm:my-2 sm:py-2 px-4 sm:px-0">
          <div className="flex justify-center items-center p-2">
            <Image src={icpsigLogo} alt="icpsig" preview={false} />
          </div>
        </div>
      </div>

      <div className="w-[80%] py-4 flex flex-col-reverse sm:flex-row flex-wrap justify-between items-center">
        <h2 className="text-xs sm:text-lg text-[#8B8B8B] font-bold mt-2 text-center sm:text-left w-full sm:w-max">
          @ ICPsig 2023/2024. All rights reserved.
        </h2>
        <div className="flex flex-col items-center md:items-end">
          <div className="mt-2 w-full flex justify-center items-center sm:w-max">
            <GlassMorphicButton
              leftText="Supported By"
              leftColor="#8B8B8B"
              rightText="Dfinity Grants Program"
              rightColor="white"
              logo={icpLogo}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
