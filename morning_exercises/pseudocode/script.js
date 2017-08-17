var barrel = function(small, large, total){
//- Find the cost of a small barrel:
//  - We know 1 small barrel costs 60 right off the bat
var smallBarrel = 60;
//- Find the cost of the large barrel:
//  - First find the cost of all large barrels
//    - To do that, grab the total cost (825)
var total = 825;
//    - Subtract the small barrels from the total
//      - calculate the small barrels total price (2 * 60 = 120)
var small = (smallBarrel * 2);
var large = (total - small);
//    - The remainder amount is the total cost of large barrels
//    - Divide total cost of large barrels by number of barrels
var largeBarrel =  ((total - smallBarrels)/large);

return largeBarrel;
};
//*************************
// Problem 1:
// Barrels O' RUM

<<<<<<< HEAD
//var barrels = function(small, large, total){
//  var smallBarrel = 60;
//  var largeBarrel = (total - (small * smallBarrel)) / large;
//
//return largeBarrel;
//};
=======
var barrels = function(small, large, total){
};
>>>>>>> ba48ae94ea8a01ec9032374fe498d7cd581ad2da

//*************************
// Problem 2:
// Sailing the Seas

// var shipFuelCost = function(fuelPrice, milesPerGallon){
  //your code here
// };
// 
// //*************************
// // Problem 3:
// // GROG
// 
// var calcFruitJuice = function(a, b, c, d){
//   //your code here
// };
// 
// //DO NOT EDIT BELOW THIS LINE//
// module.exports = {
//   barrels: barrels,
//   shipFuelCost: shipFuelCost,
//   calcFruitJuice: calcFruitJuice
// };
