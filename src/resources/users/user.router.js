const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();

  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUser(req.params.id);

  if (!user) {
    res.status(404).send('Not found');
  } else {
    res.json(user);
  }
});

router.route('/').post(async (req, res) => {
  const result = await usersService.saveUser(User.fromRequest(req.body));
  res.status(200).json(User.toResponse(result));
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.updateUser(User.fromRequest(req.body));

  res.json(user);
});

router.route('/:id').delete(async (req, res) => {
  await usersService.removeUser(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
