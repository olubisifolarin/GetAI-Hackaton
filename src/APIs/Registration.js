import axios from 'axios';



// Function to handle the user registration API request
export const registerUser = async (user) => {
  const registrationData = JSON.stringify(user);

  return axios
    .post(
      '{{baseUrl}}/hackathon/registration',
      registrationData,
  
    )
    .then((response) => response.data) // Extract the response data
    .catch((error) => {
      // Handle registration errors here
      throw error;
    });
};
