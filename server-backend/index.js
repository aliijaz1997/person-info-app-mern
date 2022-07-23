const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

require("dotenv").config()

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())

const uri = process.env.MONGO_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const mongooseConnection = mongoose.connection
mongooseConnection.once("open", () => {
  console.log("MongoDB Connected Successfully!")
})

const personsRouter = require("./routes/persons")

app.use("/persons", personsRouter)

app.listen(port, () => {
  console.log(`Server is running at port number = ${port}`)
})
