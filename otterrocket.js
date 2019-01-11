
GTM-MTJL6DJ
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MTJL6DJ');</script>
<!-- End Google Tag Manager -->

ga('send', 'event', 'c', 'a', 'contact');

Contact Form
C: c
A: a
L: contact

window.onload = function() {
    init();
    doSomethingElse();
  };


  $(document).ready(function() { document.querySelectorAll("a.fp-featured").forEach(function(item){
    item.addEventListener('click', function(){
        ga('send', 'event', 'click', 'product', this.href)
    })
}) });



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


/* VIEWCONTENT */
    fbq('track', 'ViewContent', {
        content_name: ,
        content_type: ,
        contents:[document.querySelector('#product-info-table > tbody > tr.code > td').innerText] ,
        value: ,
        currency: 'USD', 
    })

/* ADDTOCART */
    fbq('track', 'AddToCart', {
        content_name: ,
        content_type: ,
        contents: [document.querySelector('#product-info-table > tbody > tr.code > td').innerText],
        value: ,
        currency: 'USD',
    })
