import React from "react";
import "./components.scss";

const Card = ({ title, onClick, href }) => (
  <div className="card_wrapper">
    <div className="card_wrapper--card">
      <button className="title_placement" onClick={onClick}>{title}</button>
    </div>
  </div>
);
export default Card;
