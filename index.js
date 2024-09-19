const express = require('express');
let connection = require('./connection');
const student =require('./routes/student'); // 1......
const app = express();
connection();
app.use(student);
app.listen(3000, (err) => {
     if(err ) {
          console.log(err);
     } else {
          console.log("Server is running on 3000");
     }
})
// localhost:3000/add/student