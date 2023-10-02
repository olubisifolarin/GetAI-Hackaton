import React from "react";
import Vector from '../assets/Vector.png';
import logo from '../assets/logo.png';
import star from '../assets/star.png';
import star4 from '../assets/star4.png';



const Privacy = () =>{
    return(
        <>
        <div className="privacy-section">
            <div className="">
                <div className="privacy">
                    <img src={star} className="star" alt='logo' />
                    <h2 className='policy'>Privacy Policy and <br /> <span className="linked">Terms</span></h2>
                    <p>Last updated on September 12, 2023</p>
                    <p className='techHackathon'>
                    Below are our privacy & policy, which outline a lot of goodies. <br />
                    It’s our aim to always take of our participant
                    </p>
                    <img src={star4} className="star-casual" alt='logo' />
                </div>

                <div className="privacy-text">
                    <p className='getlinked-tech'>
                    At getlinked tech Hackathon 1.0, we value your privacy<br />
                    and are committed to protecting your personal information.<br />
                    This Privacy Policy outlines how we collect, use, disclose,<br /> 
                    and safeguard your data when you participate in our tech <br />
                    hackathon event. By participating in our event, you consent <br />
                    to the practices described in this policy.
                    </p>
                    <h4 className="license">Licensing Policy</h4>
                    <p  className='getlinked-tech'>Here are terms of our Standard License:</p>
                    <div className="input">
                        <input name="checkbox" className="check" type="checkbox" />
                        <p  className='getlinked-tech'>The Standard License grants you a non-exclusive right to<br />
                        navigate and register for our event
                        </p>
                    </div>
                    <img src={star4} className="star-casual" alt='logo' />

                    <div className="input">
                        <input name="checkbox" className="check" type="checkbox" />
                        <p  className='getlinked-tech'>
                        You are licensed to use the item available at any free source
                        sites, for your project developement
                        </p>
                    </div>
                    <button className='privacy-button'>Read More</button>
                </div>
            </div>
            <div className="privacyImg"> 
                <div>
                <img src={star} className="star-casual" alt='logo' />
                    <img src={Vector} className="vector" alt="vector" />  
                </div>

                <div>
                    <img src={logo} className="logo" alt="logo" />
                    <img src={star} className="star-casual" alt='logo' />
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Privacy;