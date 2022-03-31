// TODO: Add catch errors

"use strict"
const express = require("express");
const dataBaseService = require("../services/dataBaseServise");
const router = express.Router();

const dbService = new dataBaseService();
router.use(express.json())


// Console logs
router.use((req, res, next) => {
  console.log("Request", req.url, '@', Date.now())
  next()
})


// Takes email and password, returns user name on success.
router.route('/login')
  .post(async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
      res.statusCode = 200
      res.json({ success: false });
      return;
    }

    try {
      const { data, error } = await dbService.loginUser(req.body)

      if (error) {
        console.log(error);
        res.statusCode = 200
        res.json({ success: false });
        return
      }
      console.log('Login success', email);
      res.statusCode = 200
      res.json({ success: true, name: data.name });
      return

    } catch (error) {
      console.log('Error on login', error);
    }
    res.statusCode = 200
    res.json({ success: false });
  })


// Takes email, password, and name, always returns success.
router.route('/register')
  .post(async (req, res) => {

    const { email, name, password } = req.body

    if (!email || !name || !password) {
      res.statusCode = 200
      res.json({ success: false });
      return;
    }

    try {
      const { data, error } = await dbService.registerUser(req.body)

      if (error) {
        console.log(error);
        res.statusCode = 200
        res.json({ success: false });
        return
      }
      console.log('Register success', email);
      res.statusCode = 200
      res.json({ success: true });
      return
    } catch (error) {
      console.log('Error on register user',error);
    }
    res.statusCode = 200
    res.json({ success: false });
  })


// Takes email, returns success if email was found.
router.route('/forgot')
  .post(async (req, res) => {
    const { email } = req.body;

    if (!email) {
      res.statusCode = 200
      res.json({ success: false });
      return;
    }

    try {
      const { data, error } = await dbService.existUser(req.body)

      if (error) {
        console.log(error);
        res.statusCode = 200
        res.json({ success: false });
        return
      }

      console.log('User remainded', email);
      res.statusCode = 200
      res.json({ success: true });
      return  
    } catch (error) {
      console.log('Error on forgot user',error);
    }
    res.statusCode = 200
    res.json({ success: false });
  })

module.exports = router