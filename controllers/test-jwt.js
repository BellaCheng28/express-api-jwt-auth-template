// controllers/test-jwt.js

const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");



// controllers/test-jwt.js
router.get('/sign-token', (req, res) => {
  const user = {
    id: 1,
    username: 'test',
    password: 'test',
  };
  const token = jwt.sign({ user }, process.env.JWT_SECRET);
  // Send the token back to the client
  res.json({ token });
});

// controllers/test-jwt.js
router.post('/verify-token', (req, res) => {
   const token = req.headers.authorization;
   res.json({ token });
});


module.exports = router;
