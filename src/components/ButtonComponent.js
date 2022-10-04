import React from "react";
import { Link } from "react-router-dom";

const ButtonComponent = (props) => {
  const { text, image, bg, to } = props;
  return (
    <Link
      className={
        bg === "gradiant" ? "button_component gradiant_bg" : "button_component"
      }
      to={to}
    >
      <div className="d-flex justify-content-center gap-3">
        <img src={image} alt="btn-image" />
        <h5>{text}</h5>
      </div>
    </Link>
  );
};

export default ButtonComponent;
