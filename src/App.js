import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';

//components
import Home from './components/Home';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Confirmation from './components/Confirmation';

const App = () => {

  //slice of state to handle customer order
  const [order, setOrder] = useState([])

  //handles new customer order
  const addNewOrder = (item) => {

    const newOrder = {
      id: Date.now(),
      name: item.name,
      size: item.size,
      pepperoni: item.pepperoni,
      sausage: item.sausage,
      canadian: item.canadian,
      italian: item.italian,
      chicken: item.chicken,
      onions: item.onions,
      pepper: item.pepper,
      special: item.special
    };
    setOrder([...order, newOrder])
  }

  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/pizza"><Form addNewOrder={addNewOrder}/></Route>
        {/* <Route path="/confirmation"><Confirmation/></Route> */}
      </Switch>
      <Confirmation results={order}/>
    </div>
  );
};
export default App;
