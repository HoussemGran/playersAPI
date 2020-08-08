
const mongoose = require('mongoose');

mongoose.set('useFindAndModify',false);

mongoose.connect('mongodb://localhost:27017/playersApi',{useNewUrlParser:true,useUnifiedTopology: true},
(err)=>{

if(!err) console.log('connected to the database');
else console.log('error while connecting to the database');

});

module.exports = mongoose;