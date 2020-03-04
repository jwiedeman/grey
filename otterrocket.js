



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
 
 var iterations = 1000000;
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
      if (document.querySelector('.success-message') != null) {
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
      if (document.getElementById('682283319302407823-msg') != null) {
        console.log('fired')
        clearInterval(i)
      }
    } catch (error) {
      clearInterval(i)
    }
  }, 100)
})()









jQuery(".cfx_submit:contains('See Plans')").show()


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


setTimeout(function () {

}, 3000);

// Regex if url past ./ contains X
https: //regex101.com/r/rV3oP8/1
\b( ? : https ? : \/\/)?[^\/:]+\/.*?job

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

$(document).ready(function () {

});

//outbound link hijack
$(document).ready(function () {
  $('[href*="housecallpro.com"]').click(function () {
    event.preventDefault();
    ga('send', 'event', 'contact', 'submit', 'form');
    location.assign($(this)[0].href);
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






email link click
jQuery("a[href^=mailto]").on('click', function () {
  ga('send', 'event', 'contact', 'submit', 'form');
})




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

