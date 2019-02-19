
setTimeout(function(){
     
}, 100);




ga('send', 'event', 'c', 'a', 'contact');



Contact Form
C: c
A: a
L: contact


window.onload = function() {

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



  