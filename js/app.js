'use strict';
// create the working hours 
var workingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var allLocations =[];
var table = document.getElementById('cookies-sales');

// create the constructor - which is special type of function that is used to create function, represents the structure of the object 
function CookieStand(locationName,minNumOfCustomers,maxNumOfCustomer,avgNumOfCookiesPerCustomer)
  {
 this.locationName = locationName;
 this.minNumOfCustomers = minNumOfCustomers;
 this.maxNumOfCustomer = maxNumOfCustomer;
 this.avgNumOfCookiesPerCustomer = avgNumOfCookiesPerCustomer;
 this.customersPerHour =[];
 this.cookiesPerHour =[];
 this.totalCookiesPerDay = 0;
 allLocations.push(this);

}

// a function that fills the customer per hour array
CookieStand.prototype.generateNumOfCustomers= function() {
   for(var i =0; i< workingHours.length;i++){
     this.customersPerHour.push(generateRandomNumber(this.minNumOfCustomers,this.maxNumOfCustomer));

   }
};

CookieStand.prototype.calculateSoldCookies = function(){
  for(var i =0; i< workingHours.length; i++){
    var numberfCookies = Math.ceil(this.avgNumOfCookiesPerCustomer * this.customersPerHour[i]);
    this.cookiesPerHour.push(numberfCookies);
    this.totalCookiesPerDay = this.totalCookiesPerDay + numberfCookies;
  }
};

CookieStand.prototype.render = function(){
  var locationRow = document.createElement('tr');
  table.appendChild(locationRow);

  var locationData = document.createElement('td');
  locationData.textContent =  this.locationName;
  locationRow.appendChild(locationData);
  for(var i =0; i< this.cookiesPerHour.length; i++){
    var hourData = document.createElement('td');
    hourData.textContent = this.cookiesPerHour[i];
    locationRow.appendChild(hourData);
  }

  var totalCookies = document.createElement('td');
  totalCookies.textContent = this.totalCookiesPerDay;
  locationRow.appendChild(totalCookies);

};


// create objects 

var seatle = new CookieStand('Seatle',5,19,4.2);
var lima = new CookieStand('Lima',3,15,6.5);
var dubai = new CookieStand('Dubai',3,15,6.5);



function makeHeaderRow(){
  var headerRowElement = document.createElement('tr');
     table.appendChild(headerRowElement);

  var th = document.createElement('th');
  th.textContent = '';
  headerRowElement.appendChild(th);

  for(var i =0; i <workingHours.length;i++){
     th = document.createElement('th');
    th.textContent = workingHours[i];
    headerRowElement.appendChild(th);
  }

  th = document.createElement('th');
  th.textContent = 'Daily Totals';
  headerRowElement.appendChild(th);

}

function makeFooterRow(){
  var footerRowElement = document.createElement('tr');
  table.appendChild(footerRowElement);

  var totalsTd = document.createElement('td');
  totalsTd.textContent = 'Totals';
  footerRowElement.appendChild(totalsTd);

  var totalOfTotals = 0;

  for( var i=0; i<workingHours.length;i++){
    var hourTotalId = document.createElement('td');
    var hourTotal =0;
    for( var j=0; j<allLocations.length; j++){
      hourTotal = hourTotal + allLocations[j].cookiesPerHour[i];
    }

    totalOfTotals = totalOfTotals + hourTotal;
    hourTotalId.textContent = hourTotal;
    footerRowElement.appendChild(hourTotalId);
  }

  var totalOfTotalsTd = document.createElement('td');
  totalOfTotalsTd.textContent = totalOfTotals;
  footerRowElement.appendChild(totalOfTotalsTd);
  footerRowElement.setAttribute('id','footerRow');

  


  //for(var j=0 ; j <allLocations.length; j++){
  //  allLocations[i].render();
 // }
}





makeHeaderRow();

makeFooterRow();



for(var i =0; i<allLocations.length;i++){
  allLocations[i].generateNumOfCustomers();
  allLocations[i].calculateSoldCookies();
  allLocations[i].render();
  

}

// a function that return a random value between minimum and maximum
function generateRandomNumber(min, max){
   return Math.floor(Math.random() * (max- + 1) + min);
}


var cookiesForm = document.getElementById('cookiesForm');
cookiesForm.addEventListener('submit',addNewLocation);

     function addNewLocation(event){
       event.preventDefault();

       var locationName = event.target.standLocation.value;
       var minCustomers = Number(event.target.minCus.value);
       var maxCustomers = Number(event.target.maxCus.value);
       var avg = Number(event.target.avgCookies.value);

      var newLocation = new CookieStand(locationName,minCustomers,maxCustomers,avg);
      newLocation.generateNumOfCustomers();
      newLocation.calculateSoldCookies();
      table.removeChild(document.getElementById('footerRow'));
      newLocation.render();


   
}



