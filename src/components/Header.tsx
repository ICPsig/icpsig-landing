import { Button, Image } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

import icpsigLogo from "../assets/icpsig.svg"
import { useState } from "react";

import navToggle from "../assets/nav-toggle.svg";
import HeaderTogglePanel from "./HeaderTogglePanel";

import { blogURL, docsURL, goToAppURL } from "../config";

const Header = () => {
  const [toggleActive, setToggleActive] = useState(false)

  return (
    <nav className="sm:sticky top-5 z-20 bg-[#1F232C] w-[90%] sm:w-[80%] backdrop-filter backdrop-blur-lg bg-opacity-30 border border-[#505050] firefox:bg-opacity-90 text-white rounded-xl m-5">
      <div className="flex items-center justify-between h-16 mx-auto px-8">
        <section>
          <a href="/">
            <img src={icpsigLogo} alt="ispsig" />
          </a>
        </section>

        <section className="flex items-center text-lg space-x-4 text-white z-10">
          {/* <a
            href={docsURL}
            className="mr-1 sm:mx-2 hidden sm:inline hover:-translate-y-1 border-[#1573FE] hover:border-b-2 hover:border-[#1573FE] transition-all duration-200 ease-in-out"
          >
            Docs
          </a> */}
          {/* <a
            href={blogURL}
            className="mr-1 sm:mx-2 hidden sm:inline hover:-translate-y-1 border-[#1573FE] hover:border-b-2 hover:border-[#1573FE] transition-all duration-200 ease-in-out"
          >
            Blog
          </a> */}

          <Button
            type="primary"
            ghost
            className="sm:flex items-center text-base font-semibold mx-4 hidden"
            href={goToAppURL}
            target="_blank"
          >
            Go to app
            <ArrowRightOutlined />
          </Button>

          <Button
            type="primary"
            ghost
            className="flex items-center mx-4 sm:hidden border-gray-50"
            onClick={() => setToggleActive(!toggleActive)}
          >
            <Image src={navToggle} preview={false} />
          </Button>
        </section>
      </div>

      {/* toggle panel */}
      {toggleActive && (
        <HeaderTogglePanel
          toggleActive={toggleActive}
          setToggleActive={setToggleActive}
        />
      )}
    </nav>
  );
};

export default Header;
