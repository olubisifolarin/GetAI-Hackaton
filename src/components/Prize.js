import React from "react";
import cup from '../assets/cup.png';
import Rewards from '../assets/Rewards.png';
import star from '../assets/star.png';
import star4 from '../assets/star4.png';



const Prize = () =>{
    return(
        <>
        <div className="price-section">
            <div className="cup-img">
                <img src={star4} className="star-image" alt='logo' />
                <img src={cup} className="cup" alt="cup" />
                <img src={star} className="star-casual" alt='logo' />
            </div>

            <div>
                <div className="reward">
                    <h2 className='price-reward'>Prize and<br /> <span className='linked'>Rewards</span></h2>
                        <p  className='techHackathon'>
                        Hightlight of the prizes or rewards for winners<br />
                        and participant
                        </p>
                        
                    <img src={star4} className="star-casual" alt='logo' />
                </div>
                
                <div>
                    <img src={Rewards} className="rewardImg" alt="cup" />
                    
                <img src={star} className="star-casual" alt='logo' />
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Prize;