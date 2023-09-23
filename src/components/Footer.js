import React from "react";
import call from '../assets/call.png';
import address from '../assets/address.png';
import socialmedia from '../assets/socialmedia.png';


const Footer = () => {
    return(
        <>
        <div className="footer">
            <div>
                <h2 className="getlinked">get<span className="linked">linked</span></h2>
                <p className='techHackathon foot-text'>
                Getlinked Tech Hackathon is a technology innovation program <br /> 
                established by a group of organizations with the aim of showcasing <br />
                young and talented individuals in the field of technology
                </p>

                <div className="terms">
                    <p  className='techHackathon foot-text'>Term of Use</p>
                    <hr className="term-hrule"/>
                    <p className='techHackathon foot-text'>Privacy Policy</p>
                </div>
               
            </div>

            <div className="links">
                <h4>Useful links</h4>
                <p  className='techHackathon foot-text'>Overview</p>
                <p  className='techHackathon foot-text'>Timeline</p>
                <p  className='techHackathon foot-text'>FAQs</p>
                <p  className='techHackathon foot-text'>Register</p>
                <div className="follow-us">
                    <h4>Follow us</h4>
                    <img src={socialmedia} className="socialmedia-img"alt="socialmedia" />
                </div>
                
            </div>

            <div className="contact">
                <h4>Contact us</h4>
                <div className="phone">
                    <img src={call} className="call" alt="phone" />
                    <p className='call-text'>+234 6707653444</p>
                </div>

                <div className="address">
                    <img src={address} className="call" alt="address" />
                    <p className='call-text'>27, Alara Street <br />Yaba 100012 <br />Lagos State</p>
                </div>
         
            </div>
            
        </div>
         <p className="all-right">All rights reserved. Copyright &copy;getlinked Ltd</p>
        </>
    )
}

export default Footer;