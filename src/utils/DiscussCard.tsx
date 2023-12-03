import { Image } from "antd";
import rightUp from "../assets/right-up.svg";

type Props = {
    title: string;
    icon: string;
    shadow: string;
}

const DiscussCard = ({ title, icon, shadow }: Props) => {
  return (
    <div
      className={`h-10 sm:h-12 px-4 my-2 py-8 w-[160px] sm:w-[200px] flex items-center justify-around rounded-2xl shadow-sm cursor-pointer ${shadow} hover:shadow-none transition-all duration-150 bg-[#24272E]`}
    >
      <div className="bg-white rounded-full flex justify-center items-center h-8 w-8 sm:h-10 sm:w-10">
        <Image src={icon} alt={title} preview={false} height={36} width={36} />
      </div>
      <p className="m-2 text-sm sm:text-lg font-medium">{title}</p>
      <Image src={rightUp} alt="icon-up" preview={false} />
    </div>
  );
};

export default DiscussCard