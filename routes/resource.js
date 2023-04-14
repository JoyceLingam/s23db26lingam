var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var faculty_controller = require('../controllers/faculty');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// faculty ROUTES ///
// POST request for creating a faculty.
router.post('/faculty', faculty_controller.faculty_create_post);
// DELETE request to delete faculty.
router.delete('/faculty/:id', faculty_controller.faculty_delete);
// PUT request to update faculty.
router.put('/faculty/:id', faculty_controller.faculty_update_put);
// GET request for one faculty.
router.get('/faculty/:id', faculty_controller.faculty_detail);
// GET request for list of all faculty items.
router.get('/faculty', faculty_controller.faculty_list);
module.exports = router;

