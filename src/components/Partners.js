import React from "react";
import patner from '../assets/patner.png';



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
                </div>
                
                <div className="Partner-img">
                    <img src={patner} className="part-Img" alt="Partners" />
                </div>
                
            </div>
        </div>
        <hr className="nav-line"/>
        </>
    )
}

export default Partners;