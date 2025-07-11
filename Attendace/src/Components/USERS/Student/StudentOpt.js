// import React,{useState} from 'react';
// import { useNavigate } from 'react-router-dom';

// const StudentOtp= () => {
//     const [data, setData] = useState({ number1: '', number2: '', number3: '', number4: '' });
//     const otp = localStorage.getItem('otp');
//     const navigate=useNavigate();
  
//     const changeHandler = (e) => {
//       setData({ ...data, [e.target.name]: e.target.value });
//     }
  
//     const submitHandler = (e) => {
//       e.preventDefault();
//       // Combine the OTP digits
//       const entered_otp = data.number1 + data.number2 + data.number3 + data.number4;
//       console.log(entered_otp);
//       if(entered_otp===otp){
//         alert('Login successfully');
//         navigate('/AttendanceResults')
//       }
//       else{
//         alert('incorrect otp!')
//       }
//     }
//   return (
    
//     <div className='login_container'>
//       <div className='login_block'>
//         <h2>OTP</h2>
//         <form onSubmit={submitHandler}>
//           <p className='otp_msg'>Please enter the verification code sent to your email address</p>
//           <input type='text' name='number1' className='otp_input' onChange={changeHandler} maxLength="1"/>
//           <input type='text' name='number2' className='otp_input' onChange={changeHandler}maxLength="1"/>
//           <input type='text' name='number3' className='otp_input' onChange={changeHandler}maxLength="1"/>
//           <input type='text' name='number4' className='otp_input' onChange={changeHandler}maxLength="1"/>
//           <div className='spacer'></div>
//           <input type="submit" value='Submit' className='login_btn' />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default StudentOtp;

import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentOtp = () => {
  const [data, setData] = useState({ number1: '', number2: '', number3: '', number4: '' });
  const otp = sessionStorage.getItem('otp');
  const navigate = useNavigate();

  const inputRefs = {
    number1: useRef(null),
    number2: useRef(null),
    number3: useRef(null),
    number4: useRef(null),
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));

    // Move to the next input field when a digit is entered
    if (value.length === 1 && inputRefs[name].current) {
      const nextInput = inputRefs[name].current.nextSibling;
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleKeyDown = (e, name) => {
    const prevInput = inputRefs[name].current.previousSibling;

    if (e.key === 'ArrowLeft' && prevInput) {
      prevInput.focus();
    } else if (e.key === 'ArrowRight') {
      const nextInput = inputRefs[name].current.nextSibling;
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredOtp = Object.values(data).join('');

    if (enteredOtp === otp) {
      alert('Login successful');
      navigate('/AttendanceResults');
    } else {
      alert('Incorrect OTP!');
    }
  };

  return (
    <div className='login_container'>
      <div className='login_block'>
        <h2>OTP</h2>
        <form onSubmit={submitHandler}>
          <p className='otp_msg'>Please enter the verification code sent to your email address</p>
          {Object.keys(data).map((name, index) => (
            <input
              key={name}
              type='text'
              name={name}
              className='otp_input'
              onChange={changeHandler}
              onKeyDown={(e) => handleKeyDown(e, name)}
              maxLength='1'
              ref={inputRefs[name]}
            />
          ))}
          <div className='spacer'></div>
          <input type='submit' value='Submit' className='login_btn' />
        </form>
      </div>
    </div>
  );
};

export default StudentOtp;
