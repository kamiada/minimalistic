import React, { Component } from "react";
import "./pages.scss";
import { Document } from "react-pdf";

class Resume extends Component {
  render() {
    return (
      <div>
        <Document file="src/CV3.docx.pdf" />
      </div>
    );
  }
}

export default Resume;
