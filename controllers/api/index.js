const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const groceryRoutes = require('./groceryroutes');
const addressRoutes = require('./addressroutes');

// all of these routes are prefixed with '/api'
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/groceries', groceryRoutes);
router.use('/addresses', addressRoutes);

// is it grocerys or groceries ?


module.exports = router;
