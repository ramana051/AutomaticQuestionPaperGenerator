// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios';
// import Head from './Head';

// const Teachersignup = () => {
//     const [data, setdata] = useState({ name: "", id: "", otp: "", gender: "male", department: "cme", email: "", password: "", cpassword: "" });
//     const navigate = useNavigate();
//     const [loading, setLoading] = useState(false);
//     // const wait = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));


//     const onchangehandler = (e) => {
//         setdata({ ...data, [e.target.name]: e.target.value })
//     }

//     const submitHandler = async (e) => {
//         e.preventDefault();

//         if (data.cpassword !== data.password) {
//             alert("Password doesn't match");
//         } else if (data.password.length < 8) {
//             alert("Password should be a minimum of 8 characters");
//         } else {
//             setLoading(true);

//             try {
//                 const response = await axios.post("http://localhost:3001/teachersignup", data);
//                 console.log('Data sent successfully:', response.data);
//                 if(response.data=='Restricted'){
//                     setLoading(false);
//                     alert('Restricted User');
//                 }else{
//                 alert("Login succesfully");
//                 setLoading(false);
//                 navigate('/');
//                 }
//             } catch (error) {
//                 console.error('Error sending data:', error);

//                 if (error.response && error.response.status === 404) {
//                     alert("User already exists");
//                     setLoading(false);

//                 } else {
//                     alert("An error occurred while processing your request");
//                     setLoading(false);
//                 }
//             }
//         }
//     };

//     return (
//         <body>
//             <div><Head />
//                 <div className='d-flex'>
//                     <div className='col-lg-4'></div>
//                     <div className='col-lg-4 col-sm-12'>
//                         <form onSubmit={submitHandler}>
//                             {loading &&
//                                 <div className="loading-overlay loading">
//                                     <div className="spinner-border text-warning"></div>
//                                     <div className=' text-white '>Loading...</div>
//                                 </div>}
//                             <div className='signup_block rounded-4'>
//                                 <h2>SIGN UP</h2>
//                                 <div className='d-flex'>
//                                     <div class="col-lg-6">
//                                         <span>Name</span>
//                                         <input type="text" name="name" className='select' placeholder='enter name' required onChange={onchangehandler} />
//                                         <span>Enter OTP</span>
//                                         <input type="text" name="otp" className='select' placeholder='****' required onChange={onchangehandler} />
//                                         <span><label for name="gender">Gender</label></span>
//                                         <span><select name="gender" id='gender' class="select mb-3 p-1" required onChange={onchangehandler}>
//                                             <option value="male">MALE</option>
//                                             <option value="female">FEMALE</option>
//                                             <option value="others">OTHERS</option>
//                                         </select></span><br />
//                                         <span>Password</span>
//                                         <input type="password" name="password" className='select' placeholder='*******' required onChange={onchangehandler} />
//                                     </div>
//                                     <div class="col-lg-6">
//                                         <span>Roll Number</span>
//                                         <input type="text" name="id" className='select' placeholder='****-**-****' required onChange={onchangehandler} />
//                                         <span>Email</span>
//                                         <input type="email" name="email" className='select' placeholder='****@gmail.com' required onChange={onchangehandler} />
//                                         <span><label for name="dept">Department</label></span>
//                                         <span><select name="department" id='department' class="select mb-3 p-1" onChange={onchangehandler}>
//                                             <option value="cme">CME</option>
//                                             <option value="eee">EEE</option>
//                                             <option value="ece">ECE</option>
//                                             <option value="arc">ARC</option>
//                                             <option value="civ">CIV</option>
//                                             <option value="mech">MECH</option>
//                                         </select></span><br />
//                                         <span>Confrim Password</span>
//                                         <input type="password" name="cpassword" className='select' placeholder='*******' required onChange={onchangehandler} />

//                                     </div>
//                                 </div>
//                                 <div class="text-center">
//                                     <input type="submit" value='SignUp' className='login_btn ' />
//                                     <p>you have account? <a href="/">login</a></p>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                     <div className='col-lg-4'></div>
//                 </div>
//             </div>
//         </body>
//     );
// }
// export default Teachersignup;