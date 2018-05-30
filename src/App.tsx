import * as React from 'react';
import './App.css';
import Product from './components/Product';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
      <Product brand="Murad" />
      </div>
    );
  }
}

export default App;
