const passport = require('passport');

module.exports = (router) => {
    router.use('/current_user', isLoggedIn, (req, res) => {
        res.send(req.user);
    });

    router.use('/logout', (req, res) => {
        console.log('redirecting?');
        req.logout();
        res.redirect('/');
    });

    router.post('/login', passport.authenticate('local-login', {
        successRedirect : '/api/current_user', // redirect to the secure profile section
        failureRedirect : '#/login', // redirect back to the login page if there is an error
    }));

    router.post('/register', passport.authenticate('local-signup', {
        successRedirect : '/api/current_user', // redirect to the secure profile section
        failureRedirect : '/register', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/');
    }
};