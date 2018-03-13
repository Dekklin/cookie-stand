var hours = ['6am', '7am', '8am', '9am', '10am', '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var norm = '6am - 8pm';
var storeList = [pikePlaceStore, seaTacStore, seattleCenterStore, capitolHillStore, alkiStore];
var numberOfCustomers = function(min, max) {
  return Math.floor(Math.random() * (max-min)) + min;
};

var pikePlace = function() {
  var storelist = document.getElementById('PikeStore');
  for(var i = 0; i < hours.length; i++) {
    var storeCustomers = Math.ceil(numberOfCustomers(23, 65) * 6.3);
    var hourlySale = document.createElement('li');
    hourlySale.textContent = hours[i] + ' : ' + storeCustomers;
    storelist.appendChild(hourlySale);
  }
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
};
capitolHill();

var alki = function() {
  var storelist = document.getElementById('AlkiStore');
  var totalCookies = 0;
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
  avgCookieSold: 6.3,
};
var seaTacStore = {
  location: 'SeaTac Airport',
  hours: norm,
  customerPerHour: numberOfCustomers(3, 24),
  avgCookieSold: 1.2,
};
var seattleCenterStore = {
  location: 'Seattle Center',
  hours: norm,
  customerPerHour: numberOfCustomers(11, 38),
  avgCookieSold: 3.7,
};
var capitolHillStore = {
  location: 'Capitol Hill',
  hours: norm,
  customerPerHour: numberOfCustomers(20, 38),
  avgCookieSold: 2.3,
};
var alkiStore = {
  location: 'Alki',
  hours: norm,
  customerPerHour: numberOfCustomers(2, 16),
  avgCookieSold: 4.6,
};


console.log(storeList);
console.log(pikePlaceStore);
console.log(seaTacStore);