const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const groceryRoutes = require('./groceryroutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/groceries', groceryRoutes);

// is it grocerys or groceries ?


module.exports = router;
