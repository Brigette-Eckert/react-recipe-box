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
    title: "Stuffed Acorn Squash",
    ingredients: ["2 acorn squashes", "4 tablespoons olive oil", "1 teaspoon salt", "1/4 teaspoon pepper", "1lb ground sausage", "8 oz cremini mushrooms quartered", "1 teaspoon dried thyme", "1/4 cup grated parmesan cheese"],
    directions: ["Pierce the skin of each acorn squash and microwave them on high for 4 minutes.  Remove from the microwave and let cool.  Once cool, slice the squash in half, cutting between the groves in the squash.  Scrape out the seeds and discard.", "Pre-heat the oven to 400F.  Brush each squash half with 1 tbsp of oil and then season with salt and pepper.  Place the squash flesh side down on a baking sheet and roast in the oven for 30 minutes.", "While the squash are roasting, cook the sausage in a skillet until cooked through.  Add the quartered mushrooms and dried thyme.  Sauté until the mushrooms are softened, but not mushy.", "Remove the squash from the oven and carefully flip them flesh side up.  Spoon the sausage and mushroom mixture on top of each squash half and the sprinkle with parmesan cheese.  Place the squash back in the oven for 10 minutes or until the cheese has melted."]
  }, {
    title: "Carrot Cake",
    ingredients: ["2 cups (260 grams) all-purpose flour", "2 teaspoons baking soda", "1 teaspoon kosher salt", "1 1/2 teaspoons ground cinnamon", "1 1/4 cups (295 ml) canola or other vegetable oil", "1 cup (200 grams) granulated sugar", "1 cup (200 grams) lightly packed brown sugar", "1 teaspoon vanilla extract", "4 large eggs", "\n" +
    "3 cups (300 grams) grated peeled carrots (5 to 6 medium carrots)", "1 cup (100 grams) coarsely chopped pecans", "1/2 cup (65 grams) raisins", "8 ounces (225 grams) cream cheese, at room temperature (for frosting)", "1 1/4 cups (140 grams) powdered sugar (for frosting)", "1/3 cup (80 ml) heavy whipping cream (for frosting)", "1/2 cup (50 grams) coarsely chopped pecans, for topping cake"],
    directions: ["Heat the oven to 350º F. Grease two 9-inch round cake pans and line the bottom with parchment paper then grease the top of the paper. Or, grease and flour the bottom and sides of both pans", "In a medium bowl, whisk flour, baking soda, salt, and the cinnamon until well blended. In a separate bowl, whisk the oil, sugars and vanilla. Whisk in eggs, one at a time, until blended.", "Switch to a large rubber spatula. Scrape the sides and bottom of the bowl then add the dry ingredients in 3 parts, stirring gently until they disappear and the batter is smooth. Stir in the carrots, nuts and raisins.", "Divide the batter between the prepared cake pans. Bake until the tops of the cake layers are springy when touched and when a toothpick inserted into the center of the cake comes out clean; 35 to 45 minutes.", "Cool cakes in pans for 15 minutes then turn out onto cooling racks, peel off parchment paper and cool completely.", "In a large bowl, beat cream cheese with a handheld mixer on medium speed until creamy, about 1 minute. Beat in the powdered sugar, a 1/4 cup at a time until fluffy. Pour in cream and beat on medium speed for 1 minute. Chill covered until ready to frost cake.", "When the cake layers are completely cool, frost the top of one cake layer, place the other cake layer on top. Decoratively swirl the top of the cake with remaining frosting, leaving the sides unfrosted. Scatter nuts on top"]
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