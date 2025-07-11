// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Head from './Head';

// const TeacherLogin = () => {
//   const [data, setdata] = useState({ email: "", password: "" });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const wait = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

//   const onchangehandler = (e) => {
//     setdata({ ...data, [e.target.name]: e.target.value });
//   }

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await wait(2000);

//       const response = await axios.post('http://localhost:3001/login_data', data);
//       if (response.data.email === data.email) {
//         alert('Login successful');
//         navigate('/Newfile');
        
//       }
//       else {
//         alert(response.data);
//       }
//       console.log(response.data.name)
//       sessionStorage.setItem('user', response.data.name);
//     } catch (error) {
//       setError('Sign-in failed. Please check your credentials.');
//       console.error('Error signing in:', error);
//       alert('User not exist .Please SignUp');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <body>
//       <div><Head />
//         {loading &&
//           <div className="loading-overlay loading">
//             <div className="spinner-border text-warning"></div>
//             <div className=' text-white '>Loading...</div>
//           </div>
//         }
//         <div className='d-flex'>
//           <div className='col-lg-7 col-sm-1'></div>
//           <div className=' login_block col-lg-3 col-sm-10  '>
//             <h2>Login</h2>
//             <form onSubmit={submitHandler}>
//               <span className=' text-start '>Email</span>
//               <input type='email' className='myinputfield' name='email' placeholder='****@gmail.com' onChange={onchangehandler} required />
//               <span className=' text-start '>&nbsp;&nbsp;&nbsp;&nbsp;Password</span>
//               <input type='password' className='myinputfield' name='password' placeholder='********' onChange={onchangehandler} required />
//               <a href='ForgotPassword' className='forgot_btn'>Forgot password?</a>
//               <div className='spacer'></div>
//               <input type="submit" value='Login' className='login_btn mt-3' />
//             </form>
//             <p className='mt-2  text-center'>You don’t have account?<a href="TeacherSignup">Signup</a> </p>
//           </div>

//           <div className='col-lg-2 col-sm-1'></div>
//         </div>
//       </div>
//     </body>
//   );
// }

// export default TeacherLogin;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Head from './Head';

const TeacherLogin = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onchangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3001/login_data', data);

      if (response.data.email === data.email) {
        alert('Login successful');
        sessionStorage.setItem('user', response.data.name); // Set session storage
        navigate('/Newfile');
      } else {
        alert(response.data);
      }
    } catch (error) {
      setError('Sign-in failed. Please check your credentials.');
      console.error('Error signing in:', error);
      alert('User does not exist. Please Sign Up.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div> 
      <Head />
      {loading && (
        <div className="loading-overlay loading">
          <div className="spinner-border text-warning"></div>
          <div className="text-white">Loading...</div>
        </div>
      )}
      <div className="d-flex">
        <div className="col-lg-7 col-sm-1"></div>
        <div className="login_block col-lg-3 col-sm-10">
          <h2>Login</h2>
          <form onSubmit={submitHandler}>
            <span className="text-start">Email</span>
            <input
              type="email"
              className="myinputfield"
              name="email"
              placeholder="****@gmail.com"
              onChange={onchangeHandler}
              required
            />
            <span className="text-start">&nbsp;&nbsp;&nbsp;&nbsp;Password</span>
            <input
              type="password"
              className="myinputfield"
              name="password"
              placeholder="********"
              onChange={onchangeHandler}
              required
            />
            <a href="ForgotPassword" className="forgot_btn">Forgot password?</a>
            <div className="spacer"></div>
            <input type="submit" value="Login" className="login_btn mt-3" />
          </form>
          <p className="mt-2 text-center">
            You don’t have an account? <a href="TeacherSignup">Signup</a>
          </p>
        </div>
        <div className="col-lg-2 col-sm-1"></div>
      </div>
    </div>
  );
};

export default TeacherLogin;
