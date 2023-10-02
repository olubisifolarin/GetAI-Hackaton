import React from 'react';
import logo2 from '../assets/logo2.png';
import star from '../assets/star.png';
import star4 from '../assets/star4.png';
import Ellipse from '../assets/Ellipse.png';


const Overview = () => {
    return(
        <>
        <div className='rules-guide'>
            <div className='criteria'>
                <div className='criteriaImg'>
                    <img src={star4} className="star-judge animate__animated animate__flash star" alt='logo' />
                    <img src={Ellipse} className="ellipse" alt='logo' />
                    <img src={logo2} className="crite-img" alt='rules-img' />
                </div>
                
                <div className='Judge'>
                    <img src={star} className="animate__animated animate__flash star" alt='logo' />
                    <h2 className='judging-criteria'>Judging Criteria<br /><span className='linked'>Key attributes</span></h2>
                    <p className='techHackathon'><span>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the<br />
                        solution. Consider whether it addresses a real-world problem in a novel <br />
                        way or introduces innovative features.
                    </p>

                    <p className='techHackathon'>
                    <span>Functionality:</span> Assess how well the solution works. Does it perform its <br />
                    intended functions effectively and without major issues? Judges would<br />
                    consider the completeness and robustness of the solution.
                    </p>

                    <p className='techHackathon'>
                    <span>Impact and Relevance:</span> Determine the potential impact of the solution <br />
                    in the real world. Does it address a significant problem, and is it relevant <br />
                    to the target audience? Judges would assess the potential social, <br />
                    economic, or environmental benefits.
                    </p>

                    <p className='techHackathon'>
                    <span>Technical Complexity:</span> Evaluate the technical sophistication of the solution. <br />
                    Judges would consider the complexity of the code, the use of advanced <br />
                    technologies or algorithms, and the scalability of the solution.
                    </p>

                    <p className='techHackathon'>
                    <span>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered <br />
                    to the rules and guidelines of the hackathon, including deadlines, use of <br />
                    specific technologies or APIs, and any other competition-specific requirements.
                    </p>

                    <a href='/'><button className='judge-button'>Read More</button></a>
                    <img src={star} className="star-judge animate__animated animate__flash star" alt='logo' />
                </div>
                
                
                
                
            </div>
        
            <hr className="nav-line" />
        </div>
        </>
        
    )
}

export default Overview;