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
            <Panel.Title componentClass="h2" toggle className="recipe-title"> Recipe Title {title} </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <ListGroupItem>
                <div className="ingredients">
                  <h5 className="sub-heading">Ingredients</h5>
                    {ingredients}
                    <ul>
                      <li>Cupcake ipsum dolor sit amet candy canes</li>
                      <li>Candy canes croissant danish macaroon gummies cake gummies chupa chups bear claw.</li>
                      <li>  Fruitcake jelly beans  </li>
                      <li>Soufflé marzipan gummi bears </li>
                      <li> Bear claw bonbon danish</li>
                    </ul>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div className="directions">
                  <h5 className="sub-heading">Directions</h5>
                  {directions}
                  <ol>
                    <li> Bonbon soufflé cake lollipop. Marshmallow dragée chupa chups</li>
                    <li> Soufflé toffee fruitcake dragée croissant cake carrot cake donut carrot cake. </li>
                    <li> Gingerbread cotton candy fruitcake chupa chups pie caramels</li>
                    <li> Macaroon jujubes cotton candy marshmallow. </li>
                    <li> Muffin wafer cake gummi bears pie jujubes.</li>
                    <li> Topping cookie chocolate cake chocolate bar sweet biscuit chocolate cake fruitcake chocolate bar</li>
                    <li> Cotton candy sugar plum lollipop danish</li>
                    <li> Chocolate cake cake bonbon cake apple pie powder chocolate bar bear claw sweet roll. </li>
                    <li>Dragée marzipan tiramisu muffin cheesecake dessert cheesecake. Pudding tiramisu donut.</li>
                    <li> Sugar plum sugar plum gummies.</li>
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

//TODO: use map to loop over array of recipe objects

//TODO: edit array object on edit button

//TODO: Delete object from array on delete