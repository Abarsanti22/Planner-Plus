const router = require('express').Router();
const { Address } = require('../../models');
const withAuth = require('../../utils/auth');

// all of the ENDPOINTS are prefixed with '/api/groceries
router.get('/', withAuth, async (req, res) => {
// what logic need  to happen (are we requesting data from the database?)
// maybe we request all GROCERIES from the db
try {
  const allAddresses = await Address.findAll();
  // if we need to SERIALIZE the db data
  console.log('All addresses: ', allAddresses)

  res.render('address', { addresses: allAddresses })
} catch(err) {
  console.log("Error: ", err);
  res.send({ msg: "Something went wrong!"})
}

})


router.post('/', withAuth, async (req, res) => {
  try {
    const newAddress = await Address.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newAddress);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const addressData = await Address.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!addressData) {
      res.status(404).json({ message: 'No address was found with this id!' });
      return;
    }

    res.status(200).json(addressData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;