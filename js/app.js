'use strict';

// create the working hours array :
var workingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var allLocatins= [];
// create a conctrctour its special function to create obj and its represents the structure of objects
function Cookiestand(locationName,minNumOfCustom,maxNumOfCustom, avgNumOfCookiePerCustomer){
  this.locationName  = locationName,
  this.minNumOfCustom = minNumOfCustom,
  this.maxNumOfCustom= maxNumOfCustom,
  this.avgNumOfCookiePerCustomer = avgNumOfCookiePerCustomer,
  this.customerPerHour = [],
  this.cookiesPerHour =[],
  this.totalCookiesPerDay = 0,
  allLocatins.push(this)
};


// a function that fills a customer per hour  array 
Cookiestand.prototype.generateRandomNumberOfCustomers() = function(){
    for(var i =0; i<workingHours.length; i++){
    
    }

};

Cookiestand.prototype.calculteCookiesPerHour() = function () {
    for(var i =0 ; i<workingHours.length ; i++){
      var numberOfCookies = Math.ceil(this.avgNumOfCookiePerCustomer * this.customerPerHour[i]) ;
      this.cookiesPerHour.push(numberOfCookies);
      this.totalCookiesPerDay = totalCookiesPerDay + numberOfCookies;

      
    }

}



  function makeHeaderRow(){
      var headerRowElement = document.getElementById('');
      var th = document.createElement();
      th.textContent = '';
      headerRowElement.appendChild(th);

      for(var = 0; i<workingHours.length; i++){

      }





  }

// create an object :

 var seattle = new Cookiestand('Seattle',5,19,4.2);
 var lima =    new Cookiestand ('Lima', 3 , 15 , 6.5);
 var dubai =  new Cookiestand ('Dubai',3 ,15,6.5);
 
 for(var i =0; i<allLocatins.length; i++){
     allLocatins[i].generateRandomNumberOfCustomers();
     allLocatins[i].calculteCookiesPerHour();
     console.log(allLocatins[i]);

 }


function generateRandomNumber(min,max){
    return Math.floor(Math.random()* (max-min +1 ) + min);
}













/*var randomCustomer = 0;
var seattle = {
    location : 'Seattle',
    minCustomersHours :23 ,
    maxCustomersHours: 65,
    avgCookiesSale: 6.3,
    cookiesSoldPerHour :[],
    numOfCustomerPerHour : [],
    totalCookies : 0,
      getRandomCustomer : function(){
      for (var i =0; i< workingHours.length; i++){
          randomCustomer = getRandomCustomersPerHour(this.minCustomersHours,this.maxCustomersHours);
          this.numOfCustomerPerHour.push(randomCustomer);
                                        
      }
      },

    getCookiesSoldByHour : function () {
        for(var i =0; i< workingHours.length ; i++){
           var numberOfCookies = Math.floor(this.avgCookiesSale * this.numOfCustomerPerHour[i]);
           this.cookiesSoldPerHour.push(numberOfCookies);
           this.totalCookies = this.totalCookies + numberOfCookies;
        }

    },

    render : function(){
     var parentElement = document.getElementById('locations-profile');
     
     var article = document.createElement('article')
     parentElement.appendChild(article);

     var h2 = document.createElement('h2');
     h2.textContent = this.location;
     article.appendChild(h2);


    }
    
};


 seattle.render();

console.log(seattle);






function getRandomCustomersPerHour(minCustomersHours,maxCustomersHours){
     var randomValue = Math.random();
     return Math.floor(randomValue * (maxCustomersHours - minCustomersHours + 1)) + minCustomersHours;}


//seattle.render();
seattle.getCookiesSoldByHour();
seattle.getRandomCustomer();
getRandomCustomersPerHour(); */