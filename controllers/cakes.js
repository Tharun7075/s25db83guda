var cakes = require('../models/cakes');
// List of all Costumes
//exports.cakes_list = function(req, res) {
//res.send('NOT IMPLEMENTED: cakes list');
//};
// List of all Costumes
exports.cakes_list = async function(req, res) {
try{
thecakes = await cakes.find();
res.send(thecakes);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};


// for a specific Costume.
exports.cakes_list_detail = function(req, res) {
res.send('NOT IMPLEMENTED: cakes detail: ' + req.params.id);
};
// Handle Costume create on POST.
//exports.cakes_create_post = function(req, res) {
//res.send('NOT IMPLEMENTED: cakes create POST');
//};
// Handle Costume create on POST.
exports.cakes_create_post = async function(req, res) {
    console.log(req.body)
    let document = new cakes();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.flavors = req.body.flavors;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle Costume delete from on DELETE.
exports.cakes_delete = function(req, res) {
res.send('NOT IMPLEMENTED: cakes delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.cakes_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: cakes update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.cakes_view_all_Page = async function(req, res) {
    try{
    thecakes = await cakes.find();
    res.render('cakes', { title: 'cakes Search Results', results: thecakes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // for a specific Costume.
exports.cakes_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await cakes.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

   // Handle Costume update form on PUT.
exports.costume_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await cakes.findById( req.params.id)
 // Do updates of properties
 if(req.body.name)toUpdate.name = req.body.name;
 if(req.body.flavors) toUpdate.flavors = req.body.flavors;
 if(req.body.size) toUpdate.price = req.body.price;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

// Handle Costume delete on DELETE.
exports.cakes_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await cakes.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
   // Handle a show one view with id specified by query
exports.cakes_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await cakes.findById( req.query.id)
    res.render('cakesdetail',
   { title: 'cakes Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };



// Handle Costume update form on PUT.
exports.cakes_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await cakes.findById( req.params.id)
 // Do updates of properties
 if(req.body.name)toUpdate.name = req.body.name;
 if(req.body.flavors) toUpdate.flavors = req.body.flavors;
 if(req.body.price) toUpdate.size = req.body.price;
 if(req.body.checkboxsale) toUpdate.sale = true;
else toUpdate.same = false;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.cakes_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('cakescreate', { title: 'cakes Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   //Handle building the view for updating a costume.
   // query provides the id
   exports.cakes_update_Page = async function(req, res) {
   console.log("update view for item "+req.query.id)
   try{
   let result = await cakes.findById(req.query.id)
   res.render('cakesupdate', { title: 'cakes Update', toShow: result });
   }
   catch(err){
   res.status(500)
   res.send(`{'error': '${err}'}`);
   }
   };

   // Handle a delete one view with id from query
exports.cakes_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await cakes.findById(req.query.id)
    res.render('cakesdelete', { title: 'cakes Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
