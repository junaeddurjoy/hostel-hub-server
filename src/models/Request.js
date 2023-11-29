const {Schema,model} = require('mongoose');

const RequestSchema = new Schema({
    image:{
        type: String
    },
    item:{
        type: String
    },
    ingredients:{
        type: String
    },
    price:{
        type: Number
    },
    userMail:{
        type: String
    },
    rating:{
        type: String
    },
    like:{
        type: Number
    },
    reviews:{
        type: Array
    },
    type:{
        type: String
    },
    
})

const Request = model('Request',RequestSchema);

module.exports = Request