var express = require('express');
var router = express.Router();
var passportFacebook = require('../auth/facebook');
var passportTwitter = require('../auth/twitter');
var passportGoogle = require('../auth/google');
var passportGitHub = require('../auth/github');

/* LOGIN ROUTER */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Please Sign In with:' });
});

module.exports = router;
