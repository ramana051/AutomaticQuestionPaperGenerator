// import ReactDOM from "react-dom";
// import React from "react";
// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Student_signup from "./Components/USERS/Student/Student_signup";
// import Question_papers from "./Components/USERS/Student/Question_papers";
// import StudentOpt from "./Components/USERS/Student/StudentOpt";
// import StudentLogin from "./Components/USERS/Student/StudentLogin";
// import TeacherAttendance from "./Components/admin/TeacherAttendance";
// import TeacherLogin from "./Components/admin/TeacherLogin";
// import TeacherOtp from "./Components/admin/TeacherOtp";
// import TeacherQuestionpp from "./Components/admin/TeacherQuestionpp";
// import TeacherResults from "./Components/admin/TeacherResults";
// import Teachersignup from "./Components/admin/TeacherSignup";
// import Attendance_Results from "./Components/USERS/Student/Attendance_Results";


// import Approve from "./Components/USERS/Student/Approve";
// import File from "./Components/USERS/Student/File";
// import NewFile from "./Components/admin/NewFile";
// import NewFile2 from "./Components/admin/NewFile2";
// import QuestionsInserting from "./Components/admin/QuestionsInserting";
// import Preview from "./Components/admin/Preview";
// import PdfGenerator from "./Components/admin/PdfGenerator";


// export default function App() {
//   return (
//     <>
//       <div>
//         <BrowserRouter>
//           <Routes>
//             <Route path='/Student_signup' element={<Student_signup />} />
//             <Route path='/Question_papers' element={<Question_papers />} />
//             <Route path='/AttendanceResults' element={<Attendance_Results/>}/>
//             <Route path='/' element={<StudentLogin />} />
//             <Route path='/StudentOtp' element={<StudentOpt />} />
//             <Route path="/TeacherAttendance" element={<TeacherAttendance />} />
//             <Route path="/TeacherLogin" element={<TeacherLogin />} />
//             <Route path="/TeacherOtp" element={<TeacherOtp />} />
//             <Route path="/TeacherQuestionpp" element={<TeacherQuestionpp />} />
//             <Route path="/TeacherResult" element={<TeacherResults />} />
//             <Route path="/TeacherSignup" element={<Teachersignup/>}/>
//             <Route path="/approve" element={<Approve/>}/>
//             <Route path="/file" element={<File/>}/>
//             <Route path="/newfile" element={<NewFile/>}/>
//             <Route path="/newfile2" element={<NewFile2/>}/>
//             <Route path="questionsinsertion" element={<QuestionsInserting/>}/>
//             <Route path="/preview" element={<Preview/>}/>
//             <Route path="/Pdfgenerator" element={<PdfGenerator/>}/>
            
//           </Routes>
//         </BrowserRouter>
//       </div>
//     </>
//   );
// }

// const root = document.getElementById('root');
// ReactDOM.render(<App />, root);



import ReactDOM from "react-dom";
import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TeacherLogin from "./Components/admin/TeacherLogin";
import TeacherOtp from "./Components/admin/TeacherOtp";
import Teachersignup from "./Components/admin/TeacherSignup";
import NewFile from "./Components/admin/NewFile";
import NewFile2 from "./Components/admin/NewFile2";
import QuestionsInserting from "./Components/admin/QuestionsInserting";
import PdfGenerator from "./Components/admin/PdfGenerator";
import UpdatePassword from "./Components/admin/UpdatePassword";
import ForgotPassword from "./Components/admin/ForgotPassword";
import Head from "./Components/admin/Head";
import AddAdmin from "./Components/admin/AddAdmin";
import PdfGeneratorMid from "./Components/admin/PdfGeneratorMid";
import DeleteQuestion from "./Components/admin/DeleteQuestion";
import Todolist from "./Components/USERS/Todolist";
import Practice from "./Components/admin/Practice";
import PrivateRoute from "./Components/admin/PrivateRoute";

export default function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TeacherLogin />} />
            {/* <Route path="/NewFile" element={<PrivateRoute/>}/> */}
            <Route path="/TeacherOtp" element={<TeacherOtp />} />
            <Route path="/TeacherSignup" element={<Teachersignup/>}/>
            <Route path="/Newfile" element={<NewFile/>}/>
            <Route path="/newfile2" element={<NewFile2/>}/>
            <Route path="questionsinsertion" element={<QuestionsInserting/>}/>
            <Route path="/Pdfgenerator" element={<PdfGenerator/>}/>
            <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
            <Route path="/UpdatePassword" element={<UpdatePassword/>}/>
            <Route path="/Header" element={<Head/>}/>
            <Route path="/addadmin" element={<AddAdmin/>}/>
            <Route path="/pdfgeneratormid" element={<PdfGeneratorMid/>}/>
            {/* <Route path="/deletequestion" element={<DeleteQuestion/>}/>   */}
            {/* <Route path="/to" element={<Todolist/>}/>  */}
            {/* <Route path="/p" element={<Practice/>}/>    */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);