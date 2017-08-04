import React, { Component } from 'react';
import locationData from '../locationData.js';
import Location from './Location';

class LocationList extends Component {
  render(){
    return (
      <div id="locations">
        <h1>Locations :</h1>
        <div className="locations">
          {locationData.map((spec, i) => {
            return <Location key={i} banana={spec} />
          })}
        </div>
      </div>
    );
  }
}

export default LocationList;