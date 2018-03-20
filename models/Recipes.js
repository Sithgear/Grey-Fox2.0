var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema(
  {
    title: String,
    ingredients: Array,
    measurements: Array,
    foodType: String,
    cookingDirections: {},

  },
  {
  strict: false
  });

mongoose.model('Recipe', RecipeSchema);

module.exports = mongoose.model('Recipe');
