const express = require('express').Router();

const {teachersignup,teacherlogin,sendotp,updatepassword,midpaper,semesterpaper,subjectcode,insertquestion,otpvalidation,addadmin,alladmins,deleteadmin, view_question} = require('../controller/admin');


express.post('/teachersignup',teachersignup);
express.post('/login_data',teacherlogin);
express.post('/send_otp',sendotp);
express.put('/studentUpdatePassword',updatepassword);
express.get('/midPaper/:semester/:subject/:chapter_id/:question_type/:q_marks/:category',midpaper);
express.get('/semesterPaper/:semester/:subject/:chapter_id/:question_type/:q_marks/:category',semesterpaper);
express.post('/subject',subjectcode);
express.post('/insert',insertquestion);
express.post('/otpValidation',otpvalidation);
express.post('/addAdmin',addadmin);
express.get('/admin',alladmins);
express.put('/deleteAdmin',deleteadmin);
express.post('/view_question',view_question);



  
module.exports = express;