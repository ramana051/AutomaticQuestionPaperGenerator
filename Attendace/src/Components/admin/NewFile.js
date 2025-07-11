import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Head from './Head';
import user from '../../assets/Subtract.png'

const NewFile = () => {
    const admin = sessionStorage.getItem("user");
    const [loading, setLoading] = useState(false);
    const wait = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
    const [data, setData] = useState({ semester: "semester1", subject: "101", chapter_id: "co1", question_type: "easy", q_marks: "", category: "blanks" });
    const [print, setPrint] = useState({ q1_a: "", q1_b: "", q1_c: "", q1_d: "", q2: "", q3: "", q4: "", q5: "", q6_a: "", q6_b: "", q7_a: "", q7_b: "", q8_a: "", q8_b: "" });

    const [subjects, setSubjects] = useState(['ENGLISH', 'MATHS-1', 'PHYSICS', 'CHEMISTRY', 'BCE', 'PROGRAMMING IN C', 'DRAWING']);
    const Navigate = useNavigate();
    const paperHandler = (e) => {
        if ((e.target.value) === "semester") {
            console.log(e.target.value);
            Navigate('/newfile2');
        }
    }

    const [selectedColor, setSelectedColor] = useState('easy');
    const [isPanelVisible, setIsPanelVisible] = useState(false);
    const [isPanelVisible1, setIsPanelVisible1] = useState(false);
    const [isPanelVisible2, setIsPanelVisible2] = useState(false);

    const togglePanel = (panelNumber) => {

        if (panelNumber === 0) {
            setIsPanelVisible1(false);
            setIsPanelVisible2(false);
            setIsPanelVisible(!isPanelVisible);
            setData({ ...data, q_marks: "3m" });

        } else if (panelNumber === 1) {
            setIsPanelVisible(false);
            setIsPanelVisible1(!isPanelVisible1);
            setData({ ...data, q_marks: "8m" });

        } else if (panelNumber === 2) {
            setIsPanelVisible2(!isPanelVisible2);
            setData({ ...data, q_marks: "1m" });

        }
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
            setSubjects(['MATHS-3', 'WEB TECHNOLOGIES', 'COMP', 'OOP THROUGH C++', 'COMPUTER NETWORKS']);
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
        console.log(data.subject);
    }

    const chapterHandler = (e) => {
        e.preventDefault();
        setData({ ...data, chapter_id: e.target.value });
    }

    const categoryHandler = (e) => {
        e.preventDefault();
        setData({ ...data, category: e.target.value });
    }

    const typeHandler = (e) => {
        setData({ ...data, question_type: e.target.value });
        if ((e.target.value) === "easy") {
            setSelectedColor("green"); // Update the selected color when the option is changed
        }
        else if ((e.target.value) === "medium") {
            setSelectedColor("orange"); // Update the selected color when the option is changed
        }
        else {
            setSelectedColor("red"); // Update the selected color when the option is changed
        }

    }

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        await wait(2000);
        const selectedSubject = data.subject;
        sessionStorage.setItem('subject', selectedSubject)

        console.log(selectedSubject);

        // await axios.post('http://localhost:3001/subject', { sub: selectedSubject })
        await axios.post('http://localhost:3001/subject', { sub: selectedSubject })

            .then(response => {
                console.log(response.data, "data is comming")
                sessionStorage.setItem('subjectcode', response.data.subject)
                setLoading(false);
                console.log(response.data.subject)
                setData({ ...data, subject: response.data.subject });
            })
        setLoading(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data.q_marks);
        console.log(data.subject);
        console.log(data)
        await axios.get(`http://localhost:3001/midPaper/${data.semester}/${data.subject}/${data.chapter_id}/${data.question_type}/${data.q_marks}/${data.category}`)
            .then(response => {
                console.log(response.data, "data is comming")
                console.log(response.data.question)
                sessionStorage.setItem(`${e.target.value}`, response.data.question)
                const result = sessionStorage.getItem(`${e.target.value}`)
                setPrint({ ...print, [`${e.target.value}`]: result });
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }
    const pdfconverter = () => {

        Navigate('/PdfGeneratorMid');
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
                        <ul class="navbar-nav font">
                            <li class="nav-item redirect h2 rounded m-2">
                                <a class="nav-link text-white " href="newfile">Question Paper Generator</a>
                            </li>
                            <li class="nav-item bg-white redirect2 rounded m-2 mt-3">
                                <a class="nav-link" href="questionsinsertion">Insert Question</a>
                            </li>
                            <li class="nav-item bg-white rounded redirect2 m-2 mt-3">
                                <a class="nav-link" href="addadmin">Add Admin</a>
                            </li>
                        </ul>
                        <div className='d-flex justify-content-end font'>
                            <h1 className='m-2 text-white'><span className='h5'>Welcome,</span>{admin}</h1>
                            <img src={user} alt="user" width={'30%'} height={'30%'} />
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
                                <li class="nav-item redirect h2 m-3 rounded ">
                                    <a class="nav-link text-white text-center" href="newfile">Question Paper Generator</a>
                                </li>
                                <li class="nav-item bg-white m-4 rounded">
                                    <a class="nav-link text-dark text-center" href="questionsinsertion">Insert Question</a>
                                </li>
                                <li class="nav-item bg-white m-4   rounded">
                                    <a class="nav-link text-dark text-center" href="addadmin">Add Admin</a>
                                </li>
                                {/* <li class="nav-item bg-white m-4   rounded">
                                    <a class="nav-link text-dark text-center" href="deletequestion">Delete Question</a>
                                </li>  */}
                            </ul>
                        </div>
                        <a class="navbar-brand">
                            <span className='h4' >Welcome {admin}</span>
                            <img src={user} alt="Logo" className="rounded-pill" title="user !" />
                        </a>
                    </div>
                </nav>
                <div class="container mt-3">

                    <div className='tablebody1'>

                        <div className='row'>
                            <div className='col-lg-3 col-sm-12 align h5 mt-5 rounded'>

                                <span className=''>Department</span>
                                <select name="dept" id='dept' class="select mt-2 p-1 rounded">
                                    <option value="cme">CSE</option>
                                    <option value="eee">EEE</option>
                                    <option value="ece">ECE</option>
                                    <option value="arc">ARC</option>
                                    <option value="civ">CIV</option>
                                    <option value="mech">MECH</option>
                                </select>
                                <span className=''>Exam Type</span>
                                <select name="section" id='section' onChange={paperHandler} class="select mt-2 rounded p-1">
                                    <option value="mid">Mid</option>
                                    <option value="semester">Semester</option>
                                </select>
                                <span className=''>Semester</span>
                                <select name="semester" id='semester' class="select rounded mt-2 p-1" onChange={onchangehandler}>
                                    <option value="semester1">Semester 1-1</option>
                                    <option value="semester3">Semester 1-2</option>
                                    <option value="semester4">Semester 2-1</option>
                                    <option value="semester5">Semester 2-2</option>
                                </select>

                                <span className=''>Subject</span>
                                <select name="subeject" id='subject' class="select mt-2 rounded p-1" onChange={subjectHandler} value={data.subject}>
                                    {subjects.map((value, index) => <option key={index} value={value}>{value}</option>)}
                                </select><br />


                                <div className='text-center mt-3'>
                                    <button value='Submit' className='login_btn' onClick={submitHandler}>Submit</button></div>
                                {/* <input type="button" value='Submit' className='login_btn mb-4' onClick={submitHandler} /> */}

                            </div>
                            <div className='col-1'></div>
                            <div className='col-lg-8 col-sm-12 mt-5 sidebar h5'>
                                <center> <span>Chapter :
                                    <select name='chapter' className='category me-3 rounded p-1' onChange={chapterHandler} >
                                        <option value="co1">Chapter-1</option>
                                        <option value="co2">Chapter-2</option>
                                        <option value="co3">Chapter-3</option>
                                        <option value="co4">Chapter-4</option>
                                        <option value="co5">Chapter-5</option>
                                    </select>
                                </span>
                                    <span>Type :
                                        <select name='type' className='category mb-4 rounded p-1' onChange={typeHandler} style={{ color: selectedColor }}>
                                            <option value="easy" style={{ color: 'green' }}>Easy</option>
                                            <option value="medium" style={{ color: 'orange' }}>Medium</option>
                                            <option value="hard" style={{ color: 'red ' }}>Hard</option>
                                        </select>
                                    </span>
                                </center>

                                <div className='slide rounded' id="flip" value='togglePanel' title='Get Questions' onClick={() => togglePanel(0)}>
                                    Part-A<br />
                                </div>
                                {isPanelVisible && (
                                    <div className='panel rounded' id="panel">
                                        <div className='slide' id="flip" value='togglePanel2' onClick={() => togglePanel(2)}>
                                            Q1
                                        </div>
                                        {isPanelVisible2 && (
                                            <div className='panel' id="panel">
                                                <center > <span >category :</span>
                                                    <select name="category" id='category' class="category mb-4 rounded p-1" onChange={categoryHandler}>
                                                        <option value="blanks">Blanks</option>
                                                        <option value="true_false">True/False</option>
                                                        <option value="one_word">Single word question</option>
                                                    </select>
                                                </center>
                                                a :
                                                <button class="login_btn ms-2" type="checkbox" id="check1" value="q1_a" onClick={handleSubmit}>Get</button> <p>{print.q1_a}</p>
                                                b :
                                                <button class="login_btn ms-2" type="checkbox" id="check1" value="q1_b" onClick={handleSubmit}>Get</button><p>{print.q1_b}</p>
                                                c :
                                                <button class="login_btn ms-2" type="checkbox" id="check1" value="q1_c" onClick={handleSubmit}>Get</button><p>{print.q1_c}</p>
                                                d :
                                                <button class="login_btn ms-2" type="checkbox" id="check1" value="q1_d" onClick={handleSubmit}>Get</button><p>{print.q1_d}</p>

                                            </div>
                                        )}<br />
                                        Q2 :
                                        <button class="login_btn ms-3" value="q2" onClick={handleSubmit}>Get </button> <p>{print.q2}</p>

                                        Q3 :
                                        <button class="login_btn ms-3" value="q3" onClick={handleSubmit}>Get </button><p>{print.q3}</p>
                                        Q4 :
                                        <button class="login_btn ms-3" value="q4" onClick={handleSubmit}>Get </button><p>{print.q4}</p>
                                        Q5 :
                                        <button class="login_btn ms-3" value="q5" onClick={handleSubmit}>Get </button><p>{print.q5}</p>

                                    </div>
                                )}

                                <div className='slide mt-2 rounded' id="flip" value='togglePanel1' title='Get Questions' onClick={() => togglePanel(1)}>
                                    Part-B
                                </div>
                                {isPanelVisible1 && (
                                    <div className='panel rounded' id="panel">
                                        Q6.a:
                                        <button class="login_btn ms-3" value="q6_a" onClick={handleSubmit}>Get </button> <p>{print.q6_a}</p>
                                        Q6.b:
                                        <button class="login_btn ms-3" value="q6_b" onClick={handleSubmit}>Get </button><p>{print.q6_b}</p>
                                        Q7.a:
                                        <button class="login_btn ms-3" value="q7_a" onClick={handleSubmit}>Get </button><p>{print.q7_a}</p>
                                        Q7.b:
                                        <button class="login_btn ms-3" value="q7_b" onClick={handleSubmit}>Get </button><p>{print.q7_b}</p>
                                        Q8.a:
                                        <button class="login_btn ms-3" value="q8_a" onClick={handleSubmit}>Get </button><p>{print.q8_a}</p>
                                        Q8.b:
                                        <button class="login_btn ms-3" value="q8_b" onClick={handleSubmit}>Get </button><p>{print.q8_b}</p>
                                    </div>
                                )}

                                <input type="button" value='Save' className='login_btn  float-end mt-3 ' onClick={pdfconverter} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default NewFile;