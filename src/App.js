import "./App.css";
import Card from "./components/Card.jsx";
import ReactTypingEffect from "react-typing-effect";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./components/components.scss";

function App() {
  return (
    <div className="App">
      <header>
        <h2>
          <ReactTypingEffect
            className="typingeffect"
            text={[
              "Hi, my name is Adrianna, I am a software engineer",
              "Welcome to my Website",
            ]}
            speed={100}
            eraseDelay={100}
          ></ReactTypingEffect>
        </h2>
      </header>

      <body>
        <Router>
          <div className="cardholder">
            <Card href="/skills" title="skills." />
            <Card href="/about" title="about." />
            <Card href="/projects" title="projects." />
            <Switch>
              <Route path="/skills">
                <Skills />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
            </Switch>
          </div>
        </Router>
      </body>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}
function Skills() {
  return <h2>About</h2>;
}
function Projects() {
  return <h2>About</h2>;
}

export default App;
