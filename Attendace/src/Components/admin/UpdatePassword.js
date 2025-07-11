import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Head from './Head';

const UpdatePassword = () => {
  const [data, setData] = useState({ pass: "", conf_pass: "" });
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const email = sessionStorage.getItem('email');

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault()
    console.log(data, "data");
    if (data.pass !== data.conf_pass) {
      alert('password not matched')
    }
    else {
      await axios.put('http://localhost:3001/studentUpdatePassword', { email: email, new_pass: data.pass })
        .then((response) => {
          console.log('response:', response.data);
          alert('password changed successfully');
          navigate('/');
        })
        .catch((error) => {
          setError('Error updating password. Please try again.');
          console.error('Error updating password:', error);
        });
    }
  }

  return (
    <div><Head />
      <div className='d-flex justify-coontent-center'>
        <div className='col-lg-7'></div>
        <div className='col-lg-3 col-sm-12'>
          <div className='login_block'>
            <h2 className='mb-4'>Update Password</h2>
            <form onSubmit={submitHandler}>
              <span className='ms-3'>Password</span>
              <input type='password' className='myinputfield' placeholder='********' name='pass' onChange={changeHandler} required />
              <span className='ms-3'>&nbsp;&nbsp;&nbsp;&nbsp;Confirm_Password</span>
              <input type='password' className='myinputfield' name='conf_pass' placeholder='********' onChange={changeHandler} required />
              <button type='submit' value='Change Password' className='login_btn2 m-4'>Change Password</button>
            </form>
            
          </div>
        </div>
        <div className='col-lg-2'></div>
      </div>
    </div>
  );
};

export default UpdatePassword;