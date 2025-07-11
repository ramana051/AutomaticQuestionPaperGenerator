import React from 'react'
import logo from '../../../assets/Subtract.png'

const Attendance_Results = () => {
  return (
    <body>
      <nav class="navbar navbar-expand-sm ">
        <div class="container dashboard">
          <h1>Dashboard</h1>
          <a class="navbar-brand" href="user">
            <img src={logo} alt="Logo" style={{ width: '90px' }} class="rounded-pill" />
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
                <li class="nav-item navbox">
                  <a class="nav-link navibar" href="AttendanceResults">Attendance & Results</a>
                </li>
                <li class="nav-item navbox2">
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
        <div class="table-responsive">
          <p>Attendance</p>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>semester/month</th>
                <th>JAN</th>
                <th>FEB</th>
                <th>MAR</th>
                <th>APR</th>
                <th>MAY</th>
                <th>JUN</th>
                <th>JUL</th>
                <th>AUG</th>
                <th>SEP</th>
                <th>NOV</th>
                <th>DEC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>semester 1-1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>semester 1-1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>semester 1-1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>semester 1-1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>semester 1-1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>semester 1-1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-responsive">
          <p>Results</p>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>MID/SUBJECTS</th>
                <th>SUB 1</th>
                <th>SUB 2</th>
                <th>SUB 3</th>
                <th>SUB 4</th>
                <th>SUB 5</th>
                <th>SUB 6</th>
                <th>SUB 7</th>
                <th>SUB 8</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Semester 1-1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Semester 1-2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Semester 2-1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Semester 2-2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Semester 3-1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Semester 3-2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-responsive">
        <p>Lab/Subjects</p>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Lab/Subjects</th>
                <th>SUB 1</th>
                <th>SUB 2</th>
                <th>SUB 3</th>
                <th>SUB 4</th>
                <th>SUB 5</th>
                <th>SUB 6</th>
                <th>SUB 7</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Semester 1-Lab</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Semester 1-Lab 2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Semester 2 Mid-1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Semester 2 Mid-2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Semester 3 Mid-1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Semester 3 Mid-2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        </div>
      </div>

    </body>
  )
}

export default Attendance_Results