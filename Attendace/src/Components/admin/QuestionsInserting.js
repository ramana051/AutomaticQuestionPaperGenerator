import React, { useState } from 'react'
import axios from 'axios';
import Head from './Head';
import user from '../../assets/Subtract.png'


const QuestionsInserting = () => {
    const admin=sessionStorage.getItem("user");
    const [data, setData] = useState({ subject: "101", chapter_id: "co1", question_type: "easy", question: "", q_marks: "3m", category: "r" });
    const [subjects, setSubjects] = useState(['ENGLISH', 'MATHS-1', 'PHYSICS', 'CHEMISTRY', 'BCE', 'PROGRAMMING IN C', 'DRAWING']);

    const inputHandler = (e) => {
        setData({ ...data, question: e.target.value })
        console.log(data.question);
    }

    const typeHandler = async (e) => {
        setData({ ...data, question_type: e.target.value });
    }
    const marksHandler = async (e) => {
        setData({ ...data, q_marks: e.target.value });
    }

    const chapterHandler = (e) => {
        setData({ ...data, chapter_id: e.target.value });
    }
    const categoryHandler = (e) => {
        console.log(e.target.value)
        setData({ ...data, category: e.target.value });
    }

    const onchangehandler = (e) => {
        if ((e.target.value) === "semester1") {
            setSubjects(['ENGLISH', 'MATHS-1', 'PHYSICS', 'CHEMISTRY', 'BCE', 'PROGRAMMING IN C', 'DRAWING']);
            setData({ ...data, subject: 101 });
        }
        else if ((e.target.value) === "semester3") {
            setSubjects(['MATHS-2', 'DIGITAL ELECTRONICS', 'OPERATING SYSTEMS', 'DATA STRUCTURES', 'DBMS']);
            setData({ ...data, subject: 301 });
        }
        else if ((e.target.value) === "semester4") {
            setSubjects(['MATHS-3', 'WEB TECHNOLOGIES', 'COMP', 'OOP THROUGH C++', 'COMPUTER NETWORKS']);
            setData({ ...data, subject: 401 });
        }
        else {
            setSubjects(['IME', 'JAVA', 'SOFTWARE ENGINEERING', 'IOT', 'PYTHON']);
            setData({ ...data, subject: 501 });
        }
    }

    const subjectHandler = async (e) => {
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
        console.log(data.subject)
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const selectedSubject = data.subject;

        console.log(selectedSubject);
        try {

            const response1 = await axios.post('http://localhost:3001/subject', { sub: selectedSubject })
            console.log(response1.data, "data is comming")
            console.log(response1.data.subject)
            data.subject = response1.data.subject;
            // setData({ ...data, subject:response1.data.subject });
            console.log(data);
            const response2 = await axios.post('http://localhost:3001/insert', data)
            console.log(response2.data, "data is comming")
            alert("Question inserted successfully");
        } catch (error) {
            console.error(error);
        }
        // .catch(error=>{
        //     console.error("Inserting Error :",error)
        // })
        //     // console.log(data);
        //     // await axios.post('http://localhost:3001/insert', data)
        //     //     .then(response => {
        //     //         console.log(response.data, "data is comming")
        //     //         alert("Question inserted successfully");
        //     //     })
        //         .catch(error =>{
        //             console.error("Inserting Error :",error);
        //         })

    }
    return (
        <body className=''>
            <div><Head />
                <nav class="navbar navbar-expand-sm  navbar-light container rounded mt-3">
                    <div class="container-fluid">
                        <ul class="navbar-nav font ">
                            <li class="nav-item bg-white redirect2 mt-3  rounded m-2">
                                <a class="nav-link active space-between" href="newfile">Question Paper Generator</a>
                            </li>
                            <li class="nav-item  h2 redirect rounded m-2">
                               <a href="javascript:void(0)" className="nav-link text-white"  >Insert Question</a> 
                            </li>
                            <li class="nav-item bg-white mt-3 redirect2 rounded m-2">
                                <a class="nav-link" href="addadmin">Add Admin</a>
                            </li>
                        </ul>
                        {/* <h2 className='bg-white'>{admin}</h2>
                        <img src={user} alt="user" width={'5%'} /> */}
                        <a className='navbar-brand text-white font'>
                            <span className='h4'>Welcome {admin} </span>
                            <img src={user} alt="user"className="rounded-pill" /> 
                        </a>
                    </div>
                </nav>
                <form onSubmit={submitHandler}>
                    <div className='d-flex mt-5 font h5 '>

                        <div className='col-lg-1'></div>

                        <div className='col-lg-10  row bg-white rounded-3 col-sm-12 p-2'>
                            <h1>Insert Question</h1>
                            <div className='col-lg-6 col-sm-12 mt-3'>
                                <span className='m-2'>Department</span>
                                <select name="dept" id='dept' class="select m-2 p-1 rounded">
                                    <option value="cme">CSE</option>
                                    <option value="eee">EEE</option>
                                    <option value="ece">ECE</option>
                                    <option value="arc">ARC</option>
                                    <option value="civ">CIV</option>
                                    <option value="mech">MECH</option>
                                </select>
                                <span className='m-2'>Semester</span>
                                <select name="semester" id='semester' class="select m-2 p-1" onChange={onchangehandler}>
                                    <option value="semester1">Semester1</option>
                                    <option value="semester3">Semester3</option>
                                    <option value="semester4">Semester4</option>
                                    <option value="semester5">Semester5</option>
                                </select>
                                <span className='m-2'>Subject</span>
                                <select name="subject" id='subject' class="select m-2 p-1" onChange={subjectHandler} value={data.subject}>
                                    {subjects.map((value, index) => <option key={index} value={value}>{value}</option>)}
                                </select><br />
                                <span className='m-2'>chapter</span>
                                <select name='chapter_id' id='chapter_id' className='select m-2 p-1' onChange={chapterHandler}>
                                    <option value="co1">Chapter-1</option>
                                    <option value="co2">Chapter-2</option>
                                    <option value="co3">Chapter-3</option>
                                    <option value="co4">Chapter-4</option>
                                    <option value="co5">Chapter-5</option>
                                </select>
                                <span className='m-2'>Marks </span>
                                <select name='q_marks' id='q_marks' className='select m-2 p-1' onChange={marksHandler}>
                                    <option value='1m'>1 Marks</option>
                                    <option value='3m'>3 Marks</option>
                                    <option value='8m'>8 Marks</option>
                                    <option value='10m'>10 Marks</option>
                                </select>
                            </div>
                            <div className='col-lg-6 col-sm-12 mt-3'>
                                <span className='m-2'>Question Type</span>
                                <select name='question_type' id='question_type' className='select m-2 p-1' onChange={typeHandler}>
                                    <option value='easy'>Easy</option>
                                    <option value='medium'>Medium</option>
                                    <option value='hard'>Hard</option>
                                </select>
                                <span className='m-2'>Category </span>
                                <select name='category' className='select m-2 p-1' onChange={categoryHandler} value={data.category}>
                                    <option value="r">Remembering</option>
                                    <option value="u">Understanding</option>
                                    <option value="ap">Application</option>
                                    <option value="an">Analysing</option>
                                </select>
                                <span className='m-2 '>Enter Question</span>
                                <textarea type='text' name='question' className='mt-3 select m-2 p-3' onChange={inputHandler} />
                                <div className='text-end'><input type='submit' value='save' className='login_btn m-3 ' /></div>

                            </div>

                        </div>

                        <div className='col-lg-1'></div>

                    </div>
                </form>
            </div>
        </body>
    )
}

export default QuestionsInserting