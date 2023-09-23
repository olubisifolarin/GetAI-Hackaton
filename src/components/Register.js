import React, {useState} from 'react';
import register from '../assets/register.png';
import move from '../assets/move.png';
import SelectOption from '../Data/SelectOption';
import Select from '../Data/Select';
import { registerUser } from '../APIs/Registration';
import Confirmation from './Confirmation';
import axios from 'axios';



const Register = () => {
  const [teamname, setTeamName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');
  const [phone, setPhone] = useState('');
  const [group, setGroup] = useState('');
  const [category, setCategory] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [error, setError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState(false);
  
   

  const baseUrl = 'https://backend.getlinked.ai'

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform validation checks
    if (!teamname || !project || !email || !phone || !group || !category || !privacy) {
      setError('All fields are required, and Privacy Policy must be accepted.');
      return;
    }
    setError('');

    const user = {
      team_name: teamname,
      phone_number: phone,
      email: email,
      category: category,
      project_topic:project,
      group_size: group,

    };
    
    registerUser(user)
    console.log('User object:', user);
    return axios
    .post(
      `${baseUrl}/hackathon/registration`,
      registerUser,
    )
    .then((response) => {
      // Handle successful registration here
      console.log('User registered successfully:', response.data);
      setRegisterSuccess(true);
    })
    .catch((error) => {
      // Handle registration errors here
      setError('No Server Response');
      console.error('Registration Error:', error);
    });

  }
    

    return(
        <>
          <div className='register-section'> 
            <div>
                <img src={register} className='register-img' alt='register' />
            </div>             
                
            <div>
                <form className='registration'>
                {error && <div className="error">{error}</div>}
                {registerSuccess && (
                    <Confirmation />
                )}
                    <h2 className='assistance register'>Register</h2>
                    <img src={move} className='move' alt='movement'/>
                    <p className='techHackathon account'>CREATE YOUR ACCOUNT</p>
                    <div className='input-container'>
                        <div className='wrapper'>
                            <div className=''>
                                <label className="input-wrapper" htmlFor="teamName">
                                Team Name{' '}
                                </label>
                                <input className="register-input"
                                    type="text"
                                    id="teamName"
                                    required
                                    placeholder="Enter the name of your group"
                                    value={teamname}
                                    onChange={(e) => {
                                        setTeamName(e.target.value);
                                    }}
                                />
                            </div>

                            <div className=''>
                                <label className="input-wrapper" htmlFor="phone">
                                    Phone{' '}
                                    </label>
                                    <input
                                        className="register-input"
                                        type="number"
                                        id="phone"
                                        required
                                        placeholder="Enter your phone number"
                                        value={phone}
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                        }}
                                            />
                            </div>
                        </div>
                        
                        
                        <div className='wrapper'>
                            <div className=''>
                                <label className="input-wrapper" htmlFor="email">
                                Email{' '}
                                </label>
                                <input
                                className="register-input"
                                type="email"
                                id="email"
                                required
                                placeholder="Enter your Email address"
                                value={email}
                                onChange={(e) => {
                                setEmail(e.target.value);
                                }}
                                />
                            </div>
                            <div className=''>
                                <label className="input-wrapper" htmlFor="project">
                                    Project Topic{' '}
                                    </label>
                                    <input
                                    className="register-input"
                                    type="text"
                                    id="project"
                                    required
                                    placeholder="What is your group project topic"
                                    value={project}
                                    onChange={(e) => {
                                    setProject(e.target.value);
                                    }}
                                    />
                                
                            </div>
                        </div>
                        
                    
                    <div className="wrapper">
                        <div className="input-wrapper">
                            <label className="" htmlFor="Category">
                                Category{' '}
                            </label>
                            <SelectOption  
                                onChange={(e) => {
                                    setCategory(e.target.value);
                              }} 
                            />
                        </div>
                            
                        <div className="input-wrapper label">
                            <label className="" htmlFor="group">
                                Group Size{' '}
                            </label>
                            <Select 
                                onChange={(e) => {
                                    setGroup(e.target.value);
                                  }}
                            />
                        </div>
                    </div>
                </div>
                    

                    <p  className='review'>Please review your registration details before submitting</p>
                    <div className='input-check'>
                        <input name="checkbox" className="checkbox"  type="checkbox" required
                        checked={privacy}
                        onChange={(e) => setPrivacy(!privacy)}
                        />
                        <p className='techHackathon agreed'>I agreed with the event terms and conditions  and privacy policy</p>
                    </div>

                

                    <button onClick={handleRegister} className='register-button'>Submit</button>
                </form>
            </div>
        </div>
        </>
      
        
    )
}

export default Register;