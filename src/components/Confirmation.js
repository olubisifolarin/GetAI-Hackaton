import React from "react";
import congratulation from '../assets/congratulation.png';
import emoji from '../assets/emoji.png';


const Confirmation = () =>{
    return(
        <div className="confirm">
            <img src={congratulation} className="congrat-img" alt="confirmation" />
            <h2 className="congrats">Congratulations<br /> you have sucessfully registered!</h2>
            <div className="emoji-text">
                <p className='techHackathon confirm-text'>Yes, it was easy and you did it! Check your email box for next step</p>
                <img src={emoji} className="emoji"alt="emoji" />
            </div>
            
            <button className="confirm-btn">Back</button>
        </div>
    )
}

export default Confirmation;