import React from 'react';
import { Panel, ButtonGroup, Button, ListGroupItem } from 'react-bootstrap';
import '../styles/RecipeDetails.css';


class RecipeDetails extends React.Component {

  render(){
    return (
      <div className='recipe-card-details'>
        <Panel bsStyle="warning" id='collapsible-panel'>
          <Panel.Heading>
            <Panel.Title componentClass="h2" toggle> Recipe Title </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <ListGroupItem>
                <div className="ingredients">
                  <h5 className="sub-heading">Ingredients</h5>
                  <p>
                    Cupcake ipsum dolor sit amet candy canes. <br/>
                    Candy canes croissant danish macaroon gummies cake gummies chupa chups bear claw.<br/>
                    Fruitcake jelly beans croissant caramels bear claw caramels pudding apple pie donut. <br/>
                    Fruitcake jelly beans jelly marshmallow cheesecake.<br/>
                    Powder marzipan cake icing tiramisu sesame snaps sweet roll chupa chups.<br/>
                    Soufflé marzipan gummi bears lollipop sugar plum jelly-o marzipan.<br/>
                    Jelly beans lemon drops cake lollipop halvah. Tiramisu halvah lollipop danish.<br/>
                    Halvah donut oat cake pastry danish. Sweet gummi bears pie. <br/>
                    Sweet danish cookie muffin bear claw. <br/>
                    Bear claw bonbon danish bonbon croissant biscuit muffin.
                  </p>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div className="directions">
                  <h5 className="sub-heading">Directions</h5>
                  <p>
                    Bonbon soufflé cake lollipop. Marshmallow dragée chupa chups. <br/>
                    Soufflé toffee fruitcake dragée croissant cake carrot cake donut carrot cake.  <br/>
                    Gingerbread cotton candy fruitcake chupa chups pie caramels. <br/>
                    Macaroon jujubes cotton candy marshmallow. <br/>
                    Muffin wafer cake gummi bears pie jujubes.  <br/>
                    Topping cookie chocolate cake chocolate bar sweet biscuit chocolate cake fruitcake chocolate bar.  <br/>
                    Cotton candy sugar plum lollipop danish. <br/>
                    Sugar plum icing jelly beans muffin tootsie roll. <br/>
                    Chocolate cake cake bonbon cake apple pie powder chocolate bar bear claw sweet roll.  <br/>
                    Dragée marzipan tiramisu muffin cheesecake dessert cheesecake. Pudding tiramisu donut.  <br/>
                    Sugar plum sugar plum gummies.
                  </p>
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