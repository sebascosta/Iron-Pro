    const finalizarCompra = async ()=> {

        const carritoPagar = carrito.map(el => ({ 
            title: el.title,
            description: "",
            picture_url: el.images,
            category_id: el.id,
            quantity: 1,
            currency_id: "ARS",
            unit_price: el.precio

        }))


        const resp = await fetch ('https://api.mercadopago.com/checkout/preferences', {
            method: 'POST',
            headers: {
                Authorization: "Bearer TEST-7029705243129413-052415-2a2304e788a67e62fa770bf04604ac39-67363854"
            },
            body: JSON.stringify({
            items = carritoPagar
            
        })
    })

    const data = await resp.json() 
    console.log(data)
    window.open(data.init_point, "_blank")
}

    /*
    curl -X POST \
        'https://api.mercadopago.com/checkout/preferences' \
        -H 'Authorization: Bearer ACCESS_TOKEN_ENV' \ 
        -d '{
    "items": [
        {
        "title": "Dummy Title",
        "description": "Dummy description",
        "picture_url": "http://www.myapp.com/myimage.jpg",
        "category_id": "cat123",
        "quantity": 1,
        "currency_id": "U$",
        "unit_price": 10
        }
    ],
    "payer": {
        "phone": {},
        "identification": {},
        "address": {}
    },
    "payment_methods": {
        "excluded_payment_methods": [
        {}
        ],
        "excluded_payment_types": [
        {}
        ]
    },
    "shipments": {
        "free_methods": [
        {}
        ],
        "receiver_address": {}
    },
    "back_urls": {},
    "differential_pricing": {},
    "tracks": [
        {
        "type": "google_ad"
        }
    ]
    }'*/