var cakes = require('../models/cakes');
// List of all Costumes
exports.cakes_list = function(req, res) {
res.send('NOT IMPLEMENTED: cakes list');
};
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
exports.cakes_detail = function(req, res) {
res.send('NOT IMPLEMENTED: cakes detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.cakes_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: cakes create POST');
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
