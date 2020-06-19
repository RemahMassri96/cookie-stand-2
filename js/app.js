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
 allLocations.push(this);

}

//CookieStand.prototype.generateNumOfCustomers() {

//}

// a function that return a random value between minimum and maximum
function generateRandomNumber(min, max){
   return (Math.floor(Math.random) * (max- + 1) + min);
}

