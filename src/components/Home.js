import React from "react";
import { Link } from 'react-router-dom';


const Home = (props) => {

  const linkStyle = {
    textDecoration: 'none',
  }


  return (
    <section >
        <div className="landing-hero">
            <h1>Your favorite food delivered, <br/> while coding.</h1>
            <Link to="/pizza" style={linkStyle}><button>Pizza</button></Link>
        </div> 
        <h2>Party Favorites</h2>
        <div className="card">
          
          {props.menu.map(item => (
            <div className="">
              <img className="card-image"src={item.image} alt={item.title}/>
              <h4 className="card-title">{item.title}</h4>
              <p className="card-desc">{item.description}</p>
              <p className="card-price">{item.price}</p>
              <button className="submit-btn-card">{item.button}</button>
            </div>
          ))}
        </div>
    </section>
  );
};
export default Home;