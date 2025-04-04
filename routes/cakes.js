var express = require('express');
var router = express.Router();

/* GET cakes page. */
router.get('/', function(req, res, next) {
  res.render('cakes', { title: 'Search Results - Cakes' });
});

module.exports = router;
