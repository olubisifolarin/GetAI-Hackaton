import React from 'react';
import Title from '../assets/Title.png';
import Countdown from '../assets/Countdown.png';
import man from '../assets/man.png';
import star from '../assets/star.png';
import Image1 from '../assets/Image1.png';
import Vector4 from '../assets/Vector4.png';


const Home = () => {
    return(
        <div className='home-section'>
            <img src={star} className="star" alt='logo' />
                <div className='ignite'>
                    <h3 >Igniting a Revolution in HR innovation</h3>
                    <img src={Vector4} className="ignite-vector" alt='logo' />
                </div>

                <div className='home'>
                    <div className='getlinked-image'>
                        <img src={Title} className="title" alt='title' />
                        <p className='participate'>Participate in the getlinked tech Hackaton 2023 stand <br /> a chance to win a Big price </p>
                      <a href='/register'><button className='button-link'>Register</button></a>  
                        <img src={star} className="star-image" alt='logo' />
                        
                        <div className='countdown'>
                            <img src={Countdown} alt='countdown'/>
                        </div>
                      
                    </div>

                    <div>
                        <div className='homeImg'>
                            <img src={star} className="animate__animated animate__flash star" alt='logo' />
                            <img src={man} className="man-image" alt='logo' />
                            <img src={Image1} className='home-image' alt='logo' />
                        </div>

                    </div>
                </div>       
           <hr className="nav-line" />
            
        </div>
    )
}

export default Home;