import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components.scss";
import { Home, Skills, Projects, About, ProjectMiniPage } from "../pages";
import LivePic from "../gifs_examples/React App.png";
import MobileApp from "../gifs_examples/AdriannaKaminkaPosterFinal.png";
import GithubIcon from "../icons/GitHub-Mark-Light-64px.png";
import Linkedin from "../icons/whiteLinkedin.png";
import data from "../Posts/posts.json";
class Navbar extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <nav className="navbar">
            <ul>
              <li>
                <span>Menu</span>
              </li>
              <li class="nav-item">
                <a href="/">Home</a>
              </li>
              <li class="nav-item">
                <a href="/about">About</a>
              </li>
              <li class="nav-item">
                <a href="/skills">Skills</a>
              </li>
              <li class="nav-item">
                <a href="/projects">Projects</a>
              </li>
              <li class="nav-item">
                <a href="test">Resume</a>
              </li>
              <div className="social_parent">
                <li>
                  <a
                    className="socialIcon--linkedin"
                    href="https://www.linkedin.com/in/adrianna-kaminska-19985a173/"
                  >
                    <img src={Linkedin} alt="linkedin link" />
                  </a>
                </li>
                <li>
                  <a className="socialIcon" href="https://github.com/kamiada">
                    <img src={GithubIcon} alt="github link" />
                  </a>
                </li>
              </div>
            </ul>
          </nav>
          {/* ROUTING HERE */}
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/skills" component={Skills}></Route>
            <Route exact path="/projects" component={Projects}></Route>
            {/* ROUTING FOR OUTSIDE PROJECTS */}
            <Route path="/projects/periodicTable" component={ProjectMiniPage}>
              <ProjectMiniPage id="0" />
            </Route>
            <Route path="/projects/Live" component={ProjectMiniPage}>
              <ProjectMiniPage
                id={data.projectsDescriptions[1]._id}
                image={LivePic}
                imageALT="project done for BBC Platform Hackathon"
              />
            </Route>
            <Route
              path="/projects/CustomisedTourism"
              component={ProjectMiniPage}
            >
              <ProjectMiniPage id={data.projectsDescriptions[2]._id} 
                 image={MobileApp}
              imageALT="dissertation poster for mobile app"
              />
            </Route>
            <Route path="/projects/Tracker" component={ProjectMiniPage}>
              <ProjectMiniPage id={data.projectsDescriptions[3]._id} />
            </Route>
            <Route path="/projects/PandaMediator" component={ProjectMiniPage}>
              <ProjectMiniPage id={data.projectsDescriptions[4]._id} />
            </Route>
            <Route path="/projects/Arctica">
              <ProjectMiniPage id={data.projectsDescriptions[5]._id} />
            </Route>
            <Route path="/projects/FeelMyFeels" component={ProjectMiniPage}>
              <ProjectMiniPage id={data.projectsDescriptions[6]._id} />
            </Route>
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default Navbar;
