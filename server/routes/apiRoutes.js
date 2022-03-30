"use strict"
const { Router } = require("express")
let router = Router();


// Console logs
router.use((req, res, next) => {
  console.log(req.url, '@', Date.now())
  next()
})


// Takes email and password, returns user name on success.
router.route('/login')
  .post((req, res) => {
    res.send('{ "user": "name" }')
  })


// Takes email, password, and name, always returns success.
router.route('/register')
  .post((req, res) => {
    res.send('{ "success": "true" }')
  })


// Takes email, returns success if email was found.
router.route('/forgot')
  .post((req, res) => {
    res.send('{ "success": "true"}')
  })

  
module.exports = router