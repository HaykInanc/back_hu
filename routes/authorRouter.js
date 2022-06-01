const router = new require('express')();
const {create, getAll, getOne, del} = require('../controllers/authorController');

router.post('/add', create);
router.get('/all', getAll);
router.get('/one', getOne);
router.post('/del', del);

module.exports = router