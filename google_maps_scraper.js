// Notes
// Use in console or tampermonkey

MAPS HOOVER - Maps V1

https://business.facebook.com/settings/pixels/931071210612236

var listingArr = []
var key = 'greenbridge' 
var local = localStorage.getItem(key); 
if(local==null){ //create cookie if it dosnt exist
console.log('new storage created')
 localStorage.setItem(key, '[]')
 }
 // get anything in the cookie befroe we start, and set that as our listing arr so we dont overrite it
var setArr = JSON.parse(localStorage.getItem(key))
setArr.forEach(function(item){
listingArr.push(item)
})
// localStorage.setItem(key, true)
function addUnique(data) {
  var index = -1;
  for( var i = 0; i < listingArr.length; i++) {
    if(listingArr[i].name === data.name) {
      index = i;
    }
  }
  if(index > -1) {
    listingArr[index] = data;
  } else {
    console.log('%c #:' + listingArr.length + ' Listing Added  ->'+  data.name + ' - ' + data.location + ' - ' + data.starts ,  'color: white;')
    listingArr.push(data)
    localStorage.setItem(key, JSON.stringify(listingArr))
  }
}

setInterval(function(){
document.querySelectorAll('.section-result-text-content').forEach(function(listing){
var _el = {}
listing.getElementsByClassName("section-result-title")[0].innerText!= undefined ? _el.name = listing.getElementsByClassName("section-result-title")[0].innerText : console.log('-notitle')  
listing.getElementsByClassName('section-result-location')[0].innerText != undefined ? _el.location= listing.getElementsByClassName('section-result-location')[0].innerText : console.log('-nolocation')  
listing.getElementsByClassName('cards-rating-score')[0].innerText != undefined ? _el.stars = listing.getElementsByClassName('cards-rating-score')[0].innerText : console.log('-nostars')   
addUnique(_el)
})
}, 100);



// Queries 
// Restraunt , food, cafe, bar, service, business, farm, shop, store, beauty, barber
MAPS HOOVER - Maps V2


var listingArr = []
var key = 'mapsv2washingtoncountry' 
var local = localStorage.getItem(key); 
if(local==null){ //create cookie if it dosnt exist
console.log('new storage created')
 localStorage.setItem(key, '[]')
 }
 // get anything in the cookie befroe we start, and set that as our listing arr so we dont overrite it
var setArr = JSON.parse(localStorage.getItem(key))
setArr.forEach(function(item){
listingArr.push(item)
})
// localStorage.setItem(key, true)
function addUnique(data) {
  var index = -1;
  for( var i = 0; i < listingArr.length; i++) {
    if(listingArr[i].name === data.name) {
      index = i;
    }
  }
  if(index > -1) {
    listingArr[index] = data;
  } else {
    console.log('%c #:' + listingArr.length + ' Listing Added  ->'+  data.name + ' - ' + data.location + ' - ' + data.starts ,  'color: white;')
    listingArr.push(data)
    localStorage.setItem(key, JSON.stringify(listingArr))
  }
}

setInterval(function(){
    document.querySelectorAll('div.gm2-body-2').forEach(function(listing){
        var _el = {}
        _el.name = console.log(listing.textContent.split("       "))[0]
        _el.stars = console.log(listing.textContent.split("       "))[1]
        _el.location = console.log(listing.textContent.split("       "))[2]
        addUnique(_el)
    })
}, 100);