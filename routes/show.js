const express = require("express")
const router = express.Router()
const {User} = require("../models/index");
const {Show} = require("../models/index");


// get all shows
router.get("/", async (req, res) => {
    const shows = await Show.findAll()
    res.send(shows)
})


// get one show
router.get("/:id", async (req, res) => {
    const shows = await Show.findOne({where: {title: req.params.id}})
    res.send(shows)
})


// get shows of a particular genre ??
router.get("/genre/:genre", async (req, res) => {
    const shows = await Show.findOne({where: {genre: req.params.genre}})
    res.send(shows)
}) 

  
module.exports = router