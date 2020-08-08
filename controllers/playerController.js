
const playerModel = require('../models/playerModel');
const mongoose = require('mongoose');

// add player
exports.addPlayer = (req,res)=>{

const player = new playerModel({
name:req.body.name,
number:req.body.number,
team:req.body.team,

});

player.save()
.then(data=>{
console.log(data);
res.send('player added');

});
};

//show all players
exports.findAllPlayer = (req,res)=>{

playerModel.find()
.then(data=>{
    res.send(data);
})

};

// show player by id
exports.findPlayerByID = (req,res)=>{

playerModel.findById(req.params.id,req.body)
.then(data=>{

    res.send(data);

});
};

//remove a player
exports.removePlayer = (req,res)=>{

playerModel.findByIdAndDelete(req.params.id,req.body)
.then(data=>{
res.send(data);

});

};

// update player
exports.updatePlayer = (req,res)=>{

    playerModel.findByIdAndUpdate(req.params.id,req.body)
    .then(()=>{

        res.send("player updated");
    })


};