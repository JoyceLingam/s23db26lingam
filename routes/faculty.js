var express = require('express');
const faculty_controlers= require('../controllers/faculty');
var router = express.Router();
/* GET facultys */
router.get('/', faculty_controlers.faculty_view_all_Page );
module.exports = router;
