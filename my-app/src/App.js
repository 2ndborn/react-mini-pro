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
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWUTracker';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArragys from './components/UseStateWithArragys';

function App() {
  return (
    <div className="App">
      <UseStateWithArragys />
    </div>
  );
}

export default App;
