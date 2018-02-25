const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    id: String,
    user: String,
    pass: String

});

mongoose.model('users',userSchema);