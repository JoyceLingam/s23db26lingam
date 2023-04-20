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
exports.faculty_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await faculty.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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

/*
// Handle faculty delete form on DELETE.
exports.faculty_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: faculty delete DELETE ' + req.params.id);
};
*/

// Handle faculty update form on PUT.
exports.faculty_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await faculty.findById( req.params.id)
    // Do updates of properties
        if(req.body.Cust_Name) toUpdate.Cust_Name = req.body.Cust_Name;
        if(req.body.Cust_Age) toUpdate.Cust_Age = req.body.Cust_Age;
        if(req.body.Mail_Id) toUpdate.Mail_Id = req.body.Mail_Id;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// Handle faculty delete on DELETE.
exports.faculty_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await faculty.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
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

// Handle a show one view with id specified by query
exports.faculty_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await faculty.findById( req.query.id)
    res.render('facultydetail',
   { title: 'faculty Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle building the view for creating a faculty.
// No body, no in path parameter, no query.
// Does not need to be async
exports.faculty_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('facultycreate', { title: 'Faculty Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


// Handle building the view for updating a faculty.
// query provides the id
exports.faculty_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await faculty.findById(req.query.id)
    res.render('facultyupdate', { title: 'faculty Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


// Handle a delete one view with id from query
exports.faculty_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await faculty.findById(req.query.id)
    res.render('facultydelete', { title: 'faculty Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };