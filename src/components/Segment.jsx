import React, { Component } from "react";
import "./components.scss";
import { BrowserRouter as Link } from "react-router-dom";
import GifPlayer from 'react-gif-player';


class Segment extends Component {
  render() {
    return (
      <div className="segment">
        <GifPlayer
          gif={'../gifs_examples/periodicTableUpdate.gif'}
          pauseRef={(pause) => (this.pauseGif = pause)}
        />
        <Link to={this.props.href}>
          {this.props.title} {this.props.description}
        </Link>
      </div>
    );
  }
}
export default Segment;
