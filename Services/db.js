const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/resipe-management')

const iteams= mongoose.model('iteams',{
    id:String,
    name:String,
    image:String,
    ingredients:Array,
    instructions:Array,
    rating:String
})

module.exports={
    iteams
}