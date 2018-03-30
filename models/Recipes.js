var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema(
  {
    _recipeID: Schema.Types.ObjectId,
    title: String,
    ingredients: [],
    measurements: [],
    foodType: String,
    cookingDirections: { type: String },
    rating: Number,
    dateAdded: {type: Date, default: Date.now}
  },
  {
  strict: false
  });

mongoose.model('Recipe', RecipeSchema);

module.exports = mongoose.model('Recipe');
