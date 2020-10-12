const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();

  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.getBoard(req.params.id);

  if (!board) {
    res.status(404).send('Not found');
  } else {
    res.json(board);
  }
});

router.route('/').post(async (req, res) => {
  const result = await boardsService.saveBoard(Board.fromRequest(req.body));
  res.status(200).json(result);
});

router.route('/:id').put(async (req, res) => {
  const board = await boardsService.updateBoard(Board.fromRequest(req.body));

  res.json(board);
});

router.route('/:id').delete(async (req, res) => {
  await boardsService.removeBoard(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
