const express = require('express');
const router = express.Router();
const { recipes } = require('../data/data.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  // 1. Pass all recipe data to 'index' template
  res.render('index', {recipes});
});

/* GET recipe page. */
router.get('/recipes/:id', function(req, res, next) {
  //stores the value of the id route parameter
  const recipeId = req.params.id;
  //holds recipe object to pass into the view 
  const recipe = recipes.find( ({ id }) => id === +recipeId );
  //render recipe info available
  if (recipe) {
    // 2. Pass the recipe data to the 'recipe' template
    res.render('recipe', {recipe});
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
