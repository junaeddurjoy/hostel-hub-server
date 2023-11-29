const {Schema,model} = require('mongoose');

const UserSchema = new Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    membership:{
        type: String
    },
    role:{
        type: String
    }
})

const User = model('User',UserSchema);

module.exports = User