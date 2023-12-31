import React from "react";
import Theidea from '../assets/Theidea.png';
import star4 from '../assets/star4.png';
import arrow from '../assets/arrow.png';

const Intro = () => {
    return(
        <div className="">
        <div className='Big-idea'>
                <div>
                    <img src={star4} className="intro-star animate__animated animate__flash star" alt='logo' />
                    <img src={Theidea} className='idea' alt='idea' />
                    <img src={arrow} className="arrow" alt='logo' />
                </div>
                <div className='introduction'>
                    <h2 className='getlink-intro'>Introduction to getlinked<br /><span className='linked'>techHackaton 1.0</span></h2>
                    <p className='techHackathon'>Our tech hackathon is a melting pot of visionaries, and its purpose is as<br />
                        clear as day: to shape the future. Whether you're a coding genius, a <br />
                        design maverick, or a concept wizard, you'll have the chance to transform < br />
                        your ideas into reality. Solving real-world problems, pushing the boundaries <br />
                        of technology, and creating solutions that can change the world, <br />
                        that's what we're all about!
                    </p>
                    <img src={star4} className="animate__animated animate__flash star" alt='logo' />
                </div>
            </div>
            <hr className="nav-line" />
        </div>
    )
}

export default Intro;