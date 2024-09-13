import { useState } from "react";
function ChangePassword(){
    const [formData, setFormData] = useState({
 
        password: '',
        Newpassword: '',
       
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
         <form onSubmit={handleSubmit} className='bg-gradient-to-br from-white via-blue-50 to-blue-100 p-8 shadow-xl rounded-lg w-full max-w-md md:m-0 m-4'>
            <h1 className='text-2xl font-bold mb-6'>Change Password</h1>
     
            <div className='mb-4'>
              <label htmlFor='username' className='block text-gray-700 font-bold mb-2'>Old Password</label>
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
              <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>New Password</label>
              <input
                type='password'
                id='Newpassword'
                name='Newpassword'
                value={formData.Newpassword}
                onChange={handleChange}
                className='w-full p-2 border border-gray-300 rounded'
                required
              />
            </div>
           
    
    
            <button
              type='submit'
              className='bg-blue-400 text-white p-2 rounded w-full font-bold'
            >
              Change Password
            </button>
          </form>
        </div>
    )
}
export default ChangePassword;