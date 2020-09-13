import React from "react";
import { Route, Switch } from 'react-router-dom';

//components
import Home from './components/Home';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Confirmation from './components/Confirmation';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/pizza"><Form/></Route>
        <Route path="/confirmation"><Confirmation/></Route>
      </Switch>
    </div>
  );
};
export default App;
