// const pg = require('pg');
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors'); 
// const app = express();
// const axios = require('axios');
// const nodemailer = require('nodemailer');

// app.use(bodyParser.json());
// app.use(cors());

// const pool = new pg.Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'Attendance',
//   password: 'ram123',
//   port: 5432
// });


// app.post('/teachersignup', async (req, res) => {
//   const { name, id, email, otp, department, gender, password } = req.body;
//   console.log(req.body);
//   try {
//     const user = await pool.query('SELECT * FROM teachersignup WHERE email = $1 AND id=$2', [email, id]);
//     if (!user.rows[0]) {
//       const user1 = await pool.query('SELECT * FROM add_admin WHERE email = $1 AND id=$2 AND otp=$3', [email, id, otp]);
//       if (user1.rows[0]) {
//         const new_user = await pool.query('INSERT INTO teachersignup (name,id,email,department,gender,password) VALUES ($1,$2,$3,$4,$5,$6) Returning *', [name, id, email, department, gender, password]);
//         console.log(new_user);
//         if (!new_user.rows[0]) {
//           res.status(404).json('user not inserted');
//         } else {
//           res.status(200).json(new_user.rows[0]);
//         }
//       }else{
//         res.status(404).json('user not inserted');
//       }
//     } else {
//       res.status(404).json('User already exists');
//     }
//   } catch (error) {
//     console.error('Error in signup:', error);
//     res.status(500).json('Error in signup');
//   }
// });

// ///////////////////////////////////////////////////////


// app.post('/login_data', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const Email = await pool.query('select email,name FROM teachersignup WHERE email = $1',
//       [email]);
//     if (Email.rows[0]) {
//       res.status(200).json(Email.rows[0])
//       const Password = await pool.query('select password  FROM teachersignup WHERE password = $1 AND email=$2',
//         [password, email]);
//       // const user = await pool.query('select name from teachersignup')
//       if (Password.rows[0]) {
//         res.status(200).json(Email.rows[0]);
//       }
//       else {
//         res.status(200).json('incorrect password');

//       }
//     }
//     else {
//       res.status(404).json('User not found');
//     }

//   }
//   catch (error) {
//     console.error('Error retrieving user:', error);
//     res.status(500).json('Error retrieving user');
//   }
// });
// //////////////////////////////////////////

// // API for Sending OTP
// function generateOTP() {
//   const min = 1000;
//   const max = 9999;
//   const otp = Math.floor(Math.random() * (max - min + 1) + min);
//   return otp;
// }

// app.post('/send_otp', async (req, res) => {
//   let { email, number } = req.body;
//   let id=0;
//   const otp = generateOTP();
//   if (number == 1) {
//       const verify = await pool.query('SELECT * FROM teachersignup WHERE email=$1', [email]);
//       if (verify.rows[0]) {
//         id = 1;
//         await pool.query('UPDATE add_admin SET otp=$1 WHERE email=$2', [otp, email]);
//       }
//       else {
//         id = Math.floor(Math.random() * 10000);
//       }
//   } else if (number == 2) {
//       id =1;
//        await pool.query('UPDATE add_admin SET otp=$1 WHERE email=$2', [otp, email]);
//   }

//   if (id == 1) {
//     var transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'rupendragorli0221@gmail.com',
//         pass: 'ulfknyjgbrohakrk'
//       }
//     });

//     try {
//       var mailOptions = {
//         from: 'rupendragorli0221@gmail.com',
//         to: email,
//         subject: 'Your OTP is',
//         text: `Your confirmation OTP is: ${otp}`
//       };
//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.log(error);
//           console.error('Error sending email:', error);
//           res.status(500).json('Error sending email');
//         } else {
//           console.log(otp);
//           console.log(email);
//           console.log('Email sent: ' + info.response);
//           res.status(200).json({
//             otp: otp,
//             message: 'OTP sent successfully'
//           });
//         }
//       });
//     } catch (error) {
//       console.error('Error sending OTP:', error);
//       res.status(500).json('Error sending OTP');
//     }
//   } else {
//     res.status(200).json("User not Found");
//   }
  
// });
// /////////////////////////////////////////////////////

// app.put('/studentUpdatePassword', async (req, res) => {
//   try {
//     const { email, new_pass } = req.body;
//     console.log(req.body);
//     await pool.query('update teachersignup set password=$1 where email=$2', [new_pass, email]);
//     const updated_row = await pool.query('select * from teachersignup where password=$1 and email=$2', [new_pass, email]);
//     if (updated_row.rows.length == 0) {
//       res.status(200).json('password not updated');
//     }
//     else {
//       res.status(200).json('password updated successfully');
//     }
//   } catch (error) {
//     console.error('Error updating password:', error);
//     res.status(500).json('Error updating password');
//   }
// });
// ////////////////////////////////////////////////////////

// function getRandomQuestion(new_ques) {

//   const randomIndex = Math.floor(Math.random() * new_ques.length);
//   return new_ques[randomIndex];
// }

// app.get('/midPaper/:subject/:chapter_id/:question_type/:q_marks', async (req, res) => {
//   const { subject, chapter_id, question_type, q_marks } = req.params;
//   console.log('Parameters:', subject, chapter_id, question_type, q_marks);


//   try {
//     const new_ques = await pool.query('SELECT question FROM semester4 WHERE subject=$1 AND chapter_id=$2 AND question_type=$3 AND q_marks=$4', [subject, chapter_id, question_type, q_marks]);
//     console.log(new_ques.rows)
//     if ((new_ques.rows.length) > 0) {
//       const randomQuestion = getRandomQuestion(new_ques.rows);
//       res.json(randomQuestion); // Sending the random question as JSON response
//     } else {
//       res.status(404).json({ error: 'No questions found' }); // If no questions are found
//     }
//   } catch (error) {
//     console.error('Error fetching question:', error);
//     res.status(500).json({ error: 'Server error' }); // Error handling for database query
//   }
// });
// ///////////////////////////////////////////////////////////////

