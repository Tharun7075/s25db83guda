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
module.exports = router;

module.exports = router;
