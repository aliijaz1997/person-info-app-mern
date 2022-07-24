const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dataToBeSeeded = require("./seed/seed")
const Person = require("./models/person-info.model")

require("dotenv").config()

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

const uri = process.env.MONGO_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const mongooseConnection = mongoose.connection
mongooseConnection.once("open", () => {
  console.log("MongoDB Connected Successfully!")
})

const seeDataBase = async () => {
  await Person.deleteMany({})
  await Person.insertMany(dataToBeSeeded)
}

seeDataBase().then(() => {
  console.log("Data base is seeded !")
})
const personsRouter = require("./routes/persons")

app.use("/persons", personsRouter)

app.listen(port, () => {
  console.log(`Server is running at port number = ${port}`)
})
