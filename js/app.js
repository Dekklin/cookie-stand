var hours = ['6am', '7am', '8am', '9am', '10am', '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

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
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Store Locations';
  trElement.appendChild(thElement);

  for(var i = 0; i < hours.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = 'Totals';
  trElement.appendChild(thElement);
  storeTable.appendChild(trElement);
}


function makeFooterRow() {
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = 'Totals';
  trElement.appendChild(tdElement);
  storeTable.appendChild(trElement);
  var totalTotal = 0;
  for( var i = 0 ; i < hours.length ; i++ ){
    var hourTotal = 0;
    for(var j = 0 ; j < allStores.length ; j++) {
      console.log(allStores[j]);
      console.log(allStores[j].hourlyCookies);
      hourTotal += allStores[j].hourlyCookies[i];
    }
    tdElement = document.createElement('td');
    tdElement.textContent = hourTotal;
    trElement.appendChild(tdElement);
    totalTotal += hourTotal;
  }
  tdElement = document.createElement('td');
  tdElement.textContent = totalTotal;
  trElement.appendChild(tdElement);
  storeTable.appendChild(trElement);
}
makeHeaderRow();
pikePlaceStore.render();
seaTacStore.render();
seattleCenterStore.render();
capitolHillStore.render();
alkiStore.render();
makeFooterRow();