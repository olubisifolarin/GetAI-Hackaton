import React from 'react';
import Title from '../assets/Title.png';
import Countdown from '../assets/Countdown.png';
// import logo from '../assets/logo.png';


const Home = () => {
    return(
        <div className='home-section'>
            <div class="stars"></div>
            <div className='home'>
                <div>
                    <h3 className='ignite'>Igniting a Revolution in HR innovation</h3>
                    <img src={Title} className="title" alt='title' />
                    <p className='participate'>Participate in the getlinked tech Hackaton 2023 stand <br /> a chance to win a Big price </p>
                    <button className='button-link'>Register</button>
                    <div className='countdown'>
                        <img src={Countdown} alt='countdown'/>
                    </div>
                </div>

                <div className='homeImg'>
                    {/* <img src={logo} alt='logo' /> */}
                </div>

            </div>
           <hr className="nav-line" />
            
        </div>
    )
}

export default Home;