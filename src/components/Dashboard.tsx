import React from "react";
import { Image } from "antd";
import dashboardImage from "../assets/dashboard.png";

const Dashboard = () => {
  return (
    <div className="py-2 flex justify-center items-center" id="dashboard">
      <Image src={dashboardImage} preview={false} className="my-2" height='90%' width='90%' />
    </div>
  );
};

export default Dashboard;
