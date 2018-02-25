const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    id: String,
    username: String,
    password: String

});

userSchema.methods.checkPassword = function(password){
    return this.password === password;
}

mongoose.model('users',userSchema);