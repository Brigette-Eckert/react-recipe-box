import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/RecipeBox.css';
import RecipeCard from "./RecipeCard";

class RecipeBox extends React.Component {
  render(){
    return (
      <div className='recipe-box-container'>
        Get your recipes here, all day every day, recipes, recipes, recipes
        <RecipeCard/>
      </div>
    )
  }
}

export default RecipeBox;