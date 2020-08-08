
const express = require('express');
const playerController = require('../controllers/playerController');
const router = express.Router();


router.post('/',playerController.addPlayer);
router.get('/',playerController.findAllPlayer);
router.get('/:id',playerController.findPlayerByID);
router.delete('/delete/:id',playerController.removePlayer);
router.patch('/update/:id',playerController.updatePlayer);

module.exports = router;