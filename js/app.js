var hours = ['6am', '7am', '8am', '9am', '10am', '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var norm = '6am - 8pm';
var storeList = [pikePlaceStore, seaTacStore, seattleCenterStore, capitolHillStore, alkiStore];
var numberOfCustomers = function(min,max) {
  return Math.floor(Math.random() * (max-min)) + min;
};


var pikePlaceStore = {
  location: '1st and pike',
  hours: norm,
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSold: 6.3,
  pikePlace: function() {
    var storelist = document.getElementById('PikeStore');
    var totalCookies = 0;
    for(var i = 0; i < hours.length; i++) {
      var hourlyCookies = Math.ceil(numberOfCustomers(this.minCustomer,this.maxCustomer) * this.avgCookieSold);
      var hourlySale = document.createElement('li');
      totalCookies += hourlyCookies;
      hourlySale.textContent = hours[i] + ' : ' + hourlyCookies;
      storelist.appendChild(hourlySale);
    }
    var totalElement = document.createElement('li');
    totalElement.textContent = 'Total : ' + totalCookies;
    storelist.appendChild(totalElement);
  },
};

var seaTacStore = {
  location: 'SeaTac Airport',
  hours: norm,
  customersPerHour: numberOfCustomers(3, 24),
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSold: 1.2,
  seaTac: function() {
    var storelist = document.getElementById('SeaTacStore');
    var totalCookies = 0;
    for(var i = 0; i < hours.length; i++) {
      var hourlyCookies = Math.ceil(numberOfCustomers(this.minCustomer,this.maxCustomer) * this.avgCookieSold);
      var hourlySale = document.createElement('li');
      totalCookies += hourlyCookies;
      hourlySale.textContent = hours[i] + ' : ' + hourlyCookies;
      storelist.appendChild(hourlySale);
    }
    var totalElement = document.createElement('li');
    totalElement.textContent = 'Total : ' + totalCookies;
    storelist.appendChild(totalElement);
  },
};

var seattleCenterStore = {
  location: 'Seattle Center',
  hours: norm,
  customersPerHour: numberOfCustomers(11, 38),
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSold: 3.7,
  seattleCenter: function() {
    var storelist = document.getElementById('SeattleCenterStore');
    var totalCookies = 0;
    for(var i = 0; i < hours.length; i++) {
      var hourlyCookies = Math.ceil(numberOfCustomers(this.minCustomer,this.maxCustomer) * this.avgCookieSold);
      var hourlySale = document.createElement('li');
      totalCookies += hourlyCookies;
      hourlySale.textContent = hours[i] + ' : ' + hourlyCookies;
      storelist.appendChild(hourlySale);
    }
    var totalElement = document.createElement('li');
    totalElement.textContent = 'Total : ' + totalCookies;
    storelist.appendChild(totalElement);
  },
};

var capitolHillStore = {
  location: 'Capitol Hill',
  hours: norm,
  customersPerHour: numberOfCustomers(20, 38),
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSold: 2.3,
  capitolHill: function() {
    var storelist = document.getElementById('CapitolHillStore');
    var totalCookies = 0;
    for(var i = 0; i < hours.length; i++) {
      var hourlyCookies = Math.ceil(numberOfCustomers(this.minCustomer,this.maxCustomer) * this.avgCookieSold);
      var hourlySale = document.createElement('li');
      totalCookies += hourlyCookies;
      hourlySale.textContent = hours[i] + ' : ' + hourlyCookies;
      storelist.appendChild(hourlySale);
    }
    var totalElement = document.createElement('li');
    totalElement.textContent = 'Total : ' + totalCookies;
    storelist.appendChild(totalElement);
  },
};

var alkiStore = {
  location: 'Alki',
  hours: norm,
  customersPerHour: numberOfCustomers(2, 16),
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSold: 4.6,
  alki: function() {
    var storelist = document.getElementById('AlkiStore');
    var totalCookies = 0;
    for(var i = 0; i < hours.length; i++) {
      var hourlyCookies = Math.ceil(numberOfCustomers(this.minCustomer,this.maxCustomer) * this.avgCookieSold);
      var hourlySale = document.createElement('li');
      totalCookies += hourlyCookies;
      hourlySale.textContent = hours[i] + ' : ' + hourlyCookies;
      storelist.appendChild(hourlySale);
    }
    var totalElement = document.createElement('li');
    totalElement.textContent = 'Total : ' + totalCookies;
    storelist.appendChild(totalElement);
  },
};

pikePlaceStore.pikePlace();
seaTacStore.seaTac();
seattleCenterStore.seattleCenter();
capitolHillStore.capitolHill();
alkiStore.alki();
console.log(storeList);
