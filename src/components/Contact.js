import React, {useState, useEffect} from 'react';
import socialmedia from '../assets/socialmedia.png';
// import { useNavigate} from 'react-router-dom';
import axios from 'axios';


const baseUrl = 'https://backend.getlinked.ai'

const Contact = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    email: '',
    message: '',
    // phone_number: '',
  });

  
  useEffect(() => {
    axios.post(`${baseUrl}/hackathon/contact-form`)
      .then((response) => response.json())
      .then((data) => {
        setFormData(data);
        console.log('Form submitted successfully');
        setSuccess(true);
        setError('');
      })
      .catch((error) => {
        console.error('Form submission failed', error);
        setError('Form submission failed')
        
      });
  }, []); 

  const handleSubmit = (e) => {
    e.preventDefault();
    }
  
  const handleChange = (e, fieldName) => {
    // Destructure 'name' and 'value' from e.target
    const { value } = e.target;
  
    // Update the state based on the fieldName
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };
  

  // const navigate = useNavigate('/');
  // navigate('/')  

    return(
        <div className='contact-section'> 
         <>
            <div>
               <div className='in-touch'>
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

                <div className="follow-us">
                    <h4>Share on</h4>
                    <img src={socialmedia} className="socialmedia-img"alt="socialmedia" />
                </div>
            </div>

            <div className='form-section'>
                  {error && <div className="error">{error}</div>}
                {success && (
                  <div className="success">Message sent!</div>
                )}
                <h4 className='assistance'>Questions or need Assistance?<br />Let us know!</h4>
                <p className='techHackathon hidden'>Email us below to any question related <br /> 
                to our  event</p>
                <form onSubmit={handleSubmit}>
                    <input
                  className="input-name"
                  type="text"
                  id="firstName"
                  required
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={(e) => handleChange(e, 'first_name')} 
          
                    />

                    <input
                  className="input-name"
                  type="email"
                  id="Mail"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleChange(e, 'email')}
                    />

                {/* <input
                    className="input-name"
                    type="number"
                    id="phone"
                    required
                    placeholder="Enter your phone number"
                    value={formData.phone_number}
                    onChange={(e) => handleChange(e, 'phone_number')}
                   
                        /> */}

                <textarea 
                    className="input-name textarea"
                    type="text"
                    id="Subject"
                    required
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => handleChange(e, 'message')}
                    />
              
                 <button className='contact-btn'>Submit</button>
                  
              
                </form>
            </div>
          </>
        </div>
        
        
       
       
    )
}

export default Contact;