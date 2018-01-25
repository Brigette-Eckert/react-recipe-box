import React, { Component } from 'react';
import RecipeBox from "./components/RecipeBox";
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Recipe Box</h1>
        </header>
        <RecipeBox/>
      </div>
    );
  }
}

export default App;
