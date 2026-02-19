import React from "react";
import propTypes from "prop-types";

export default function Cart(props) {
  const className = ["tiles-item"]
  className.push(props.className)
  return (
    <div className="tiles-item">
      <div className={`tiles-item-inner ${props.shadow ? "has-shadow" : ""}`}>
        {props.children}
      </div>
    </div>
  );
}

Card.propTypes ={
  shadow: propTypes.bool,
  className: propTypes.string
}
