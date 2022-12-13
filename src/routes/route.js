const express = require('express');
const router = express.Router();

router.get('/students/:name', function (req, res) {
  let studentName = req.params.name
  console.log(studentName)
  res.send(studentName)
})

router.get("/random", function (req, res) {
  res.send("hi there")
})


router.get("/test-api", function (req, res) {
  res.send("hi FunctionUp")
})


router.get("/test-api-2", function (req, res) {
  res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3", function (req, res) {
  res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4", function (req, res) {
  res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5", function (req, res) {
  res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6", function (req, res) {
  res.send({ a: 56, b: 45 })
})

router.post("/test-post-7", function (req, res) {
  res.send([23, 45, 6])
})


router.post("/test-post-8", function (req, res) {
  res.send({ msg: "hi", status: true })
})

router.post("/test-post-9", function (req, res) {
  // let id = req.body.user
  // let pwd= req.body.password

  // console.log( id , pwd)

  console.log(req.body)

  res.send({ msg: "hi", status: true })
})



// router.post("/test-post-4", function(req, res) {
//     let arr= [ 12, "functionup"]
//     let ele= req.body.element
//     arr.push(ele)
//     res.send(  { msg: arr , status: true }  )
// })



// // Post-api assignment

let players = [
  {
    "name": "manish",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
      "swimming"
    ]
  },
  {
    "name": "gopal",
    "dob": "1/09/1995",
    "gender": "male",
    "city": "delhi",
    "sports": [
      "soccer"
    ]
  },
  {
    "name": "lokesh",
    "dob": "1/1/1990",
    "gender": "male",
    "city": "mumbai",
    "sports": [
      "soccer"
    ]
  },
]

router.post("/test-post-11", function (req, res) {
  let newPlayer = players.find((elem) => elem.name === req.body.name)
  if(!newPlayer){
    players.push(req.body)
    res.send({data:players , status : true})
  }
  else{
    res.send({error:"This person is already exist", status:false})
  }
  return players;
})


module.exports = router;