import { Button, Image } from "antd";

import icpsigLogo from "../assets/icpsig.svg"

import navClose from "../assets/nav-close.svg";
import { ArrowRightOutlined } from "@ant-design/icons";
import { blogURL, docsURL, goToAppURL } from "../config";

type Props = {
    toggleActive: boolean;
    setToggleActive: (toggleActive: boolean) => void
};

const HeaderTogglePanel = ({toggleActive, setToggleActive}: Props) => {
  return (
    <div className="w-full h-max top-0 absolute flex flex-col justify-center items-center bg-[#1F232C] backdrop-filter backdrop-blur-lg border border-[#505050] text-white rounded-xl z-20 py-2">
      <section className="flex w-full justify-between items-center border-gray-50 px-8 py-4">
        <a href="/">
          <img src={icpsigLogo} alt="icpsig" />
        </a>

        <Button
          type="primary"
          ghost
          className="flex items-center border-gray-50"
          onClick={() => setToggleActive(!toggleActive)}
        >
          <Image src={navClose} preview={false} />
        </Button>
      </section>

      <a className="border border-[#505050] rounded-xl mx-16 my-1 p-2 w-[95%] flex justify-center items-center cursor-pointer" href={docsURL}>
        Docs
      </a>

      <Button
        type="primary"
        className="text-[#1573FE] flex items-center justify-center flex-row-reverse mx-16 my-1 p-2 w-[95%] "
        size="large"
        ghost
        icon={<ArrowRightOutlined />}
        href={goToAppURL}
        target="_blank"
      >
        <p className="ml-2">Go to app</p>
      </Button>
    </div>
  );
};

export default HeaderTogglePanel;
