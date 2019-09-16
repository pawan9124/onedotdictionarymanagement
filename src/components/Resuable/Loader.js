import React from "react";

const Loader = () => {
  return (
    <div className="loading">
      <img
        className="loading-image"
        src={require("../../images/Preloader.gif")}
        alt="Loading..."
      />
    </div>
  );
};

export default Loader;
