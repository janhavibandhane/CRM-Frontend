import { useState } from "react";
import HomeLoginSigninReuseCompo from "../HomeReuseableComponents/HomeLoginSigninReuseCompo";
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
       <>
       <HomeLoginSigninReuseCompo
       item1={<>Change Password</>}
       item2={<>
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
       </>}
       item3={handleSubmit}
       item4={<>Submit</>}
       ></HomeLoginSigninReuseCompo>
       </>
    )
}
export default ChangePassword;