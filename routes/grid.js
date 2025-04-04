var express = require('express');
var router = express.Router();

/* GET grid page with query parameters for rows and columns. */
router.get('/', function(req, res, next) {
  const{rows, cols }=req.query;
  res.render('grid', { title: 'Grid Display', query:{rows, cols}});
});

module.exports = router;
