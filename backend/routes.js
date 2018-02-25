const express = require('express');
const router = express.Router();

// YOUR API ROUTES HERE
router.post('/login', (req,res) => {
    res.send("the information you submitted is " + req.body.username + " " + req.body.password);
});

router.post('/register', (req,res) => {
    res.send("the information you submitted is " + req.body.username + " " + req.body.password);
});

// SAMPLE ROUTE
// router.use('/users', (req, res) => {
//     res.json({ success: true });
// });

module.exports = router;
