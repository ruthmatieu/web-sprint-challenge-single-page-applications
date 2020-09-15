import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';

//components
import Home from './components/Home';
import Navbar from './components/Navbar';
import Form from './components/Form';

function App() {

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
    console.log('addNewOrder function')
    setOrder([...order, newOrder])
  }

  const menu = [
    {
      image: '',
      title: 'new $10 tastemaker',
      description: 'large up to 3 toppings',
      price: '$10',
      button: 'order now'
    },
    {
      image: '',
      description: 'nothing beats original',
      price: '$12',
      button: 'order now'
    },
    {
      image: '',
      title: `spicy, finger-likin' wings`,
      description: 'traditional or boneless',
      price: '$11',
      button: 'order now'
    }
  ]

  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/"><Home menu={menu}/></Route>
        <Route path="/pizza"><Form addNewOrder={addNewOrder}/></Route>
        {/* <Route path="/confirmation"><Confirmation results={order}/></Route> */}
        {/* <Confirmation results={order}/> */}
      </Switch>
      {/* <Confirmation results={order}/> */}
    </div>
  );
};

export default App;
