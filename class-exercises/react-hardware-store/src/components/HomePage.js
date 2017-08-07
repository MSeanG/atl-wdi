 import React, {Component} from 'react';
 
 class HomePage extends Component {
 
   constructor() {
     super();
 
     this.state = {
       itemCurrentlyOnSale: 'A Hammer'
     };
   }
 
   render() {
     return (
         <div>
           <h1>My Hardware Store</h1>
           <div>Currently On Sale: { this.state.itemCurrentlyOnSale }!</div>
         </div>
     );
   }
 }
 
 export default HomePage;