const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const userController = require('../controllers/userController');
/**
 * App routes
 */

router.get('/', newsController.homepage);
router.get('/categories', newsController.exploreCategories);
router.get('/news/:id', newsController.exploreNews);
router.get('/categories/:id', newsController.exploreCategoriesbyId);
router.post('/search', newsController.searchNews);
router.get('/explore-latest', newsController.exploreLatest);
router.get('/explore-random', newsController.exploreRandom);
router.get('/submit-news', newsController.submitNews);
router.post('/submit-news', newsController.submitNewsOnPost);

router.get('/update-news', newsController.updateNews);



//router.get('/users', userController.exp)
router.get('/Allusers', userController.getAllUsers)
router.get('/users/:id', userController.getUser)
// router.post('/users', userController.addNewUser)
router.put('/update/:id', userController.EditUser)
router.delete('/delete/:id', userController.DeleteUser)
router.get('/users', userController.userNav)
router.post('/users', userController.newUser)

module.exports = router;