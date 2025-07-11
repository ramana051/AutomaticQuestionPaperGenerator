import { useState } from "react"
import React from 'react'

const Todolist = () => {
    // const wait = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
    const [isPanelVisible1, setIsPanelVisible1] = useState(true);
    const [isPanelVisible2, setIsPanelVisible2] = useState(false);

    const togglePanel = async () => {
        setIsPanelVisible1(!isPanelVisible1);

        setIsPanelVisible2(!isPanelVisible2);

    };
    const submitHandler=(e)=>{
        
    }
    const egoHandler=(e)=>{

    }
    return (
        <>

            {/* <div className='slide' id="flip" value='togglePanel' > */}


                {/* sign-in */}
                {/* {isPanelVisible1 && (
                    <div className="d-flex h-100 shadow-container1">
                        <div className="col-6 sign-in shadow-element1">

                            <h1 className="text-white" >Welcome Back!</h1><br />
                            <p className="text-white">To keep connected with us<br /> please login with your personal info</p>
                        </div>
                        <div className="col-6">
                            <div className='d-flex'>
                                <div className='col-3'></div>
                                <div className='login_block col-7 shadow-container2'>
                                    <div className="col-12 shadow-element2">
                                        <h2>Login</h2>
                                        <form >
                                            <input type='email' className='myinputfield1' name='email' placeholder="      Email" required />

                                            <input type='password' className='myinputfield2' name='password' placeholder="      Password" required />
                                            <a href='ForgotPassword' className='forgot_btn'>Forgot password?</a>
                                            <div className='spacer'></div>
                                            <input type="submit" value='Sign in' className='login_btn mt-3' />
                                        </form>
                                        <p className='mt-2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You don’t have account?<a href="#" className="text-blue" onClick={togglePanel}>Signup</a> </p>
                                    </div>
                                </div>
                                <div className='col-2'></div>
                            </div>
                        </div>
                    </div >
                )} */}

                {/* sign-up */}
                {/* {isPanelVisible2 && (
                    <div className='panel d-flex shadow-container3' id="panel">
                        <div className="col-6">
                            <div className='d-flex'>
                                <div className='col-3'></div>
                                <div className='login_block col-7 shadow-container2'>
                                    <div className="col-12 shadow-element2">
                                        <h2>Create Account</h2>
                                        <form >
                                            <input type='email' className='myinputfield1' name='email' placeholder="      Email" required />
                                            <input type='password' className='myinputfield2' name='password' placeholder="      Password" required />
                                            <input type='password' className='myinputfield2' name='confirm_password' placeholder="      Confirm Password" required />

                                            <div className='spacer'></div>
                                            <input type="submit" value='Sign up' className='login_btn mt-3' />
                                        </form>
                                        <p className='mt-2'>Already have an account?<a href="#" className="text-blue" onClick={togglePanel}>Sign in here </a> </p>
                                    </div>
                                </div>
                                <div className='col-2'></div>
                            </div>
                        </div>
                        <div className="col-6 sign-up shadow-element3">
                            <h1 className="text-white">Hello, Friend!</h1>
                            <p className="text-white">Enter your personal details and start journey with us</p>
                        </div>
                    </div>
                )}
            </div> */}
            <div>
                <input type="button" value="click me" onClick={submitHandler}/>
                <input type="button" value="click me" onClick={submitHandler}/>
                <input type="button" value="click me" onClick={submitHandler}/>
                <input type="button" value="click me" onClick={submitHandler}/>
                <input type="button" value="click me" onClick={submitHandler}/>
                <input type="button" value="click me" onClick={egoHandler}/>
            </div>

        </>
    )
}

export default Todolist