// app.get('/semesterPaper/:subject/:chapter_id/:question_type/:q_marks/:category', async (req, res) => {
//   const { subject, chapter_id, question_type, q_marks, category } = req.params;
//   console.log('Parameters:', subject, chapter_id, question_type, q_marks, category);


//   try {
//     const new_ques = await pool.query('SELECT question FROM semester4 WHERE subject=$1 AND chapter_id=$2 AND question_type=$3 AND q_marks=$4 AND category=$5', [subject, chapter_id, question_type, q_marks, category]);
//     console.log(new_ques.rows)
//     if ((new_ques.rows.length) > 0) {
//       const randomQuestion = getRandomQuestion(new_ques.rows);
//       res.json(randomQuestion); // Sending the random question as JSON response
//     } else {
//       res.status(404).json({ error: 'No questions found' }); // If no questions are found
//     }
//   } catch (error) {
//     console.error('Error fetching question:', error);
//     res.status(500).json({ error: 'Server error' }); // Error handling for database query
//   }
// });
// /////////////////////////////////////////////////////////////////////

// app.post('/subject', async (req, res) => {
//   const { sub } = req.body;
//   console.log(sub)
//   try {
//     const sub_id = await pool.query('select subject from subjects where subject_name=$1', [sub]);
//     console.log(sub_id.rows[0]);
//     res.json(sub_id.rows[0]);
//   } catch (error) {
//     console.error('Error fetching question:', error);
//     res.status(500).json({ error: 'Server error' }); // Error handling for database query
//   }

// });
// ///////////////////////////////////////////////////////


// app.post('/insert', async (req, res) => {
//   const { subject, question, question_type, q_marks, category, chapter_id } = req.body;

//   try {
//     const insert = await pool.query('insert into semester4 (subject,question,question_type,q_marks,category,chapter_id) values($1,$2,$3,$4,$5,$6) Returning *', [subject, question, question_type, q_marks, category, chapter_id]);
//     if (!insert.rows[0]) {
//       res.status(404).json('question is not inserted');
//     }
//     else {
//       res.status(200).json(insert.rows[0]);
//     }
//   } catch (error) {
//     console.error('Error in inserting question:', error);
//     res.status(500).json({ error: 'Server error' }); // Error handling for database query
//   }
// });
// //////////////////////////////////////////////////////////////




// app.post('/otpValidation', async (req, res) => {
//   const { email, enteredOtps } = req.body;
//   try {
//     const otp = await pool.query('SELECT * FROM add_admin WHERE email=$1 AND otp=$2', [email, enteredOtps])
//     console.log(otp);
//     console.log(email);
//     console.log(enteredOtps);
//     if (otp.rows.length>0) {
//       res.status(200).json("login success");
//     } else {
//       res.status(404).json("Invalid OTP")
//     }

//   } catch (error) {
//     console.error('Error retrieving user:', error);
//     res.status(500).json('Error retrieving user');
//   }
// });
// ///////////////////////////////////////////////////////////////


// app.post('/addAdmin', async (req, res) => {
//   const { email, id } = req.body;
//   console.log(req.body);
//   const admin = await pool.query('SELECT * FROM add_admin WHERE email=$1 AND id=$2', [email, id]);
//   if (!admin.rows[0]) {
//     try {
//       const sendOtpResponse = await axios.post('http://localhost:3001/send_otp', { email: email,number:'2' });

//       if (sendOtpResponse.status === 200) {

//         const otp = sendOtpResponse.data.otp;
//         const newAdmin = await pool.query('INSERT INTO add_admin (email,id,otp) VALUES ($1,$2,$3) Returning *', [email, id, otp]);
//         if (newAdmin.rows[0]) {
//           res.status(200).json("Add Admin Successfully");
//         }
//         else {
//           res.json(404, "Error in Adding Admin")
//         }

//       } else {
//         res.status(500).json("Error in sending OTP after adding admin");
//       }

//     } catch (error) {
//       res.json(500, "Error in adding admin:", error);
//     }
//   } else {
//     res.status(200).json("Admin already exists");
//   }
// });


// /////////////////////////////////////////////////////////////////







// app.get('/admin', async (req, res) => {
//   const admin = await pool.query('select name, email from teachersignup')
//   if (admin.rows) {
//     res.status(200).json(admin.rows);
//   }
//   else {
//     res.status(404).json('no data found')
//   }
// })
// //////////////////////////////////////////////////////


// app.put('/deleteAdmin', async (req, res) => {
//   const { email } = req.body;
//   console.log(email);
//   try {
//     const deleteAdmin = await pool.query('DELETE FROM add_admin WHERE email = $1', [email]);
//     const deleteAdmin2 = await pool.query('DELETE FROM teachersignup WHERE email = $1', [email]);
//     if (deleteAdmin.rowCount > 0 && deleteAdmin2.rowCount > 0) {
//       res.status(200).json('Deleted successfully');
//     } else {
//       res.status(404).json('No data found for deletion');
//     }
//   } catch (error) {
//     console.error('Error deleting admin:', error);
//     res.status(500).json('Error deleting admin');
//   }
// });
/////////////////////////////////////////////////////////



// app.listen(3001, () => {
//   console.log('app listening on port 3001');
// });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/uploads', express.static('./media'));

const userRoutes = require('./routes/routes');

app.use('/', userRoutes);

app.listen(3001, () => {
  console.log('app listening on port 3001');
});
