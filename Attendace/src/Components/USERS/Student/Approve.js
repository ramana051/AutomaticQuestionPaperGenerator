// import React, { useState } from 'react';
// import axios from 'axios';

// const Approve = () => {
//     const [rows,setRows]=useState([]);
//     const submitHandler=async(e)=>{
//         e.preventDefault();
//         const response=await axios.get('http://localhost:3001/approve_data');
//         setRows(response.data);
//     }
//     const approveHandler=async(e)=>{
//         e.preventDefault();

//     }

//   return (
//     <div>
//         <input type='submit' value='Get all data' onClick={submitHandler} className='login_btn sub_feed'/>
//         <div className='col  faculty_feed_table'>
                
//                 <table className='vertical-lines'>
//                 <thead>
//                     <tr className=''>
//                     <th >S.No</th>
//                     <th >Student_id</th>
//                     <th >Name</th>
//                     <th >Phone number</th>
//                     <th >email</th>
//                     <th >Gender</th>
//                     <th >Department</th>
//                     <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {rows.map((row,index)=>(
//                         <tr key={index}>
//                         <td>{index+1}</td>
//                         <td>{row.student_id}</td>
//                         <td>{row.name}</td>
//                         <td>{row.phone}</td>
//                         <td>{row.email}</td>
//                         <td>{row.gender}</td>
//                         <td>{row.dept}</td>
//                         <td>
//                         <input type='submit' value='Approve'className='login_btn sub_feed' onClick={approveHandler}/>
//                         <input type='submit' value='Delete'className='login_btn sub_feed'/>
//                         </td>
//                     </tr>
//                     ))}
//                 </tbody>
//                 </table>
//         </div>
//     </div>
//   )
// }

// export default Approve;

import React, { useState } from 'react';
import axios from 'axios';

const Approve = () => {
    const [rows, setRows] = useState([]);

    const submitHandler = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:3001/approve_data');
        setRows(response.data);
    }

    const approveHandler = async (index) => {
        const clickedRow = rows[index];
        console.log(clickedRow.student_id);
        await axios.post(`http://localhost:3001/studentsignup/${clickedRow.student_id}`)
        .then((response)=>{
            alert('user  approved')
            console.log(response.data);
        })
        .catch((error)=>{
            console.error('Error sending data:', error);
        })
    }

    const deleteHandler = async (index) => {
        const clickedRow = rows[index];
        console.log(clickedRow.student_id);
        await axios.put(`http://localhost:3001/delete/${clickedRow.student_id}`)
        .then((response)=>{
            console.log(response.data);
        })
        .catch((error)=>{
            console.error('Error deleting user:', error);
        })
    }

    return (
        <div>
            <input type='submit' value='Get all data' onClick={submitHandler} className='approve1 p-2 mt-4' />
            <div className='col faculty_feed_table'>

                <table className='vertical-lines'>
                    <thead>
                        <tr className=''>
                            <th>S.No</th>
                            <th>Student_id</th>
                            <th>Name</th>
                            <th>Phone number</th>
                            <th>email</th>
                            <th>Gender</th>
                            <th>Department</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{row.student_id}</td>
                                <td>{row.name}</td>
                                <td>{row.phone}</td>
                                <td>{row.email}</td>
                                <td>{row.gender}</td>
                                <td>{row.dept}</td>
                                <td>
                                    <input
                                        type='submit'
                                        value='Approve'
                                        className='approve p-2'
                                        onClick={() => approveHandler(index)}
                                    />
                                    <input
                                        type='submit'
                                        value='Reject'
                                        className='approve p-2'
                                        onClick={() => deleteHandler(index)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Approve;