const express = require("express")
const { json } = require("body-parser")
const cors = require("cors")
require("dotenv").config()
const send = require("gmail-send")({
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASSWORD,
  to: "chriswfoster@gmail.com"
})

const port = 3333

const app = express()
app.use(express.static(`${__dirname}/../build`))

app.use(json())
app.use(cors())

app.post("/api/sendEmail", (req, res) => {
  send({
    subject: "JOB PROSPECT FROM: " + req.body.name + " at " + req.body.email,
    text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`
  }, function (err, res) {
    console.log('* ERROR send() callback returned: err:', err, '; res:', res);
  })
  console.log("hi")
  res.status(200).json((message = "hi"))
})

const path = require("path")
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/../build/index.html"))
})

app.listen(port, () => {
  console.log(`Listening on dat port: ${port}`)
})
