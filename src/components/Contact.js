import React, {useState} from 'react';
import socialmedia from '../assets/socialmedia.png';
import star from '../assets/star.png';
import star4 from '../assets/star4.png';
// import { useNavigate} from 'react-router-dom';
import axios from 'axios';


const baseUrl = 'https://backend.getlinked.ai';

const Contact = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [phone_number, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [first_name, setFirstName] = useState('');

  const user = {
    email: email,
    phone_number: phone_number,
    first_name: first_name, 
    message: message,
    
  };
  console.log('User object:', user);
 
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      await axios.post(`${baseUrl}/hackathon/contact-form`, {
        email,
        phone_number,
        first_name,
        message,
      });
      console.log('Form submitted successfully');
      setSuccess(true);
      setError('');
      // Clear the form fields after a successful submission
        setEmail('');
        setPhone('');
        setFirstName('');
        setMessage('');

    } catch (error) {
      console.error('Form submission failed', error);
    }
  }

    return(
        <div className='contact-section'> 
         <>
            <div>
               <div className='in-touch'>
               <img src={star4} className="star" alt='logo' />
                  <h2  className='getIn-touch'>Get in touch</h2>
                  <p className='techHackathon'>Contact <br />Information</p>
                  <p className='techHackathon'>27,Alara Street
                      Yaba 100012
                      Lagos State
                  </p>
                  <p className='techHackathon'>Call Us : 07067981819</p>
                  <p className='techHackathon'>we are open from Monday-Friday<br />
                      08:00am - 05:00pm</p>
                </div>

                <div className="follow-us share">
                    <h4>Share on</h4>
                    <img src={socialmedia} className="socialmedia-img"alt="socialmedia" />
                </div>
                <img src={star4} className="star-image" alt='logo' />
            </div>
                         
            <div className='form-section'>
                {error && <div className="error">{error}</div>}
                {success && (
                  <div className="success">Message sent!</div>
                )}
                <h4 className='assistance'>Questions or need Assistance?<br />Let us know!</h4>
                <p className='techHackathon hidden'>Email us below to any question related <br /> 
                to our  event</p>
                <img src={star} className="star-image" alt='logo' />
                <form onSubmit={handleSubmit}>
                <input
                  className="input-name"
                  type="email"
                  id="Mail"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                    />


                    <input
                  className="input-name"
                  type="text"
                  id="first_name"
                  required
                  placeholder="First Name"
                  value={first_name}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                 
          
                    />

                <input
                    className="input-name"
                    type="number"
                    id="phone"
                    required
                    placeholder="Enter your phone number"
                    value={phone_number}
                    onChange={(e) => {setPhone(e.target.value);
                    }}
                        />

                <textarea 
                    className="textarea"
                    type="text"
                    id="message"
                    required
                    placeholder="Message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    />
              
                 <button className='contact-btn'>Submit</button>
                  
                 <img src={star} className="star-image" alt='logo' />
                </form>
            </div>
          </>
        </div>
        
        
       
       
    )
}

export default Contact;