import React from 'react';
import RecipeDetails from "./RecipeDetails";
import '../styles/RecipeCard.css';


class RecipeCard extends React.Component {

  render(){
    return (
      <div className='recipe-card-container'>
       <RecipeDetails/>
      </div>
    )
  }
}

export default RecipeCard;