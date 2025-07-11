// const pool=require('../config/config');
// const axios =require('axios');
// const nodemailer =require('nodemailer');


//  const teachersignup =async (req, res) => {
//     const { name, id, email, otp, department, gender, password } = req.body;
//     try {
//       const user = await pool.query('SELECT * FROM teachersignup WHERE email = $1 AND id=$2', [email, id]);
//       if (!user.rows[0]) {
//         const user1 = await pool.query('SELECT * FROM add_admin WHERE email = $1 AND id=$2 AND otp=$3', [email, id, otp]);
//         if (user1.rows[0]) {
//           const new_user = await pool.query('INSERT INTO teachersignup (name,id,email,department,gender,password) VALUES ($1,$2,$3,$4,$5,$6) Returning *', [name, id, email, department, gender, password]);
//           if (!new_user.rows[0]) {
//             res.status(404).json('user not inserted');
//           } else {
//             res.status(200).json(new_user.rows[0]);
//           }
//         }else{
//           res.status(200).json('Restricted');
//         }
//       } else {
//         res.status(404).json('User already exists');
//       }
//     } catch (error) {
//       console.error('Error in signup:', error);
//       res.status(500).json('Error in signup');
//     }
//   };


//   const teacherlogin= async (req, res) => {
//     const { email, password } = req.body;
//     try {
//       const Email = await pool.query('select email,name FROM teachersignup WHERE email = $1',
//         [email]);
//       if (Email.rows[0]) {
//         const Password = await pool.query('select password  FROM teachersignup WHERE password = $1 AND email=$2',
//           [password, email]);
//         if (Password.rows[0]) {
//           res.status(200).json(Email.rows[0]);
//         }
//         else {
//           res.status(200).json('incorrect password');
//         }
//       }
//       else {
//         res.status(404).json('User not found');
//       }
  
//     }
//     catch (error) {
//       console.error('Error retrieving user:', error);
//       res.status(500).json('Error retrieving user');
//     }
//   };


//   function generateOTP() {
//     const min = 1000;
//     const max = 9999;
//     const otp = Math.floor(Math.random() * (max - min + 1) + min);
//     return otp;
//   }
  
//   const sendotp= async (req, res) => {
//     let { email, number } = req.body;
//     let id=0;
//     const otp = generateOTP();
//     if (number == 1) {
//         const verify = await pool.query('SELECT * FROM teachersignup WHERE email=$1', [email]);
//         if (verify.rows[0]) {
//           id = 1;
//           await pool.query('UPDATE add_admin SET otp=$1 WHERE email=$2', [otp, email]);
//         }
//         else {
//           id = Math.floor(Math.random() * 10000);
//         }
//     } else if (number == 2) {
//         id =1;
//          await pool.query('UPDATE add_admin SET otp=$1 WHERE email=$2', [otp, email]);
//     }
  
//     if (id == 1) {
//       var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'rupendragorli0221@gmail.com',
//           pass: 'ulfknyjgbrohakrk'
//         }
//       });
  
//       try {
//         var mailOptions = {
//           from: 'rupendragorli0221@gmail.com',
//           to: email,
//           subject: 'Your OTP is',
//           text: `Your confirmation OTP is: ${otp}`
//         };
//         transporter.sendMail(mailOptions, (error, info) => {
//           if (error) {
//             console.log(error);
//             console.error('Error sending email:', error);
//             res.status(500).json('Error sending email');
//           } else {
//             res.status(200).json({
//               otp: otp,
//               message: 'OTP sent successfully'
//             });
//           }
//         });
//       } catch (error) {
//         console.error('Error sending OTP:', error);
//         res.status(500).json('Error sending OTP');
//       }
//     } else {
//       res.status(200).json("User not Found");
//     }
    
//   };


//   const updatepassword= async (req, res) => {
//     try {
//       const { email, new_pass } = req.body;
//       await pool.query('update teachersignup set password=$1 where email=$2', [new_pass, email]);
//       const updated_row = await pool.query('select * from teachersignup where password=$1 and email=$2', [new_pass, email]);
//       if (updated_row.rows.length == 0) {
//         res.status(200).json('password not updated');
//       }
//       else {
//         res.status(200).json('password updated successfully');
//       }
//     } catch (error) {
//       console.error('Error updating password:', error);
//       res.status(500).json('Error updating password');
//     }
//   };


