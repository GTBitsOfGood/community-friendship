const mongoose = require('mongoose');
const {Schema} = mongoose;
var bcrypt   = require('bcrypt-nodejs');

const userSchema = new Schema({
    id: String,
    username: String,
    password: String

});

userSchema.statics.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.checkPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

mongoose.model('users',userSchema);