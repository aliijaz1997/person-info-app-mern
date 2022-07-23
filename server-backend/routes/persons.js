const router = require("express").Router()
let Person = require("../models/person-info.model")

router.route("/").get((req, res) => {
  Person.find()
    .then(person => res.json(person))
    .catch(err => res.status(400).json("Error Occured is " + err))
})

router.route("/add").post((req, res) => {
  firstName = req.body.firstName
  lastname = req.body.lastname
  picture = req.body.picture
  profession = req.body.profession
  hairColor = req.body.hairColor
  hairLength = req.body.hairLength
  braSize = req.body.braSize
  waistSize = req.body.waistSize
  height = req.body.height
  weight = req.body.weight
  dateOfBirthDate = dateOfBirthDate.parse(req.body.date)
  castings = req.body.castings

  const newPerson = new Person({
    firstName,
    lastname,
    picture,
    profession,
    hairColor,
    hairLength,
    braSize,
    waistSize,
    height,
    weight,
    dateOfBirthDate,
    castings
  })

  newPerson
    .save()
    .then(() => res.json("Person added!"))
    .catch(err => res.status(400).json("Error Occured is " + err))
})
