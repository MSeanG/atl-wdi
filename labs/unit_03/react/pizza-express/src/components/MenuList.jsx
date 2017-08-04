import React, { Component } from 'react';
import pizzaData from '../pizzaData.js';
import MenuItem from './MenuItem';

class MenuList extends Component {
  render(){
    return (
      <div className="menu">
        <h1>Menu</h1>
        <div className="menu-container">
          {pizzaData.map((spec, i) => {
            return <MenuItem key={i} banana={spec} />
          })}
        </div>
      </div>
    );
  }
}

export default MenuList;