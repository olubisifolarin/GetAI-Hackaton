import React from 'react';
import Overview from "./Overview";
import FAQs from "./FAQs";
import Home from "./Home";
import Intro from "./Intro";
import Guildline from "./Guildline";
import Prize from "./Prize";
import Partners from "./Partners";
import Privacy from "./Privacy";
import star from '../assets/star.png';
import star4 from '../assets/star4.png';


const Timeline = () => {
    return(
        <>
        <Home />
        <Intro />
        <Guildline />
        <Overview />
        <FAQs />
        <div className='timeline-section'>
            <div className='timeline'>
                    <h2 className=''>Timeline</h2>
                    <p className='participate'>Here is the breakdown of the time we anticipate<br /> 
                        using for the upcoming event. </p>
            </div>

            <div className='Hackaton-announcement'>
                <div className='hack-Line'>
                    <div className='time-lining'>
                        <img src={star4} className="star-casual" alt='logo' />
                        <div className='announcement'>
                            <h4 className='announcement-text'>Hackathon Announcement</h4>
                            <p className='techHackathon announce'>
                            The getlinked tech hackathon 1.0 is formally announced <br />
                            to the general public and teams begin to get ready to register  
                            </p>
                        </div>

                        <div className='announcement'>
                            <h4 className='announcement-text'>November 18, 2023</h4>
                        </div>

                        <div className='announcement'>
                            <h4 className='announcement-text'>Teams Registration ends</h4>
                            <p className='techHackathon announce'>
                            Interested Participants are no longer Allowed to<br />
                            register
                            </p>
                        </div>

                        <div className='announcement'>
                            <h4 className='announcement-text'>November 18, 2023</h4>
                        </div>

                        <div className='announcement'>
                            <h4 className='announcement-text'>Getlinked Hackathon 1.0 Offically Begins</h4>
                            <p className='techHackathon announce'>
                            Accepted teams can now proceed to build their <br />
                            ground breaking skill driven solutions 
                            </p>
                        </div>

                        <div className='announcement'>
                            <h4 className='announcement-text'>November 18, 2023</h4>
                        </div>
                    </div>

                    <div className='timeline-line'>
                        <hr className='timeline-hrule'></hr>
                        <p>1</p>
                        <hr className='timeline-hrule'></hr>
                        <p>2</p>
                        <hr className='timeline-hrule'></hr>
                        <p>3</p>
                        <hr className='timeline-hrule'></hr>
                        <p>4</p>
                        <hr className='timeline-hrule'></hr>
                        <p>5</p>
                        <hr className='timeline-hrule'></hr>
                        <p>6</p>
                    </div>
                   
                    
                    
                    <div className='timeline-subtopic'> 
                        <div className='announcement'>
                            <h4 className='announcement-text'>Teams Registration begins</h4>
                            <p className='techHackathon announce'>
                            Interested teams can now show their interest in the<br />
                            getlinked tech hackathon 1.0 2023 by proceeding to register     
                            </p>
                        </div>
                        <img src={star} className="star-casual" alt='logo' />
                        <div className='announcement'>
                            <h4 className='announcement-text'>November 18, 2023</h4>
                        </div>

                        <div className='announcement'>
                            <h4 className='announcement-text'>Announcement of the accepted teams<br />announcement-text
                                and ideas</h4>
                            <p className='techHackathon announce'>
                            All teams whom idea has been accepted into getlinked tech<br />
                            hackathon 1.0 2023 are formally announced 
                            </p>
                        </div>

                        <div className='announcement'>
                            <h4 className='announcement-text'>November 18, 2023</h4>
                        </div>

                        <div className='announcement'>
                            <h4 className='announcement-text'>Demo day</h4>
                            <p className='techHackathon announce'>
                            Teams get the opportunity to pitch their projects to judges.<br />
                            The winner of the hackathon will also be announced on<br />
                            this day
                            </p>
                        </div>
                        <img src={star} className="animate__animated animate__flash star" alt='logo' />
                    </div>
                   
            </div>


                
            </div>
            {/* <hr className="nav-line" /> */}
        </div>
        <Prize />
        <Partners />
        <Privacy />
        </>
        
    )
}

export default Timeline;