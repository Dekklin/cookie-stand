'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

//Empty table to contain stores
var allStores = [];
//Attatching storetable to the element in HTML
var storeTable = document.getElementById('storetable');
//Attatching var storeForm to the form for new Store
var storeForm = document.getElementById('storeForm');

storeForm.addEventListener('submit', addNewStore);

//Constructor Function
function Store(location, minCus, maxCus, avgCookieSold) {
  this.location = location;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgCookieSold = avgCookieSold;
  this.totalCookies = 0;
  this.storeTotal = 0;
  this.hourlyCookiesArray = [];
  allStores.push(this);
}

// Render is going to push the information from the constructor into the table
Store.prototype.render = function () {
  // creating table rows for the table
  var trElement = document.createElement('tr');
  // creating table data's (cells)
  var thElement = document.createElement('th');
  var tdElement = document.createElement('th');
  // giving td content, so the location/name of stores
  thElement.textContent = this.location;
  // appending the table data to the row (first one)
  trElement.appendChild(thElement);

  // storeTable.appendChild(trElement);

  // var dayTotal = 0
  this.storeTotal = 0;
  for(var i = 0; i < hours.length; i++) {
    this.hourlyCookies = Math.floor((Math.random() * (this.maxCus - this.minCus) + this.minCus) * this.avgCookieSold);
    tdElement = document.createElement('td');
    tdElement.textContent = this.hourlyCookies;
    trElement.appendChild(tdElement);
    this.storeTotal += this.hourlyCookies;
    this.hourlyCookiesArray.push(this.hourlyCookies);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = this.storeTotal;
  trElement.appendChild(tdElement);
  // dayTotals += dayTotal
  storeTable.appendChild(trElement);
};

// Creating Objects through the Store CONSTRUCTOR



new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

function renderAllStores() {
  for(var i in allStores) {
    allStores[i].render();
  }
}

function addNewStore(event) {
  event.preventDefault();
  console.log(event.target.location.value);

  var newLocation = event.target.location.value;
  var newMinCus = parseInt(event.target.minCus.value);
  var newMaxCus = parseInt(event.target.maxCus.value);
  var newAvgCookieSold = parseInt(event.target.avgCookieSold.value);
  console.log(typeof newMinCus);
  new Store(newLocation, newMinCus, newMaxCus, newAvgCookieSold);
  storeTable.innerHTML = '';
  makeHeaderRow();
  renderAllStores();
  makeFooterRow();
}

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
  var companyTotal = 0;
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  var tdElement = document.createElement('td');
  thElement.textContent = 'Totals';
  trElement.appendChild(thElement);
  for(var i = 0 ; i < hours.length ; i++ ){
    var hourTotal = 0;
    for(var j = 0 ; j < allStores.length ; j++) {
      // console.log(allStores[j]);
      // console.log(allStores[j].hourlyCookies);
      hourTotal += allStores[j].hourlyCookiesArray[i];
    }
    tdElement = document.createElement('td');
    tdElement.textContent = hourTotal;
    trElement.appendChild(tdElement);
    companyTotal += hourTotal;

  }
  tdElement = document.createElement('td');
  tdElement.textContent = companyTotal;
  trElement.appendChild(tdElement);
  storeTable.appendChild(trElement);
}
makeHeaderRow();
renderAllStores();
makeFooterRow();