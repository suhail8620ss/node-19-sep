const express = require('express');
const studentcontroller = require('../controllers/studentcontroller');
const router = express.Router();
router.use(express.json())
router.post('/add/student', (req, res) => { //  2..............
     studentcontroller.addStudent(req, res); // 3..............
})
router.get('/students', (req,res) => {
     studentcontroller.getStudent(req, res);
})
module.exports = router;