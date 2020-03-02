get dob from Date
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


js preformance check 
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
    $('a[href^="mailto:"]') jQuery("a[href^=mailto]")

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
document.querySelector('#product-info-table').innerText

// if element ID exists
let myEle = document.getElementById("myElement");
if (myEle) {
  console.log(myEle)
}

// Strip variable > Currency to int
var currency = jQuery('tbody > tr > td:nth-child(5)').text();
var number = Number(currency.replace(/[^0-9.-]+/g, "")); console.log(number)
// if exists strip to number 
var __a = document.getElementById('pitSalePriceBx').innerHTML;
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






Click the Top left nav menu >
  Click Business Settings(far right) >
    Click data sources(Middle of the bar on the left) >
      Click Pixels >
        Enter the client 's pixel >
Click the business 's name >
Click the top right bar that contains the Pixel ID






//  % between a / b 
a = 7900; b = 7600; c = a - b; d = a + b; e = (c / (d / 2)) * 100; console.log(e)


element.addEventListener('click', function handler() {
  // this will only execute once
  console.log('Only once!');
  this.removeEventListener('click', handler);
});


/* If GA is blocked or not loaded, or not main|middle|touch click then don't track */
if (!ga.hasOwnProperty("loaded") || ga.loaded != true || (event.which != 1 && event.which != 2)) {
  return;
}

var el = event.srcElement || event.target;

/* Loop up the DOM tree through parent elements if clicked element is not a link (eg: an image inside a link) */
while (el && (typeof el.tagName == 'undefined' || el.tagName.toLowerCase() != 'a' || !el.href)) {
  el = el.parentNode;
}

/* if a link with valid href has been clicked */
if (el && el.href) {

  var link = el.href;

  /* Only if it is an external link */
  if (link.indexOf(location.host) == -1 && !link.match(/^javascript\:/i)) {

    /* Is actual target set and not _(self|parent|top)? */
    var target = (el.target && !el.target.match(/^_(self|parent|top)$/i)) ? el.target : false;

    /* Assume a target if Ctrl|shift|meta-click */
    if (event.ctrlKey || event.shiftKey || event.metaKey || event.which == 2) {
      target = "_blank";
    }

    var hbrun = false; // tracker has not yet run

    /* HitCallback to open link in same window after tracker */
    var hitBack = function () {
      /* run once only */
      if (hbrun) return;
      hbrun = true;
      window.location.href = link;
    };

    if (target) {
      /* If target opens a new window then just track */
      ga(
        "send", "event", "Outgoing Links", link,
        document.location.pathname + document.location.search
      );
      window.uetq = window.uetq || [];
      window.uetq.push({
        'ec': 'Outgoing Links',
        'ea': link,
        'el': document.location.pathname + document.location.search
      });

    } else {
      /* Prevent standard click, track then open */
      event.preventDefault ? event.preventDefault() : event.returnValue = !1;
      /* send event with callback */
      ga(
        "send", "event", "Outgoing Links", link,
        document.location.pathname + document.location.search, {
          "hitCallback": hitBack
        }
      );
      window.uetq = window.uetq || [];
      window.uetq.push({
        'ec': 'Outgoing Links',
        'ea': link,
        'el': document.location.pathname + document.location.search
      });


      /* Run hitCallback again if GA takes longer than 1 second */
      setTimeout(hitBack, 1000);
    }
  }
}
  }

var _w = window;
/* Use "click" if touchscreen device, else "mousedown" */
var _gaLtEvt = ("ontouchstart" in _w) ? "click" : "mousedown";
/* Attach the event to all clicks in the document after page has loaded */
_w.addEventListener ? _w.addEventListener("load", function () {
  document.body.addEventListener(_gaLtEvt, _gaLt, !1)
}, !1) :
  _w.attachEvent && _w.attachEvent("onload", function () {
    document.body.attachEvent("on" + _gaLtEvt, _gaLt)
  });



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
}(document, "script")); <
  /script>





Google analytics revenue tracking > tatvic enhanced ecommerce
Google ads revenue tracking > Google ads conversion tracking

event tracking

open acc
jQuery('#header > div:nth-child(1) > div.h3_banner > a:nth-child(1) > img').one('click', function () {
  ga('send', 'event', { eventCategory: 'Button', eventAction: 'Open Account', eventLabel: 'Open Account' });
})

