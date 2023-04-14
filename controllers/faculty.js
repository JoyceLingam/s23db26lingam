var faculty = require('../models/faculty');
// List of all facultys
exports.faculty_list = async function(req, res) {
    try{
    thefacultys = await faculty.find();
    res.send(thefacultys);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific faculty.
exports.faculty_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: faculty detail: ' + req.params.id);
};
// Handle faculty create on POST.
exports.faculty_create_post = async function(req, res) {
    console.log(req.body)
    let document = new faculty();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"faculty_type":"goat", "cost":12, "size":"large"}
    document.Cust_Name = req.body.Cust_Name;
    document.Cust_Age = req.body.Cust_Age;
    document.Mail_Id = req.body.Mail_Id;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle faculty delete form on DELETE.
exports.faculty_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: faculty delete DELETE ' + req.params.id);
};
// Handle faculty update form on PUT.
exports.faculty_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: faculty update PUT' + req.params.id);
};

exports.faculty_view_all_Page = async function(req, res) {
    try{
    thefaculty = await faculty.find();
    res.render('faculty', { title: 'faculty Search Results', results: thefaculty });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}