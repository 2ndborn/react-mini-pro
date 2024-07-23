import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from "./components/FunctionalGreeting";
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="Nice to meet you!!!" name="Micah" age="34" />
    </div>
  );
}

export default App;
