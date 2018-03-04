const express = require('express');
const router = express.Router();

const auth = require('./authRoutes')(router);
const pdf = require('./pdfRoutes')(router);

function checkAuth(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

router.use('/auth',auth);
router.use('/pdf', checkAuth, pdf);



module.exports = router;
