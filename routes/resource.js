var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var cakes_controller = require('../controllers/cakes');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/cakes', cakes_controller.cakes_create_post);
// DELETE request to delete Costume.
router.delete('/cakes/:id', cakes_controller.cakes_delete);
// PUT request to update Costume.
router.put('/cakes/:id', cakes_controller.cakes_update_put);
// GET request for one Costume.
router.get('/cakes/:id', cakes_controller.cakes_detail);
// GET request for list of all Costume items.
router.get('/cakes', cakes_controller.cakes_list);
module.exports = router;