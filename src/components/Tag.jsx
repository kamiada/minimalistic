import React, { Component } from "react";
import "./components.scss";

class Tag extends Component {
  render() {
    return <div className="tag">{this.props.title}</div>;
  }
}

export default Tag;
