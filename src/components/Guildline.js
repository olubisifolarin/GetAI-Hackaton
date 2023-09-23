import React from "react";
import logo1 from '../assets/logo1.png';


const Guildline = () =>{
    return(
        <div>
            <div className='rules'>
                <div className="guide">
                    <h2 className='guildline'>Rules and<br /> <span className='linked'>Guildlines</span></h2>
                    <p className='techHackathon'>
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as<br />
                    clear as day: to shape the future. Whether you're a coding genius, a <br />
                    design maverick, or a concept wizard, you'll have the chance to transform <br /> 
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!
                    </p>
                </div>

                <div className='guild-Img'>
                    <img src={logo1} className="guideImg" alt='rules-img' />
                </div>
            </div>
            <hr className="nav-line" />

        </div>
    )
}

export default Guildline;