//   function getRandomQuestion(new_ques) {

//     const randomIndex = Math.floor(Math.random() * new_ques.length);
//     return new_ques[randomIndex];
//   }
  
//   const midpaper= async (req, res) => {
//     const { semester,subject, chapter_id, question_type, q_marks } = req.params;
//     console.log(req.params);
//     try {
//       const new_ques = await pool.query(`SELECT question FROM ${semester} WHERE subject=$1 AND chapter_id=$2 AND question_type=$3 AND q_marks=$4`, [subject, chapter_id, question_type, q_marks]);
//       if ((new_ques.rows.length) > 0) {
//         const randomQuestion = getRandomQuestion(new_ques.rows);
//         res.json(randomQuestion);
//       } else {
//         res.status(404).json({ error: 'No questions found' });
//       }
//     } catch (error) {
//       console.error('Error fetching question:', error);
//       res.status(500).json({ error: 'Server error' });
//     }
//   };

//   const semesterpaper= async (req, res) => {
//     const {semester, subject, chapter_id, question_type, q_marks, category } = req.params;
//     console.log(req.params);
//     try {
//       const new_ques = await pool.query(`SELECT question FROM ${semester} WHERE subject=$1 AND chapter_id=$2 AND question_type=$3 AND q_marks=$4 AND category=$5`, [subject, chapter_id, question_type, q_marks, category]);
//       if ((new_ques.rows.length) > 0) {
//         const randomQuestion = getRandomQuestion(new_ques.rows);
//         res.json(randomQuestion); 
//       } else {
//         res.status(404).json({ error: 'No questions found' }); 
//       }
//     } catch (error) {
//       console.error('Error fetching question:', error);
//       res.status(500).json({ error: 'Server error' });
//     }
//   };


//   const subjectcode= async (req, res) => {
//     const { sub } = req.body;
//     console.log(sub)
//     try {
//       const sub_id = await pool.query('select subject from subjects where subject_name=$1', [sub]);
//       console.log(sub_id.rows[0]);
//       res.json(sub_id.rows[0]);
//     } catch (error) {
//       console.error('Error fetching question:', error);
//       res.status(500).json({ error: 'Server error' });
//     }
  
//   };


//   const insertquestion= async (req, res) => {
//     const { subject, question, question_type, q_marks, category, chapter_id } = req.body;
  
//     try {
//       const insert = await pool.query('insert into semester4 (subject,question,question_type,q_marks,category,chapter_id) values($1,$2,$3,$4,$5,$6) Returning *', [subject, question, question_type, q_marks, category, chapter_id]);
//       if (!insert.rows[0]) {
//         res.status(404).json('question is not inserted');
//       }
//       else {
//         res.status(200).json(insert.rows[0]);
//       }
//     } catch (error) {
//       console.error('Error in inserting question:', error);
//       res.status(500).json({ error: 'Server error' });
//     }
//   };


//   const otpvalidation= async (req, res) => {
//     const { email, enteredOtps } = req.body;
//     try {
//       const otp = await pool.query('SELECT * FROM add_admin WHERE email=$1 AND otp=$2', [email, enteredOtps])
//       console.log(otp);
//       console.log(email);
//       console.log(enteredOtps);
//       if (otp.rows.length>0) {
//         res.status(200).json("login success");
//       } else {
//         res.status(404).json("Invalid OTP")
//       }
  
//     } catch (error) {
//       console.error('Error retrieving user:', error);
//       res.status(500).json('Error retrieving user');
//     }
//   };


//   const addadmin= async (req, res) => {
//     const { email, id } = req.body;
//     console.log(req.body);
//     const admin = await pool.query('SELECT * FROM add_admin WHERE email=$1 AND id=$2', [email, id]);
//     if (!admin.rows[0]) {
//       try {
//         const sendOtpResponse = await axios.post('http://localhost:3001/send_otp', { email: email,number:'2' });
  
