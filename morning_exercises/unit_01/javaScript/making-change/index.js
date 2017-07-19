// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var makeChange = function(price, payment) {
  // Your Code Here
  var change = Math.floor((payment - price)*100);
  if (change <= 0){
    console.log('No Change');
    return [0,0,0,0];
  }
  var quarters = Math.floor(change/25);
  change = change % 25;
};

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
