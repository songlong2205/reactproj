import { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Component/MenuComponent';
import './App.css';
import { DISHES } from './share/dishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className='container'>
            <NavbarBrand href='/'>Ristorance Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
