import React from "react";
import "./components.scss";
import { Link } from "react-router-dom";

const Card = ({title, href}) => (
  <div className="card_wrapper">
    <div className="card_wrapper--card">
    <Link className="title_placement" to={href} >
        {title}
      </Link>
    </div>
  </div>
);
export default Card;
