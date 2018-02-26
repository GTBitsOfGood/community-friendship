const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});
//
// passport.use(new Strategy(
//     async (username, password, cb) => {
//         const user = await User.findOne({username: username});
//
//         if (user && await user.checkPassword(password)) {
//             return cb(null, user);
//         }
//         if(!user){
//             const newUser = await new User({username:username, password:User.generateHash(password)}).save();
//             return cb(null, newUser);
//         }
//         cb("incorrect pass",false);
//     })
// );
passport.use('local-signup', new LocalStrategy(
    async (username, password, cb) => {
        const user = await User.findOne({username: username});

        if (user) {
            return cb('user exists', false);
        }

        const newUser = await new User({username: username, password: User.generateHash(password)}).save();
        return cb(null, newUser);
    }));


passport.use('local-login', new LocalStrategy(
    async (username, password, cb) => {
        const user = await User.findOne({username: username});

        if (user && await user.checkPassword(password)) {
            return cb(null, user);
        }
        cb("incorrect pass/ user", false);
    }));