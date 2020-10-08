import React from "react";

const Spinner = () => {
  return (
    <div className="error-message">
      <img
        src={require("../../assets/img/spinner.gif")}
        alt="spinner"
        className="spinner"
      />
    </div>
  );
};

export default Spinner;
