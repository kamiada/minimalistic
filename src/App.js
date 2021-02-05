import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  return (
    <div className="App">
    <header>
      <h1 >Hi, my name is Adrianna</h1>
    </header>
    <body>
    <div className="cardholder">
        <Card onClick={() => console.log("click")} title="skills." />
        <Card onClick={() => console.log("click")} title="about." />
        <Card onClick={() => console.log("click")} title="projects." />
      </div>
    </body>
    </div>
  );
}

export default App;
