import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {

    const linkStyle = {
        textDecoration: 'none',
    }

    return (
        <section>
            <div>
                <h1>Your favorite food delivered <br/> while coding.</h1>
                <Link to="/pizza" style={linkStyle}><button>Pizza</button></Link>
            </div>
        </section>
    )
}

export default Home;