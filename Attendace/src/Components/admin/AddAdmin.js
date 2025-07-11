import React, { useState } from 'react'
import delete_img from '../../assets/delete.png'
import axios from 'axios'
import Head from './Head'
import user from '../../assets/Subtract.png'

const AddAdmin = () => {
    const admin = sessionStorage.getItem("user");
    const [isPanelVisible, setIsPanelVisible] = useState(false);
    const [showAdminForm, setShowAdminForm] = useState(false);
    const [data, setData] = useState({ id: "", email: "" });
    const [admin_details, setAdmin_details] = useState([]);
    const [del, setDel] = useState({ email: "" })
    const [loading, setLoading] = useState(false);
    const wait = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

    const onchangehandler = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const togglePanel = () => {
        setIsPanelVisible(!isPanelVisible);
        const handleAddAdminClick = async () => {
            setShowAdminForm(true);
            try {
                const result = await axios.get('http://localhost:3001/admin');
                setAdmin_details(result.data);
            } catch (error) {
                console.error('Error getting admin:', error);
                console.log(error);
                alert('error getting admin');
            }
        };
        handleAddAdminClick();
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(data);
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3001/addAdmin', data);
            console.log(response.data);
            if (response.data == "Add Admin Successfully") {
                alert('Add Admin Successfully');
            } else {
                alert('User already exists');
            }
        } catch (error) {
            console.error("Error inserting admin:", error);
        } finally {
            setLoading(false);
        }
    };


    const deleteHandler = async (e) => {
        console.log(e);
        del.email = e;
        console.log(del.email);
        setLoading(true);
        try {
            await wait(2000);

            const response = await axios.put('http://localhost:3001/deleteAdmin', del);
            console.log(response.data);
            if (response.data == "Deleted successfully") {
                alert(response.data);
            }
            else {
                alert(response.data)
            }
        } catch (error) {
            console.error("Error Deleteing admin:", error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <body>
            <div><Head />
                {loading &&
                    <div className="loading-overlay loading">
                        <div className="spinner-border text-warning"></div>
                        <div className=' text-white '>Loading...</div>
                    </div>}
                {/* <nav class="navbar navbar-expand-sm  navbar-light container rounded mt-3">
                    <div class="container-fluid">
                        <ul class="navbar-nav font ">
                            <li class="nav-item bg-white redirect2 mt-3 rounded m-2">
                                <a class="nav-link active space-between" href="newfile">Question Paper Generator</a>
                            </li>
                            <li class="nav-item bg-white mt-3 redirect2 rounded m-2">
                                <a class="nav-link" href="questionsinsertion">Insert Question</a>
                            </li>
                            <li class="nav-item   redirect h2 rounded m-2">
                               <a class="nav-link text-white" href="addadmin">Add Admin</a>
                            </li>
                        </ul>
                        <div className='d-flex justify-content-end font'>
                        <h1 className='m-2 text-white'><span className='h5'>Welcome,</span>{admin}</h1>
                        <img src={user} alt="user" width={'30%'} height={'30%'}  /> 
                        </div>
                    </div>
                </nav> */}

                <nav class="navbar navbar-expand-sm container navbar-dark mt-3 font">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul class="navbar-nav">
                                <li class="nav-item bg-white m-4 rounded ">
                                    <a class="nav-link text-dark text-center" href="newfile">Question Paper Generator</a>
                                </li>
                                <li class="nav-item bg-white m-4 rounded">
                                    <a class="nav-link text-dark text-center" href="questionsinsertion">Insert Question</a>
                                </li>
                                <li class="nav-item redirect m-3 h2  rounded">
                                    <a class="nav-link text-white text-center" href="addadmin">Add Admin</a>
                                </li>

                            </ul>
                        </div>
                        <a class="navbar-brand">
                            <span className='h4'>Welcome {admin} </span>
                            <img src={user} alt="Logo" className="rounded-pill" />
                        </a>
                    </div>
                </nav>

                <div className='d-flex mt-4'>
                    <div className='col-lg-1 '></div>


                    <div className=' addadmin rounded-3 col-lg-10 col-sm-12  '>

                        <h2>Add New Admin</h2>
                        <form onSubmit={submitHandler}>
                            <span className=' text-start'>Email</span>
                            <input type='email' className='inputfield m-3' name='email' onChange={onchangehandler} required />
                            <span className=' text-start '>Id</span>
                            <input type='text' className='inputfield m-3' name='id' onChange={onchangehandler} required />
                            <input type="submit" value='Submit' className='addadmin_btn' />
                        </form>


                        <div className='d-flex  justify-content-center'>
                            <div className='col-lg-1'></div>

                            <div className=' col-lg-10 col-sm-12'>
                                <div className='slide rounded mt-2 ' id="flip" onClick={togglePanel}>
                                    Admins
                                </div>

                                {isPanelVisible && (
                                    <div className='d-flex'>
                                        <div className='panel2 col-lg-12 col-sm-12' id="panel">
                                            <div className='faculty_feed_table container'>
                                                <table className='vertical-lines'>
                                                    <thead>
                                                        <tr className='heading_border'>
                                                            <th >S.No</th>
                                                            <th>name</th>
                                                            <th>email</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {(admin_details.length > 0) ? (
                                                            admin_details.map((row, index) => (
                                                                <tr key={index}>
                                                                    <td>{index + 1}</td>
                                                                    <td>{row.name}</td>
                                                                    <td>{row.email}</td>
                                                                    <td>
                                                                        <a><img src={delete_img} alt='delete' onClick={() => deleteHandler(row.email)} /></a>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        ) : (
                                                            <tr><td colSpan="15">No admin available</td></tr>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </div>
                            <div className='col-lg-1'></div>
                        </div>
                    </div>

                    <div className='col-lg-1 '></div>

                </div>

            </div>
        </body>
    )
}

export default AddAdmin