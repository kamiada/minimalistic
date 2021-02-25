import React, { Component } from "react";
import "./components.scss";

class WidePanel extends Component {
  render() {
    return (
      <div className="panel">
        <h2>{this.props.title}</h2>
        <h3>{this.props.years}</h3>
        <div className="holder_triples">
        <div className="first_holder">
        {this.props.first && this.props.first.length ? 
        this.props.first.map(point => {
            return <li>{point}</li>
        }) : ''}
        </div>
        <div className="second_holder">
        {this.props.second && this.props.second.length ? 
        this.props.second.map(point => {
            return <li>{point}</li>
        }) : ''}
        </div>
        <div className="third_holder">
        {this.props.third && this.props.third.length ? 
        this.props.third.map(point => {
            return <li>{point}</li>
        }) : ''}
        </div>
        </div>
      </div>
    );
  }
}
export default WidePanel;