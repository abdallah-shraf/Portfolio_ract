import React from 'react';
import './home.css';

import me from '../../assets/portfelio.png';
import HomeSocials from './HomeSocials.jsx';
function Home() {
    return (
        <div className='home' id='home'>
            <div className="container home_container">
                <h4>Hellow I'm</h4>
                <h1>Abdallah Ashraf</h1>
                <h4 className="text-light">
                    Frontend Developer
                </h4>
                <div className="btns">
                    <a href="#" className="btn">Download cv</a>
                    <a href="#" className="btn btn-primary">Let's talk</a>
                </div>
                <div className="me">
                    <img src={me} alt="me" />
                </div>
                <a href="#about" className="scroll_down">Scroll Down</a>
                <HomeSocials />
            </div>
        </div>
    );
}

export default Home;