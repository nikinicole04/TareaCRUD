const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { requireLogin } = require('../middlewares/auth');

router.use(requireLogin);

router.get('/', productController.list);
router.get('/new', productController.showCreate);
router.post('/', productController.create);
router.get('/:id/edit', productController.showEdit);
router.post('/:id/update', productController.update);
router.post('/:id/delete', productController.remove);

module.exports = router;