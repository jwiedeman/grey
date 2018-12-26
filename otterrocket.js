





//vanilla js getting a text value
document.querySelector('#product-info-table').innerText






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
