import React from "react";
import cup from '../assets/cup.png';
import Rewards from '../assets/Rewards.png';



const Prize = () =>{
    return(
        <>
        <div className="price-section">
            <div className="cup-img">
                <img src={cup} className="cup" alt="cup" />
            </div>

            <div>
                <div className="reward">
                    <h2 className='price-reward'>Prize and<br /> <span className='linked'>Rewards</span></h2>
                        <p  className='techHackathon'>
                        Hightlight of the prizes or rewards for winners<br />
                        and participant
                        </p>
                </div>
                
                <div>
                    <img src={Rewards} className="rewardImg" alt="cup" />
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Prize;