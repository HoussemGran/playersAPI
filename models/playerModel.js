const mongoose = require('mongoose');

const schema =  mongoose.Schema;

const playerModel = new schema({

name:{
    type:String,
    require:true
},
    
number:{
    type:String,
    require:true
},

team:{
    type:String
}

});

module.exports = mongoose.model('playerModel',playerModel);