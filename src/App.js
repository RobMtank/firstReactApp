import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="Mine"/>
      <div className = "container my-3">
        <TextForm heading="Enter text to convert to Upper Case."/>
      </div>
    </>
  );
}

export default App;