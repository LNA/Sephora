import * as React from 'react';
import './App.css';
import Product from './components/Product';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
      <Product brand="Murad" price="$69.00" productName="Rapid Age Spot Serum" solutionsFor="Dark spots" />
      </div>
    );
  }
}

export default App;
