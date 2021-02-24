import React, { Component } from "react";
import './components.scss';

class AnimatedTitle extends Component {
    render() {
        return (
            <div className="title_holder">
                {this.props.title}
            </div>
        )
    }
}
export default AnimatedTitle;