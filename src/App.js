import "./App.css";
import Card from "./components/Card.jsx";
import ReactTypingEffect from "react-typing-effect";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
            <Card onClick={() => console.log("click")} title="skills." />
            <Card onClick={() => console.log("click")} title="about." />
            <Card onClick={() => console.log("click")} title="projects." />
          </div>
        </Router>
      </body>
    </div>
  );
}

export default App;