//         if (sendOtpResponse.status === 200) {
  
//           const otp = sendOtpResponse.data.otp;
//           const newAdmin = await pool.query('INSERT INTO add_admin (email,id,otp) VALUES ($1,$2,$3) Returning *', [email, id, otp]);
//           if (newAdmin.rows[0]) {
//             res.status(200).json("Add Admin Successfully");
//           }
//           else {
//             res.json(404, "Error in Adding Admin")
//           }
  
//         } else {
//           res.status(500).json("Error in sending OTP after adding admin");
//         }
  
//       } catch (error) {
//         res.json(500, "Error in adding admin:", error);
//       }
//     } else {
//       res.status(200).json("Admin already exists");
//     }
//   };

//   const alladmins=async (req, res) => {
//     const admin = await pool.query('select name, email from teachersignup')
//     if (admin.rows) {
//       res.status(200).json(admin.rows);
//     }
//     else {
//       res.status(404).json('no data found')
//     }
//   };


//   const deleteadmin = async (req, res) => {
//     const { email } = req.body;
//     console.log(email);
//     try {
//       const deleteAdmin = await pool.query('DELETE FROM add_admin WHERE email = $1', [email]);
//       if (deleteAdmin.rowCount > 0) {
//         const deleteAdmin2 = await pool.query('DELETE FROM teachersignup WHERE email = $1', [email]);
//         if (deleteAdmin2.rowCount > 0) {
//           res.status(200).json('Deleted successfully');
//         } else {
//           res.status(404).json('Error deleting data');
//         }
//       } else {
//         res.status(200).json('You can`t delete this admin');
//       }
//     } catch (error) {
//       console.error('Error deleting admin:', error);
//       res.status(500).json('Error deleting admin');
//     }
//   };


// module.exports={teachersignup,teacherlogin,sendotp,updatepassword,midpaper,semesterpaper,subjectcode,insertquestion,otpvalidation,addadmin,alladmins,deleteadmin}




const pool = require('../config/config');
const axios = require('axios');
const nodemailer = require('nodemailer');


const teachersignup = async (req, res) => {
  const { name, id, email, otp, department, gender, password } = req.body;
  try {
    const user = await pool.query('SELECT * FROM teachersignup WHERE email = $1 AND id=$2', [email, id]);
    if (!user.rows[0]) {
      const user1 = await pool.query('SELECT * FROM add_admin WHERE email = $1 AND id=$2 AND otp=$3', [email, id, otp]);
      if (user1.rows[0]) {
        const new_user = await pool.query('INSERT INTO teachersignup (name,id,email,department,gender,password) VALUES ($1,$2,$3,$4,$5,$6) Returning *', [name, id, email, department, gender, password]);
        if (!new_user.rows[0]) {
          res.status(404).json('user not inserted');
        } else {
          res.status(200).json(new_user.rows[0]);
        }
      } else {
        res.status(200).json('Restricted');
      }
    } else {
      res.status(404).json('User already exists');
    }
  } catch (error) {
    console.error('Error in signup:', error);
    res.status(500).json('Error in signup');
  }
};


const teacherlogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const Email = await pool.query('select email,name FROM teachersignup WHERE email = $1',
      [email]);
    if (Email.rows[0]) {
      const Password = await pool.query('select password  FROM teachersignup WHERE password = $1 AND email=$2',
        [password, email]);
      if (Password.rows[0]) {
        res.status(200).json(Email.rows[0]);
      }
      else {
        res.status(200).json('incorrect password');
      }
    }
    else {
      res.status(404).json('User not found');
    }

  }
  catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).json('Error retrieving user');
  }
};


function generateOTP() {
  const min = 1000;
  const max = 9999;
  const otp = Math.floor(Math.random() * (max - min + 1) + min);
  return otp;
}

