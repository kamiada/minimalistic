import React, { Component } from 'react';
import './components.scss';

export default class Card extends Component {
    render() {
        return (
            <div className="card_wrapper">
                <div className="card_wrapper--card">
                {this.props.title}
                </div>       
            </div>
        )
    }
}