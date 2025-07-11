import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom'
import axios from 'axios';

const Student_signup= () => {
    const [data, setdata] = useState({ name: "", student_id: "", phone: "", gender: "Male", dept: "cme", email: "", password: "", cpassword: "" });
    const Navigate = useNavigate();
    const onchangehandler=(e) =>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = async(e) => {
        e.preventDefault();
        console.log(data);
        if (data.cpassword !== data.password){
            alert("password doesn't match")
        }
        else if((data.name.length === 0)||(data.email.length===0)||(data.student_id.length<12)||(data.student_id.length>12)){
            alert("Invaild data")
        }
        else if (data.password.length < 8) {
            alert("password should minimum 8 CHARACTERS")
        }
        else if (data.phone.length < 10) {
            alert("invalid PHONE NUMBER !")
        }
        else if (data.phone.length > 10) {
            alert("invalid PHONE NUMBER !")
        }
        
        // else if(data.email.length===0){
        //     alert("Enter email")
        // }
        // else ifC{
        //     alert("Enter roll number ")
        // }
        else {
              e.preventDefault();
            await axios
            .post("http://localhost:3001/approve_data", data)
      .then((response) => {
        if (response.data === 'user already existed') {
          alert('User already exists in waiting list');
        } else {
          console.log('Data sent successfully:', response.data);
          Navigate('/');
          alert('Registration successful');
        }
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
            
            

        }
    }
    return (
        <body >
            <form onSubmit={submitHandler}>
            <div className='signup_block'>
                <h2>SIGN UP</h2>
                <div className='col row signup_align'>
                    <span><input type="radio" name="signup" value="student" />
                        <lable for="student" className='label-padding'>Student</lable>
                        <input type="radio" name="signup" value="teacher" />
                        <lable for="teacher">Faculty</lable></span>
                    <div class="col-6 signup ">
                  
                            <span>Name</span>
                            <input type="text" name="name" required onChange={onchangehandler}/>
                            <span>Phone Number</span>
                            <input type="text" name="phone" required onChange={onchangehandler}/>
                            <span><label for name="gender">Gender</label></span>
                            <span><select name="gender" id='gender' class="select" onChange={onchangehandler}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select></span><br />
                            <span>Password</span>
                            <input type="password" name="password" required onChange={onchangehandler}/>
                    
                    </div>
                    <div class="col-6 signup">
                        
                            <span>Roll Number</span>
                            <input type="text" name="student_id" required onChange={onchangehandler}/>
                            <span>Email</span>
                            <input type="email" name="email" required onChange={onchangehandler}/>
                            <span><label for name="dpeartment">Department</label></span>
                            <span><select name="department" id='department' class="select" onChange={onchangehandler}>
                                <option value="CME">CME</option>
                                <option value="EEE">EEE</option>
                                <option value="ECE">ECE</option>
                                <option value="ARC">ARC</option>
                                <option value="CIV">CIV</option>
                                <option value="MECH">MECH</option>
                            </select></span><br />
                            <span>Confrim Password</span>
                            <input type="password" name="cpassword" required onChange={onchangehandler}/>
                        
                    </div>
                    <div class="sign_btn">
                    <input type="submit" value='Signup'  className='login_btn' />
                        <p>you have account? <a href="/">login</a></p>
                    </div>
                </div>
               
            </div>
            </form>
        </body>
        
    );
}
export default Student_signup;