const sendotp = async (req, res) => {
  let { email, number } = req.body;
  let id = 0;
  const otp = generateOTP();
  if (number == 1) {
    const verify = await pool.query('SELECT * FROM teachersignup WHERE email=$1', [email]);
    if (verify.rows[0]) {
      id = 1;
      await pool.query('UPDATE add_admin SET otp=$1 WHERE email=$2', [otp, email]);
    }
    else {
      id = Math.floor(Math.random() * 10000);
    }
  } else if (number == 2) {
    id = 1;
    await pool.query('UPDATE add_admin SET otp=$1 WHERE email=$2', [otp, email]);
  }

  if (id == 1) {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'rupendragorli0221@gmail.com',
        pass: 'ulfknyjgbrohakrk'
      }
    });

    try {
      var mailOptions = {
        from: 'rupendragorli0221@gmail.com',
        to: email,
        subject: 'Your OTP is',
        text: ` Your confirmation OTP is: ${otp}`
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          console.error('Error sending email:', error);
          res.status(500).json('Error sending email');
        } else {
          res.status(200).json({
            otp: otp,
            message: 'OTP sent successfully'
          });
        }
      });
    } catch (error) {
      console.error('Error sending OTP:', error);
      res.status(500).json('Error sending OTP');
    }
  } else {
    res.status(200).json("User not Found");
  }

};


const updatepassword = async (req, res) => {
  try {
    const { email, new_pass } = req.body;
    await pool.query('update teachersignup set password=$1 where email=$2', [new_pass, email]);
    const updated_row = await pool.query('select * from teachersignup where password=$1 and email=$2', [new_pass, email]);
    if (updated_row.rows.length == 0) {
      res.status(200).json('password not updated');
    }
    else {
      res.status(200).json('password updated successfully');
    }
  } catch (error) {
    console.error('Error updating password:', error);
    res.status(500).json('Error updating password');
  }
};


function getRandomQuestion(new_ques) {

  const randomIndex = Math.floor(Math.random() * new_ques.length);
  return new_ques[randomIndex];
}

