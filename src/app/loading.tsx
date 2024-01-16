import { Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <div className="w-[100%] h-[100dvh] flex justify-center items-center">
      <Spin size="large" />
    </div>
  );
};

export default Loading;
