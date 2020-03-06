import React from 'react';
import Header from './Header';
import About from './About';
import Homepage from './Homepage';
import ItemDetails from './ItemDetails'
import {items} from '../data';
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from 'react-router-dom'

function App(props) {
  const itemList = Object.values(items)
  return (
    <Router>
      <Header>
      </Header>
      <Switch>
        <Route path='/' exact>
          <Homepage itemList={itemList}/>
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/items/:itemId'>
          <ItemDetails itemList={itemList}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
