import React, { Component } from "react";
import "./pages.scss";
import pdf from '../docs/CV3.pdf';
import { Document,pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const path = '../docs/CV3.pdf';
class Resume extends Component {
  render() {
    return (
      <div className="resume_container">
        <Document file={path} />
      </div>
    );
  }
}

export default Resume;
