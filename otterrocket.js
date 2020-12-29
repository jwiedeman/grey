MAPS HOOVER



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



ga('gtm2.send', 'event', 'form', 'submit', window.location.pathname)




localStorage.getItem('123')
localStorage.setItem('123', data)






function contains(selector, text) {
  var elements = document.querySelectorAll(selector);
  return [].filter.call(elements, function(element){
    return RegExp(text).test(element.textContent);
  });
}
contains('a',/shop/i).forEach(element => element.addEventListener("click", function(){
  ga('send', 'event', 'contact', 'submit', 'form')
 }));
 

 AIzaSyDoD5WpymZckLTPRh52meutP6VVoBlXmDo



// Notes

The current integration is added using the default shopify integration using universal analytics. The gtag version of GA loads in universal analytics and transitioning to gtag is not required. 

Let me know if you have any questions. 











 var numberOfLineBreaks = (enteredText.match(/\n/g)||[]).length;

ga.getAll()[0].get('name');

// get dob from Date
function getAge(DOB) {
  var today = new Date();
  var birthDate = new Date(DOB);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age = age - 1;
  }

  return age;
}
alert(getAge("1983-08-15T20:04:17.281Z"));


// GPS coordinate haversine foruma, get direct dist between 2 coordinates
function haversine() {
       var radians = Array.prototype.map.call(arguments, function(deg) { return deg/180.0 * Math.PI; });
       var lat1 = radians[0], lon1 = radians[1], lat2 = radians[2], lon2 = radians[3];
       var R = 6372.8; // km
       var dLat = lat2 - lat1;
       var dLon = lon2 - lon1;
       var a = Math.sin(dLat / 2) * Math.sin(dLat /2) + Math.sin(dLon / 2) * Math.sin(dLon /2) * Math.cos(lat1) * Math.cos(lat2);
       var c = 2 * Math.asin(Math.sqrt(a));
       return R * c;
}



// js preformance check, give or take a degree of accuracy due to jitter
function functionOne (){
  // Stuff 
 }
 function functionTwo (){
  // Stuff 
 }
 
 var iterations = 1;
 console.time('Function #1');
 for(var i = 0; i < iterations; i++ ){
     functionOne();
 };
 console.timeEnd('Function #1')
 
 console.time('Function #2');
 for(var i = 0; i < iterations; i++ ){
     functionTwo();
 };
 console.timeEnd('Function #2')
 


// EASY ET
(function () {
  var i = setInterval(function () {
    try {
      if (jQuery("p:contains('Your form has been successfully submitted!')").length != 0) {
        console.log('fired')
        clearInterval(i)
      }
    } catch (error) {
      clearInterval(i)
    }
  }, 100)
})()



(function () {
  var i = setInterval(function () {
    try {
      if (document.getElementById('LabelMsg') != null) {
        console.log('fired')
        clearInterval(i)
      }
    } catch (error) {
      clearInterval(i)
    }
  }, 100)
})()









#google-wcc-debug
https://regex101.com/r/xzjFMm/1
delta dental 18005212651


function parse_URL(url) {
  var a = document.createElement("a");
  a.href = url;
  return {
    source: url,
    protocol: a.protocol.replace(":", ""),
    host: a.hostname,
    port: a.port,
    query: a.search,
    params: (function () {
      var ret = {},
        seg = a.search.replace(/^\?/, "").split("&"),
        len = seg.length,
        i = 0,
        s;
      for (; i < len; i++) {
        if (!seg[i]) {
          continue;
        }
        s = seg[i].split("=");
        ret[s[0]] = s[1];
      }
      return ret;
    })(),
    file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ""])[1],
    hash: a.hash.replace("#", ""),
    path: a.pathname.replace(/^([^\/])/, "/$1"),
    relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ""])[1],
    segments: a.pathname.replace(/^\//, "").split("/")
  };
}

setTimeout(function () {
  (function () {
    if (document.querySelector('wysiwyg-content') != false) {
      document.querySelector('test').style.display = 'block';
    }
  })();
}, 100);



// Event tracking
ga('send', 'event', 'contact', 'submit', 'form');
ga('send', 'event', 'email', 'click', 'link');

_gaq.push(['_trackEvent', 'contact', 'form', 'submitted']);

jQuery("a[href^=mailto]").on('click', function (element) {
  ga('send', 'event', 'email', 'click', this.href);
})

