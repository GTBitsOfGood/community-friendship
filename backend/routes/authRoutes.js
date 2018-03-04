const passport = require('passport');
const router = require('express').Router();

router.get('/current_user', (req, res) => {
    res.send(req.user);
});

router.post('/logout', (req, res) => {
    console.log('redirecting?');
    req.logout();
    res.redirect('/');
});


router.post('/login',  function(req, res, next) {
    passport.authenticate('local-login', function (err, user, info) {
        if (err) {
            res.send(err);
            return;
        }
        if (!user) {
            res.send(err);
            return;
        }
        req.logIn(user, function(err) {
            if (err) { return res.send(err); }
            return res.send(req.user);
        });
    })(req, res, next);
});

router.post('/register', passport.authenticate('local-signup'));

module.exports = router;