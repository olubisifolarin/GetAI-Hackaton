import React, {useState} from 'react';
import register from '../assets/register.png';
import move from '../assets/move.png';
import star from '../assets/star.png';
import star4 from '../assets/star4.png';
import SelectOption from '../Data/SelectOption';
import Select from '../Data/Select';
// import { registerUser } from '../APIs/Registration';
import Confirmation from './Confirmation';
import axios from 'axios';


const baseUrl = 'https://backend.getlinked.ai';

const Register = () => {
  const [teamname, setTeamName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');
  const [phone, setPhone] = useState('');
  const [Category, setCategory] = useState('');
  const [Group, setGroup] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [error, setError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState(false);
  
  const user = {
    team_name: teamname,
    phone_number: phone,
    email: email,
    category: Category,
    project_topic:project,
    group_size: Group,
  }; 

  console.log('User object:', user)
  const handleRegister = async(e) => {
    e.preventDefault();

    try{
        await axios.post(
        `${baseUrl}/hackathon/registration`,{
            teamname,
            phone,
            email,
            Category,
            project,
            Group,
        });
        console.log('User registered successfully:');
        setRegisterSuccess(true);
        setError('')
    } catch (error) {
        setError('An error occurred while registering.');
        console.error('Form submission failed', error);
      }
    }
    
    return(
        <>
          <div className='register-section'> 
            <div>
                <img src={star4} className="star-image" alt='logo' />
                <img src={star} className="star" alt='logo' />
                <img src={register} className='register-img' alt='register' />
              
            </div>             
           
            <div>
            <img src={star} className="star-image" alt='logo' />
                <form className='registration'>
                {error && <div className="error">{error}</div>}
                {registerSuccess && (
                    <Confirmation />
                )}
                    <img src={star4} className="star" alt='logo' />
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
                        <input name="privacy" className="checkbox"  type="checkbox" required
                        checked={privacy}
                        onChange={() => setPrivacy(!privacy)}
                        />
                        <p className='techHackathon agreed'>I agreed with the event terms and conditions  and privacy policy</p>
                    </div>

                

                    <button onClick={handleRegister}  disabled={!privacy} className='register-button'>Submit</button>
                    <img src={star} className="star" alt='logo' />
                </form>
            </div>
        </div>
        </>
      
        
    )
}

export default Register;