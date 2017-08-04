import React, { Component } from 'react';

class Location extends Component {
  render(){
    return (
      <div className="location">
        <p>{this.props.banana.name}</p>
        <strong>Address: </strong>
        <p>{this.props.banana.address}</p>
        <strong>Phone :</strong>
        <p>{this.props.banana.phone}</p>
      </div>
    );
  }
}

export default Location;