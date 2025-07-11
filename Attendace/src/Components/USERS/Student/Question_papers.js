import React from 'react'
import QuestionPaperimg from '../../../assets/QuestionPaper.png'
import logo from '../../../assets/Subtract.png'

const Question_papers = () => {
  return (
    <body>
      <nav class="navbar navbar-expand-sm ">
        <div class="container dashboard">
          <h1>Dashboard</h1>
          <a class="navbar-brand" href="user">
            <img src={logo} alt="Logo" style={{ width: '100px' }} class="rounded-pill" />
          </a>
        </div>
      </nav>
      <div class="container mt-3">
        <nav class="navbar navbar-expand-sm">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mynavbar">
              <ul class="navbar-nav me-auto">
                <li class="nav-item navbox2">
                  <a class="nav-link navibar" href="AttendanceResults">Attendance & Results</a>
                </li>
                <li class="nav-item navbox">
                  <a class="nav-link navibar" href="Question_papers">Question Papers</a>
                </li>
              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="text" placeholder="Search" />
                <button class="btn btn-primary" type="button">Search</button>
              </form>
            </div>
          </div>
        </nav>
        <div className='tablebody'>
          <p>Question Papers</p>
          <select name="SEMESTER" id='SEMESTER' class="QuestionPaperSelect">
            <option value="Semester1">Semester1</option>
            <option value="Semester2">Semester2</option>
            <option value="Semester3">Semester3</option>
          </select>
          <select name="SUBJECTS" id='SUBJECTS' class="QuestionPaperSelect">
            <option value="english">ENGLISH</option>
            <option value="physics">PHYSICS</option>
            <option value="chemistry">CHEMISTRY</option>
            <option value="maths">MATHS</option>
            <option value="c">PROGRAMMING C</option>
            <option value="bce">B.C.E</option>
          </select>
          <div className='row'>
            <div class="container mt-3 col-5">
              <table class="table table-bordered tableRadius border1">
                <tbody>
                  <tr>
                    <th>English Question Paper 1</th>
                  </tr>
                  <tr>
                    <td>English Question Paper 2</td>
                  </tr>
                  <tr>
                    <td>English Question Paper 3</td>
                  </tr>
                  <tr>
                    <td>English Question Paper 4</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='col-1'></div> 
            <div className='col-1'></div>
            <div class="container mt-3 col-5 ">

              <img src={QuestionPaperimg} alt='QuestionPaper' className='imgalign' />

            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Question_papers