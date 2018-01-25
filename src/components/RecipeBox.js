import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/RecipeBox.css';
import RecipeCard from "./RecipeCard";

let RECIPES = [{
  title: "Butternut Squash Bisque",
  ingredients: ["3 tablespoons olive oil", "1 butternut squash", "1/2 yellow onion, diced", "2 carrots diced", "3 cups vegetable broth", "1/2 teaspoon salt", "1/4 teaspoon ground black pepper", "1/8 teaspoon ground nutmeg, plus more for garnish", "1/2 cup half and half"],
  directions: ["Heat oven to 350 degrees.", "Cut the squash in half and remove the seeds using a spoon. It's okay if some of the membrane remains (since it will be difficult to get it all out).", "Line a baking sheet with tin foil and place the squash, cut-side down, on the sheet. Lightly drizzle the squash with 1 tbsp. olive oil. Place in the oven and roast for 1 to 1 1/2 hours or until you can easily insert a fork or knife into the softened flesh of the squash. Remove from the oven and allow to cool.", "Line a baking sheet with tin foil and place the squash, cut-side down, on the sheet. Lightly drizzle the squash with 1 tbsp. olive oil. Place in the oven and roast for 1 to 1 1/2 hours or until you can easily insert a fork or knife into the softened flesh of the squash. Remove from the oven and allow to cool.", "In a medium-sized pot, add the remaining 2 tbsp. olive oil and heat over medium-high heat. Add the onion, carrots, salt, pepper and nutmeg and saute until the onions are tender, about 8-10 minutes. Then, add the squash and cook for an additional 5 minutes.", "Add the vegetable broth and bring the mixture to a boil. Once boiling, reduce heat to a low-medium and simmer until the carrots are tender, about 8-10 minutes.", "Using a blender, food processor or immersion blender, puree the mixture until completely smooth. Once smooth, return to the pot to medium-high heat and add the cream. Heat mixture until hot, but not to a boil.", "Add salt and/or pepper to taste as needed.", "For garnish, drizzle 1-2 tbsp. cream and a dash of nutmeg, if desired."]
},
  {
    title: "Pangag Curry",
    ingredients: [],
    directions: []
  },
  {
    title: "Stuffed Acorn Squash",
    ingredients: [],
    directions: []
  }, {
    title: "Easy Peasy Carrot Cake",
    ingredients: [],
    directions: []
  }

];

class RecipeBox extends React.Component {
  render(){
    return (
      <div className='recipe-box-container'>
        <RecipeCard/>
        <Button bsStyle="success"> Add Recipe </Button>
      </div>
    )
  }
}

export default RecipeBox;

//Make array of recipes- loop over here and pass down