// TODO: Add catch errors

"use strict"
const express = require("express");
const dbService = require("../services/dataBaseServise");

let router = express.Router();

router.use(express.json())


// Console logs
router.use((req, res, next) => {
  console.log(req.url, '@', Date.now())
  next()
})


// Takes email and password, returns user name on success.
router.route('/login')
  .post(async (req, res) => {
    res.json({ "user": "name" })
  })


// Takes email, password, and name, always returns success.
router.route('/register')
  .post(async (req, res) => {
    await dbService.registerUser(req.body)
      res.json({ "success": "true" })
  })


// Takes email, returns success if email was found.
router.route('/forgot')
  .post(async (req, res) => {
    res.json({ "success": "true" })
  })


module.exports = router