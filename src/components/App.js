import React from 'react';
import Header from './Header';
import About from './About';
import Homepage from './Homepage';
import ItemDetails from './ItemDetails'
import Sellers from './Sellers';
import Seller from './Seller';
import {items, sellers} from '../data';
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from 'react-router-dom'
  import styled from 'styled-components'

const StyledBody=styled.div`
  background: rgba(163,119,176,1) linear-gradient(180deg, rgba(113,61,127,1) 0%, rgba(127,79,140,1) 79%, rgba(163,119,176,1) 100%);
  position:absolute;
  width: 100%;
  height: 100%;
`;


function App(props) {
  const itemList = {array: Object.values(items), type: 'items'}
  const sellersList = {array: Object.values(sellers), type: 'sellers'}

  return (
    <Router>
      <Header>
      </Header>
      <Switch>
      <StyledBody>
        <Route path='/' exact>
          <Homepage itemList={itemList}/>
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/items/:itemId'>
          <ItemDetails itemList={itemList}/>
        </Route>
        <Route path='/sellers' exact>
          <Sellers sellersList={sellersList}/>
        </Route>
        <Route path='/sellers/:sellerId'>
          <Seller sellersList={sellersList} itemList={itemList}/>
        </Route>
      </StyledBody>
      </Switch>
    </Router>
  );
}

export default App;
