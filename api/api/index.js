const router = require('express').Router();
// Import the routes. This is how we make our routes modular
const userRoutes = require('./userRoutes');
const coffeeShopRoutes = require('./coffeeshopRoutes');
const feedbackRoutes = require('./feedbackRoutes');

router.use('/users', userRoutes);
router.use('/coffeeshops', coffeeShopRoutes);
router.use('/feedbacks', feedbackRoutes);

module.exports = router;