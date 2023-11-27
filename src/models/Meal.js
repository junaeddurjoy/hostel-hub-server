const {Schema,model} = require('mongoose');





const MealSchema = new Schema({
    admin:{
        type: String
    },
    item:{
        type: String
    },
    ingredients:{
        type: String
    },
    post_time:{
        type: String
    },
    rating:{
        type: Number
    },
    like:{
        type: Number
    },
    reviews:{
        type: Number
    },
    type:{
        type: String
    },
    image:{
        type: String
    }
})

const Meal = model('Meal',MealSchema);

module.exports = Meal