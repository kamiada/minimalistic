import React, { Component } from "react";
import "../App.css";
import Typewriter from "typewriter-effect";
import profile from "../profilePic/profile.jpg";
import "./pages.scss";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <img src={profile} alt="profile" />
        </div>
        <div>
          <h2>
            <Typewriter
              options={{
                strings: ["Hi, my name is Adrianna, I am a software engineer", "Welcome to my Website"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
      </div>
    );
  }
}
export default Home;
