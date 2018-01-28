import React from 'react';
import { Panel, ButtonGroup, Button, ListGroupItem } from 'react-bootstrap';
import '../styles/RecipeDetails.css';


class RecipeDetails extends React.Component {

  render(){
    let {title, ingredients, directions} = this.props;
    return (
      <div className='recipe-card-details'>
        <Panel bsStyle="warning" id='collapsible-panel'>
          <Panel.Heading>
            <Panel.Title componentClass="h2" toggle className="recipe-title">{title} </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <ListGroupItem>
                <div className="ingredients">
                  <h5 className="sub-heading">Ingredients</h5>
                    <ul>
                      {ingredients.map(function(ingredient, i) {
                        return <li>{ingredient}</li>;

                      })}
                    </ul>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div className="directions">
                  <h5 className="sub-heading">Directions</h5>
                  <ol>
                    {directions.map(function(step, i){
                      return <li>{step}</li>
                    })}
                  </ol>
                </div>
              </ListGroupItem>
              <div className="action-buttons">
                <ButtonGroup>
                  <Button bsStyle="warning">Edit</Button>
                  <Button bsStyle="danger">Delete</Button>
                </ButtonGroup>
              </div>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </div>
    )
  }
}

export default RecipeDetails;


//TODO: edit array object on edit button

//TODO: Delete object from array on delete