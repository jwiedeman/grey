

let _a=false
if(_a==false){
  setInterval(function(){
    if(document.querySelector('.post-submit-success').style.display!='none' && _a !=true){
      ga('send', 'event', 'c', 'a', window.location.pathname );
      _a = true
}},100)}






function parse_URL(url) {
        var a = document.createElement("a");
        a.href = url;
        return {
          source: url,
          protocol: a.protocol.replace(":", ""),
          host: a.hostname,
          port: a.port,
          query: a.search,
          params: (function() {
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

setTimeout(function(){
    (function() {
        if(document.querySelector('wysiwyg-content')!=false){
          document.querySelector('test').style.display='block';
        }
      })();
}, 100);




ga('send', 'event', 'c', 'a', 'contact');



Contact Form
C: c
A: a
L: contact


window.onload = function() {
  let __cond = false
  if(__cond==false){
  setInterval(function(){
  if(document.querySelector('.wysiwyg-content')!=null && __cond !=true){ga('send', 'event', 'c', 'a', window.location.pathname);
  __cond = true}}, 100)}
};




  $(document).ready(function() { document.querySelectorAll("a.fp-featured").forEach(function(item){
    item.addEventListener('click', function(){
        ga('send', 'event', 'click', 'product', this.href)
    })
}) });

//outbound link hijack
$(document).ready(function(){
    $('[href*="hello.dubsado.com"]').click(function() {
        event.preventDefault();
        console.log('PRETEND GA EVENT FOR THIS URL: ', $(this)[0].href)
        location.assign($(this)[0].href);
    });
});

  $( "#foo" ).one( "click", function() {
    alert( "This will be displayed only once." );
  });



//vanilla js getting a text value
document.querySelector('#product-info-table').innerText

// if element ID exists
let myEle = document.getElementById("myElement");
    if(myEle){
        console.log(myEle)
    }

// Strip variable > Currency to int
var currency = $('tbody > tr > td:nth-child(5)').text();
var number = Number(currency.replace(/[^0-9.-]+/g,""));
console.log(number)
// if exists strip to number 
var __a = document.getElementById('pitSalePriceBx').innerHTML;
    if(__a){
		let __b = Number(__a.replace(/[^0-9.-]+/g,""));
       console.log(__b)
    }
// IF CLASS EXISTS
(function() {
    if(document.querySelector('.test')!=false){
      document.querySelector('.test').style.display='block';
    }
  })();
  // IF ID EXISTS
  (function() {
    if(document.getElementById('test')!=false){
      document.getElementById('test').style.display='block';
    }
  })();






Click the Top left nav menu
> Click Business Settings (far right)
> Click data sources (Middle of the bar on the left)
> Click Pixels
> Enter the client's pixel
> Click the business's name
> Click the top right bar that contains the Pixel ID



  


//  % between a / b 
a= 7900 ;b= 7600 ;c=a-b;d=a+b;e=(c/(d/2))*100;
console.log(e)