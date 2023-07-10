import React from "react";
import error from "../asset/Error.png";
import "../Style/Error.css";
const Error = () => {
  return (
    <div className="image-err">
      <img src={error} alt="Error Page 404" className="img" />
    </div>
  );
};

export default Error;
