const router = require('express').Router();

router.use('/current_user', (req, res) => {
    res.redirect('/employeehandbook');
});

module.exports = router;