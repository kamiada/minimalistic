import React, { Component } from "react";
import "./components.scss";

class WidePanel extends Component {
  render() {
    return (
      <div className="panel">
        <h2>{this.props.title}</h2>
        <div className="titles_panel">
          <h3>{this.props.years}</h3>
          <h3 className="grade">Final grade: {this.props.grade}</h3>
        </div>
        <div className="holder_triples">
          <div className="first_holder">
          <h4>Year 4</h4>
            {this.props.first && this.props.first.length
              ? this.props.first.map((point) => {
                  return <li>{point}</li>;
                })
              : ""}
          </div>
          <h4>Year 3</h4>
          <div className="second_holder">
            {this.props.second && this.props.second.length
              ? this.props.second.map((point) => {
                  return <li>{point}</li>;
                })
              : ""}
          </div>
          <div className="third_holder">
          <h4>Year 3</h4>
            {this.props.third && this.props.third.length
              ? this.props.third.map((point) => {
                  return <li>{point}</li>;
                })
              : ""}
          </div>
        </div>
      </div>
    );
  }
}
export default WidePanel;
