var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/blog', function(req, res, next) {
    res.render('blog', { title: 'Express' });
});

router.get('/constitution', function(req, res, next) {
    res.render('constitution', { title: 'Express' });
});

router.get('/donate', function(req, res, next) {
    res.render('donate', { title: 'Express' });
});



module.exports = router;
