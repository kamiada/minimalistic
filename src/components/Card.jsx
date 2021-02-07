import React from "react";
import "./components.scss";
import { BrowserRouter as Link } from "react-router-dom";


const Card = ({ title, onClick, href }) => (
  <div className="card_wrapper">
    <div className="card_wrapper--card">
      {onClick ? (
        <button className="title_placement" onClick={onClick}>
          {title}
        </button>
      ) : (
        <Link className="title_placement" to={href}>
          {title}
        </Link>
      )}
    </div>
  </div>
);
export default Card;
