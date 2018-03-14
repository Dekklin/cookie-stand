var hours = ['6am', '7am', '8am', '9am', '10am', '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var norm = '6am - 8pm';

//var numberOfCustomers = function(minCus,maxCus) {
// return Math.floor(Math.random() * (maxCus-minCus)) + minCus;


//Empty table to contain stores
var allStores = [];
//Attatching storetable to the element in HTML
var storeTable = document.getElementById('storetable');

//Constructor Function
function Store(location, minCus, maxCus, avgCookieSold) {
  this.location = location;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgCookieSold = avgCookieSold;
  this.totalCookies = 0;



  allStores.push(this);

}




// Render is going to push the information from the constructor into the table
Store.prototype.render = function () {
  // creating table rows for the table
  var trElement = document.createElement('tr');
  // creating table data's (cells)
  var tdElement = document.createElement('td');
  // giving td content, so the location/name of stores
  tdElement.textContent = this.location;
  // appending the table data to the row (first one)
  trElement.appendChild(tdElement);


  // storeTable.appendChild(trElement);

  for(var i = 0; i < hours.length; i++) {
    this.hourlyCookies = Math.floor((Math.random() * (this.maxCus - this.minCus) + this.minCus) * this.avgCookieSold);
    tdElement = document.createElement('td');
    tdElement.textContent = this.hourlyCookies;
    trElement.appendChild(tdElement);
    this.totalCookies += this.hourlyCookies;
  }
  storeTable.appendChild(trElement);
};


// Creating Objects through the Store CONSTRUCTOR
var pikePlaceStore = new Store('1st and Pike', 23, 65, 6.3);
var seaTacStore = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenterStore = new Store('Seattle Center', 11, 38, 3.7);
var capitolHillStore = new Store('Capitol Hill', 20, 38, 2.3);
var alkiStore = new Store('Alki', 2, 16, 4.6);



// Function to create a header for the table
function makeHeaderRow() {
  var TrElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = 'Store Locations';
  TrElement.appendChild(tdElement);
  for(var i = 0; i < hours.length; i++) {
    var thElement = document.createElement('th');
    thElement.textContent = hours[i];
    storeTable.appendChild(thElement);
  }
  storeTable.appendChild(thElement);
}






makeHeaderRow();
pikePlaceStore.render();
seaTacStore.render();
seattleCenterStore.render();
capitolHillStore.render();
alkiStore.render();








// var pikePlaceStore = {
//   location: '1st and pike',
//   hours: norm,
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookieSold: 6.3,
//   pikePlace: function() {
//     var storelist = document.getElementById('PikeStore');
//     var totalCookies = 0;
//     for(var i = 0; i < hours.length; i++) {
//       var hourlyCookies = Math.ceil(numberOfCustomers(this.minCustomer,this.maxCustomer) * this.avgCookieSold);
//       var hourlySale = document.createElement('li');
//       totalCookies += hourlyCookies;
//       hourlySale.textContent = hours[i] + ' : ' + hourlyCookies;
//       storelist.appendChild(hourlySale);
//     }
//     var totalElement = document.createElement('li');
//     totalElement.textContent = 'Total : ' + totalCookies;
//     storelist.appendChild(totalElement);
//   },
// };
// seaTac: function() {
//        var storelist = document.getElementById('SeaTacStore');
//      var totalCookies = 0;
//       for(var i = 0; i < hours.length; i++) {
//         var hourlyCookies = Math.ceil(numberOfCustomers(this.minCustomer,this.maxCustomer) * this.avgCookieSold);
//        var hourlySale = document.createElement('li');
//      totalCookies += hourlyCookies;
//      hourlySale.textContent = hours[i] + ' : ' + hourlyCookies;

// var seaTacStore = {
//   location: 'SeaTac Airport',
//   hours: norm,
//   customersPerHour: numberOfCustomers(3, 24),
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieSold: 1.2,
//   seaTac: function() {
//     var storelist = document.getElementById('SeaTacStore');
//     var totalCookies = 0;
//     for(var i = 0; i < hours.length; i++) {
//       var hourlyCookies = Math.ceil(numberOfCustomers(this.minCustomer,this.maxCustomer) * this.avgCookieSold);
//       var hourlySale = document.createElement('li');
//       totalCookies += hourlyCookies;
//       hourlySale.textContent = hours[i] + ' : ' + hourlyCookies;
//       storelist.appendChild(hourlySale);
//     }
//     var totalElement = document.createElement('li');
//     totalElement.textContent = 'Total : ' + totalCookies;
//     storelist.appendChild(totalElement);
//   },
// };

// var seattleCenterStore = {
//   location: 'Seattle Center',
//   hours: norm,
//   customersPerHour: numberOfCustomers(11, 38),
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookieSold: 3.7,
//   seattleCenter: function() {
//     var storelist = document.getElementById('SeattleCenterStore');
//     var totalCookies = 0;
//     for(var i = 0; i < hours.length; i++) {
//       var hourlyCookies = Math.ceil(numberOfCustomers(this.minCustomer,this.maxCustomer) * this.avgCookieSold);
//       var hourlySale = document.createElement('li');
//       totalCookies += hourlyCookies;
//       hourlySale.textContent = hours[i] + ' : ' + hourlyCookies;
//       storelist.appendChild(hourlySale);
//     }
//     var totalElement = document.createElement('li');
//     totalElement.textContent = 'Total : ' + totalCookies;
//     storelist.appendChild(totalElement);
//   },
// };

// var capitolHillStore = {
//   location: 'Capitol Hill',
//   hours: norm,
//   customersPerHour: numberOfCustomers(20, 38),
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookieSold: 2.3,
//   capitolHill: function() {
//     var storelist = document.getElementById('CapitolHillStore');
//     var totalCookies = 0;
//     for(var i = 0; i < hours.length; i++) {
//       var hourlyCookies = Math.ceil(numberOfCustomers(this.minCustomer,this.maxCustomer) * this.avgCookieSold);
//       var hourlySale = document.createElement('li');
//       totalCookies += hourlyCookies;
//       hourlySale.textContent = hours[i] + ' : ' + hourlyCookies;
//       storelist.appendChild(hourlySale);
//     }
//     var totalElement = document.createElement('li');
//     totalElement.textContent = 'Total : ' + totalCookies;
//     storelist.appendChild(totalElement);
//   },
// };

// var alkiStore = {
//   location: 'Alki',
//   hours: norm,
//   customersPerHour: numberOfCustomers(2, 16),
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookieSold: 4.6,
//   alki: function() {
//     var storelist = document.getElementById('AlkiStore');
//     var totalCookies = 0;
//     for(var i = 0; i < hours.length; i++) {
//       var hourlyCookies = Math.ceil(numberOfCustomers(this.minCustomer,this.maxCustomer) * this.avgCookieSold);
//       var hourlySale = document.createElement('li');
//       totalCookies += hourlyCookies;
//       hourlySale.textContent = hours[i] + ' : ' + hourlyCookies;
//       storelist.appendChild(hourlySale);
//     }
//     var totalElement = document.createElement('li');
//     totalElement.textContent = 'Total : ' + totalCookies;
//     storelist.appendChild(totalElement);
//   },
// };
console.log(norm);