import React, { useState } from 'react'
import delete_img from '../../assets/delete.png'
import axios from 'axios'
import Head from './Head'
import user from '../../assets/Subtract.png'

const DeleteQuestion = () => {
    const [updateId, setUpdateId] = useState(null);
    const [name, setName] = useState('');
    const [arr2, setArr2] = useState([]);

    const [loading, setLoading] = useState(false);
    const [rows, setRows] = useState(['']);
    const wait = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
    const [subjects, setSubjects] = useState(['ENGLISH', 'MATHS-1', 'PHYSICS', 'CHEMISTRY', 'BCE', 'PROGRAMMING IN C', 'DRAWING']);
    const [data, setData] = useState({ semester: "semester1", subject: "101", chapter_id: "co1", q_marks: "3m", category: "r" });

    const addOrUpdate = (e) => {
        e.preventDefault();
        var arr = JSON.parse(localStorage.getItem('details') || '[]');
        if (updateId !== null) {
            arr = arr.map((item) => {
                if (item.id === updateId) {
                    return { ...item, name: name };
                }
                return item;
            });
            setUpdateId(null);
        } else {
            const details = {
                id: Math.floor(Math.random() * 10000),
                name: name,
            };
            arr.push(details);
        }
        localStorage.setItem('details', JSON.stringify(arr));
        setName('');
        setArr2(arr);
    };


    const onchangehandler = (e) => {
        if ((e.target.value) === "semester1") {
            setSubjects(['ENGLISH', 'MATHS-1', 'PHYSICS', 'CHEMISTRY', 'BCE', 'PROGRAMMING IN C', 'DRAWING']);
            setData({ ...data, subject: 101 });
            setData({ ...data, semester: "semester1" });
            sessionStorage.setItem('semester', "FIRST");
        }
        else if ((e.target.value) === "semester3") {
            setSubjects(['MATHS-2', 'DIGITAL ELECTRONICS', 'OPERATING SYSTEMS', 'DATA STRUCTURES', 'DBMS']);
            setData({ ...data, subject: 301 });
            setData({ ...data, semester: "semester3" });
            sessionStorage.setItem('semester', "THIRD");
        }
        else if ((e.target.value) === "semester4") {
            setSubjects(['MATHS-3', 'WEB TECHNOLOGIES', 'COMP', '404', 'COMPUTER NETWORKS']);
            setData({ ...data, subject: 401 });
            setData({ ...data, semester: "semester4" });
            sessionStorage.setItem('semester', "FOURTH");
        }
        else {
            setSubjects(['IME', 'JAVA', 'SOFTWARE ENGINEERING', 'IOT', 'PYTHON']);
            setData({ ...data, subject: 501 });
            setData({ ...data, semester: "semester5" });
            sessionStorage.setItem('semester', "FIFTH");
        }
    }
    const subjectHandler = (e) => {
        const selectedSubject = e.target.value;
        const selectedIndex = subjects.indexOf(selectedSubject);

        const newSubjects = [
            selectedSubject,
            ...subjects.slice(0, selectedIndex),
            ...subjects.slice(selectedIndex + 1)
        ];

        setData({ ...data, subject: selectedSubject });
        setSubjects(newSubjects);
        setData({ ...data, subject: e.target.value });
    }
    const chapterHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setData({ ...data, chapter_id: e.target.value });
    }
    const marksHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setData({ ...data, q_marks: e.target.value });

    }

    const categoryHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        setData({ ...data, category: e.target.value });
    }
    const typeHandler = (e) => {
        console.log(e.target.value)
        setData({ ...data, question_type: e.target.value });
    }
    // const departmentHandler = (e) => {
    //     setData({ ...data, department: e.target.value });

    // }
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(data);

        const res = await axios.post('http://localhost:3001/view_question', data);

        setLoading(true);
        try {
            setRows(res.data.rows);
            console.log(res.data)
        } catch (error) {
            console.error(":", error);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <body>
            <div><Head />
                {loading &&
                    <div className="loading-overlay loading">
                        <div className="spinner-border text-warning"></div>
                        <div className=' text-white '>Loading...</div>
                    </div>}
                <div className='d-flex'>
                    <div className='col-1'></div>
                    <div className='col-lg-10 bg-white text-center mt-3 rounded-3 p-2'>
                        <h2>Add</h2>
                        <div className='d-flex '>
                            <div className='col-lg-1'></div>
                            <form onSubmit={submitHandler} className='col-lg-10 col-sm-12'>
                                <span className=''>Department</span>
                                <select name="department" id='department' class="inputfield5 m-3 p-1 rounded" >
                                    <option value="cme">CME</option>
                                    <option value="eee">EEE</option>
                                    <option value="ece">ECE</option>
                                    <option value="arc">ARC</option>
                                    <option value="civ">CIV</option>
                                    <option value="mech">MECH</option>
                                </select>
                                <span className=''>Semester</span>
                                <select name="semester" id='semester' class=" m-2 p-1 rounded inputfield5" onChange={onchangehandler}>
                                    <option value="semester1">Semester1</option>
                                    <option value="semester3">Semester3</option>
                                    <option value="semester4">Semester4</option>
                                    <option value="semester5">Semester5</option>
                                </select>
                                <span className=''>Subject</span>
                                <select name="subeject" id='subject' class=" m-2 p-1 rounded inputfield5" onChange={subjectHandler} value={data.subject}>
                                    {subjects.map((value, index) => <option key={index} value={value}>{value}</option>)}
                                </select>
                                <span>Chapter :
                                    <select name='chapter' className=' rounded p-1  mb-4 me-3' onChange={chapterHandler} >
                                        <option value="co1">Chapter-1</option>
                                        <option value="co2">Chapter-2</option>
                                        <option value="co3">Chapter-3</option>
                                        <option value="co4">Chapter-4</option>
                                        <option value="co5">Chapter-5</option>
                                    </select>
                                </span>
                                <span>Category :</span>
                                <select name='category' className=' rounded m-2 p-1 inputfield5' onChange={categoryHandler} value={data.category} placeholder='--select--'>
                                    <option value="blanks">Blanks</option>
                                    <option value="true_false">True/False</option>
                                    <option value="one_word">Single word question</option>
                                    <option value="r">Remembering</option>
                                    <option value="u">Understanding</option>
                                    <option value="ap">Application</option>
                                    <option value="an">Analysing</option>

                                </select>
                                <span>Question Type :</span>
                                {/* <select name='type' className=' rounded p-1  m-2 inputfield5' onChange={typeHandler}>
                                    <option value="easy" >Easy</option>
                                    <option value="medium" >Medium</option>
                                    <option value="hard" >Hard</option>
                                </select> */}
                                <span>Marks</span>
                                <select name="q_marks" id="q_marks" className='rounded m-2 p-1 inputfield5' onChange={marksHandler}>
                                    <option value="1m">1Marks</option>
                                    <option value="3m">3Marks</option>
                                    <option value="8m">8Marks</option>
                                </select><br />
                                <span>
                                    <button value='Submit' className='login_btn mt-3' >Submit</button>
                                </span>
                            </form>
                        </div>
                        <div className='col-lg-1'></div>
                    </div>

                </div>
                <div className='d-flex'>
                    <div className='col-1'></div>
                    <div className='col-lg-10 col-sm-12 d-flex mt-3'>

                        <div className='faculty_feed_table'>
                            <table className='vertical-lines'>
                                <thead>
                                    <tr className='heading_border'>
                                        <th >S.No</th>
                                        <th>subject</th>
                                        <th>chapter</th>
                                        <th>Question</th>
                                        <th>Question Type</th>
                                        <th>Question Type</th>

                                        {/* <th>category</th> */}
                                        <th>Update/Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{row.subject}</td>
                                            <td>{row.chapter_id} </td>
                                            <td>{row.question_type} </td>
                                            <td>{row.question}</td>
                                            <td><input type='text' value={row.question} /></td>
                                            <td>{row.category} </td>
                                            <td>
                                                <button type="submit" onSubmit={addOrUpdate}>
                                                    {updateId !== null ? 'Update' : 'Submit'}
                                                </button>
                                                <input type='submit'
                                                    value='Update'
                                                    className='login_btn'
                                                // onClick={() => approveHandler(index)}
                                                />
                                                <input type='submit'
                                                    value='Delete'
                                                    className='login_btn'
                                                // onClick={() => approveHandler(index)}
                                                />
                                                {/* <a>
                                                            <img src={delete_img} alt='delete'
                                                            onClick={() => deleteHandler(row.email)}
                                                            /></a> */}
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className='col-1'></div>

                </div>
                {/* <div className='d-flex mt-4'>
                    <div className='col-lg-1'></div>

                    <div className='col-lg-10 d-flex addadmin col-sm-12 bg-white p-2 rounded-3 '>
                        <h2>Add</h2>
                        <div className='col-1'></div>
                        <form onSubmit={submitHandler} className='col-10'>
                            <span className=''>Department</span>
                            <select name="department" id='department' class="inputfield5 m-3 p-1 rounded" >
                                <option value="cme">CME</option>
                                <option value="eee">EEE</option>
                                <option value="ece">ECE</option>
                                <option value="arc">ARC</option>
                                <option value="civ">CIV</option>
                                <option value="mech">MECH</option>
                            </select>
                            <span className=''>Semester</span>
                            <select name="semester" id='semester' class=" m-2 p-1 rounded inputfield5" onChange={onchangehandler}>
                                <option value="semester1">Semester1</option>
                                <option value="semester3">Semester3</option>
                                <option value="semester4">Semester4</option>
                                <option value="semester5">Semester5</option>
                            </select>
                            <span className=''>Subject</span>
                            <select name="subeject" id='subject' class=" m-2 p-1 rounded inputfield5" onChange={subjectHandler} value={data.subject}>
                                {subjects.map((value, index) => <option key={index} value={value}>{value}</option>)}
                            </select>
                            <span>Chapter :
                                <select name='chapter' className=' rounded p-1  mb-4 me-3' onChange={chapterHandler} >
                                    <option value="co1">Chapter-1</option>
                                    <option value="co2">Chapter-2</option>
                                    <option value="co3">Chapter-3</option>
                                    <option value="co4">Chapter-4</option>
                                    <option value="co5">Chapter-5</option>
                                </select>
                            </span>
                            <span>Category :</span>
                            <select name='category' className=' rounded m-2 p-1 inputfield5' onChange={categoryHandler} value={data.category}>
                                <option value="r">Remembering</option>
                                <option value="u">Understanding</option>
                                <option value="ap">Application</option>
                                <option value="an">Analysing</option>
                            </select>
                            <span>Question Type :</span>
                            <select name='type' className=' rounded p-1  m-2 inputfield5' onChange={typeHandler}>
                                <option value="easy" >Easy</option>
                                <option value="medium" >Medium</option>
                                <option value="hard" >Hard</option>
                            </select>
                            <span>Marks</span>
                            <select name="q_marks" id="q_marks" className='rounded m-2 p-1 inputfield5' onChange={marksHandler}>
                                <option value="1m">1Marks</option>
                                <option value="3m">3Marks</option>
                                <option value="8m">8Marks</option>
                            </select><br />
                            <span>
                                <button value='Submit' className='login_btn mt-3' >Submit</button>
                            </span>
                        </form>
                        <div className='col-1'></div>
                    </div>
                    <div className='col-lg-1 '></div>
                    <div className='d-flex  justify-content-center'>
                        <div className='col-lg-1'></div>
                        <div className=' col-lg-10 col-sm-12'>
                            <div className='d-flex'>
                                <div className='col-lg-12 col-sm-12 mt-3 border rounded'>
                                    <div className='faculty_feed_table container'>
                                        <table className='vertical-lines'>
                                            <thead>
                                                <tr className='heading_border'>
                                                    <th >S.No</th>
                                                    <th>subject</th>
                                                    <th>chapter</th>
                                                    <th>Question</th>
                                                    <th>Question Type</th>
                                                    <th>category</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {rows.map((row, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{row.subject}</td>
                                                        <td>{row.chapter_id} </td>
                                                        <td>{row.question_type} </td>
                                                        <td>{row.question}</td>
                                                        <td>{row.category} </td>
                                                        <td>
                                                            <img src={delete_img} alt='delete'
                                                            // onClick={() => deleteHandler(row.email)}
                                                            />
                                                        </td>

                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-1'></div>
                    </div>
                </div> */}
            </div>
        </body>
    )
}

export default DeleteQuestion