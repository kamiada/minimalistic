import React, { Component } from "react";
import "./components.scss";
import { BrowserRouter as Link } from "react-router-dom";

class Segment extends Component {
  render() {
    return (
      <div className="segment">
        <Link to={this.props.href}>
          {this.props.title} {this.props.description}
        </Link>
      </div>
    );
  }
}
export default Segment;
