import React from "react";
import { TailSpin } from "react-loader-spinner";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <TailSpin color={`var(--primary-color)`} height={150} width={150} />
    </div>
  );
};

export default Loader;
