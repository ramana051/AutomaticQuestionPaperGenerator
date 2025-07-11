import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Head from './Head';

const TeacherOtp = () => {
  const [data, setData] = useState({ number1: '', number2: '', number3: '', number4: '' });
  const [enteredData, setEnteredData] = useState({ email: "", enteredOtps: "" });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    // Move to the next input when a digit is entered
    if (value && value.length === 1) {
      const nextInput = document.getElementById(getNextInputId(name));
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    enteredData.email = sessionStorage.getItem('email');
    enteredData.enteredOtps = Object.values(data).join('');
    console.log(enteredData);
    try {
      const response = await axios.post('http://localhost:3001/otpValidation', enteredData);
      if (response.data === "login success") {
        alert(response.data);
        navigate('/UpdatePassword');
      } else {
        alert(response.data);
      }
    } catch (error) {
      console.error("validation erroe:", error);
    }


  };

  // Utility function to get the ID of the next input
  const getNextInputId = (currentInput) => {
    const inputOrder = ['number1', 'number2', 'number3', 'number4'];
    const currentIndex = inputOrder.indexOf(currentInput);
    const nextIndex = currentIndex < inputOrder.length - 1 ? currentIndex + 1 : currentIndex;
    return inputOrder[nextIndex];
  };

  return (
    <div><Head />
      <div className='d-flex justify-content-center'>
        <div className='col-lg-7'></div>
          <div className='otp_block text-center  col-lg-3 col-sm-5 col-md-5'>
            <h2 className='mt-2'>OTP</h2>
            <form onSubmit={submitHandler}>
              <p className='otp_msg'>Please enter the verification code sent to your email address</p>
              <input
                type='text'
                name='number1'
                id='number1'
                className='otp_input'
                onChange={changeHandler}
                maxLength="1"
              />
              <input
                type='text'
                name='number2'
                id='number2'
                className='otp_input'
                onChange={changeHandler}
                maxLength="1"
              />
              <input
                type='text'
                name='number3'
                id='number3'
                className='otp_input'
                onChange={changeHandler}
                maxLength="1"
              />
              <input
                type='text'
                id='number4'
                className='otp_input'
                onChange={changeHandler}
                maxLength="1"
              />
              <div className='spacer'></div>
              <input type="submit" value='Submit' className='login_btn m-4' />
            </form>
          </div>
        <div className='col-lg-2'></div>
      </div>
    </div>
  );
};

export default TeacherOtp;