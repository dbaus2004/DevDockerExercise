/**
 * @swagger
 * tags:
 *   name: index
 *   description: Index Routes
 */

// var express = require('express');
import express from 'express';

// var router = express.Router();
const router = express.Router();

/**
 * @swagger
 * /:
 *   get: 
 *     summary: index page
 *     description: Gets the index page for the application
 *     tags: [index]
 *     responses:
 *       200: 
 *         description: success
 */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// module.exports = router;
export default router;
