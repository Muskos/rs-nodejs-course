const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
});

router.route('/:taskId').get(async (req, res) => {
  const task = await tasksService.getTask(req.params.taskId);

  if (!task) {
    res.status(404).send('Not found');
  } else {
    res.json(task);
  }
});

router.route('/').post(async (req, res) => {
  const task = {
    ...Task.fromRequest(req.body),
    boardId: req.params.id
  };

  const result = await tasksService.saveTask(task);
  res.status(200).json(result);
});

router.route('/:taskId').put(async (req, res) => {
  const task = {
    ...Task.fromRequest(req.body),
    boardId: req.params.id
  };
  const result = await tasksService.updateTask(task);

  res.json(result);
});

router.route('/:taskId').delete(async (req, res) => {
  await tasksService.removeTask(req.params.taskId);
  res.sendStatus(200);
});

module.exports = router;
