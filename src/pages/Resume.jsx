import React, { Component } from "react";
import "./pages.scss";
import { Document } from "react-pdf";
import pdf from '../docs/CV3.pdf';

class Resume extends Component {
  render() {
    return (
      <div className="resume_container">
        <Document file={pdf} />
      </div>
    );
  }
}

export default Resume;
