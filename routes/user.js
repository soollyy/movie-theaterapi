const express = require("express");
const router = express.Router();
const {User} = require("../models/index");
const {Show} = require("../models/index");



// get all users
router.get("/", async (req, res) => {
    const users = await User.findAll()
    res.send(users)
})


// get one user by their username
router.get("/:id", async (req, res) => {
    const user = await User.findOne({where: {username: req.params.id}})
    res.send(user)
})


// get all shows watched by a user by their username
router.get("/user/:id", async (req, res) => {
    const user = await User.findAll({where: {username: req.params.id}})
    res.send(user)
})

  
module.exports = router