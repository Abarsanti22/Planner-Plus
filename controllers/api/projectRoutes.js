const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  // what logic need  to happen (are we requesting data from the database?)
  // maybe we request all GROCERIES from the db
  try {
    const allProjects = await Project.findAll();
    // if we need to SERIALIZE the db data
    console.log('All projects: ', allProjects)
  
    res.render('project', { projects: allProjects})
  } catch(err) {
    console.log("Error: ", err);
    res.send({ msg: "Something went wrong!"})
  }
  
  })


router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
