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

    router.post('/login', (req,res) => {
        res.send("the information you submitted is " + req.body.username + " " + req.body.password);
    });

    router.post('/register', (req,res) => {
        res.send("the information you submitted is " + req.body.username + " " + req.body.password);
    });
};