const midpaper = async (req, res) => {
  const { semester, subject, chapter_id, question_type, q_marks, category } = req.params;
  console.log('Parameters:', subject, chapter_id, question_type, q_marks, category);
  if (q_marks != "1m") {
    try {
      const new_ques = await pool.query(`SELECT question FROM ${semester} WHERE subject=$1 AND chapter_id=$2 AND question_type=$3 AND q_marks=$4`, [subject, chapter_id, question_type, q_marks]);
      console.log(new_ques.rows)
      if ((new_ques.rows.length) > 0) {
        const randomQuestion = getRandomQuestion(new_ques.rows);
        res.json(randomQuestion);
      } else {
        res.status(404).json({ error: 'No questions found' });
      }
    } catch (error) {
      console.error('Error fetching question:', error);
      res.status(500).json({ error: 'Server error' });
    }
  } else {
    try {
      const new_ques = await pool.query('SELECT question FROM semester4 WHERE subject=$1 AND chapter_id=$2 AND q_marks=$3 AND category=$4', [subject, chapter_id, q_marks, category]);
      console.log(new_ques.rows)
      // return;
      if ((new_ques.rows.length) > 0) {
        const randomQuestion = getRandomQuestion(new_ques.rows);
        res.json(randomQuestion);
      } else {
        res.status(404).json({ error: 'No questions found' });
      }
    } catch (error) {
      console.error('Error fetching question:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
};

const semesterpaper = async (req, res) => {
  const { semester, subject, chapter_id, question_type, q_marks, category } = req.params;
  console.log(req.params);
  try {
    const new_ques = await pool.query(`SELECT question FROM ${semester} WHERE subject=$1 AND chapter_id=$2 AND question_type=$3 AND q_marks=$4 AND category=$5`, [subject, chapter_id, question_type, q_marks, category]);
    if ((new_ques.rows.length) > 0) {
      const randomQuestion = getRandomQuestion(new_ques.rows);
      res.json(randomQuestion);
    } else {
      res.status(404).json({ error: 'No questions found' });
    }
  } catch (error) {
    console.error('Error fetching question:', error);
    res.status(500).json({ error: 'Server error' });
  }
};


const subjectcode = async (req, res) => {
  const { sub } = req.body;
  console.log(sub)
  try {
    const sub_id = await pool.query('select subject from subjects where subject_name=$1', [sub]);
    console.log(sub_id.rows[0]);
    res.json(sub_id.rows[0]);
  } catch (error) {
    console.error('Error fetching question:', error);
    res.status(500).json({ error: 'Server error' });
  }

};


const insertquestion = async (req, res) => {
  const { subject, question, question_type, q_marks, category, chapter_id } = req.body;

  try {
    const insert = await pool.query('insert into semester4 (subject,question,question_type,q_marks,category,chapter_id) values($1,$2,$3,$4,$5,$6) Returning *', [subject, question, question_type, q_marks, category, chapter_id]);
    if (!insert.rows[0]) {
      res.status(404).json('question is not inserted');
    }
    else {
      console.log(insert);
      res.status(200).json(insert.rows[0]);
    }
  } catch (error) {
    console.error('Error in inserting question:', error);
    res.status(500).json({ error: 'Server error' });
  }
};


const otpvalidation = async (req, res) => {
  const { email, enteredOtps } = req.body;
  try {
    const otp = await pool.query('SELECT * FROM add_admin WHERE email=$1 AND otp=$2', [email, enteredOtps])
    console.log(otp);
    console.log(email);
    console.log(enteredOtps);
    if (otp.rows.length > 0) {
      res.status(200).json("login success");
    } else {
      res.status(404).json("Invalid OTP")
    }

  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).json('Error retrieving user');
  }
};


const addadmin = async (req, res) => {
  const { email, id } = req.body;
  console.log(req.body);
  const admin = await pool.query('SELECT * FROM add_admin WHERE email=$1 AND id=$2', [email, id]);
  if (!admin.rows[0]) {
    try {
      const sendOtpResponse = await axios.post('http://localhost:3001/send_otp', { email: email, number: '2' });

      if (sendOtpResponse.status === 200) {

        const otp = sendOtpResponse.data.otp;
        const newAdmin = await pool.query('INSERT INTO add_admin (email,id,otp) VALUES ($1,$2,$3) Returning *', [email, id, otp]);
        if (newAdmin.rows[0]) {
          res.status(200).json("Add Admin Successfully");
        }
        else {
          res.json(404, "Error in Adding Admin")
        }

      } else {
        res.status(500).json("Error in sending OTP after adding admin");
      }

    } catch (error) {
      res.json(500, "Error in adding admin:", error);
    }
  } else {
    res.status(200).json("Admin already exists");
  }
};

const alladmins = async (req, res) => {
  const admin = await pool.query('select name, email from teachersignup')
  if (admin.rows) {
    res.status(200).json(admin.rows);
  }
  else {
    res.status(404).json('no data found')
  }
};


const deleteadmin = async (req, res) => {
  const { email } = req.body;
  console.log(email);
  try {
    const deleteAdmin = await pool.query('DELETE FROM add_admin WHERE email = $1', [email]);
    if (deleteAdmin.rowCount > 0) {
      const deleteAdmin2 = await pool.query('DELETE FROM teachersignup WHERE email = $1', [email]);
      if (deleteAdmin2.rowCount > 0) {
        res.status(200).json('Deleted successfully');
      } else {
        res.status(404).json('Error deleting data');
      }
    } else {
      res.status(200).json('You can`t delete "Main Admin"');
    }
  } catch (error) {
    console.error('Error deleting admin:', error);
    res.status(500).json('Error deleting admin');
  }
};

const view_question = async(req,res) => {
  
  const { semester, subject, chapter_id, q_marks, category } = req.body;
  console.log(req.body);
  console.log(semester, subject, chapter_id, q_marks,category )
  try{
    const view = await pool.query(`SELECT question,category, subject, chapter_id, q_marks FROM ${semester} WHERE subject=$1 AND chapter_id=$2  AND q_marks=$3 AND category=$4`, [subject, chapter_id, q_marks, category]);
    console.log(view)
  if(view.rows){
    res.status(200).json(view)

  }
  else{
    res.status(404).json('denied')
  }
}
catch(error){
  console.error('error geting',error);
}
};
module.exports = { teachersignup, teacherlogin, sendotp, updatepassword, midpaper, semesterpaper, subjectcode, insertquestion, otpvalidation, addadmin, alladmins, deleteadmin ,view_question}