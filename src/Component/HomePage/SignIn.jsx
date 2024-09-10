import { useState } from 'react';

function SignIn() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    photo: null,
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
    <div className='bg-gradient-to-r from-blue-200 via-purple-100 to-pink-200 min-h-screen flex items-center justify-center'>
     <form onSubmit={handleSubmit} className='bg-gradient-to-br from-white via-blue-50 to-blue-100 p-8 shadow-xl rounded-lg w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-6'>Sign In</h1>
        <div className='mb-4'>
          <label htmlFor='fullName' className='block text-gray-700 font-bold mb-2'>Full Name</label>
          <input
            type='text'
            id='fullName'
            name='fullName'
            value={formData.fullName}
            onChange={handleChange}
            className='w-full p-2 border border-gray-300 rounded'
            required
          />
        </div>
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
        <div className='mb-4'>
          <label htmlFor='photo' className='block text-gray-700 font-bold mb-2'>Upload Photo</label>
          <input
            type='file'
            id='photo'
            name='photo'
            onChange={handleChange}
            className='file-input file-input-bordered w-full max-w-xs'
          />
        </div>
        <button
          type='submit'
          className='bg-blue-400 text-white p-2 rounded w-full font-bold'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignIn;
