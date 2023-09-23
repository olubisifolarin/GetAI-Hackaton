import React from 'react';
import casual from '../assets/casual.png';
import ques1 from '../assets/ques1.png';
import ques2 from '../assets/ques2.png';
import ques from '../assets/ques.png';
import Faq from '../Data/Faq';



const FAQs = () => {
    return(
        <>
        <div>
            <div className='faqs'>
                <div>
                    <h2 className='frequently-ask'>Frequently Ask <br /> <span className='linked'>Questions</span></h2>
                    <p  className='techHackathon ptext'>
                    We got answers to the questions that you might<br />
                    want to ask about getlinked Hackathon 1.0
                    </p>
                    <Faq/>
                </div>

                <div className='casual'>
                    <div className='question-header'>
                        <img src={ques1} className="question-Img" alt='casual' />
                        <img src={ques} className="question" alt='casual' />
                        <img src={ques2} className="question-Img" alt='casual' />
                    </div>
                    
                    <img src={casual} className="casual-Img" alt='casual' />
                </div>
              
            </div>
            <hr className="nav-line" />
        </div>  
        </>
        
      
       
    )
}

export default FAQs;