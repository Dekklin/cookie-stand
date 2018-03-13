var hours = ['6am', '7am', '8am', '9am', '10am', '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var norm = '6am - 8pm';
var storeList = [pikePlaceStore, seaTacStore, seattleCenterStore, capitolHillStore, alkiStore];
var totalCookies = 0;
var numberOfCustomers = function(this.minCustomer, this.MaxCustomer) {
  return Math.floor(Math.random() * (max-min)) + min;
};

var pikePlace = function() {
  var storelist = document.getElementById('PikeStore');
  for(var i = 0; i < hours.length; i++) {
    var storeCustomers = Math.ceil(numberOfCustomers(this.minCustomer, this.maxCustomer) * customersPerHour);
    var hourlySale = document.createElement('li');
    hourlySale.textContent = hours[i] + ' : ' + storeCustomers;
    storelist.appendChild(hourlySale);
  }
  var totalElement = document.createElement('li');
  totalElement.textContent = 'Total : ' + totalCookies;
  storelist.appendChild(totalElement);
};
pikePlace();

var seaTac = function() {
  var storelist = document.getElementById('SeaTacStore');
  for(var i = 0; i < hours.length; i++) {
    var storeCustomers = Math.ceil(numberOfCustomers(3, 24) * 1.2);
    var hourlySale = document.createElement('li');
    hourlySale.textContent = hours[i] + ' : ' + storeCustomers;
    storelist.appendChild(hourlySale);
  }
  var totalElement = document.createElement('li');
  totalElement.textContent = 'Total : ' + totalCookies;
  storelist.appendChild(totalElement);
};
seaTac();

var seattleCenter = function() {
  var storelist = document.getElementById('SeattleCenterStore');
  for(var i = 0; i < hours.length; i++) {
    var storeCustomers = Math.ceil(numberOfCustomers(11, 38) * 3.7);
    var hourlySale = document.createElement('li');
    hourlySale.textContent = hours[i] + ' : ' + storeCustomers;
    storelist.appendChild(hourlySale);
  }
  var totalElement = document.createElement('li');
  totalElement.textContent = 'Total : ' + totalCookies;
  storelist.appendChild(totalElement);
};
seattleCenter();

var capitolHill = function() {
  var storelist = document.getElementById('CapitolHillStore');
  for(var i = 0; i < hours.length; i++) {
    var storeCustomers = Math.ceil(numberOfCustomers(20,38) * 2.3);
    var hourlySale = document.createElement('li');
    hourlySale.textContent = hours[i] + ' : ' + storeCustomers;
    storelist.appendChild(hourlySale);
  }
  var totalElement = document.createElement('li');
  totalElement.textContent = 'Total : ' + totalCookies;
  storelist.appendChild(totalElement);
};
capitolHill();

var alki = function() {
  var storelist = document.getElementById('AlkiStore');
  for(var i = 0; i < hours.length; i++) {
    var hourlyCookies = Math.ceil(numberOfCustomers(20,38) * 2.3);
    var hourlySale = document.createElement('li');
    totalCookies += hourlyCookies;
    hourlySale.textContent = hours[i] + ' : ' + hourlyCookies;
    storelist.appendChild(hourlySale);
  }
  var totalElement = document.createElement('li');
  totalElement.textContent = 'Total : ' + totalCookies;
  storelist.appendChild(totalElement);

};

alki();


var pikePlaceStore = {
  location: '1st and pike',
  hours: norm,
  customersPerHour: numberOfCustomers(23, 65),
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSold: 6.3,
};
var seaTacStore = {
  location: 'SeaTac Airport',
  hours: norm,
  customersPerHour: numberOfCustomers(3, 24),
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSold: 1.2,
};
var seattleCenterStore = {
  location: 'Seattle Center',
  hours: norm,
  customersPerHour: numberOfCustomers(11, 38),
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSold: 3.7,
};
var capitolHillStore = {
  location: 'Capitol Hill',
  hours: norm,
  customersPerHour: numberOfCustomers(20, 38),
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSold: 2.3,
};
var alkiStore = {
  location: 'Alki',
  hours: norm,
  customersPerHour: numberOfCustomers(2, 16),
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSold: 4.6,
};


console.log(storeList);
console.log(pikePlaceStore);
console.log(seaTacStore);