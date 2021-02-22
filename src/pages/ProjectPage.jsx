import React, { Component } from "react";
import "./pages.scss";

class Minipage extends Component {
render() {
    return (
        <div className="page_container">
            Testing
            <p>{this.props.text}</p>
        </div>
    )
}
}
export default Minipage;