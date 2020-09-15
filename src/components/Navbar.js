import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const linkStyle = {
        textDecoration: 'none',
        color: 'white'
    }

    return (
        <nav className="nav">
            <div className="left-nav">
                <Link to="/" style={linkStyle}><li>Lambda Eats</li></Link>
            </div>

            <div className="right-nav">
                <Link to="/" style={linkStyle}><li>Home</li></Link>
                <Link to="/pizza" style={linkStyle}><li className="li-two">Order</li></Link>
            </div>
        </nav>
    );
};

export default Navbar;