gtag('event', 'contact', {
  'send_to': 'UA-51157741-2',
  'event_category': 'submit',
  'event_label': 'form',
});



Email click
C: email
A: click
L: link

Contact Form
C: contact
A: submit
L: form


$("div.download").one('click', function () {
  ga('send', 'event', 'contact', 'submit', 'form')
})


window.onload = function () {

};

window.onload = function () {
jQuery("button:contains('SUBSCRIBE NOW')").one('click',function(){
ga('send', 'event', 'newsletter', 'submit', 'form')
})
jQuery("button:contains('Subscribe Now')").one('click',function(){
ga('send', 'event', 'newsletter', 'submit', 'form')
})
};

setTimeout(function () {

}, 3000);

// Regex if url past ./ contains X
https: //regex101.com/r/rV3oP8/1
\b( ? : https ? : \/\/)?[^\/:]+\/.*?return_to


    document.querySelectorAll("a.fp-featured").forEach(function (item) {
  item.addEventListener('click', function () {
    ga('send', 'event', 'click', 'product', this.href)
  })
})

document.querySelector('.submit').addEventListener('click', function() {
  // Do stuff
}, { once: true })

// MAILTO
$('a[href^="mailto:"]') 
jQuery("a[href^=mailto]")

email link click
jQuery("a[href^=https://app.barn2door.com]").on('click', function () {
  ga('send', 'event', 'contact', 'submit', 'form');
})

$(document).ready(function () {

});

//outbound link hijack
jQuery(document).ready(function () {
  jQuery('[href*="housecallpro.com"]').click(function (event) {
    event.preventDefault();
    ga('send', 'event', 'contact', 'submit', 'form');
    location.assign(jQuery(this)[0].href);
  });
});

$("#foo").one("click", function () {
  alert("This will be displayed only once.");
});


//vanilla js getting a text value
document.querySelector('SELECTOR').innerText

// if element ID exists
let myEle = document.getElementById("SELECTOR");
if (myEle) {
  console.log(myEle)
}

// Strip variable > Currency to int
var currency = jQuery('SELECTOR').text();
var number = Number(currency.replace(/[^0-9.-]+/g, "")); console.log(number)


// if exists strip to number 
var __a = document.getElementById('SELECTOR').innerHTML;
if (__a) {
  let __b = Number(__a.replace(/[^0-9.-]+/g, ""));
  console.log(__b)
}

// IF CLASS EXISTS
(function () {
  if (document.querySelector('.test') != false) {
    document.querySelector('.test').style.display = 'block';
  }
})();
// IF ID EXISTS
(function () {
  if (document.getElementById('test') != false) {
    document.getElementById('test').style.display = 'block';
  }
})();


//  % between a / b 
a = 7900; b = 7600; c = a - b; d = a + b; e = (c / (d / 2)) * 100; console.log(e)


element.addEventListener('click', function handler() {
  // this will only execute once
  console.log('Only once!');
  this.removeEventListener('click', handler);
});




function contains(selector, text) {
  var elements = document.querySelectorAll(selector);
  return [].filter.call(elements, function(element){
    return RegExp(text).test(element.textContent);
  });
}

  // Google Analytics GAQ
var _gaq = [
  ['_setAccount', 'UA-12800703-1'],
  ["_trackPageview"]
];
(function (d, t) {
  var g = d.createElement(t),
    s = d.getElementsByTagName(t)[0];
  g.async = 1;
  g.src = ("https:" == location.protocol ? "//ssl" : "//www") + ".google-analytics.com/ga.js";
  s.parentNode.insertBefore(g, s)
}(document, "script")); 










sftp / ftp / ssl / tc:ip / DNS / DHCP 
Disaster recovery and post exploration triage
Recovering and reviewing logs & Compromise detection
Wordpress hardening
4 years of small business network administration 
1 year Linux administration
2 years small business Windows administration

Cybrary Intro to infosec
Cybrary IT fundamentals
Cybrary sec+ 
cybrary fundamentals of vulnerability management 



Array.prototype.remove = function() {
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
          this.splice(ax, 1);
      }
  }
  return this;
};

var ary = ['three', 'seven', 'eleven'];

ary.remove('seven');

/*  returned value: (Array)
three,eleven
*/



writing up emails for me
making me work through her to work with marc / AMs on urgent tickets, or tickets that are not urgent but percieved as urgent 



array filter 
.filter(function(item, pos){
  return arr.indexOf(item)== pos; 
});
