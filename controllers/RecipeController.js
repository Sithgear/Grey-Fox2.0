var express = require('express');
var recipeRouter = express.Router();
var bodyParser = require('body-parser');

recipeRouter.use(bodyParser.urlencoded({extended: true}));
var Recipe = require('./../models/RecipeController');

recipeRouter.post('/',function(request,response){
  Recipe.create({
    _recipeID: new mongoose.Types.ObjectId,
    title: request.body.title,
    ingredients: request.body.ingredients,
    measurements: request.body.measurements,
    foodType: request.body.foodType,
    cookingDirections: request.body.cookingDirections,
    rating: request.body.rating,
    dateAdded: new Date
  },function(err,recipe){
    if(err) return response.status(500).send('post error ' + err);
      response.status(200).send(recipe);
  });
});

recipeRouter.get('/',function(request,response){
  Recipe.find({},function(err,recipe){
    if(err) return response.status(500).send('get error' + err);
    response.status(200).send(recipe)
  });
});

recipeRouter.get('/findTitle/:title',function(request,response){
  Recipe.find({'title': new RegExp(request.params.title,'i')},function(err,recipe){
    if(err) return response.status(500).send('title find error ' + err);
    if(!recipe) return response.status(404).send('recipe not found');
    response.status(200).send(recipe);
  });
});

recipeRouter.get('/findIngredients/:ingredients',function(request,response){
  Recipe.find({'ingredients': new RegExp(request.params.ingredients,'i')},function(err, recipes){
    if(err) return response.status(500).send('ingredients find error ' + err);
    if(!recipies) return response.status(404).send('ingredients not found ' + ingredients);
    response.status(200).send(recipes);
  });
});
