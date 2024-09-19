const Student = require('../models/Student');

async function addStudent(req, res) { //  4..................
     try {
          console.log(req.body, 'req.body'); // jo data bhejoge wo ayega
          let student = new Student(req.body);
          await student.save(); // await promise return kr rha hai.//
          console.log("data saved successfully...");
          res.end("data added...");
     } catch (err) {
          console.log(er);
     }
}
async function getStudent(req, res) {
     try {
          let students = await Student.find({});
          console.log(students);
          res.send(students)  //  variable ka data send se send krte hai.
     } catch(err) {
          console.log(err);
     }
}
module.exports = {
     addStudent,
     getStudent
}