IRA report
jQuery('#header > div:nth-child(1) > div.h3_banner > a:nth-child(2) > img').one('click', function () {
  ga('send', 'event', { eventCategory: 'Button', eventAction: 'Download', eventLabel: 'Free Report' });
})

newsletter
jQuery('#ic_signupform > div > div.sortables > div.submit-container > input').one('click', function () {
  ga('send', 'event', { eventCategory: 'Button', eventAction: 'Newsletter Subscribe', eventLabel: 'Newsletter Subscribe' });
})

Client Login // May need button click hijack 
jQuery('#menu-item-34 > a').one('click', function () {
  ga('send', 'event', { eventCategory: 'Button', eventAction: 'Login', eventLabel: 'Client Login' });
})

cf7 contact form
document.addEventListener('wpcf7mailsent', function (event) {
  if ('256' == event.detail.contactFormId) {
    //code
  }
}, false);

email link click
jQuery("a[href^=mailto]").on('click', function () {
  ga('send', 'event', 'contact', 'submit', 'form');
})

Open acc ET is all added, GA just needs to be fixed



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





Naw, just maybe lie about experience. Then fake it till you make it.
Josh
I wonder if I can spin my current role as net admin
Bouncing Square 
I would.
Josh 
so, I deal with a ton of over the web work, but from a networking perspective
Bouncing Square 
It’s how I took my cissp with not even a years security experience.
Josh 
 do you know what that would even be classified? Like, I know my protocols through most of the 7 layer
idk if I can spin that as like wan net administration

Bouncing Square 
Well, do you know how to setup a basic router with a firewall?

Josh 
already did it with pfsense

Bouncing Square 
Do you know about security profiles for windows users?

Josh 
like the whole active directory user management stuff, yeah

Bouncing Square 
Well, when was the first time you setup a wireless router!?

Josh 
group policy side though
fuck like 10 years ago

Josh 
 I could just spin my jobs 3+ years ago as sysadmin

Bouncing Square 5:33 PM
See, “Experience administrating small business networks for 10 years”

Bouncing Square 5:34 PM
I had a mentor when I worked at bell south that helped me.

I mean I do compromised site recovery already

Bouncing Square 5:36 PM
All sorts of little things. “Disaster recovery and post exploration triage”
Josh 5:36 PM
like, their so so sly, their shit gets picked up by the google spider, sometimes they add files to an FTP server, but lately its a cdn link, so you have to scan all incoming scripts for their contents
Bouncing Square 5:36 PM
Exploitation
Learning how to talk about what you do, in order to get past the HR filter is amazing.
In fact, in your about me if you just put in there that you are “studying to get your cissp”

Josh 5:37 PM
I can talk the talk, but the HR filter wall is still my enemy

Bouncing Square 5:37 PM
It will get past the auto filters


ironblood and dale also suggest saying I have a bachelors or associates from ITT tech
cant be verified


Josh 5:38 PM
I mean, if they hard pressed, idk how id spin it, not having a diploma

Bouncing Square 5:39 PM
I just straight up put down the schools I have ever taken a class in, and don’t put down that I have a degree.
Josh 5:40 PM
so how do you do that, just like
itt tech - bachelors in computer science
dosnt claim you have it, or imply anything other than attendance

Bouncing Square 5:41 PM
In fact, put in there you want your OsCP or GPEN just to kill the filter.

Josh 5:42 PM
how would you phrase that, "puruing oscp cissp and gpen"?

Bouncing Square 5:42 PM
Just be like “closing my skill gap with some entry level experience in order to prove my skills and attain my OSCP”

Bouncing Square 5:43 PM
I put it in different places. Some places want you to fill out a form. Others take your resume and scan it to populate stuff.

Josh 5:43 PM
huh, so how were you underqualified for the vmware position?
and how did you get in with that

Bouncing Square 5:43 PM
I’m not a security engineer.
I’m a hacker.

Attitude and confidence, and being able to produce.

deep dive logs at work and do all sorts of shit like that to prove access, history and stuff 
See. That’s soc work.
That’s all it is. Recovering and reviewing logs, telling a story. Being able to detect compromise.
Figure out how to separate them into years you worked there. Make it look like a natural progression over time.
