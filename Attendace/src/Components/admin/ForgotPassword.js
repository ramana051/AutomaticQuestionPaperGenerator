import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Head from './Head';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const changeHandler = (e) => {
    setEmail(e.target.value);
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    try{
      const response=await axios.post('http://localhost:3001/send_otp', { email: email,number:'1'});
          if(response.data.message==='OTP sent successfully'){
            sessionStorage.setItem('email', email);
            alert('OTP sent successfully !')
            navigate('/TeacherOtp');
          }else{
            alert("User not Found ! Please SignUp")
            navigate('/TeacherSignup')
          }
    }catch(error){
        setError('Error sending OTP. Please try again.');
        console.error('Error sending OTP:', error);
        alert('Error sending OTP .Please try again later');
    }finally {
      setLoading(false);
  }
  }
  return (
    <div><Head />
    {loading && 
      <div className="loading-overlay loading">
      <div className="spinner-border text-warning"></div>
      <div className=' text-white '>Loading...</div>
    </div>}
      <div className='d-flex'>
        <div className='col-lg-7'></div>
          <div className='login_block col-lg-3 col-sm-12'>
            <h2>Login</h2>
            <form onSubmit={submitHandler} className=''>
              <span className=''>Email</span>
              <input type='email' className='myinputfield' placeholder='****@gmail.com' name='email' onChange={changeHandler} required />
              <input type="submit" value='Submit' className='login_btn m-4' />
            </form>
          </div>
        <div className='col-lg-2'></div>
      </div>
    </div>
  );
};
export default ForgotPassword;