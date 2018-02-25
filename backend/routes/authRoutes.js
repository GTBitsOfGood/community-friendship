const passport = require('passport');

module.exports = (router) => {
    router.use('/current_user', (req, res) => {
        res.send(req.user);
    });

    router.use('/logout', (req, res) => {
        console.log('redirecting?');
        req.logout();
        res.redirect('/');
    });
};