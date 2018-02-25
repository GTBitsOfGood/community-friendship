const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(new Strategy(
    async (username, password, cb) => {
        const user = await User.findOne({username: username});

        if (user && await user.checkPassword(password)) {
            return cb(null, user);
        }
        const newUser = await new User({username:username, password:password}).save();
        return cb(null, newUser);
    })
);
