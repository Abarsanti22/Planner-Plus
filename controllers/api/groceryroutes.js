const router = require('express').Router();
const { Grocery } = require('../../models');
const withAuth = require('../../utils/auth');

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
