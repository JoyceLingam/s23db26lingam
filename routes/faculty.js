var express = require('express');
const faculty_controlers= require('../controllers/faculty');
var router = express.Router();
/* GET facultys */
router.get('/', faculty_controlers.faculty_view_all_Page );

router.get('/faculty/:id',faculty_controlers.faculty_detail);
router.get('/detail', faculty_controlers.faculty_view_one_Page);
router.get('/create', faculty_controlers.faculty_create_Page);
/* GET create update page */
router.get('/update', faculty_controlers.faculty_update_Page);

router.get('/delete', faculty_controlers.faculty_delete_Page);

module.exports = router;
