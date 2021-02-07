import React, { Component } from "react";
import "./pages.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Segment from "../components/Segment";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects_body">
        <Segment
          title="test title"
          description="something something very very very long and extremely extremely descriptive"
          href="/test_title"
        />
      </div>
    );
  }
}
