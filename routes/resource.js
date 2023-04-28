var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var faculty_controller = require('../controllers/faculty');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/faculty', faculty_controller.faculty_create_post);
// DELETE request to delete Costume.
router.delete('/faculty/:id', faculty_controller.faculty_delete);
// PUT request to update Costume.
router.put('/faculty/:id', faculty_controller.faculty_update_put);
// GET request for one Costume.
router.get('/faculty/:id', faculty_controller.faculty_detail);
// GET request for list of all Costume items.
router.get('/faculty', faculty_controller.faculty_list);
module.exports = router;