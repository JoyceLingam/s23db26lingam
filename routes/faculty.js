var express = require('express');
var router = express.Router();
const faculty_controlers= require('../controllers/faculty');
/* GET home page. */
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    console.log(req.session.returnTo);
    res.redirect("/login");
}
router.get('/', faculty_controlers.faculty_view_all_Page);
router.get('/detail', faculty_controlers.faculty_view_one_Page);
/* GET create faculty page */
router.get('/create', secured, faculty_controlers.faculty_create_Page);
router.get('/update', secured, faculty_controlers.faculty_update_Page);
router.get('/delete', secured, faculty_controlers.faculty_delete_Page);
module.exports = router;