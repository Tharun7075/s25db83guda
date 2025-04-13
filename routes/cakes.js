var express = require('express');
var router = express.Router();

/* GET cakes page. */
router.get('/', function(req, res, next) {
  res.render('cakes', { title: 'Search Results - cakes' });
});

//var express = require('express');
const cakes_controllers= require('../controllers/cakes');
var router = express.Router();
/* GET cakes */
router.get('/', cakes_controllers.cakes_view_all_Page );
// GET request for one costume.
router.get('/cakes/:id', cakes_controllers.cakes_detail);
router.get('/cakes/:id', cakes_controllers.cakes_update_put);


module.exports = router;

module.exports = router;
