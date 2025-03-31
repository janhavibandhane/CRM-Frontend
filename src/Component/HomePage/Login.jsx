import { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeLoginSigninReuseCompo from '../HomeReuseableComponents/HomeLoginSigninReuseCompo';

function Login() {
  const [formData, setFormData] = useState({
 
    username: '',
    email: '',
    password: '',
   
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0], // Handle file input
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form Data:', formData);
    // For example, you might want to send formData to a server here
  };

  return (
    
      <HomeLoginSigninReuseCompo
      item1={<>Login</>}
      item2={<>        
      <div className='mb-4'>
        <label htmlFor='username' className='block text-gray-700 font-bold mb-2'>Username</label>
        <input
          type='text'
          id='username'
          name='username'
          value={formData.username}
          onChange={handleChange}
          className='w-full p-2 border border-gray-300 rounded'
          required
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          className='w-full p-2 border border-gray-300 rounded'
          required
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='password' className='block text-gray-700 font-bold mb-2'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          className='w-full p-2 border border-gray-300 rounded'
          required
        />
      </div>

      
      </>}
      item3={handleSubmit}
      item4={<><Link to={"/user"}>Submit</Link></>}
      ></HomeLoginSigninReuseCompo>
        
   
  );
}

export default Login;
