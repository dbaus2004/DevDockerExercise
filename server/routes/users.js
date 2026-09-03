/**
 * @swagger
 * tags:
 *   name: users
 *   description: Users Routes
 */

// var express = require('express');
import express from 'express';

// var router = express.Router();
const router = express.Router();

/**
 * @swagger
 * /users:
 *   get: 
 *     summary: users list page
 *     description: Gets the list of all users in the application
 *     tags: [users]
 *     responses:
 *       200: 
 *         description: a resource            
 */

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// module.exports = router;
export default router;
