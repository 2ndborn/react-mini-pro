import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from "./components/FunctionalGreeting";
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefulGreeting from './components/StatefulGreetingWithPreviousState';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import NestingComponets from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent.';
import RenderingList from './components/RenderingList';

function App() {
  return (
    <div className="App">
      <RenderingList />
    </div>
  );
}

export default App;
