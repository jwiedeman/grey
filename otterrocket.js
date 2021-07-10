


ga('gtm2.send', 'event', 'form', 'submit', window.location.pathname)




localStorage.getItem('123')
localStorage.setItem('123', data)

// shopify form tracking
jQuery('[type=submit] , .form__submit  ').one('click',function(el){
  ga('send', 'event', 'contact', el.target.innerText, window.location.pathname)
})



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

ga.getAll()[0].get('name')

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
ga('send', 'event', 'contact', 'click' , el.target.innerText || el.target.value)

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
ga(ga.getAll()[0].get('name') + '.send', 'event', 'contact', 'submit', 'form');
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

// shopify atc selector
document.querySelector('button[class*=add-to-cart]')










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





array filter 
.filter(function(item, pos){
  return arr.indexOf(item)== pos; 
});




// Magento 2 rev tracking
setTimeout(function(){ // window onload causes issues with magento so this is the next best approach 
  var i = setInterval(function(){ // just in case the site in an SPA 
      if(window.location.href.includes('payment')){ // update with final checkout step unique url string
          var params = {
              'price' : Number(jQuery('.price')[jQuery('.price').length-1].innerText.replace(/[^0-9.-]+/g, "")),
              'transaction_id' : new Date()
          }    
console.log(params) 
         var e =  setInterval(function(){ // this will wait until the "place order" button has loaded, checking once a second
              try {
                  if(document.querySelectorAll('.checkout').length > document.querySelectorAll('.checkout').length-1){
                      clearInterval(e)
                      console.log('- element loaded')
                      jQuery(" .checkout").on('click',function(){
                          console.log('- conversion fired', params)
                          window.uetq = window.uetq || []; 
                          window.uetq.push({ 'ec':'Checkout', 'ea':'Purchase', 'el':'Purchase', 'gv': params.price });
                      })
                  }
              }
              catch (e){} // silence is golden
          }, 1000);
              clearInterval(i)
      }
   }, 1000)
}, 1000);





function ready(callbackFunc) {
  if (document.readyState !== 'loading') {
    // Document is already ready, call the callback directly
    callbackFunc();
  } else if (document.addEventListener) {
    // All modern browsers to register DOMContentLoaded
    document.addEventListener('DOMContentLoaded', callbackFunc);
  } else {
    // Old IE browsers
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState === 'complete') {
        callbackFunc();
      }
    });
  }
}

ready(function() {
  // your code here
});




// Trueleaf scraper
var product_list = []

var products = jQuery(".snize-product")
var product_list_length = jQuery(".snize-product").length
var pagination_current = parseInt(jQuery(".snize-pagination .active")[0].rev)
var pagination_max = parseInt(jQuery(".snize-pagination > ul > li")[jQuery(".snize-pagination > ul > li").length-2].innerText)


jQuery(".snize-product").each(function( index , el) {
  var prod = {
  'id' : jQuery('.snize-product')[index].id,
  'link' : jQuery('.snize-view-link')[index].href ,
  'name' : jQuery('.snize-title')[index].innerText,
}
product_list.push(prod)

console.log(index,product_list_length)

if(index == product_list_length -1){
console.log('end of list on page' , pagination_current , product_list)
jQuery(".snize-pagination > ul > li > a")[pagination_current+1].trigger( "click" );
}

});


// trueleaf set variant 1 pound
jQuery("div[class^='swatch-label']:contains('1 lb')")[0].click()


// Really easy query string modification
var params = new URLSearchParams(location.search);
params.set('page', 1);

params.toString(); // => test=123&cheese=yummy
window.history.replaceState({}, '', `${location.pathname}?${params.toString()}`);
document.location = window.location.href




// Notes
This is a common shopify issue where the addtocart event either underfires, dosnt fire, or overfires. 
The client will need to contact shopify support to get assistance in diagnosing the cause of this, and a shopify theme dev to fix the issue once identified. 

// notes 
using the facebook pixel helper chrome extension, im seeing pageview, VC and atc events firing without issues. 

Let me know if you see any issues with the purchase event or if you have any questions! 