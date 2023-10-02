import React from "react";
import patner from '../assets/patner.png';
import star from '../assets/star.png';
import star4 from '../assets/star4.png';



const Partners = () =>{
    return(
        <>
        <div className="partner-section">
            <div>
                <div className="sponsor">
                    <h2 className=''>Partners and Sponspors</h2>
                        <p className='techHackathon partner-text'>
                        Getlinked Hackathon 1.0 is honored to have the following major<br /> 
                        companies as its partners and sponsors
                        </p>
                        <img src={star4} className="star-casual" alt='logo' />
                </div>
                
                <div className="Partner-img">
                    <img src={star4} className="star" alt='logo' />
                    <img src={patner} className="part-Img" alt="Partners" />
                    <img src={star} className="star" alt='logo' />
                </div>
                
            </div>
        </div>
        <hr className="nav-line"/>
        </>
    )
}

export default Partners;