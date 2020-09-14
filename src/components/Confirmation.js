import React from 'react';

const Confirmation = (props) => {
  console.log(props)
    return (
        
      <div className="display-results">
          <h3>Thank you! Your order has been placed.</h3>
        {props.results.map((item) => (
          
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.size}</p>
            <p>{item.pepperoni}</p>
            <p>{item.sausage}</p>
            <p>{item.canadian}</p>
            <p>{item.italian}</p>
            <p>{item.chicken}</p>
            <p>{item.onions}</p>
            <p>{item.pepper}</p>
            <p>{item.special}</p>
          </div>
        ))}
      </div>
    );
  }

export default Confirmation;

