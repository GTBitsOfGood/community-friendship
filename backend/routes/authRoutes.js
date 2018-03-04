const passport = require('passport');
const router = require('express').Router();

router.use('/current_user', (req, res) => {
    res.send(req.user);
});

router.use('/logout', (req, res) => {
    console.log('redirecting?');
    req.logout();
    res.redirect('/');
});

router.post('/login', passport.authenticate('local-login'));

router.post('/register', passport.authenticate('local-signup'));

module.exports = router;