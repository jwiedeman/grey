





//vanilla js getting a text value
document.querySelector('#product-info-table').innerText

// if element ID exists
let myEle = document.getElementById("myElement");
    if(myEle){
        console.log(myEle)
    }

// Strip variable > Currency to int
var currency = "-$4,400.50";
var number = Number(currency.replace(/[^0-9.-]+/g,""));

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
