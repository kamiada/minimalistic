import React, { Component } from "react";
import "./components.scss";

class Minipage extends Component {
render() {
    return (
        <div className="page_container">
            <button>X</button>
            <p>{this.props.text}</p>
        </div>
    )
}
}
export default Minipage;