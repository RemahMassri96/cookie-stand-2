'use strict';
// create the working hours 
var workingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var allLocations =[];
// create the constructor - which is special type of function that is used to create function, represents the structure of the object 
function CookieStand(locationName,minNumOfCustomers,maxNumOfCustomer,avgNumOfCookiesPerCustomer)
  {
 this.locationName = locationName;
 this.minNumOfCustomers = minNumOfCustomers;
 this.maxNumOfCustomer = maxNumOfCustomer;
 this.avgNumOfCookiesPerCustomer =avgNumOfCookiesPerCustomer;
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


 function makeHeaderRow(){
   var headerRowElement = document.createElement('tr');
   var th = document.createElement('th');
   th.textContent ='';
   headerRowElement.appendChild(th);

   for(var i=0; i<workingHours.length; i++){
  
     th = document.createElement('th');
     th.textContent = workingHours[i];
     headerRowElement.appendChild(th);
   }

   th = document.createElement('th');


 }

// create an object 

for(var i =0; i<allLocations.length;i++){
  allLocations[i].generateNumOfCustomers();
  allLocations[i].calculateSoldCookies();
  console.log(allLocations[i]);
  

}


// a function that return a random value between minimum and maximum
function generateRandomNumber(min, max){
   return Math.floor(Math.random() * (max- + 1) + min);
}

