import React from "react";
import "./components.scss";
import { BrowserRouter as Link } from "react-router-dom";

const Segment = ({ title, description, href }) => {
  <div className="segment">
    <Link to={href}>
      {title} {description}
    </Link>
  </div>;
};

export default Segment;
