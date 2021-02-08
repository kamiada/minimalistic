import React from "react";
import "./components.scss";
import { BrowserRouter as Link } from "react-router-dom";
import { About, Home, Projects, Skills } from '../pages';

const NavBar = ({ title, description, href }) => {
  <div className="vertical-navbar">
    <Link to={href}>
      {title} {description}
    </Link>
  </div>;
};

export default NavBar;