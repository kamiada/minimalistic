//inspired by Google panels

import React, { Component } from "react";
import "./components.scss";

class Panel extends Component {
  render() {
    return (
      <div className="panel">
        <h2>{this.props.title}</h2>
        <h3>{this.props.years}</h3>
        <div className="paragraph_panel">
        {this.props.description && this.props.description.length ? 
        this.props.description.map(point => {
            return <li>{point}</li>
        }) : ''}
        </div>
      </div>
    );
  }
}
export default Panel;
