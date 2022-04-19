//+-+import logo from "./logo.svg";
import "./App.css";
import GenInfo from "./components/genInfo";
import EduExp from "./components/eduExp";
import PracExp from "./components/pracExp";

function App() {
  return (
    <div className="App">
      <h1>CURRICULUM VITAE</h1>
      <p>yttu</p>
      <GenInfo />
      <EduExp />
      <PracExp />
    </div>
  );
}
export default App;
