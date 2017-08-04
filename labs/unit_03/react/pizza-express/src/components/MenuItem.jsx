import React, { Component } from 'react';

class MenuItem extends Component {
  render(){
    return (
      <div className="menu-item">
        <img src={this.props.banana.image} />
        <div className="menu-description">
          <div className="menu-item-name">{this.props.banana.name}</div>
          <div>{this.props.banana.price}</div>
          <div>{this.props.banana.description}</div>
        </div>
      </div>
    );
  }
}
 
export default MenuItem;