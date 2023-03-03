const express = require('express');
const router = express.Router();
const employeeControler = require('../controllers/employees.controllers');

router.get('/employees', employeeControler.getAll);
router.get('/employees/random', employeeControler.getRandom);
router.get('/employees/:id', employeeControler.getById);
router.post('/employees', employeeControler.postNew);
router.put('/employees/:id', employeeControler.putById);
router.delete('/employees/:id', employeeControler.deleteById);

module.exports = router;