import "./App.css";
import GenInfo from "./components/genInfo";
import EduExp from "./components/eduExp";
import PracExp from "./components/pracExp";

function App() {
  return (
    <div className="body">
      <div className="App">
        <h1>CURRICULUM VITAE</h1>
        <p>Capstone Project 1</p>
        <GenInfo />
        <EduExp />
        <PracExp />
      </div>
    </div>
  );
}
export default App;
