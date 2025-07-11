// // import React, { useState } from 'react'
// // import { useNavigate } from 'react-router-dom'
// // import axios from 'axios';

// // const StudentLogin = () => {
// //   const [data, setdata] = useState({ email: "", password: "" });
// //   const [error, setError] = useState('');
// //   const navigate=useNavigate();
  
// //   const onchangehandler = (e) => {
// //     setdata({ ...data, [e.target.name]: e.target.value })
// //   }

// //   const submitHandler= async(e) => {
// //     e.preventDefault();
// //     console.log(data,"data")
// //     try {
// //       const response = await axios.post('http://localhost:3001/login_data', data);
// //       console.log('User authenticated:', response.data);
// //       alert('login successfull');
// //       navigate('/studentotp');
// //       // Redirect to the next page or take action on successful sign-in.
// //     } catch (error) {
// //       setError('Sign-in failed. Please check your credentials.');
// //       console.error('Error signing in:', error);
// //     }
// //   }
// //   return (
// //     <div className='login_block' >
// //       <form onSubmit={submitHandler}>
// //         <h2>Login</h2>
// //         <div><input type="radio" name="signup" value="student" />
// //           <lable for="student" className='label-padding'>Student</lable>
// //           <input type="radio" name="signup" value="teacher" />
// //           <lable for="teacher">Faculty</lable></div>
// //           <span>Email</span><br></br><input type='email' className='myinputfield' name='email' onChange={onchangehandler} required/> <br></br>
// //           <span>&nbsp;&nbsp;&nbsp;&nbsp;password</span>  <br></br><input type='password' className='myinputfield' name='pass' onChange={onchangehandler} required/> <br></br>
// //           <input type="button" value='forgot password?' className='forgot_btn' /> <br></br> <br></br>
// //           <input type="submit" value='Login'  className='login_btn' />
// //         </form>
// //         <div class="login_button">
// //           <p>you have account? <a href="Student_signup">signup</a></p>
// //         </div>
// //     </div>

// //   )
// // }

// // export default StudentLogin

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const StudentLogin = () => {
//   const [data, setdata] = useState({ email: "", password: "" });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const onchangehandler = (e) => {
//     setdata({ ...data, [e.target.name]: e.target.value });
//   }

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     console.log(data, "data");
    
//     try {
//       const response = await axios.post('http://localhost:3001/login_data', data);
//       console.log('User authenticated:', response.data);
//       alert('Login successful');
//       navigate('/StudentOtp');
//       // Redirect to the next page or take action on successful sign-in.
//     } catch (error) {
//       setError('Sign-in failed. Please check your credentials.');
//       console.error('Error signing in:', error);
//       alert('invaild input');
//     }
  
//     await axios.post('http://localhost:3001/send_otp', { email: data.email })
//       .then((response)=>{
//       console.log('OTP response:', response.data);
//       const otp = response.data;
//       localStorage.setItem('otp', otp.otp);
//       // navigate('/StudentOtp');
//     })
//      .catch ((error) =>{
      
//       setError('Error sending OTP. Please try again.');
//       console.error('Error sending OTP:', error);
//     });
//   }
//   //   try {
//   //     const response = await axios.post('http://localhost:3001/login_data', data);
//   //     console.log('User authenticated:', response.data);
//   //     alert('Login successful');
//   //     navigate('/StudentOtp');
//   //     // Redirect to the next page or take action on successful sign-in.
//   //   } catch (error) {
//   //     setError('Sign-in failed. Please check your credentials.');
//   //     console.error('Error signing in:', error);
//   //   }
//   // }

//   return (
//     <div className='login_block'>
//       <form onSubmit={submitHandler}>
//         <h2>Login</h2>
//         <div>
//           <input type="radio" name="userType" value="student" />
//           <label htmlFor="student" className='label-padding'>Student</label>
//           <input type="radio" name="userType" value="teacher" />
//           <label htmlFor="teacher">Faculty</label>
//         </div>
//         <span>Email</span><br></br>
//         <input type='email' className='myinputfield' name='email' onChange={onchangehandler} required/><br></br>
//         <span>&nbsp;&nbsp;&nbsp;&nbsp;Password</span><br></br>
//         <input type='password' className='myinputfield' name='password' onChange={onchangehandler} required/><br></br>
//         <input type="button" value='Forgot Password?' className='forgot_btn' /><br></br><br></br>
//         <input type="submit" value='Login' className='login_btn' />
//       </form>
//       <div className="login_button">
//         <p>You have an account? <a href="Student_signup">Signup</a></p>
//       </div>
//     </div>
//   );
// }

// export default StudentLogin;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StudentLogin = () => {
  const [data, setdata] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onchangehandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(data, "data");

    try {
      const response = await axios.post('http://localhost:3001/login_data', data);
      console.log('User authenticated:', response.data);
      alert('Login successful');
      navigate('/StudentOtp');
    } catch (error) {
      setError('Sign-in failed. Please check your credentials.');
      console.error('Error signing in:', error);
      alert('Invalid input');
    }

    await axios.post('http://localhost:3001/send_otp', { email: data.email })
      .then((response) => {
        console.log('OTP response:', response.data);
        const otp = response.data;
        sessionStorage.setItem('otp', otp.otp);
      })
      .catch((error) => {
        setError('Error sending OTP. Please try again.');
        console.error('Error sending OTP:', error);
      });
  }

  return (
    <div className='login_block'>
      <form onSubmit={submitHandler}>
        <h2>Login</h2>
        <div>
          <input type="radio" name="userType" value="student" />
          <label htmlFor="student" className='label-padding'>Student</label>
          <input type="radio" name="userType" value="teacher" />
          <label htmlFor="teacher">Faculty</label>
        </div>
        <span>Email</span><br></br>
        <input type='email' className='myinputfield' name='email' onChange={onchangehandler} required /><br></br>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;Password</span><br></br>
        
        <input
          type={showPassword ? 'text' : 'password'}
          className='myinputfield'
          name='password'
          onChange={onchangehandler}
          required
        />
        <span className='eye-icon' onClick={togglePasswordVisibility}>
          {showPassword ? '👁️' : '👁️'}
        </span>
        <br></br>
        <input type="button" value='Forgot Password?' className='forgot_btn' /><br></br><br></br>
        <input type="submit" value='Login' className='login_btn' />
      </form>
      <div className="login_button">
        <p>You have an account? <a href="Student_signup">Signup</a></p>
      </div>
    </div>
  );
}

export default StudentLogin;
