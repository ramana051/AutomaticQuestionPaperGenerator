import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Head from './Head';
import user from '../../assets/Subtract.png'

const NewFile2 = () => {
    const admin = sessionStorage.getItem("user");
    const [loading, setLoading] = useState(false);
    const wait = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
    const [data, setData] = useState({ semester: "semester1", subject: "101", chapter_id: "co1", question_type: "easy", q_marks: "3m", category: "r" });
    const [print, setPrint] = useState({ q1: "", q2: "", q3: "", q4: "", q5: "", q6: "", q7: "", q8: "", q9: "", q10: "", q11_a: "", q11_b: "", q12_a: "", q12_b: "", q13_a: "", q13_b: "", q14_a: "", q14_b: "", q15_a: "", q15_b: "", q16: "" });
    const [subjects, setSubjects] = useState(['ENGLISH', 'MATHS-1', 'PHYSICS', 'CHEMISTRY', 'BCE', 'PROGRAMMING IN C', 'DRAWING']);
    const Navigate = useNavigate();

    const paperHandler = (e) => {
        if ((e.target.value) === "mid") {
            console.log(e.target.value);
            Navigate('/newfile');
        }
    }

    const [selectedColor, setSelectedColor] = useState('easy'); // State to hold the selected color
    const [isPanelVisible, setIsPanelVisible] = useState(false);
    const [isPanelVisible1, setIsPanelVisible1] = useState(false);
    const [isPanelVisible2, setIsPanelVisible2] = useState(false);

    const togglePanel = (panelNumber) => {

        if (panelNumber === 0) {
            setIsPanelVisible1(false);
            setIsPanelVisible2(false);
            setIsPanelVisible(!isPanelVisible);
            setData({ ...data, q_marks: "3m" });
            console.log("3m")
        } else if (panelNumber === 1) {
            setIsPanelVisible(false);
            setIsPanelVisible2(false);
            setIsPanelVisible1(!isPanelVisible1);
            setData({ ...data, q_marks: "8m" });
        } else if (panelNumber === 2) {
            setIsPanelVisible(false);
            setIsPanelVisible1(false);
            setIsPanelVisible2(!isPanelVisible2);
            setData({ ...data, q_marks: "10m" });
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
    }

    const chapterHandler = (e) => {
        console.log(e.target.value);
        setData({ ...data, chapter_id: e.target.value });
    }

    const typeHandler = (e) => {
        setData({ ...data, question_type: e.target.value });
        if ((e.target.value) === "easy") {
            setSelectedColor("green");
        }
        else if ((e.target.value) === "medium") {
            setSelectedColor("orange");
        }
        else {
            setSelectedColor("red");
        }

    }

    const categoryHandler = (e) => {
        console.log(e.target.value)
        setData({ ...data, category: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        await wait(2000);
        const selectedSubject = data.subject;
        sessionStorage.setItem('subject', selectedSubject);

        console.log(selectedSubject);

        await axios.post('http://localhost:3001/subject', { sub: selectedSubject })
            .then(response => {
                console.log(response.data, "data is comming")
                console.log(response.data.subject)
                setLoading(false);
                sessionStorage.setItem('subjectCode', response.data.subject);
                setData({ ...data, subject: response.data.subject });
            })
        setLoading(false);
    }

    const handleSubmit = async (e) => {
        console.log(data.subject);
        console.log(data)
        await axios.get(`http://localhost:3001/semesterPaper/${data.semester}/${data.subject}/${data.chapter_id}/${data.question_type}/${data.q_marks}/${data.category}`)
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

        Navigate('/PdfGenerator');
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
                            <li class="nav-item redirect h2 rounded m-2">
                                <a class="nav-link text-white space-between" href="newfile">Question Paper Generator</a>
                            </li>
                            <li class="nav-item bg-white redirect2 mt-3 rounded m-2">
                                <a class="nav-link" href="questionsinsertion">Insert Question</a>
                            </li>
                            <li class="nav-item bg-white redirect2 mt-3 rounded m-2">
                                <a class="nav-link" href="addadmin">Add Admin</a>
                            </li>
                        </ul>
                        <div className='d-flex justify-content-end font'>
                            <h2 className='m-2 text-white'><span className='h5'>Welcome,</span>{admin}</h2>
                            <img src={user} alt="user" width={'100%'} />
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
                                <li class=" nav-item redirect h2 m-3 rounded">
                                    <a class="nav-link text-white text-center" href="newfile">Question Paper Generator</a>
                                </li>
                                <li class="nav-item bg-white  m-4 rounded">
                                    <a class="nav-link text-dark text-center" href="questionsinsertion">Insert Question</a>
                                </li>
                                <li class="nav-item bg-white m-4 rounded">
                                    <a class="nav-link text-dark text-center" href="addadmin">Add Admin</a>
                                </li>

                            </ul>
                        </div>
                        <a class="navbar-brand">
                            <span className='h5'>Welcome ,</span>{admin}  .
                            <img src={user} alt="Logo" className="rounded-pill" />
                        </a>
                    </div>
                </nav>
                <div class="container mt-3 ">

                    <div className='tablebody1'>
                        <div className='row '>
                            <div className='col-lg-3 col-sm-12 h5 align mt-5'>
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
                                <select name="section" id='section' class="select mt-2 p-1 rounded" onChange={paperHandler} >
                                    <option value="semester">Semester</option>
                                    <option value="mid">Mid</option>
                                </select>
                                <span className=''>Semester</span>
                                <select name="semester" id='semester' class="select mt-2 p-1 rounded" onChange={onchangehandler}>
                                    <option value="semester1">Semester 1-1</option>
                                    <option value="semester3">Semester 1-2</option>
                                    <option value="semester4">Semester 2-1</option>
                                    <option value="semester5">Semester 2-2</option>
                                </select>
                                <span className=''>Subject</span>

                                <select name="subeject" id='subject' class="select mt-2 p-1 rounded" onChange={subjectHandler} value={data.subject}>
                                    {subjects.map((value, index) => <option key={index} value={value}>{value}</option>)}
                                </select><br />
                                <div className='text-center mt-3'>
                                    <button value='Submit' className='login_btn' onClick={submitHandler}>Submit</button></div>

                                {/* <input type="button" value='Submit' className='login_btn' onClick={submitHandler} /> */}

                            </div>
                            <div className='col-lg-1'></div>
                            <div className='col-lg-8 col-sm-12 mt-5 h5'>
                                <center> <span>Chapter :
                                    <select name='chapter' className=' rounded p-1 category mb-4 me-3' onChange={chapterHandler} >
                                        <option value="co1">Chapter-1</option>
                                        <option value="co2">Chapter-2</option>
                                        <option value="co3">Chapter-3</option>
                                        <option value="co4">Chapter-4</option>
                                        <option value="co5">Chapter-5</option>
                                    </select>
                                </span>
                                    <span>Type :
                                        <select name='type' className=' rounded p-1 category me-3' onChange={typeHandler} style={{ color: selectedColor }}>
                                            <option value="easy" style={{ color: 'green' }}>Easy</option>
                                            <option value="medium" style={{ color: 'orange' }}>Medium</option>
                                            <option value="hard" style={{ color: 'red ' }}>Hard</option>
                                        </select>
                                    </span>
                                    <span>Category :
                                        <select name='category' className=' rounded p-1 category' onChange={categoryHandler} value={data.category}>
                                            <option value="r">Remembering</option>
                                            <option value="u">Understanding</option>
                                            <option value="ap">Application</option>
                                            {/* <option value="an">Analysing</option> */}
                                        </select>
                                    </span>
                                </center>

                                <div className='slide' id="flip" onClick={() => togglePanel(0)}>
                                    Part-A
                                </div>
                                {isPanelVisible && (
                                    <div className='panel' id="panel">
                                        Q1.<button class="login_btn ms-3" value="q1" onClick={handleSubmit}>Get </button><p>{print.q1}</p>
                                        Q2.<button class="login_btn ms-3" value="q2" onClick={handleSubmit}>Get </button><p>{print.q2}</p>
                                        Q3.<button class="login_btn ms-3" value="q3" onClick={handleSubmit}>Get </button><p>{print.q3}</p>
                                        Q4.<button class="login_btn ms-3" value="q4" onClick={handleSubmit}>Get </button><p>{print.q4}</p>
                                        Q5.<button class="login_btn ms-3" value="q5" onClick={handleSubmit}>Get </button><p>{print.q5}</p>
                                        Q6.<button class="login_btn ms-3" value="q6" onClick={handleSubmit}>Get </button><p>{print.q6}</p>
                                        Q7.<button class="login_btn ms-3" value="q7" onClick={handleSubmit}>Get </button><p>{print.q7}</p>
                                        Q8.<button class="login_btn ms-3" value="q8" onClick={handleSubmit}>Get </button><p>{print.q8}</p>
                                        Q9.<button class="login_btn ms-3" value="q9" onClick={handleSubmit}>Get </button><p>{print.q9}</p>
                                        Q10.<button class="login_btn ms-3" value="q10" onClick={handleSubmit}>Get </button><p>{print.q10}</p>

                                    </div>
                                )}

                                <div className='slide mt-2' id="flip" onClick={() => togglePanel(1)}>
                                    Part-B
                                </div>
                                {isPanelVisible1 && (
                                    <div className='panel' id="panel">
                                        Q11)a .<button class="login_btn ms-3" value="q11_a" onClick={handleSubmit}>Get </button><p>{print.q11_a}</p>
                                        Q11)b .<button class="login_btn ms-3" value="q11_b" onClick={handleSubmit}>Get </button><p>{print.q11_b}</p>
                                        Q12)a .<button class="login_btn ms-3" value="q12_a" onClick={handleSubmit}>Get </button><p>{print.q12_a}</p>
                                        Q12)b .<button class="login_btn ms-3" value="q12_b" onClick={handleSubmit}>Get </button><p>{print.q12_b}</p>
                                        Q13)a .<button class="login_btn ms-3" value="q13_a" onClick={handleSubmit}>Get </button><p>{print.q13_a}</p>
                                        Q13)b .<button class="login_btn ms-3" value="q13_b" onClick={handleSubmit}>Get </button><p>{print.q13_b}</p>
                                        Q14)a .<button class="login_btn ms-3" value="q14_a" onClick={handleSubmit}>Get</button><p>{print.q14_a}</p>
                                        Q14)b .<button class="login_btn ms-3" value="q14_b" onClick={handleSubmit}>Get </button><p>{print.q14_b}</p>
                                        Q15)a .<button class="login_btn ms-3" value="q15_a" onClick={handleSubmit}>Get </button><p>{print.q15_a}</p>
                                        Q15)b .<button class="login_btn ms-3" value="q15_b" onClick={handleSubmit}>Get </button><p>{print.q15_b}</p>

                                    </div>
                                )}
                                <div className='slide mt-2' id="flip" onClick={() => togglePanel(2)}>
                                    Part-C
                                </div>
                                {isPanelVisible2 && (
                                    <div className='panel' id="panel">
                                        Q16 :<button class="login_btn ms-3" value="q16" onClick={handleSubmit}>Get </button><p>{print.q16}</p>

                                    </div>
                                )}

                                <input type="button" value='Save' className='login_btn float-end mt-3' onClick={pdfconverter} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default NewFile2