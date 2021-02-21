import React, { Component } from "react";
import "../App.css";
import ReactTypingEffect from "react-typing-effect";



class Home extends Component {


    render() {
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
                  speed={50}
                  eraseDelay={100}
                ></ReactTypingEffect>
              </h2>
            </header>
            </div>
        )
    }
}
export default Home;

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import ReactTypingEffect from "react-typing-effect";
// import Card from "../components/Card";
// import Skills from "./Skills";
// import About from "./About";
// import Projects from "./Projects";

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       unrender: false,
//     };
//   }

//   render() {
//     return (
    //   <div className="App">
    //     <header>
    //       <h2>
    //         <ReactTypingEffect
    //           className="typingeffect"
    //           text={[
    //             "Hi, my name is Adrianna, I am a software engineer",
    //             "Welcome to my Website",
    //           ]}
    //           speed={100}
    //           eraseDelay={100}
    //         ></ReactTypingEffect>
    //       </h2>
    //     </header>
//         <body>
//           <Router>
//             <div className="cardholder">
//               <Card
//                 href="/skills"
//                 title="skills."
//                 onClick={() => this.setState({ unrender: true })}
//               />
//               <Card
//                 href="/about"
//                 title="about."
//                 onClick={() => this.setState({ unrender: true })}
//               />
//               <Card
//                 href="/projects"
//                 title="projects."
//                 onClick={() => this.setState({ unrender: true })}
//               />
//               <Switch>
//                 <Route path="/skills">
//                   <Skills />
//                 </Route>
//                 <Route path="/about">
//                   <About />
//                 </Route>
//                 <Route path="/projects">
//                   <Projects />
//                 </Route>
//               </Switch>
//             </div>
//           </Router>
//         </body>
//       </div>
//     );
//   }
// }
// export default Home;

