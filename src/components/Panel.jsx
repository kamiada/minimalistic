//inspired by Google panels 

import React, { Component } from "react";
import './components.scss';

class Panel extends Component {

    render(){
        return( 
            <div className="panel_container">
                <img src={this.props.image} alt="presenting either workplace or university"/>
                <h2>{this.props.title}</h2>
                <h3>{this.props.years}</h3>
                <p>{this.props.description}</p>
            </div>
        )
    }
}
export default Panel;