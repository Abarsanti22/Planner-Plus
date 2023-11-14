const router = require('express').Router();
const { Grocery } = require('../../models');
const withAuth = require('../../utils/auth');

// all of the ENDPOINTS are prefixed with '/api/groceries
router.get('/', withAuth, async (req, res) => {
// what logic need  to happen (are we requesting data from the database?)
// maybe we request all GROCERIES from the db
try {
  const allGroceries = await Grocery.findAll();
  // if we need to SERIALIZE the db data
  console.log('All groceries: ', allGroceries)

  res.render('grocery', { grocerys: allGroceries })
} catch(err) {
  console.log("Error: ", err);
  res.send({ msg: "Something went wrong!"})
}

})


router.post('/', withAuth, async (req, res) => {
  try {
    const newGrocery = await Grocery.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newGrocery);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const groceryData = await Grocery.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!groceryData) {
      res.status(404).json({ message: 'No grocery item found with this id!' });
      return;
    }

    res.status(200).json(groceryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
