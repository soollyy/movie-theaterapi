const express = require("express");
const {User} = require("./models/index")
const {Show} = require("./models/index")
const {sequelize} = require("./db")

const app = express();
const port = 3000;

const userRouter = require("./routes/user")
const showRouter = require("./routes/show");
const { Sequelize } = require("sequelize");
app.use("/user", userRouter)
app.use("/show", showRouter)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})