import React from 'react';
import RecipeDetails from "./RecipeDetails";
import '../styles/RecipeCard.css';


class RecipeCard extends React.Component {
  constructor(props){
    super(props);
    this.state  = JSON.parse(localStorage.getItem("recipeState")) || {
      title: this.props.recipes.title,
      ingredients: this.props.recipes.ingredients,
      directions: this.props.recipes.directions
    }
  }


  render(){
    let {title, ingredients, directions } = this.state;
    return (
      <div className='recipe-card-container'>
       <RecipeDetails title={title} ingredients={ingredients} directions={directions}/>
      </div>
    )
  }
}

export default RecipeCard;