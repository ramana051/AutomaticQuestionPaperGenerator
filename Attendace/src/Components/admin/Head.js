import React from 'react'
import logo from '../../assets/pragati-logo-2.jpg'
import logo2 from '../../assets/logo2.jpg';

const Head = () => {
    return (
        <>
            <div className=' top d-flex'>
                <h4 className='latest'>LATEST NEWS
                </h4>
                <div className='text-center text-white mt-3'><b><marquee behavior="" direction="">Semester Examinations Scheduled to begin on November 20, 2024</marquee></b></div>
            </div>
            <nav className=" col-lg-12 col-sm-12 bg-light d-flex font header">
                <div className="text-center col-2">
                    <img src={logo} alt="Left Logo" width="40%" className="rounded-pill mx-sm-0" />
                </div>
                <div className='text-center text-black col-8 sizeHead'>
                    <h1>Pragati Engineering College(AUTONOMOUS)</h1>
                    {/* <p>
                        <marquee>AFFILIATED BY STATE BOARD OF TECHNICAL EDUCATION,ANDHRA PRADESH</marquee><br />
                        AICTE APPROVED INSTITUTE
                    </p> */}


                </div>
                <div className='text-center col-2 div3'>
                    <img src={logo2} alt="userlogo" width="40%" className='rounded-pill mx-md-0 ' />
                </div>
            </nav>
            <div className='marquee text-white text-center'>
                <p><b>
                    {/* <marquee> */}
                    DIFFICULTY BASED CUSTOMIZABLE- QUESTION PAPER GENERATOR FOR STUDENTS
                    {/* </marquee><br /> */}
                </b>
                </p>
            </div>

        </>
    )
}
export default Head