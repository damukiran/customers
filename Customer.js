var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var SomeModelSchema = new Schema({
    name: {
        type:String
    },
    age: {
        type:String 
    }, address: {
        type:String
    }   
},{versionKey:false});


var SomeModel = mongoose.model('Customers', SomeModelSchema );

module.exports=SomeModel