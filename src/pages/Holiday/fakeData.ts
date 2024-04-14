// Use this to prevent hitting api quotas
export const optionsData = [
    {
        "price": "71.89",
        "departureDate": "2024-04-19",
        "returnDate": "2024-04-27",
        "destination": {
            "iata": "LPA",
            "country": "Spain",
            "city": "Gran Canaria Island",
            "subdivision": "Canary-Islands"
        },
        "image": {
            "hotLink": "https://pixabay.com/get/gfb8a5b5ea55b0c9e9738c0415de8d533573bf352cd26ac5b32f126afec66e302620ec23e98232a711d598ab035c2c0158b6c71ec9159ead23dece4f303cb288c_640.jpg",
            "redirect": "https://pixabay.com/photos/woman-bikini-beach-rocks-girl-1252185/"
        },
        "origin": {
            "iata": "MAD"
        }
    },
    {
        "price": "86.00",
        "departureDate": "2024-04-19",
        "returnDate": "2024-04-27",
        "destination": {
            "iata": "OPO",
            "country": "Portugal",
            "city": "Porto",
            "subdivision": "Porto"
        },
        "image": {
            "hotLink": "https://pixabay.com/get/g54a11cf7d3e88f213af984a0abb5f9048fbe341798c66e9c5d86b51c3732e094fae1ae1cc5ef6bef57fe76cdd230c8c86b5f986c7d4132aa0f66594bd0cf52e2_640.jpg",
            "redirect": "https://pixabay.com/photos/luis-i-bridge-deck-arch-bridge-porto-8201941/"
        },
        "origin": {
            "iata": "MAD"
        }
    },
    {
        "price": "88.33",
        "departureDate": "2024-04-19",
        "returnDate": "2024-04-20",
        "destination": {
            "iata": "PMI",
            "country": "Spain",
            "city": "Palma De Mallorca",
            "subdivision": "Islas Baleares"
        },
        "image": {
            "hotLink": "https://pixabay.com/get/g1d4d7937045dc276911bf151cd8b1dcaf6eed01584e443c2efe87d06e0954f3385c3d1457fe6e3405105a1aa8a3c8b6638e427e8bd53d8e9e54330689feda4ad_640.jpg",
            "redirect": "https://pixabay.com/photos/historic-center-palma-spain-4316208/"
        },
        "origin": {
            "iata": "MAD"
        }
    }
]

export const detailsData = {
    "flightDetails": [
        {
            "itineraries": [
                {
                    "duration": "PT1H15M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2024-05-05T10:35:00"
                            },
                            "arrival": {
                                "iataCode": "OPO",
                                "at": "2024-05-05T10:50:00"
                            },
                            "carrierCode": "UX",
                            "number": "1145",
                            "aircraft": {
                                "code": "7S8"
                            },
                            "duration": "PT1H15M",
                            "id": "1",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT1H10M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "OPO",
                                "at": "2024-05-17T16:05:00"
                            },
                            "arrival": {
                                "iataCode": "MAD",
                                "terminal": "2",
                                "at": "2024-05-17T18:15:00"
                            },
                            "carrierCode": "UX",
                            "number": "1140",
                            "aircraft": {
                                "code": "7S8"
                            },
                            "duration": "PT1H10M",
                            "id": "2",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": "59.00",
            "last_date": "2024-04-15"
        }
    ],
    "hotelDetails": [
        {
            "hotel": {
                "hotelId": "SIOPO454",
                "name": "Sheraton Porto Hotel and Spa",
                "lat": 41.16105,
                "lon": -8.6404
            },
            "offers": [
                {
                    "checkInDate": "2024-05-05",
                    "checkOutDate": "2024-05-17",
                    "room": {
                        "type": {
                            "category": "DELUXE_ROOM",
                            "beds": 1,
                            "bedType": "QUEEN"
                        },
                        "description": {
                            "text": "Prepay Non-refundable, changes up to 7 days prior to stay\nDeluxe Room, 1 Queen(s), 32sqm/344sqft,\nWireless internet, complimentary, Wired",
                            "lang": "EN"
                        }
                    },
                    "price": {
                        "baseAverage": "181.17",
                        "currency": "EUR"
                    }
                }
            ]
        }
    ],
    "activities": [
        {
            "name": "Multicultural Couscous dinner in Porto",
            "geoCode": {
                "latitude": 41.3157697021647,
                "longitude": -8.7382973056551
            },
            "description": {
                "full": "Join the latest culinary trend of immersive and social dining where local hosts invite you into their homes for a magical meal.\u003Cbr\u003E\u003Cbr\u003EEnjoy an authentic meal with oriental flavors and learn all about making couscous! \n\nYou'll enjoy a couscous dish with 3 types of meat and packed with veg, plus a starter and a dessert. Take your senses on a culinary adventure at this multicultural dinner!"
            },
            "rating": [null],
            "pictures": [
                "https://screen-api.vizeater.co/files/1469872/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1469871/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1469874/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1469875/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1469879/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1206120/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1469883/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1469876/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1205402/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1206119/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1469873/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1469878/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1206121/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1469882/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1469877/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1205403/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1205498/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1205401/-/preview/-/progressive/yes/-/format/jpeg/image.jpg"
            ],
            "price": {
                "amount": "48.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Porto Moonlight Walk and Fado Dinner",
            "geoCode": {
                "latitude": 41.1466893191544,
                "longitude": -8.61097096591862
            },
            "description": {
                "full": "Join the latest culinary trend of immersive and social dining where local hosts invite you into their homes for a magical meal.\u003Cbr\u003E\u003Cbr\u003EListen to traditional Fado over a three-course dinner and then explore moonlit Porto. We'll visit Clérigos tower, Livraria lello, Bolsa palace and Ribeira. This multi-sensory experience is not one to miss!"
            },
            "rating": [null],
            "pictures": [
                "https://screen-api.vizeater.co/files/1346881/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346885/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346886/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346890/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346889/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346887/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346888/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346883/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346882/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346884/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346879/-/preview/-/progressive/yes/-/format/jpeg/image.jpg"
            ],
            "price": {
                "amount": "102.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Vegan Lovers: Dinner & Drinks!",
            "geoCode": {
                "latitude": 41.1736082673096,
                "longitude": -8.54293014251909
            },
            "description": {
                "full": "Join the latest culinary trend of immersive and social dining where local hosts invite you into their homes for a magical meal.\u003Cbr\u003E\u003Cbr\u003EJoin Chandni and Jonathan for an amazing homemade meal. It is vegan but perfect for vegans and non vegans alike. \n\nPick between Indian, Sri Lankan or Portuguese food! ...and if you like what you eat, they'll share the recipe with you! Their dishes are creative and delicious and can be accompanied by beer, cocktails, wine or sangria! "
            },
            "rating": [null],
            "pictures": [
                "https://screen-api.vizeater.co/files/1457636/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1457667/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1457671/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1457673/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1457638/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1457678/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1457637/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1457679/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1457677/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1457664/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1457676/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1457672/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1457680/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1457675/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1457665/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1457666/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1457661/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1457670/-/preview/-/progressive/yes/-/format/jpeg/image.jpg"
            ],
            "price": {
                "amount": "30.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "The Art of Eating and Making Friends",
            "geoCode": {
                "latitude": 41.1575935404256,
                "longitude": -8.64914817467109
            },
            "description": {
                "full": "Join the latest culinary trend of immersive and social dining where local hosts invite you into their homes for a magical meal.\u003Cbr\u003E\u003Cbr\u003EJoin Joao and a friend of his for a delicious Portuguese dinner with a background of jazz and bossa nova. \n\nYour evening will begin with a glass of Portuguese sparkling wine and a taste of local cheeses and seasonal fruits. \nMake sure not to fill up before a delicious dinner filled with interesting conversation, laughter and everyone exchanging life experiences. You'll finish your meal with a great port wine and a traditional Portuguese dessert.\n"
            },
            "rating": [null],
            "pictures": [
                "https://screen-api.vizeater.co/files/1464075/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1465354/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1464067/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1464078/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1464080/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1464069/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1464068/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1464061/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1464066/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1464064/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1464083/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1464077/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1464065/-/preview/-/progressive/yes/-/format/jpeg/image.jpg"
            ],
            "price": {
                "amount": "54.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Watch the Porto sunset and drink wine overlooking the Luís I Bridge",
            "geoCode": {
                "latitude": 41.1386755445729,
                "longitude": -8.60807675451301
            },
            "description": {
                "full": "There's no better way to start the night than with an aperitif whilst watching the sunset over Porto. \n\nOverlooking the city and the D. Luís I Bridge in an exclusive venue, raise your glass, make a toast and take a sip of the best Portuguese wines! \n\nIn a gorgeous evening setting you'll be able to meet your host while nibbling on traditional appetizers and chatting to new people. Then, head off into the Porto nightlife...."
            },
            "rating": [null],
            "pictures": [
                "https://screen-api.vizeater.co/files/1478501/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478500/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478499/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478497/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478498/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478502/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478496/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478495/-/preview/-/progressive/yes/-/format/jpeg/image.jpg"
            ],
            "price": {
                "amount": "48.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "A typically Portuguese dinner with a live Fado concert",
            "geoCode": {
                "latitude": 41.1533524377886,
                "longitude": -8.67629592307178
            },
            "description": {
                "full": "Join the latest culinary trend of immersive and social dining where local hosts invite you into their homes for a magical meal.\u003Cbr\u003E\u003Cbr\u003EJoao's Fado-dinner experience is ideal for meeting new, local people in a very special place: an old house at the mouth of the Douro River in Porto. Come for a typical Portuguese dinner with appetizers, main course and dessert, as well as a lot of wine! Most importantly, there will be a live Fado concert with 3 acts.\n\nIt will be very special and unique to share the experience with friendly locals who sing along to all the songs together. This is certainly a far-from-touristic experience. It is the pure sense of Fado in Portugal. Please come along!"
            },
            "rating": [null],
            "pictures": [
                "https://screen-api.vizeater.co/files/1478518/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478523/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478528/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1496727/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478526/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478529/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478527/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478519/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478520/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478524/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478521/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478522/-/preview/-/progressive/yes/-/format/jpeg/image.jpg"
            ],
            "price": {
                "amount": "90.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Learn How To Make Pastel De Nata In Beautiful Porto",
            "geoCode": {
                "latitude": 41.1650678640882,
                "longitude": -8.54607963048326
            },
            "description": {
                "full": "What better way to explore a city than by discovering its cuisine first hand? Put on a chef's hat for the day and learn how to make classic dishes, local specialties and impressive plates with our expert hosts. Sign up for one of our fun, immersive cooking classes and discover a new hidden talent!\u003Cbr\u003E\u003Cbr\u003EThe locals will tell you that Pastel de Nata is one of the best things you could eat in Portugal - and they aren't wrong! Spend a morning learning how to make these delicious little pastries with Joana.\n\nShe'll make you feel at home, guiding you through a masterclass in her central sunny apartment in Porto. Joana has lots of stories about life in Porto to share and, as a tourism graduate, she'll give you some insider tips for places to visit in the city! "
            },
            "rating": [null],
            "pictures": [
                "https://screen-api.vizeater.co/files/1170648/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1170638/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1170643/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1170637/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1170639/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1170641/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1170647/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1170640/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1170644/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1170645/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1489326/-/preview/-/progressive/yes/-/format/jpeg/image.jpg"
            ],
            "price": {
                "amount": "31.2",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Wine & Food Pairing in 3 Porto Locations",
            "geoCode": {
                "latitude": 41.1505064510807,
                "longitude": -8.61338891014242
            },
            "description": {
                "full": "Discover a different side to a city on an immersive food walk and market tours. Our local hosts will show you all their favorite places to eat, drink and have fun!\u003Cbr\u003E\u003Cbr\u003EThis tour is perfect for wine enthusiasts who want to discover the unique wines of Portugal paired with great food. \n\nYou will visit 3 different wine-loving locations and at each place your wine will be paired with a traditional snack. What are you waiting for?"
            },
            "rating": [null],
            "pictures": [
                "https://screen-api.vizeater.co/files/1346901/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346896/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347623/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347619/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347622/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346898/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347618/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346903/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346904/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346894/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347620/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347617/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346897/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347621/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346902/-/preview/-/progressive/yes/-/format/jpeg/image.jpg"
            ],
            "price": {
                "amount": "85.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Bake Portuguese Christmas Pastries",
            "geoCode": {
                "latitude": 41.165973862234,
                "longitude": -8.5464356849439
            },
            "description": {
                "full": "What better way to explore a city than by discovering its cuisine first hand? Put on a chef's hat for the day and learn how to make classic dishes, local specialties and impressive plates with our expert hosts. Sign up for one of our fun, immersive cooking classes and discover a new hidden talent!\u003Cbr\u003E\u003Cbr\u003EChristmas is approaching and there's no better way to prepare than to bake with Joana! Her cosy and festive apartment is the perfect place to escape from the cold. \n\nWith Joana's guidance, you will make her family-favourite recipes from scratch: Rabanadas (portuguese french toast) with Port Wine Syrup, Leite Creme (Portuguese Crème Brúleé) and Christmas Pastries. You'll also learn the history behind these sweet treats and how central they are to her family's Christmas table. \n\nAt the end of the class, once everything is ready, you'll sit down and dig in! As you sip on hot chocolate and enjoy your Christmas delights, you can share your Christmas traditions with others. \n\nCheck out her Instagram page for a sneak peek @portocookingclass and please get in touch if you have any allergies."
            },
            "rating": [null],
            "pictures": [
                "https://screen-api.vizeater.co/files/1449493/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449499/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449489/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449495/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449503/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449501/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449502/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449494/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449496/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449492/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449498/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449500/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449491/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449497/-/preview/-/progressive/yes/-/format/jpeg/image.jpg"
            ],
            "price": {
                "amount": "28.8",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Authentic Porto Food Tour & Market Experience",
            "geoCode": {
                "latitude": 41.1493140987691,
                "longitude": -8.61252666599827
            },
            "description": {
                "full": "Discover a different side to a city on an immersive food walk and market tours. Our local hosts will show you all their favorite places to eat, drink and have fun!\u003Cbr\u003E\u003Cbr\u003EBe a local for the day, experience the rhythm of the city and breathe in Porto's morning air...\n\nYou'll start your day with an authentic Portuguese breakfast before heading to the market where you will try different delicacies (eg. ham, sardines, cheese). Your tour guide will take you round, teaching you about the different foods as you go. You'll then be taken to a local restaurant for lunch. All food and drinks are included.\n\nWhen in Porto, Benjamin's tours are not to be missed!\n\n"
            },
            "rating": [null],
            "pictures": [
                "https://screen-api.vizeater.co/files/1224650/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1224645/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1332148/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1332155/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1332161/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1332157/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1224651/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1332152/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1224648/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1224642/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1332146/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1332153/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1224654/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1224646/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1332147/-/preview/-/progressive/yes/-/format/jpeg/image.jpg"
            ],
            "price": {
                "amount": "60.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Sunday lunch with friends and exotic food from the Amazon",
            "geoCode": {
                "latitude": 41.1577293543629,
                "longitude": -8.64814497161377
            },
            "description": {
                "full": "Join Joao for an unforgettable Sunday lunch! Listen to good music, meet lively people and try the famous Amazonian dish, Maniçoba. It's a delicacy made with ingredients from Africa, Brazil and Portugal and takes 7 days of preparation. As your host is a native Brazilian he can explain exactly how to prepare it. \n\nEnjoy this special dish in Joao's plant-filled apartment with a fantastic view of Porto. Get ready to kick off your shoes, dig in and enjoy your Sunday with new friends!"
            },
            "rating": [null],
            "pictures": [
                "https://screen-api.vizeater.co/files/1478158/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478157/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1487010/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478156/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478153/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1487009/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1487011/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1487008/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478155/-/preview/-/progressive/yes/-/format/jpeg/image.jpg"
            ],
            "price": {
                "amount": "51.6",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Late-afternoon Wine Tasting and Food Pairing in Porto",
            "geoCode": {
                "latitude": 41.1488983243908,
                "longitude": -8.61386924490488
            },
            "description": {
                "full": "Discover a different side to a city on an immersive food walk and market tours. Our local hosts will show you all their favorite places to eat, drink and have fun!\u003Cbr\u003E\u003Cbr\u003EThis afternoon tour is perfect for wine enthusiasts who want to discover the unique wines of Portugal paired with great food, while visiting Porto's best wine bars and admiring the sights. \n\nYou will visit 3 different wine-loving locations and at each place your wine will be paired with a traditional snack. What are you waiting for?\n\n"
            },
            "rating": [null],
            "pictures": [
                "https://screen-api.vizeater.co/files/1347741/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347742/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347737/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347735/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347746/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347743/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347744/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347734/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347739/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347736/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347745/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347733/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347740/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347747/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347738/-/preview/-/progressive/yes/-/format/jpeg/image.jpg"
            ],
            "price": {
                "amount": "85.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Secret, Traditional Flavors of Porto: Afternoon Food Walk",
            "geoCode": {
                "latitude": 41.1467021570805,
                "longitude": -8.60294554268129
            },
            "description": {
                "full": "Discover a different side to a city on an immersive food walk and market tours. Our local hosts will show you all their favorite places to eat, drink and have fun!\u003Cbr\u003E\u003Cbr\u003EExplore the best, oldest, and most traditional food spots of Porto while walking past the city's popular sights.\n\nYou'll try 16 different traditional Petiscos (tapas) and 3 different types of wine and local spirits. Expect to visit at least five different locations, such as a bakery, an antique coffee shop, Sao Bento Station to see the largest tile exhibit of Porto, Mercado do Bolhão food market...\n\nThis food tour encompasses the true identity of Porto as you'll be passing by iconic locations. Want to see the Clérigos Tower, Livraria Lello or Liberdade Square? Now is your chance to visit with a tour guide, all while eating the best of what the city has to offer!\n"
            },
            "rating": [null],
            "pictures": [
                "https://screen-api.vizeater.co/files/1347864/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347870/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347868/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347869/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347862/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347867/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347858/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347863/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347857/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347872/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347856/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347866/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347855/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347859/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347865/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347861/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347860/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1347871/-/preview/-/progressive/yes/-/format/jpeg/image.jpg"
            ],
            "price": {
                "amount": "85.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Porto Petiscos Crawl & Wine Tour",
            "geoCode": {
                "latitude": 41.1488859018083,
                "longitude": -8.61575345693899
            },
            "description": {
                "full": "Discover a different side to a city on an immersive food walk and market tours. Our local hosts will show you all their favorite places to eat, drink and have fun!\u003Cbr\u003E\u003Cbr\u003EMore than a tour, this is the perfect introduction to Portuguese gastronomy, history and local culture. You'll discover intimate and traditional places away from the most touristic areas of Porto, that you probably wouldn’t go to on your own! \n\nAll food and drinks are included and the fun is guaranteed! Come along to explore a Porto you might not otherwise. A variety of 'petiscos' awaits...."
            },
            "rating": [null],
            "pictures": [
                "https://screen-api.vizeater.co/files/1388741/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388737/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388738/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388734/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388748/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388736/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388735/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388750/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388733/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388732/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388739/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388747/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388744/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388746/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388743/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388745/-/preview/-/progressive/yes/-/format/jpeg/image.jpg"
            ],
            "price": {
                "amount": "67.2",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Sweet Treats Are Made Like This: Portuguese Dessert Workshop",
            "geoCode": {
                "latitude": 41.1643834264517,
                "longitude": -8.54533183080802
            },
            "description": {
                "full": "What better way to explore a city than by discovering its cuisine first hand? Put on a chef's hat for the day and learn how to make classic dishes, local specialties and impressive plates with our expert hosts. Sign up for one of our fun, immersive cooking classes and discover a new hidden talent!\u003Cbr\u003E\u003Cbr\u003EJoana will teach you the most beautiful and traditional way of making Portuguese desserts that she learned from her grandmothers. \n\nThe cooking class takes place in a sunny room of her apartment in central Porto. You will learn how to bake three traditional Portuguese sweet treats and, whilst cooking, you'll learn about the history behind each one. \n\nJoana is a passionate local and has lots of stories to share!"
            },
            "rating": [null],
            "pictures": [
                "https://screen-api.vizeater.co/files/1325655/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1325653/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1325656/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1325649/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1325652/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1325646/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1325651/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1325658/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1325648/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1294731/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1325657/-/preview/-/progressive/yes/-/format/jpeg/image.jpg"
            ],
            "price": {
                "amount": "36.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Craft Beer, Vins Portugais & Secrets du Porto",
            "geoCode": {
                "latitude": 41.1478924802732,
                "longitude": -8.61735271322192
            },
            "description": {
                "full": "Discover a different side to a city on an immersive food walk and market tours. Our local hosts will show you all their favorite places to eat, drink and have fun!\u003Cbr\u003E\u003Cbr\u003EThis evening tour is the best way to explore the local life of Porto. You'll get 8 different drinks and each will be paired with a light petiscos (snack). \n\nYour tour guide will tell you about each drink, whether craft beer or rare Portuguese wine. They all come from from independent producers and are made with local, high quality ingredients.\n\nWe hope you're thirsty because you're in for a treat!\n"
            },
            "rating": [null],
            "pictures": [
                "https://screen-api.vizeater.co/files/1388766/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388769/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388770/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388763/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388764/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388771/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388765/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388760/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388762/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388761/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388759/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388758/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388767/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1388768/-/preview/-/progressive/yes/-/format/jpeg/image.jpg"
            ],
            "price": {
                "amount": "67.2",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "The Only Fish Market Tasting Tour: Sea to Table!",
            "geoCode": {
                "latitude": 41.1774252016099,
                "longitude": -8.68411926473207
            },
            "description": {
                "full": "Discover a different side to a city on an immersive food walk and market tours. Our local hosts will show you all their favorite places to eat, drink and have fun!\u003Cbr\u003E\u003Cbr\u003EEducate your taste buds, Eat better than a Local!\n\nWe will visit a 1920's canned fish factory factory as well as the Docks of the city, meet local fisherman and understand where most of the fish and seafood in porto comes from ; we will also go to the Fish Market pick out Fresh fish & seafood and bring them to be cooked at a local restaurante. Hence understanding the whole process from sea to table.\n\nBy joining me, you support local family-owned restaurants of Porto, the best city in the World!\n\nAll tours are designed to the eating habits of the guests, even vegetarians, every tour is different, It encompasses the identity of Porto and fosters local values, by the end of the tour you can consider yourself a true Porto citizen.\n\nWe will visit the Porto Docks, Fish Market tour, local wine, fresh handpicked seafood and fish. Final coffee & desert at a local artisanal bakery.\n\nI offer my experience at 10:00 from Monday - Saturday. If the date/time you need isn't available, contact me !\n\n"
            },
            "rating": [null],
            "pictures": [
                "https://screen-api.vizeater.co/files/1500410/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1500409/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1500398/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1500416/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1500402/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1500414/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1500412/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1500399/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1500396/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1500403/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1500408/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1500417/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1500401/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1500411/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1500413/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1500415/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1500394/-/preview/-/progressive/yes/-/format/jpeg/image.jpg"
            ],
            "price": {
                "amount": "118.8",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Porto Ribeira Free Tour (Available in Spanish)",
            "geoCode": {
                "latitude": 41.147132,
                "longitude": -8.615617
            },
            "description": {
                "short": "\u003Cp\u003EIn this free tour we will discover some of the wonders of Porto in \u003Cstrong\u003Ethe Ribeira area\u003C/strong\u003E , the \u003Cstrong\u003Emost picturesque\u003C/strong\u003E and \u003Cstrong\u003Eauthentic\u003C/strong\u003E part of the city that has some of the \u003Cstrong\u003Emost fascinating stories of Portugal\u003C/strong\u003E : the first Portuguese army, the relationship of the city of Porto with the Atlantic and its expeditions. And, of course, we will talk about its \u003Cstrong\u003Ecellars\u003C/strong\u003E where the famous Port wine is made, letting us be seduced by the impressive views of \u003Cstrong\u003Ethe Douro River\u003C/strong\u003E . We will meet at Plaza Gomes Teixeira (next to the fascinating Lello Bookstore) to enjoy an essential tour with which we will admire Porto and its walls by the hand of professional guides and adopted Portuenses who, with their sympathy, extensive experience and knowledge They will show us \u003Cstrong\u003Ethe most beautiful part of such a wonderful city in a pleasant way\u003C/strong\u003E .\u003Cbr\u003E\u003Cbr\u003E \u003Cstrong\u003EItinerary:\u003C/strong\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E \u003Cstrong\u003ERoman wall and Fernandina wall\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EStock Exchange Palace\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EMirador de las Virtues\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EOld English Club\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EFerreira Borges Market\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EChurch of San Francisco\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003ERibeira and Barredo neighborhoods\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003ELuis I Bridge and its magnificent views\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003Eand much more\u003C/strong\u003E\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Cbr\u003E * On the tour you do not enter any monument;\u003Cbr\u003E **Groups of more than 8 people are not allowed on the free tour. In case of being a larger group, they must contact OptimusTours in advance to guarantee their place;\u003Cbr\u003E ***Due to the route and the stairs, the tour is not recommended for people with reduced mobility and baby strollers.\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E",
                "full": "\u003Cp\u003EIn this free tour we will discover some of the wonders of Porto in \u003Cstrong\u003Ethe Ribeira area\u003C/strong\u003E , the \u003Cstrong\u003Emost picturesque\u003C/strong\u003E and \u003Cstrong\u003Eauthentic\u003C/strong\u003E part of the city that has some of the \u003Cstrong\u003Emost fascinating stories of Portugal\u003C/strong\u003E : the first Portuguese army, the relationship of the city of Porto with the Atlantic and its expeditions. And, of course, we will talk about its \u003Cstrong\u003Ecellars\u003C/strong\u003E where the famous Port wine is made, letting us be seduced by the impressive views of \u003Cstrong\u003Ethe Douro River\u003C/strong\u003E . We will meet at Plaza Gomes Teixeira (next to the fascinating Lello Bookstore) to enjoy an essential tour with which we will admire Porto and its walls by the hand of professional guides and adopted Portuenses who, with their sympathy, extensive experience and knowledge They will show us \u003Cstrong\u003Ethe most beautiful part of such a wonderful city in a pleasant way\u003C/strong\u003E .\u003Cbr\u003E\u003Cbr\u003E \u003Cstrong\u003EItinerary:\u003C/strong\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E \u003Cstrong\u003ERoman wall and Fernandina wall\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EStock Exchange Palace\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EMirador de las Virtues\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EOld English Club\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EFerreira Borges Market\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EChurch of San Francisco\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003ERibeira and Barredo neighborhoods\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003ELuis I Bridge and its magnificent views\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003Eand much more\u003C/strong\u003E\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Cbr\u003E * On the tour you do not enter any monument;\u003Cbr\u003E **Groups of more than 8 people are not allowed on the free tour. In case of being a larger group, they must contact OptimusTours in advance to guarantee their place;\u003Cbr\u003E ***Due to the route and the stairs, the tour is not recommended for people with reduced mobility and baby strollers.\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [
                "4.5"
            ],
            "pictures": [
                "https://media.guruwalk.com/10b96yosfgddz5aq4ln3rdecdfq2",
                "https://media.guruwalk.com/ivxdxf9kxmrvtxabsxdf6or5ao45",
                "https://media.guruwalk.com/bhl2w69sexbun9on52pzihdkytrh",
                "https://media.guruwalk.com/s9ojoa9kszc38s48aku0pokg86t5",
                "https://media.guruwalk.com/23n3klhdu2aiqtikl35m80x4wrku"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "Taste a Portuguese Brunch!",
            "geoCode": {
                "latitude": 41.1646983075427,
                "longitude": -8.54440994469922
            },
            "description": {
                "full": "There's no doubt you'll leave Joana's home with a smile on your face, a full stomach and many new facts about Portugal.\n\nYour host, Joana, will welcome you with a classic Porto cocktail before you take a seat at her dining table for a Portuguese-style brunch. This is the perfect opportunity to make new friends, hear about her upbringing in Porto and learn about local traditions. Joana will also introduce you to Portuguese music and play some of her favourite songs. \n\nThis fully immersive experience is the best way to start your day!\n"
            },
            "rating": [null],
            "pictures": [
                "https://screen-api.vizeater.co/files/1449510/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449520/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449513/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449516/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449511/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449514/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449517/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449518/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449515/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449512/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449505/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1449519/-/preview/-/progressive/yes/-/format/jpeg/image.jpg"
            ],
            "price": {
                "amount": "36.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "THE HARRY POTTER IN PORTO FREE TOUR (Available in English, Spanish)",
            "geoCode": {
                "latitude": 41.147238,
                "longitude": -8.60658
            },
            "description": {
                "short": "\u003Cp\u003EThe most magical Porto Free Tour starts where the author herself admits to have written chapters of the first book of the Harry Potter series, the Café Majestic. Joanne Rowling lived a short but very intense period of her life in Porto and when she arrived to be a teacher she could never believe she would depart with a daughter and a manuscript that would change her life forever. Her life and the life of millions of readers. Throughout our Harry Potter tour, we will discover many places that were an inspiration to the author. But more than that, we will try and see the city through J.K.Rowling’s eyes.\u003C/p\u003E\u003Cp\u003EDid you know Joanne Rowling got married in Porto? She fell in love with this enchanted city and the charms of a local journalist and some of the book’s most famous references came from the streets of Porto. We will wander around the city and discover places like the beautiful São Bento train station and the inspiring bookshop Lello, two of Porto’s most distinguished places. We will also get the opportunity to know more about the city and the country’s symbols like the ever present Dragon, the universities’ black capes or the name of Portugal’s infamous dictator.&nbsp;\u003C/p\u003E\u003Cp\u003EThere’s much more to discover in this one of a kind tour where even the less familiar with the sorcerer’s universe might be enchanted by the stories and anecdotes of our guides. Open your heart to magic and let the spell of Porto enter your life!&nbsp;\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E",
                "full": "\u003Cp\u003EThe most magical Porto Free Tour starts where the author herself admits to have written chapters of the first book of the Harry Potter series, the Café Majestic. Joanne Rowling lived a short but very intense period of her life in Porto and when she arrived to be a teacher she could never believe she would depart with a daughter and a manuscript that would change her life forever. Her life and the life of millions of readers. Throughout our Harry Potter tour, we will discover many places that were an inspiration to the author. But more than that, we will try and see the city through J.K.Rowling’s eyes.\u003C/p\u003E\u003Cp\u003EDid you know Joanne Rowling got married in Porto? She fell in love with this enchanted city and the charms of a local journalist and some of the book’s most famous references came from the streets of Porto. We will wander around the city and discover places like the beautiful São Bento train station and the inspiring bookshop Lello, two of Porto’s most distinguished places. We will also get the opportunity to know more about the city and the country’s symbols like the ever present Dragon, the universities’ black capes or the name of Portugal’s infamous dictator.&nbsp;\u003C/p\u003E\u003Cp\u003EThere’s much more to discover in this one of a kind tour where even the less familiar with the sorcerer’s universe might be enchanted by the stories and anecdotes of our guides. Open your heart to magic and let the spell of Porto enter your life!&nbsp;\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [
                "4.2"
            ],
            "pictures": [
                "https://media.guruwalk.com/8tdfedfukrgsv8k878s1ivz0u9km",
                "https://media.guruwalk.com/nlgqa4kfj8zeiafuuahabpo0mvjm",
                "https://media.guruwalk.com/qd6n7tdswpf7x4mfxzfx9131f0fi",
                "https://media.guruwalk.com/qz8ap8izyxhcr2ac8b8ivot7brzc"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "PORTO SUNSET FREETOUR (Available in English, Spanish)",
            "geoCode": {
                "latitude": 41.149512,
                "longitude": -8.610778
            },
            "description": {
                "short": "\u003Cp\u003EThis Porto Free Walking Tour was created to present you the essence and culture of this unique city. This Free Tour is a kaleidoscope of stories, people and places. We will visit famous cafés like A Brasileira and Majestic, historical theatres like Rivoli or Sá da Bandeira and iconic churches like Capela das Almas and Igreja de Santo Ildefonso. We will save for the end an unforgettable experience: the crossing of the bridge to look at Porto on the other side of the Douro River: a lively and vibrant postcard of this incomparable city! Book your place now. Join us and learn the meaning of the word Tripeiro.\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E",
                "full": "\u003Cp\u003EThis Porto Free Walking Tour was created to present you the essence and culture of this unique city. This Free Tour is a kaleidoscope of stories, people and places. We will visit famous cafés like A Brasileira and Majestic, historical theatres like Rivoli or Sá da Bandeira and iconic churches like Capela das Almas and Igreja de Santo Ildefonso. We will save for the end an unforgettable experience: the crossing of the bridge to look at Porto on the other side of the Douro River: a lively and vibrant postcard of this incomparable city! Book your place now. Join us and learn the meaning of the word Tripeiro.\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [
                "4.5"
            ],
            "pictures": [
                "https://media.guruwalk.com/0lhco6ei55sepnbi24335xqp7mbx",
                "https://media.guruwalk.com/46tsso9qy5rpcvaaa4ilupce0jzr",
                "https://media.guruwalk.com/043onopchk8v2vkjdhtufey8ndn9",
                "https://media.guruwalk.com/r0ov93tkv4q7hb5quw7i0ns6efbt",
                "https://media.guruwalk.com/26i53s7umk7uyual0f5zgdaffd06"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "LEGENDS AND MYSTERIES OF PORTO FREE TOUR (Available in Spanish)",
            "geoCode": {
                "latitude": 41.142571,
                "longitude": -8.611998
            },
            "description": {
                "short": "\u003Cp\u003EOur Legends and Mysteries of Porto Free Tour was created because this city is brimming with ancient legends, strange crimes and haunting mysteries. On this guided walking tour we will go through the historical part of Porto until we reach the impressive gardens of the Crystal Palace . We have a handful of stories to tell: from the legends of Miragaia to the hanging tree, from the ghost of São Bento station to the crime of Rua das Flores, from the presence of the dragon throughout the city to the Portuguese Robyn dos Forests, there are incredible stories in every corner of this city. Join our Free Tour of the Legends and Mysteries of Porto and discover the mysticism of Porto.\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E",
                "full": "\u003Cp\u003EOur Legends and Mysteries of Porto Free Tour was created because this city is brimming with ancient legends, strange crimes and haunting mysteries. On this guided walking tour we will go through the historical part of Porto until we reach the impressive gardens of the Crystal Palace . We have a handful of stories to tell: from the legends of Miragaia to the hanging tree, from the ghost of São Bento station to the crime of Rua das Flores, from the presence of the dragon throughout the city to the Portuguese Robyn dos Forests, there are incredible stories in every corner of this city. Join our Free Tour of the Legends and Mysteries of Porto and discover the mysticism of Porto.\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [
                "4.5"
            ],
            "pictures": [
                "https://media.guruwalk.com/nwxa0beyybi1x7b7hhibnp9ppmki",
                "https://media.guruwalk.com/r543z5akin0s8tviptwu6vs13vnh"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "A Porto Cultural Walking Tour - Untold Story we (try) to Keep! (Available in Catalan, English, Spanish)",
            "geoCode": {
                "latitude": 41.14646,
                "longitude": -8.61138
            },
            "description": {
                "full": "\u003Cp\u003ECome with us and discover all the SECRETS you should know about Porto. The greatest secrets are always hidden in the most unlikely places, others are in the places most visited buy may go unnoticed! Shhhh… We will reveal them all! : )&nbsp;\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E| Find out the HIDDEN GEMS of Porto! The ancient town which reaches back to pre-Roman times! The secrets and mysteries of the city (is São Bento train station still haunted by the last guest? And still many mysteries to be discovered!&nbsp;\u003Cbr\u003E\u003Cbr\u003ELearn about the best places for cultural sights, local favourites, where to eat and drink (where we locals go, we will only give you the authentic restaurants! Discover the hotspots of the city! The Medieval architecture, it's defining Dom Luis I Bridge, Art Nouveau cafes. Porto is a unique rich city that will take your breath away! SO, what are you waiting for??&nbsp;\u003Cbr\u003E\u003Cbr\u003EDiscover Porto with us! You simple won´t regret : )&nbsp;\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E| A HI-5 for Charity! What does this mean? Our 5% Promise means that 5% of the tips given on all our tours will be donated monthly, by the guide to a local charity. We choose the \"Acreditar\"- Association of Parents and Friends of Children with Cancer, that in our opinion is doing a great work to help those in greatest need! That is why we needed to be more proactive and take our commitment little further to create a positive impact in our world!&nbsp;\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E[ A SPECIAL REMINDER]:&nbsp;\u003Cbr\u003E\u003Cbr\u003EIf you wish to book more than 5 people:\u003Cbr\u003E\u003Cbr\u003E- Please submit two reservations ;)&nbsp;\u003Cbr\u003E\u003Cbr\u003E# Take care&nbsp;\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://d1i21eq0w7p1n3.cloudfront.net/skeodxry6qjsumahxtmreok2p65d",
                "https://d1i21eq0w7p1n3.cloudfront.net/2o0xecnwjdjbrpjko1e4dt2743c4",
                "https://d1i21eq0w7p1n3.cloudfront.net/8utjz35idh00elqmnw53wpjst9k2",
                "https://d1i21eq0w7p1n3.cloudfront.net/v99rx3l15tb0z9gjnbzo4pdthdwg",
                "https://d1i21eq0w7p1n3.cloudfront.net/1znsg7vns8bjwhn6mbyyccc89dyc"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "Secret, Traditional Flavors of Porto: Morning Food Walk",
            "geoCode": {
                "latitude": 41.1462503217413,
                "longitude": -8.6107726696219
            },
            "description": {
                "full": "Discover a different side to a city on an immersive food walk and market tours. Our local hosts will show you all their favorite places to eat, drink and have fun!\u003Cbr\u003E\u003Cbr\u003EExplore the best, oldest, and most traditional food spots of Porto while walking through the memorable sights of the city. \n\nYou'll try 16 different traditional Petiscos (tapas) and 3 different types of wine and local spirits. Expect to visit at least five different locations, such as a bakery, an antique coffee shop, Sao Bento Station to see the largest tile exhibit of Porto, Mercado do Bolhão food market...\n\nThis food tour encompasses the true identity of Porto, as you'll be passing by iconic locations such as the Clérigos Tower, Livraria Lello, and Liberdade Square, all while eating the best of what the city has to offer. \n"
            },
            "rating": [null],
            "pictures": [
                "https://screen-api.vizeater.co/files/1346843/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346847/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346838/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346842/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346848/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346845/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346851/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346837/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346854/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346853/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346855/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346846/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346850/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346840/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346839/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346849/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346844/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1346836/-/preview/-/progressive/yes/-/format/jpeg/image.jpg"
            ],
            "price": {
                "amount": "87.5",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Meet friends on a Saturday lunch in front of the Douro River ",
            "geoCode": {
                "latitude": 41.1472630281275,
                "longitude": -8.64847049625022
            },
            "description": {
                "full": "Make new friends as you dine next to the Douro River in the sun. This traditional 3-course Portuguese lunch will give you the energy you need for the rest of your day!\n\nSitting on a typical Portuguese tavern's esplanade, you'll have the most picturesque view of the river. Good food, good view - what more could you want?"
            },
            "rating": [null],
            "pictures": [
                "https://screen-api.vizeater.co/files/1478182/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478184/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478174/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478175/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478176/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478179/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478185/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478183/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478178/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478177/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478181/-/preview/-/progressive/yes/-/format/jpeg/image.jpg",
                "https://screen-api.vizeater.co/files/1478180/-/preview/-/progressive/yes/-/format/jpeg/image.jpg"
            ],
            "price": {
                "amount": "27.6",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Mysterious Porto Fair Tour: Night Tour (Available in Spanish)",
            "geoCode": {
                "latitude": 41.144998,
                "longitude": -8.615933
            },
            "description": {
                "full": "\u003Cp\u003E\u003Cstrong\u003EPORTO MISTERIOSA\u003C/strong\u003E is a \u003Cstrong\u003Enight route,\u003C/strong\u003E enigmatic and illuminated by Porto.\u003Cbr\u003E A journey through the darkest entrails of its history: the inquisition, the Estado Novo; the jails of the city and its most famous inmates; incorrupt bodies, the river and its mysteries or the shadows of its most emblematic monuments.\u003Cbr\u003E\u003Cbr\u003E What will you see on this tour?\u003Cbr\u003E It's not so much what you see but what we'll tell you... which we hope will make your hair stand on end! Also keep in mind that \u003Cstrong\u003Eyou will see everything in a different light... that is, at night!\u003C/strong\u003E\u003Cbr\u003E\u003Cbr\u003E \u003Cstrong\u003EThese are some of our stops:\u003Cbr\u003E - COURTHOUSE\u003Cbr\u003E - CADEIA DE RELAÇAO (OLD PORTO PRISON)\u003Cbr\u003E - SÃO JOÃO THEATER\u003Cbr\u003E - SUN ROAD\u003Cbr\u003E - LOUIS I BRIDGE\u003C/strong\u003E\u003Cbr\u003E And many more!\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [
                "4.4"
            ],
            "pictures": [
                "https://d1i21eq0w7p1n3.cloudfront.net/j0b1bm44kvtre6yzrh1k3r555krz",
                "https://d1i21eq0w7p1n3.cloudfront.net/pfclb43dq2qx1kw5ag1k1tqlhicb",
                "https://d1i21eq0w7p1n3.cloudfront.net/5d2hyf5kokit1r99x52tilrm5o70",
                "https://d1i21eq0w7p1n3.cloudfront.net/o8gyxv1g4ewubrwdg66oo0gda8yk"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "Free Port Wine Tour (Available in English)",
            "geoCode": {
                "latitude": 41.137781,
                "longitude": -8.612914
            },
            "description": {
                "short": "\u003Cp\u003E\u003Cstrong\u003EFREE PORT WINE TOUR\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003ELearn the ins and outs about our beloved \u003C/strong\u003Enational\u003Cstrong\u003E treasure\u003C/strong\u003E we call \u003Cstrong\u003EPort Wine!\u003C/strong\u003E&nbsp;\u003C/p\u003E\u003Cp\u003EDiscover \u003Cstrong\u003Ewhat makes port wine different from other wine\u003C/strong\u003Es, how to properly experience it, \u003Cstrong\u003Ehow we make i\u003C/strong\u003Et, and why it is so special. \u003Cbr\u003EEmbark on this two-hour journey where\u003Cstrong\u003E you will get to experience the 3 main families of port (3 tastings) visiting 3 port houses\u003C/strong\u003E accompanied by an experienced and knowledgeable guide.\u003C/p\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EIncluded:&nbsp;\u003C/strong\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E3 port wine tastings\u003C/li\u003E\u003Cli\u003EExpert guide\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E",
                "full": "\u003Cp\u003E\u003Cstrong\u003EFREE PORT WINE TOUR\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003ELearn the ins and outs about our beloved \u003C/strong\u003Enational\u003Cstrong\u003E treasure\u003C/strong\u003E we call \u003Cstrong\u003EPort Wine!\u003C/strong\u003E&nbsp;\u003C/p\u003E\u003Cp\u003EDiscover \u003Cstrong\u003Ewhat makes port wine different from other wine\u003C/strong\u003Es, how to properly experience it, \u003Cstrong\u003Ehow we make i\u003C/strong\u003Et, and why it is so special. \u003Cbr\u003EEmbark on this two-hour journey where\u003Cstrong\u003E you will get to experience the 3 main families of port (3 tastings) visiting 3 port houses\u003C/strong\u003E accompanied by an experienced and knowledgeable guide.\u003C/p\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003E\u003Cstrong\u003EIncluded:&nbsp;\u003C/strong\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E3 port wine tastings\u003C/li\u003E\u003Cli\u003EExpert guide\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://media.guruwalk.com/ecjwmk19gany0hv6j8l1fmb4gf17",
                "https://media.guruwalk.com/oremwde1vyt3yujy2vu9mwb9w98y"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "Surfing lessons in Matosinhos near Porto",
            "geoCode": {
                "latitude": 41.175094,
                "longitude": -8.688138
            },
            "description": {
                "short": "Take a break from Porto and head on to Matosinhos, one of the best surfing beaches in Portugal. There, Linha de Onda will teach you to ride the tide!",
                "full": "\u003Cp\u003ETake a break from walking around beautiful Porto and head on to Matosinhos, one of the best surfing beaches in Portugal. There, Linha de Onda will teach you to ride the tide!\u003C/p\u003E\n\u003Cp\u003ELinha de Onda doesn't only offer you the chance to learn how to surf in one of Portugal's best surfing beaches,&nbsp;they create authentic surfing experiences! Each every lesson is designed for people like you who are looking to learn how to ride waves!\u003C/p\u003E\n\u003Cp\u003ERiding the tide on a&nbsp;surfboard&nbsp;is one of the most exciting things to experience!&nbsp;Linha de Onda will teach you safely&nbsp;so you get to know all the vibe surrounding Matosinhos. Matosinhos, besides the perfect waves, is well known for having amazing fish!\u003C/p\u003E\n\u003Cp\u003EAltogether, the beaches in Matosinhos&nbsp;makes are among the best surf spots in Europe. Linha de Onda welcomes people from&nbsp;all over the world and is eager&nbsp;to share their&nbsp;passion!\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2018/09/0dae663f6dc45333e68a5918502db6f7.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2018/09/b69ab1cf0427fcf270846bfb9ee43972.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2018/09/65ed915f54a720d22ce957bb3a6ff16b.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2018/09/dc755d50da943ba566ff155e2f2738e6.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2018/09/ac566630c97833e782004388e887c437.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2018/09/f3dd7762aa683c3d2314296dfe5d7826.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2018/09/96faa702811fe0fd83b67f73f63b76e0.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2018/09/7fdbb4b3a43932aaf02122d550b253a1.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2018/09/23c8428765d4c2f6fd8287effba790a6.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2018/09/386ad7ae18615ce11f5c514facdd26a4.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2018/09/70881d2f059fdb9c44fdb2110499b759.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/08/f1e0ec1799f1ba213afda65a83704bf9.jpeg"
            ],
            "price": {
                "amount": "40.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Free Tour March 8: Women of Portugal (Available in )",
            "geoCode": {
                "latitude": 41.145213,
                "longitude": -8.616166
            },
            "description": {
                "short": "\u003Cp\u003ECome with us to \u003Cstrong\u003Ediscover the history of universal suffrage in Portugal\u003C/strong\u003E , the \u003Cstrong\u003Eapproval of divorce and abortion\u003C/strong\u003E , the \u003Cstrong\u003Eeducation of women in the 18th or 19th centuries\u003C/strong\u003E and the \u003Cstrong\u003Elife of women in the 20th century.\u003Cbr\u003E\u003C/strong\u003E Learn about the \u003Cstrong\u003Erole of women in the transition to democracy\u003C/strong\u003E , domestic violence and LGBTI equality are other topics covered on this tour. All this \u003Cstrong\u003Ethrough key figures\u003C/strong\u003E in the history of Portugal \u003Cstrong\u003Esuch as Sophia de Mello Breyner Andresen, Aurélia de Sousa, Ilse Losa, Cristina Amelia Machado\u003C/strong\u003E or the great \u003Cstrong\u003EAmalia Rodrigues.\u003C/strong\u003E\u003Cbr\u003E A tour with some important themes, a journey through time that will make us \u003Cstrong\u003Eknow and understand the efforts of these great women for today's rights.\u003C/strong\u003E\u003Cbr\u003E\u003Cbr\u003E **Includes a wine tasting while, once the tour is over, we can chat quietly about what has been explained, answer questions with the guide, etc.\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E",
                "full": "\u003Cp\u003ECome with us to \u003Cstrong\u003Ediscover the history of universal suffrage in Portugal\u003C/strong\u003E , the \u003Cstrong\u003Eapproval of divorce and abortion\u003C/strong\u003E , the \u003Cstrong\u003Eeducation of women in the 18th or 19th centuries\u003C/strong\u003E and the \u003Cstrong\u003Elife of women in the 20th century.\u003Cbr\u003E\u003C/strong\u003E Learn about the \u003Cstrong\u003Erole of women in the transition to democracy\u003C/strong\u003E , domestic violence and LGBTI equality are other topics covered on this tour. All this \u003Cstrong\u003Ethrough key figures\u003C/strong\u003E in the history of Portugal \u003Cstrong\u003Esuch as Sophia de Mello Breyner Andresen, Aurélia de Sousa, Ilse Losa, Cristina Amelia Machado\u003C/strong\u003E or the great \u003Cstrong\u003EAmalia Rodrigues.\u003C/strong\u003E\u003Cbr\u003E A tour with some important themes, a journey through time that will make us \u003Cstrong\u003Eknow and understand the efforts of these great women for today's rights.\u003C/strong\u003E\u003Cbr\u003E\u003Cbr\u003E **Includes a wine tasting while, once the tour is over, we can chat quietly about what has been explained, answer questions with the guide, etc.\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://media.guruwalk.com/ydi0ggw8h4ov2no07kh9rb8babsg",
                "https://media.guruwalk.com/cnlov9dd2fd6xr38rlhzpcx58gh8",
                "https://media.guruwalk.com/lqidx1d9oialhzw9atye27dhsq1y"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "Sailing Trials on the Douro River in Porto, Portugal",
            "geoCode": {
                "latitude": 41.135545,
                "longitude": -8.642681
            },
            "description": {
                "short": "Learn how to sail like a pro with this fantastic sailing adventure on the Douro River, Portugal",
                "full": "\u003Cp\u003EWould you like to know the difference between your port and your starboard? Or what makes Tacking and Jibing manoeuvres differ? Then this Sailing Trial on Portugal&rsquo;s Douro River may just float your boat!\u003C/p\u003E\n\u003Cp\u003EVenture through the Vila Nova de Gaia with a fully qualified skipper, past the pastel coloured architecture that line the Douro riverbanks.\u003C/p\u003E\n\u003Cp\u003EUsing only the wind as your guide you will discover one of the oldest and most admired forms of water transport on this fantastic sailing tour!\u003C/p\u003E\n\u003Cp\u003E&nbsp;\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong\u003ELocation\u003C/strong\u003E\u003Cbr /\u003E The Douro river starts in northern Spain and runs 897km to Porto where it meets the Atlantic Ocean. It passes through the Vila Nova de Gaia region near Porto, an area famed for its production of the fortified wine, Port. Every stage of the wine production takes place in and around this region from the Vineyards that grow the grapes to the distilleries and cellars that make and preserve the wine. &nbsp;\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong\u003EActivity\u003C/strong\u003E\u003Cbr /\u003E Choose your departure time then meet your skipper for a safety brief. Once on the water, the skipper will introduce you to basic manoeuvring such as tacking and jibing, as well as weight distribution when changing direction. This activity is all about teamwork and working in tandem to move the boat in the right direction. There is an optional visit to Port Wine and Caves Ferreira, where you will discover the traditional production and storage of fortified wine. You will spend a total of two hours 30 minutes sailing on the Douro. An extra hour should be counted if you choose the wine visit.\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong\u003EConditions\u003C/strong\u003E\u003Cbr /\u003E The sailing boat used for this activity is a Beneteau Platu 25. It is 7.5 metres long with a 2.5-metre width. This vessel has a maximum capacity of six including the skipper. The waters of the Douro River are relatively calm, with winds often creating moderate swell making it suitable for beginners. This part of the Douro river features only small boats and vessels, creating very little traffic and larger margins for manoeuvring.\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/06/772c4c1c613fe61e72a3ca01c8ea6f21.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/06/e3f9d2a92a62362e570363abc7765ea0.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/06/5c3c4bd585d836e06784e832f19b964a.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/06/5abad534964aab293f1a277852ad2f5b.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/06/ff187552cb6f1d819e274e3f75ca775b.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/06/335127e73eb1ef9fbd4d5d3b337bf27d.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/06/3219061202ae307174d0984328b26f79.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/06/91e9e429d52ed88f1d9a736c982d4549.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/06/d0890070e606fb94d725e0208dd802f0.jpeg"
            ],
            "price": {
                "amount": "50.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Porto Azulejada Fair Tour: All that glitters (Available in Spanish)",
            "geoCode": {
                "latitude": 41.146054,
                "longitude": -8.606671
            },
            "description": {
                "full": "\u003Cp\u003EOporto Azulejada \u003Cstrong\u003Eis a fascinating tour of the brilliance of the tile in the city of Porto\u003C/strong\u003E . \u003Cstrong\u003EYou will discover its origin, its techniques and its history\u003C/strong\u003E while you contemplate hundreds of examples of this material that is so inherently Portuguese.\u003Cbr\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003E \u003Cstrong\u003EGet to know the history of Portuguese tile in depth\u003C/strong\u003E , touring the city through the aesthetics of the tiling of its buildings. Beyond São Bento, tile becomes modernist, neo-Mudejar, enxaquetado or avulso. Artists from all eras fell in love with this material, providing the city with hundreds – thousands! – of examples in which to discover the history of the city and its people.\u003Cbr\u003E\u003Cbr\u003E \u003Cstrong\u003EWhat will you see on this tour?\u003C/strong\u003E\u003C/p\u003E\u003Col\u003E\u003Cli\u003E \u003Cstrong\u003ESAN ILDEFONSO CHURCH\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EESTAÇAO SÃO BENTO\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EWHAT IS IT, PORTO?\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EATLANTIC PALACE\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003ESOLE DEPOSIT\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EAnd much more\u003C/strong\u003E\u003C/li\u003E\u003C/ol\u003E\u003Cp\u003E\u003Cbr\u003E We are sure that you will not resist its charm either!\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://d1i21eq0w7p1n3.cloudfront.net/q0qi5fc9r3ni5nl34sqnxppio1zr",
                "https://d1i21eq0w7p1n3.cloudfront.net/49t6d9yua21yoe4jc0hv7jo68wyh",
                "https://d1i21eq0w7p1n3.cloudfront.net/7q46mlw5i18d7exygcfvqcty24rx",
                "https://d1i21eq0w7p1n3.cloudfront.net/qw44z97fmfufp7t6rhgor9cwhgvk",
                "https://d1i21eq0w7p1n3.cloudfront.net/ib3ib9eyk85zulp4dmg8ltcc6q07"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "Oporto Culture Free Walking Tour  (Available in English, Spanish, Portuguese)",
            "geoCode": {
                "latitude": 41.140665,
                "longitude": -8.611057
            },
            "description": {
                "short": "\u003Cp\u003EIf you are traveling in Oporto, don't waste your stay. Instead, \u003Cstrong\u003Eembrace our culture, history, and legends while you get to know the core of Portugal \u003C/strong\u003Eby enjoying every sight, building, art piece, and historical place. \u003Cstrong\u003EYou will be guided through the narrow corner to the main boulevard, appreciating and understanding every detail.\u003C/strong\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EWe start the tour in Ribeira\u003C/strong\u003E, the most iconic place from which the city grew, \u003Cstrong\u003Eand end it in Lapa\u003C/strong\u003E, where rest the heart of a king and emperor. By the way, you will travel around time and see the whole perspective of Oporto culture.\u003Cbr\u003E\u003Cbr\u003EThe tour goes trought \u003Cstrong\u003ERibeira, Rua das flores, Sao Bento Railway Station, Sé, Aliados, Cordoaria and Lapa.\u003C/strong\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003E\u003Cem\u003EMain themes of the tour\u003C/em\u003E\u003C/strong\u003E\u003Cstrong\u003E:\u003C/strong\u003E History, Legends, Architecture, and Local Folklore.\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E",
                "full": "\u003Cp\u003EIf you are traveling in Oporto, don't waste your stay. Instead, \u003Cstrong\u003Eembrace our culture, history, and legends while you get to know the core of Portugal \u003C/strong\u003Eby enjoying every sight, building, art piece, and historical place. \u003Cstrong\u003EYou will be guided through the narrow corner to the main boulevard, appreciating and understanding every detail.\u003C/strong\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EWe start the tour in Ribeira\u003C/strong\u003E, the most iconic place from which the city grew, \u003Cstrong\u003Eand end it in Lapa\u003C/strong\u003E, where rest the heart of a king and emperor. By the way, you will travel around time and see the whole perspective of Oporto culture.\u003Cbr\u003E\u003Cbr\u003EThe tour goes trought \u003Cstrong\u003ERibeira, Rua das flores, Sao Bento Railway Station, Sé, Aliados, Cordoaria and Lapa.\u003C/strong\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003E\u003Cem\u003EMain themes of the tour\u003C/em\u003E\u003C/strong\u003E\u003Cstrong\u003E:\u003C/strong\u003E History, Legends, Architecture, and Local Folklore.\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://media.guruwalk.com/a8mj6w47ukjqws0a2r3pzneo1fws",
                "https://media.guruwalk.com/rwvhb5y6texsw6oh0282kgy2iogf",
                "https://media.guruwalk.com/mz76w2yvv1uspj1ujxt1d47w58nw",
                "https://media.guruwalk.com/itm4im872fromx7ddm2mm9i9qxyg",
                "https://media.guruwalk.com/hf8p06x4qvsmdfmpwws5dshicor8"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "PORTO STREET ART FREE TOUR (Available in English, Spanish)",
            "geoCode": {
                "latitude": 41.148647,
                "longitude": -8.615889
            },
            "description": {
                "short": "\u003Cp\u003E​Located on the banks of the Douro River, Porto, a World Heritage city, is one of the oldest in Europe. Take Porto will take you to the heart of this charming city. But beyond all the historical heritage, what will surprise you is the Alternative Port: the street art murals, the sculptures in the streets, the night in Porto. Porto has always been an avant-garde city and in this Free Porto Street Art Tour you'll get to know another Porto, which doesn't appear in the city guides, full of urban art and tips to make the most of alternative nightlife. Come and join us on another incredible journey through the streets of our beloved city.\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E",
                "full": "\u003Cp\u003E​Located on the banks of the Douro River, Porto, a World Heritage city, is one of the oldest in Europe. Take Porto will take you to the heart of this charming city. But beyond all the historical heritage, what will surprise you is the Alternative Port: the street art murals, the sculptures in the streets, the night in Porto. Porto has always been an avant-garde city and in this Free Porto Street Art Tour you'll get to know another Porto, which doesn't appear in the city guides, full of urban art and tips to make the most of alternative nightlife. Come and join us on another incredible journey through the streets of our beloved city.\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [
                "4.4"
            ],
            "pictures": [
                "https://media.guruwalk.com/5dwitxc6xs1x8tnh6e01ckqqh843",
                "https://media.guruwalk.com/jl2tq3wq9mdl97dx6yft2kseu5j3",
                "https://media.guruwalk.com/wlf4pr4j6k325qmvvcpcvcv4z0ur",
                "https://media.guruwalk.com/tqri2xrkzb07wcd4r2j4cvt30grp",
                "https://media.guruwalk.com/iteqsjvuqvehczsp76i5w6uu1red"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "Motorsailing and Sightseeing on the Douro River in Porto, Portugal",
            "geoCode": {
                "latitude": 41.135545,
                "longitude": -8.642681
            },
            "description": {
                "short": "This is a circuit that breaks with conventional sightseeing. You will get to know Douro River and the riverside areas of Porto and Vila Nova de Gaia.",
                "full": "\u003Cp\u003EThis is a circuit that breaks with conventional sightseeing. You will get to know Douro River and the riverside areas of Porto and Vila Nova de Gaia.\u003C/p\u003E\n\u003Cp\u003EStarting from Douro Marina, you will go on a powerboat tour and get to see some of the most beautiful monuments of the city from the Douro River. Each ride has a maximum capacity of 13 people, so try to book your seat in advance.\u003C/p\u003E\n\u003Cp\u003EThere is also an exclusive tour for those who seek more privacy. Should you choose it, you will ensure that only your significant ones will embark on this adventure with you.\u003C/p\u003E\n\u003Cp\u003EOn hot days, you can dive in the Douro River or just enjoy and relax in the company of those you like the most.\u003C/p\u003E\n\u003Cp\u003E&nbsp;\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong\u003ELocation\u003C/strong\u003E\u003Cbr /\u003EThe Douro River starts in northern Spain and enters the Atlantic Ocean at its river mouth in Porto. The Porto and Gaia regions are famed for their production of fortified wines, from the vineyards that grow the grapes to the large casks that help the wines mature. Porto is the second largest city in Portugal and has a well-connected International Airport. &nbsp;\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong\u003EActivity\u003C/strong\u003E\u003Cbr /\u003EMeet at Douro Marina for a full safety brief. You&rsquo;ll then set off towards Portugal on the Douro river. You will sail past beautiful pastel, coloured architecture, old villages and wine distilleries. The panoramic views also offer some fantastic photo opportunities of this beautiful region. The activity lasts two hours and 30 minutes in total. Once the activity is over you will be taken back to your meeting point at Douro Marina.\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong\u003EConditions\u003C/strong\u003E\u003Cbr /\u003EThe boat used for this activity is a Beneteau First 47.7. It is 14.33 metres long with a width of 4.5 metres. It has a maximum capacity of 13 people (including two skippers). The waters on the Douro River a relatively calm with small swells due to the wind. This activity is open to everyone and requires little physical exertion. There is no ships or larger vessels on this part of the river. &nbsp;\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/06/c7ae9b6fc01d4b2b67993afeda705e22.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2021/12/831188dce08904bc446f1e8fdca14586.jpg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/06/9b2727d4ba32c65c4544bac1a724f3c6.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/06/856e712b9a0762ba244139306f840fd1.jpeg"
            ],
            "price": {
                "amount": "40.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Hiking tour in Peneda-Gerês National Park",
            "geoCode": {
                "latitude": 41.190445,
                "longitude": -8.699663
            },
            "description": {
                "short": "This walking tour will give you the oportunity to explore the Peneda – Gerês National Park and enjoy all the nature and wonderful landscape",
                "full": "\u003Cp\u003EThis walking tour will give you the opportunity to explore the Peneda &ndash; Ger&ecirc;s National Park and enjoy all the nature and wonderful landscape\u003C/p\u003E\n\u003Cp\u003EPeneda &ndash; Ger&ecirc;s National Park is perhaps one of the most exciting destinations for local and international tourists, especially&nbsp;for those nature lovers that want to explore deeply the majesty of Portugal.\u003C/p\u003E\n\u003Cp\u003Ethey guides will pick you up at your&nbsp;hotel/house&nbsp;around 9 am.&nbsp;\u003C/p\u003E\n\u003Cp\u003EThe team will show you the most&nbsp;incredible spots of the Peneda Ger&ecirc;s National Park while you learn about the flora and fauna.&nbsp;\u003C/p\u003E\n\u003Cp\u003EThe park was created in 1971 with an area of 70 000 hectares. In 2009, it was declared a World Biosphere Reserve by UNESCO,&nbsp;this&nbsp;impulse the protection measures to keep the beauty and conserve nature.&nbsp;\u003C/p\u003E\n\u003Cp\u003EDuring your day you will be able to visit several landmarks of the park, from stunning&nbsp;Waterfalls where you can swim to the Pedra Bela Viewpoint which has an incredible view.\u003C/p\u003E\n\u003Cp\u003EThe guides&nbsp;are local experts and will take you through a trip deep inside this natural paradise with all the safety and plenty of fun. Picnic in one remote idyllic location is included!\u003C/p\u003E\n\u003Cp\u003EIT IS IMPORTANT THAT YOU CONTACT DIRECTLY THE PROVIDER AS SOON AS YOU RECEIVE THE BOOKING CONFIRMATION TO SCHEDULE THE DETAILS OF THE PICKUP POINT.\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/07/da4a96c33e2ab65d1ca7d8a2d547eda7.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/07/f83d475e22aa16d577ee2b4a787d864c.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/07/d784029f433f52cde9b572859b717235.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/07/dc4f8771fd839979f66306ade2329c0f.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/07/fee303aa2d6aafa9c5fde9496b39e14f.jpeg"
            ],
            "price": {
                "amount": "85.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Quad tours in Algarve",
            "geoCode": {
                "latitude": 41.142615,
                "longitude": -8.601353
            },
            "description": {
                "short": "Country side quad tous in Algarve, the best experience on quad in Albufeira and Portimao",
                "full": "\u003Cp\u003EYou will be able to experience a rush of adrenaline meanwhile you enjoy the beautiful landscapes of Algarve. These off-road countryside quad bike tours will be incomparable, you will cross riverbeds. streams, and muddy places. \u003C/p\u003E\n\u003Cp\u003EYour ride skills will be proven in the wildness of Portugal roads. You will also, observe old ruins, wide-open trails, and unforgettable&nbsp;sceneries.&nbsp;\u003C/p\u003E\n\u003Cp\u003EA group of expert guides will be all the time with you to advise you and take care of you. Also, they are experts in the zone and the will show you the most special hidden places.\u003C/p\u003E\n\u003Cp\u003EThe Quads you will be driving are KAWASAKI Brute Force 300 meticulously designed to be able to resist the more difficult tracks, meanwhile, they remain powerful and easy to use.\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/11/db722f72a486c63846b872f39b5befab.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/11/ab3f3c8853c01d74180f505d059c5dcd.png",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/11/f4f0c1cf4ce3bb74da58a7fc84e1a950.png",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/11/104cfa24e4a6b37be7ce736f7a952932.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/11/a207d39935ab36559f5e4efa40cfa3e8.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/11/dff8c7f19fe1512db8f9451dcf841293.png",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/11/daae8a2d4731aa493b1489c4bf3d8a68.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/11/3a3b55c3e725d1a5df656f5d01add02c.png",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/11/3cf74d3ded3ac5d379316ef2f6123746.png",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/11/0e635be55fedaaea76487d84e041e0e4.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/11/8c3a205d63256998b700d76505d015cd.png",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/11/b3dd149ce2149164aa1652348fc78afd.jpeg"
            ],
            "price": {
                "amount": "45.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Group beginner surf lesson in Porto",
            "geoCode": {
                "latitude": 41.176576,
                "longitude": -8.691665
            },
            "description": {
                "short": "Group beginner surfing lessons in Porto are offered by Onda Pura, one of the best schools in the area!",
                "full": "\u003Cp style=\"text-align: justify;\"\u003EOnda Pura Surf School now presents an innovative program for your holidays that features group beginner surf classes at the best beach breaks of northern Portugal. One and a half group lesson for beginners to rapidly progress and start riding the waves!\u003C/p\u003E\n\u003Cp style=\"text-align: justify;\"\u003EGet to know the&nbsp;excellent, crowd-less beach breaks where you can enjoy great surf sessions, every day, and all year long. In this region, you&rsquo;ll find a temperate climate with consistent surf, a culturally rich city, full of surprises, which will make your holidays unique!\u003C/p\u003E\n\u003Cp style=\"text-align: justify;\"\u003EThe program is specialized for beginners who really wish to progress rapidly in a \"surfer's\" environment. You will learn the basic techniques and how to choose the right wave! The Onda Pura experienced instructors will teach you everything they've learned through the years - which board is the best for every type of wave, the tricks and hops, and the technique to be the best surfer in the area! Each instructor can handle with 7 people max.&nbsp;\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2020/02/cfc9e38b1dee2ec967a663dee1cfbc97.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2020/02/f190e0d23f2fe6100f517705c8eb6b88.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2020/02/f4f13f5df59eae14c1feaf330871740c.jpeg"
            ],
            "price": {
                "amount": "25.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "VINUM RESTAURANT & WINE BAR",
            "geoCode": {
                "latitude": 41.137794,
                "longitude": -8.623719
            },
            "description": {
                "short": "Italian",
                "full": "Italian"
            },
            "rating": [null],
            "pictures": [
                "https://resizer.otstatic.com/v2/photos/wide-large/1/48323775.jpg"
            ],
            "price": {
                "amount": "0.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Irish Guy in Porto Tour :) (Available in English)",
            "geoCode": {
                "latitude": 41.150001,
                "longitude": -8.612996
            },
            "description": {
                "full": "\u003Cp\u003EThe Irish are famous for their storytelling and affable nature. Why not join in and do a tour with an Irish Guy In Porto?! Want to discover the wonderful sights, tastes and feels of Porto? Join me on an afternoon to learn why, just over 10 years ago, I chose to call this beautiful city home. With over 6 years of experience in guiding tours through this majestic city's picturesque streets, I strive to give a well-rounded introduction to my adopted home. In an independent venture, meaning no hard-sells, I hope to give a broad and inclusive selection of recommendations for the rest of your time in Porto. So whether you're a football fan, art lover or military buff I'll be looking out for you. Whether you're vegan, coeliac, jain or just want to try a specific local delicacy I hope to have your back! This tour is perfect for groups, couples, backpackers, and families; don't worry, I've seen it all before!\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [
                "4.7"
            ],
            "pictures": [
                "https://d1i21eq0w7p1n3.cloudfront.net/13ikfeu2rg8apfo8asy9axsa07b8",
                "https://d1i21eq0w7p1n3.cloudfront.net/jrnpv01kbu1puvxbgj2q7tgzprim",
                "https://d1i21eq0w7p1n3.cloudfront.net/e7w9nu532yw2jdeyai5vl0pf6x9r"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "Free Tour Porto Essential (Available in English, Spanish)",
            "geoCode": {
                "latitude": 41.146664,
                "longitude": -8.610839
            },
            "description": {
                "full": "\u003Cp\u003EJoin us and discover the corners of the magnificent city of Porto with \u003Cstrong\u003Ethe best guides in the city\u003C/strong\u003E !\u003Cbr\u003E\u003Cbr\u003E The tour starts at Praça da Liberdade, at the bottom of Avenida dos Aliados, right next to McDonalds and ends at Torre de Clérigos, near a lot of restaurants. Throughout the tour of just over 2 hours we will recount the \u003Cstrong\u003Ehistory of Porto\u003C/strong\u003E , its \u003Cstrong\u003Ecuriosities\u003C/strong\u003E , \u003Cstrong\u003Etraditions\u003C/strong\u003E and the \u003Cstrong\u003Emost important monuments\u003C/strong\u003E .\u003Cbr\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E \u003Cstrong\u003Efreedom square\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003ESao Bento Station\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EMajestic Coffee\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EBolhao market\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EGalleries of Paris\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003ELello bookstore\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EUniversity of Porto\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003Ecourthouse\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EPorto jail\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EClerics Tower\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003ECarmo Churches\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003Eold jewish quarter\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EMirador de la Victoria: Luís I Bridge and the wineries\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EAnd many more!\u003C/strong\u003E\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Cbr\u003E We will also give you the \u003Cstrong\u003Ebest recommendations\u003C/strong\u003E on places to \u003Cstrong\u003Eeat\u003C/strong\u003E , \u003Cstrong\u003Emarkets\u003C/strong\u003E and \u003Cstrong\u003Eother activities.\u003C/strong\u003E\u003Cbr\u003E\u003Cbr\u003E Book with us and enjoy an experience you will not forget!\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://d1i21eq0w7p1n3.cloudfront.net/hgr9ghfob8wvnnbnyg65a0p3fj3s",
                "https://d1i21eq0w7p1n3.cloudfront.net/2zgi8b3yggbnud6thhhqvgtue024",
                "https://d1i21eq0w7p1n3.cloudfront.net/en0ughb8ys4m1ejzdtt02lcrmfdf",
                "https://d1i21eq0w7p1n3.cloudfront.net/22bfnve229izwp94mtadntlgk347",
                "https://d1i21eq0w7p1n3.cloudfront.net/i4w7oqdmsndn1sj5ot9nkyw7r1s6"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "Free Tour of Porto by night (Available in )",
            "geoCode": {
                "latitude": 41.149512,
                "longitude": -8.610778
            },
            "description": {
                "full": "\u003Cp\u003E\u003Cstrong\u003EI'll go over the history of Porto by night, \u003C/strong\u003Eincluding\u003Cstrong\u003E iconic locations\u003C/strong\u003E, how it was created, oddities, the past, and much more:) I'll also take you to locations \u003Cstrong\u003Ethat aren't as touristic or well-known\u003C/strong\u003E, so you can\u003Cstrong\u003E see the city like a local!\u003C/strong\u003E\u003Cbr\u003EIf you \u003Cstrong\u003Ewant to learn everything there is to know about this incredible city, don't miss out on my Free Porto Tour!\u003C/strong\u003E\u003Cbr\u003E\u003Cstrong\u003ELIST OF LOCATIONS:\u003C/strong\u003E\u003Cbr\u003E\u003Cstrong\u003EWhat places are we going to see?\u003C/strong\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E\u003Cstrong\u003ESao Bento Train Station (start of the tour)\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EPraca da Liberdade\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ELello Bookstore&nbsp;\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EClerigos Tower&nbsp;\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ERibeira&nbsp;\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003Eand Much more\u003C/strong\u003E\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003EThe tour will last approximately 2'30 hours.\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [
                "4.5"
            ],
            "pictures": [
                "https://d1i21eq0w7p1n3.cloudfront.net/ev3zp0pa8vlh5fgjk91ew1bks9tp",
                "https://d1i21eq0w7p1n3.cloudfront.net/nob0i02ac9picf8x7bargkhaxmmk",
                "https://d1i21eq0w7p1n3.cloudfront.net/c1ku1cml6hxbvfox8rf3jydvd6bd",
                "https://d1i21eq0w7p1n3.cloudfront.net/zeimrii46zscom7qrwcgk5kaq3ui",
                "https://d1i21eq0w7p1n3.cloudfront.net/qf2dm4s3kui6ud6qnbgwbuu1aeyd"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "All about Porto! - Free walking tour with local guides) (Available in English, Spanish)",
            "geoCode": {
                "latitude": 41.1475,
                "longitude": -8.611439
            },
            "description": {
                "full": "\u003Cp\u003EStroll the cobbled streets, breathtaking viewpoints and charming squares of central Porto with expert local guides. Discover our locals' favorite spots, the best food in Porto and discover its rich history: a little history of Portugal in the São Bento train station and why are there so many churches in Porto? We will visit the São Bento train station, Santa Catarina, Batalha square, the church of Santa Clara, the top of the Luis I bridge, the cathedral (Sé), the district of Barredo, the district of Ribeira.\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://d1i21eq0w7p1n3.cloudfront.net/izuoyaqq891jnn9exmj5a0h2rvit",
                "https://d1i21eq0w7p1n3.cloudfront.net/o0azeillb9zjxk15u31xop193d5f",
                "https://d1i21eq0w7p1n3.cloudfront.net/4tvslkec7zpox5n0eiy5s1jqaoy5",
                "https://d1i21eq0w7p1n3.cloudfront.net/u095nxnhwl5ijg5rxdnsgqfq03pi",
                "https://d1i21eq0w7p1n3.cloudfront.net/qtm4ougclq0rg84765oli35ggxt3"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "Best of Porto Free Tour - Discover the city's history, culture and curiosities   (Available in English, Spanish)",
            "geoCode": {
                "latitude": 41.147132,
                "longitude": -8.615617
            },
            "description": {
                "full": "\u003Cp\u003E\u003Cstrong\u003EWe are passionate about Porto and\u003C/strong\u003E \u003Cstrong\u003Ewe would like to share this love\u003C/strong\u003E with you by offering a \u003Cstrong\u003Efantastic tour of\u003C/strong\u003E its \u003Cstrong\u003Ehistoric center\u003C/strong\u003E , showing why Porto has become such a popular city and voted the best European destination in 2017.\u003Cbr\u003E Join us and \u003Cstrong\u003Ediscover its history, culture, curiosities\u003C/strong\u003E and also fall in love with this incredible city, with its \u003Cstrong\u003Echarming streets, wonderful tiles, simple architecture, colorful houses, fantastic food\u003C/strong\u003E and much more.\u003Cbr\u003E \u003Cstrong\u003EFrom Fonte dos Leões\u003C/strong\u003E \u003Cstrong\u003Eto\u003C/strong\u003E the \u003Cstrong\u003Ebanks of the Douro river\u003C/strong\u003E , \u003Cstrong\u003Eour guides\u003C/strong\u003E will take you through this charming city and \u003Cstrong\u003Eshow you the historical facts that changed the history of Portugal\u003C/strong\u003E , the incredible architecture with its impressive buildings and monuments. , the many traditions that the locals still preserve and the delicious typical food of the north of Portugal.\u003Cbr\u003E Our team of \u003Cstrong\u003Elocal guides\u003C/strong\u003E are very knowledgeable, \u003Cstrong\u003Efun and\u003C/strong\u003E will give you their \u003Cstrong\u003Especial touch\u003C/strong\u003E to guarantee the best tour.\u003Cbr\u003E \u003Cstrong\u003ESome of the sites that we will see on this tour:\u003C/strong\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E\u003Cstrong\u003EClerigos Tower\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ESão Bento Station\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ECathedral of the Sé\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ERibeira Bridge Luis I\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EAliados Avenue\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ELello and Irmão Bookstore\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EUniversity of Porto\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EPorto City Council\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ERua de las Flores\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EMirante de la Vitoria\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003ECordoaria Square\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E\u003Cstrong\u003EChain of Relationship\u003C/strong\u003E\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Cstrong\u003Eand much more...\u003Cbr\u003E&nbsp;We wait for you!\u003C/strong\u003E\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [
                "4.5"
            ],
            "pictures": [
                "https://d1i21eq0w7p1n3.cloudfront.net/jowznlbg7db4vunclixc8j3yso1c",
                "https://d1i21eq0w7p1n3.cloudfront.net/5k2cdzyv3pqnid2fp08nz915ti2f",
                "https://d1i21eq0w7p1n3.cloudfront.net/ft5vppwc5umfbfnyzlu81zgvc82h",
                "https://d1i21eq0w7p1n3.cloudfront.net/6pflzx79a54facz4bu35xf9hrxj0",
                "https://d1i21eq0w7p1n3.cloudfront.net/rs095qyeib3yw3b13ozi9i04va07"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "Free Tour Essential Porto (Available in English, Spanish)",
            "geoCode": {
                "latitude": 41.147132,
                "longitude": -8.615617
            },
            "description": {
                "full": "\u003Cp\u003EA tour with which we will know \u003Cstrong\u003Ethe most important monuments\u003C/strong\u003E , as well as with the experience of our guides, we will adapt step by step to the interests of the group to make you fall in love with an \u003Cstrong\u003Eundefeated city and its exciting culture and history\u003C/strong\u003E . We will meet in Plaza Gomes Teixeira (next to the fascinating \u003Cstrong\u003ELello Bookstore\u003C/strong\u003E ), where our guides will be conducting the Oporto Esencial symphony, who will accompany us on an essential tour, in addition to advising you with your doubts. \u003Cstrong\u003EA complete tour to get to know the city in depth and in a pleasant way.\u003C/strong\u003E\u003Cbr\u003E \u003Cstrong\u003E\u003Cbr\u003EItinerary:\u003C/strong\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E \u003Cstrong\u003EGomes Teixiera Square\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003ELello Bookstore... Does Harry Potter sound familiar to you?\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EUniversity\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003Ecarmel church\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EPorto jail\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EJewry\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EChurch of São Bento da Vitória\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EMirador de la Victoria and its magnificent views\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003ETorre dos Clérigos, the tallest in Portugal\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003ESao Bento Station\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EPorto Cathedral\u003C/strong\u003E\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Cbr\u003E *The tour does not enter any monument.\u003Cbr\u003E **Groups of more than 8 people are not allowed on the free tour. In case of being a larger group, you must contact OptimusTours in advance to guarantee your place.\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [
                "4.5"
            ],
            "pictures": [
                "https://d1i21eq0w7p1n3.cloudfront.net/gdvimqrs1ak4myhyzh1iyv153zm5",
                "https://d1i21eq0w7p1n3.cloudfront.net/pjy2embrbcc98ycpij88au60vpr7",
                "https://d1i21eq0w7p1n3.cloudfront.net/3591kimr2qgf2etuz2d440d7v02t",
                "https://d1i21eq0w7p1n3.cloudfront.net/jjdvmwlsysnehe5tpxogf3p46m45",
                "https://d1i21eq0w7p1n3.cloudfront.net/k6czw9ip99jhegkkkob44r6mtdyh"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "Dark Porto Free Tour: Mysteries, Legends and Crimes (Available in English, Spanish)",
            "geoCode": {
                "latitude": 41.146448,
                "longitude": -8.610909
            },
            "description": {
                "full": "\u003Cp\u003EDelve with us into the darkest Porto so that, as night falls, we discover the legends told by its inhabitants, the mysteries that live in its stones and the crimes that hide its alleys.\u003Cbr\u003E\u003Cbr\u003E In this tour we will explore the most authentic corners of Porto, visiting places that are not very touristy where we will appreciate the essence of the city. We will also visit some of its emblematic areas of the city and we will get to know its monuments, but we will do so by talking about what is not normally told.\u003Cbr\u003E\u003Cbr\u003E \u003Cstrong\u003ESome of the places we will visit are:\u003C/strong\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E \u003Cstrong\u003ERua das Flores\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EOlival Jewish quarter\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003ECourtyard of the Hanged\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EOld Armenian Quarter\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003Emedieval wall\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EDouro River\u003C/strong\u003E\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Cbr\u003E Get ready for an unforgettable night in the company of ghosts, murders, bandits, desecrations, secrets and massacres.\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://d1i21eq0w7p1n3.cloudfront.net/6oy850dlch1mwtv97tvkouuahh0q",
                "https://d1i21eq0w7p1n3.cloudfront.net/1n7hfk8ix0f18zznn5tjmx6mi7rm",
                "https://d1i21eq0w7p1n3.cloudfront.net/29a3zukk5dw83ecaox0fsl7g4gkw",
                "https://d1i21eq0w7p1n3.cloudfront.net/ivlziy5xl3upxeig7dychnq9uhcm",
                "https://d1i21eq0w7p1n3.cloudfront.net/jwtwx8fps350yhxma3tlb2ce5ur4"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "Private beginner surf lesson in Porto",
            "geoCode": {
                "latitude": 41.176576,
                "longitude": -8.691665
            },
            "description": {
                "short": "Private beginner surfing lessons in Porto are offered by Onda Pura, one of the best schools in the area",
                "full": "\u003Cp style=\"text-align: justify;\"\u003EOnda Pura Surf School now presents an innovative program for your holidays that features private beginner surf classes at the best beach breaks of northern Portugal. One and a half&nbsp;private lesson for beginners to rapidly progress and start riding the waves!\u003C/p\u003E\n\u003Cp style=\"text-align: justify;\"\u003EGet to know the&nbsp;excellent, crowd-less beach breaks where you can enjoy great surf sessions, every day, and all year long. In this region, you&rsquo;ll find a temperate climate with consistent surf, a culturally rich city, full of surprises, which will make your holidays unique!\u003C/p\u003E\n\u003Cp style=\"text-align: justify;\"\u003EThe program is specialized for beginners who really wish to progress rapidly in a \"surfer's\" environment. You will learn the basic techniques and how to choose the right wave! The Onda Pura experienced instructors will teach you everything they've learned through the years - which board is the best for every type of wave, the tricks and hops, and the technique to be the best surfer in the area! All classes are done in groups of 3 people max. \u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2016/10/735e05a3984e6d84e798c1bf0ba45e37.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2016/10/e3d07761f4c8558dad2758bb26bd0c31.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2016/10/f271697403ea4e30221849b6fd9d5ac5.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2016/10/db2ebb7a2a71fbb85350ebb4b817b227.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2016/10/3605953cf34a487662db7e8de525a65b.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2016/10/66e6f6a3dc235c305d3645ec1a55a9f5.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2016/10/06bca01cec937eca1dc1bc5bcb189224.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2016/10/3434cfc987d96578101eb7e1a546cdc0.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2016/10/f2086581922adbf2224b72d24ff0bf23.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2016/10/dd01ec586db0792fd6de836ea5f3edd4.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2016/10/7b96b808b1ec796698a4767a738db1b5.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2016/10/9373ed86a2c44cd5b508fd9843ff1f06.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2016/10/727d1dc6915033b07015929736f0f23a.jpeg"
            ],
            "price": {
                "amount": "35.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Beginner group surfing lessons and courses in Matosinhos, Porto",
            "geoCode": {
                "latitude": 41.174662,
                "longitude": -8.690209
            },
            "description": {
                "short": "Begginer group surfing lessons in Matosinhos: learn to surf on the tide in Matosinhos, one of Europe's best surfing spots",
                "full": "\u003Cp\u003ELearn surfing with professional lessons in Oporto&rsquo;s best learning beach!\u003C/p\u003E\n\u003Cp\u003EThe surfing group courses are focused on initiating new surfers or perfecting the techniques of those with previous experience. Beginners can have their first taste on the board and get in love with this amazing sport with an introductory class.\u003C/p\u003E\n\u003Cp\u003EThose who want to join the wave community can take a 5 day course in which they will master the basics and become independent surfers. If what you want is to become a master surfer, then a 10 day course is what you need. In both cases, you will share the experience with a group of people that will surely become buddies!\u003C/p\u003E\n\u003Cp\u003EAfter being briefed by your coaches at school, you will get your equipment. Depending on the group&rsquo;s level, you will practice at the beach or go directly into the water and practice. The important thing is you will have a lot a fun and your instructor will take good care of you!\u003C/p\u003E\n\u003Cp\u003ESurfaventura aims to provide the participants with all necessary knowledge so they can practice in total safety.\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/082a50fc492e440c0794ae6448a65299.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/8213d8f19cdc52958eb2b9d2168e73cd.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/11/88ab9bcba2c25ba09d4afc879cdd6969.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/3b83136867618278d5ad0acf4b3df54e.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/11/a62ca1d5db3a70dfeb491c64cb34f12b.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/4de5129d25936cd02b5ca6a58951a21a.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/7a56a6fb5fe91cd20f6d8faf0928557f.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/11/55276e56e85a878627dbca137a4ae618.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/11/d25199bc54a74e1f29ea761d6afbe4c1.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/11/a7f2e69091ceab757fd7cba358fae8ef.jpeg"
            ],
            "price": {
                "amount": "20.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Surf camp in Matosinhos, Porto",
            "geoCode": {
                "latitude": 41.174662,
                "longitude": -8.690209
            },
            "description": {
                "short": "Surf camp in Matosinhos: learn surf in Matosinhos, one of Europe's best surfing spots. Lessons, accomodation and practice hours included.",
                "full": "\u003Cp\u003ESurfing lessons in one of the top surfing spots in Europe with accommodation included, what else could you ask for! Book your surf camp on Matosinhos beach and have the time of your life under the sun and with the cool breeze of the ocean!\u003C/p\u003E\n\u003Cp\u003EThe Surfaventura Surf Camp, is the result of a partnership between Surfaventura Surf School and Pilot Hostel.&nbsp;Thanks to this agreement, the school is able to provide you an excellent stay so surfers can come and learn in the best conditions.\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong\u003ESurfaventura Surf School\u003C/strong\u003E\u003Cbr /\u003EOpen since 2003, the surf school has a team of experienced teachers experts in teaching beginner and intermediate surfers. To teach you the best way, Surfaventura has the best surfing equipment: wetsuits of all sizes, softboards, hardboards, shortboards, and longboards in order to fit your level of surfing.\u003C/p\u003E\n\u003Cp\u003EThe lessons take place on Matosinhos beach, a long and golden sand beach, that ensures optimal weather conditions year round so you can learn and progress safely in this sport. If there are no waves at the beach, the school offers a shuttle service to other nearby beaches. Transportation prices are not included\u003C/p\u003E\n\u003Cp\u003EFor more experienced surfers, Surfaventura&nbsp;organizes advanced courses and surf trips to nearby beaches, where you can find quality waves and no crowds in the water. Also, on request, you can get a photo or video report to take home the best moments of your surf camp and show the to your friends and family!\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong\u003EThe Hostel\u003C/strong\u003E\u003Cbr /\u003EPilot Hostel is situated in a quiet street of downtown Porto City close to historical monuments and thrilling nightlife. You will stay at dormitories or rooms, each with shared bathrooms, in either case you will have access to a free personal locker.\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/3837a7bf416220ba4d38eeae8e83ab7d.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/f710eafe012f196c92db6a7a22bc3929.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/2e23cef06831f9c0c9256fc0968fc738.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/89109e7f42a4df2db95f01d198a4ba3c.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/e9fed3170a2110849a5b71502446800d.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/788b6e75ed373310035069ca79f2fbcb.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/1a3fa7f9004f2a8ce7f0834ba7b1a647.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/1da385bcb685e3678cb27d1d326bbb16.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/5535953630692477c051d68bed96130e.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/a7afd4e3c8517342cca9a57f2a768f8f.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/d0537ab53723bdcc2f86d556c3137c2c.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/327284a7b269a983c8fd04b29e6ad859.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/b8348d7278c9ea31da76c19e83bc6d65.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/eb8d3b400f3837b49a732b4517d32158.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/cab2ea88e6b41f7333bd3399d81f2660.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/af7c7f7d50ceab148309c94aaaacd7c3.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/adce275632bf6a2103d8d50aa777712b.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/2e84da96571571f6a323e14696c2ea1c.jpeg"
            ],
            "price": {
                "amount": "195.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Private SUP lessons and courses in Matosinhos, Porto",
            "geoCode": {
                "latitude": 41.174662,
                "longitude": -8.690209
            },
            "description": {
                "short": "Private stand up paddle lessons in Matosinhos: learn SUP in Matosinhos, one of Europe's best surfing spots",
                "full": "\u003Cp\u003ELearn SUP privately with professional lessons in Porto&rsquo;s best learning beach!\u003C/p\u003E\n\u003Cp\u003ESUP is a sport that allows you to enjoy the thrills of the waves in a more peaceful manner. These SUP private courses focus on initiating new paddlers or perfecting the techniques of those with previous experience. Beginners can have their first taste on the board and get in love with this amazing sport with an introductory class.\u003C/p\u003E\n\u003Cp\u003EIf what you want is to further explore the beauty of SUP, a 3 day course may be what you need. In both cases, you will have the coach's attention on you at all times.\u003C/p\u003E\n\u003Cp\u003ESurfaventura aims to provide the participants with all necessary knowledge so they can practice in total safety and adapted to their particular characteristics.\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/03c1ceb8951b7d8fe19a5438a1b2d9f1.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/f8a22443a19ccdc75899bd88d745e5bc.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/43bd2e7bee6b272c1872fec9538607fb.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/58978d9faa3b7a367162e079eee97674.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/c4443967e7b2355d1168eb1df210e962.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/2544d6ebaf217afcebc71c7765b3bb73.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/41547da4f1dbb5bb4475e46813fa4ef7.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/73e33f9e1f1d92512644d52d062f889f.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/26d884d8178a0f8e2d70b476f89a189e.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/e949a37a663e647f7966da878668672a.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/67a89cb20fbda675d45930985dc071b7.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/1ff7897fe7136ae6641ddaa011cf87ed.jpeg"
            ],
            "price": {
                "amount": "35.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Surf camp on Matosinhos Beach, Porto",
            "geoCode": {
                "latitude": 41.174333,
                "longitude": -8.688314
            },
            "description": {
                "short": "Experience pure joy while learning to surf with Fish Surf School. They want you to create that unique bond between sea and surfer, which is simply breathtaking!",
                "full": "\u003Cp\u003EExperience pure joy while learning to surf with Fish Surf School. They want you to create that unique bond between sea and surfer, which is simply breathtaking!\u003C/p\u003E\n\u003Cp\u003EGive it a go - you will love it if you have always liked the water and life on the beach.&nbsp;Surfing is an ambitious sport, but it is connected to a chilled-out lifestyle. Surfing is all about having fun. The&nbsp;surf&nbsp;camp&nbsp;has a laid-back vibe and&nbsp;accommodation&nbsp;to suit&nbsp;all tastes and budgets.\u003C/p\u003E\n\u003Cp\u003EFish Surf School is based in Matosinhos Beach &ndash; a beach break suitable for beginners and experienced surfers all year round.\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong\u003ESurf lessons\u003C/strong\u003E\u003Cbr /\u003EThe certified surf instructors are educated in both surf practice as well as theory. They offer you the benefit of their knowledge and help you progress both in land and in the water.\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong\u003EAccommodation&nbsp;\u003C/strong\u003E\u003Cbr /\u003EPorto ocean front Surf Hostel in Porto is located in Foz do Douro, one of Porto&rsquo;s oldest and most beautiful quarters. It&rsquo;s within walking distance from all the best surf spots in Porto, where the surf lessons will take place. The nearby beach of Matosinhos is excellent for beginners to learn how to surf. With just a short distance to the city center, you will encounter a wide choice of bars, clubs, restaurants and many cultural attractions, that will help you discover the laid back and friendly lifestyle of the Portuguese!\u003C/p\u003E\n\u003Cp\u003EAll guests have free breakfast and&nbsp;have access to the kitchen in order to prepare their meals. There are several restaurants and shopping places near the surf camp and a meal for 8&euro; is easy to find in the camp surroundings. Internet and TV access are also provided as well as bed linen, towels and storing of valuables.\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/01/33cbd3586f714b7f916ef82f9e200616.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/01/3178b30fbc0368ae39603ce9a1b3098e.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/01/e826d6aa87df399f9bcce6c19960d632.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/01/9e6740d3bb6bc15360bf563ebb177709.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/01/1c418e3f197207369a89659e2f0afab4.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/01/20d5058e4699f320d6c5747840893b11.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/01/8c9e5b52e44de18aa48fb3cff034eeb6.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/01/a438e88116a9b6db85bdc11c9efff762.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/01/0d6d3df0852e6b98c459c39543b7d1ac.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/01/f14fae609cafa9bf8a240798f99c8694.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/01/8f457add140ac1fae2bc8a5c4f7df60a.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/01/5de08e6890258192dd9bf01146be5e7b.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/01/277af45175ebcf606b8ffd655bd15fbe.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/01/ce32014658233badf8c845495b6a40bd.jpeg"
            ],
            "price": {
                "amount": "85.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Stand up paddle lessons on Douro River, Porto",
            "geoCode": {
                "latitude": 41.174574,
                "longitude": -8.690133
            },
            "description": {
                "short": "Surfing Life Club proposes stand up paddle Surf in Portugal - Between Porto and Aveiro. SUP is an up and coming water sport that is increasing in popularity.",
                "full": "\u003Cp\u003ESurfing Life Club proposes stand up paddle Surf (SUP) in Portugal - Between Porto and Aveiro. SUP&nbsp;is an up and coming water sport that is gaining in popularity around the world.\u003C/p\u003E\n\u003Cp\u003EIt appeals to not only to the audacious, but even families are practicing it. The expert team at Surfing Life Club has top quality equipment&nbsp;and the knowledge to go with it.&nbsp;So you can experience the sea in Maceda, Cortega&ccedil;a and Matosinhos.\u003C/p\u003E\n\u003Cp\u003EYou're guaranteed to stand up in the very first lesson&nbsp;no matter&nbsp;your experience or ability. Surfing Life Club is proud to be the first school in the northern Portugal to teach stand up paddle.\u003C/p\u003E\n\u003Cp\u003EThe lessons begin in flat waters, such as the ones in the beautiful Douro River or the Aveiro Lagoon. Once you have had a few lessons of stand up paddling and are more comfortable practicing, you will be able to catch waves in no time.\u003Cbr /\u003E\u003Cbr /\u003EStand up paddle surf can be practiced by women, men, children, between 4 and 64 years old and without any necessary physical preparation.\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/06/ffe938ce37ebde9ab13f783dc00623bc.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/06/cdc6f7c9af37ee8a261d3d7102c8fa17.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/06/48b4be1531ccfc667f3de2bbe291f064.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/06/5d6b9fd23d6d0593a6b64ab5cf1bf40a.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/06/9934af067d7488d442d2795cb2cdf267.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/06/6e4363312afddf98eef5e8a9328c88bc.jpeg"
            ],
            "price": {
                "amount": "35.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Porto Walled Free Tour: Of the visible and invisible (Available in Spanish)",
            "geoCode": {
                "latitude": 41.146165,
                "longitude": -8.606897
            },
            "description": {
                "full": "PORTO WALLED IS A ROUTE THROUGH THE FERNANDINHA WALL (LAS MURALLAS) OF THE CITY. Using the medieval construction as an excuse, we will go through the visible and the invisible of the history of the city, which, like the Guadiana, is sometimes perceived and others ... you have to imagine it. What will you see on this tour? 1. PORTA CIMO DO VILA 2. RUA MADEIRA 3. IGREJA CONGREGADOS 4. JUDERÍA EL OLIVAL 5. OLD ENGLISH CLUB 6. CAPELA SÃO JOÃO NOVO 7. ESCADAS CAMINO NOVO 8. MURO DO BACALHOEIROS 9. BARREDO MEDIEVAL 10. CAPELA LADA 11. MURALHA FERNANDINHA 12. PORTA DO SOL\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://d1i21eq0w7p1n3.cloudfront.net/jd6oo4i2pj0ajf3aqqnlbwm2nw36",
                "https://d1i21eq0w7p1n3.cloudfront.net/bxegi5z64bv6orpo3ulx18lykt8h",
                "https://d1i21eq0w7p1n3.cloudfront.net/2d27r957nc0h84otazc10amnwqdt",
                "https://d1i21eq0w7p1n3.cloudfront.net/g6fgpyli8p0q7wckkr1nj0twy6w6",
                "https://d1i21eq0w7p1n3.cloudfront.net/lundlqds4eeosh24zvpnjrdvwtcn"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "Porto Free Tour with Local Guides (Available in English, Spanish)",
            "geoCode": {
                "latitude": 41.148106,
                "longitude": -8.611082
            },
            "description": {
                "full": "\u003Cp\u003EThe oldest and most complete Free Tour of Porto (since 2011). Get to know the city in 2H30 and its old town, from the Cathedral to the Clérigos Tower and viewpoints with incredible views. Explore the historic city of Porto, through its narrow streets and discovering the many secrets of its warm and indomitable inhabitants.\u003Cbr\u003E\u003Cbr\u003E Our local guides will show you the city with the passion of a true \"tripeiro\".\u003Cbr\u003E\u003Cbr\u003E LOOK FOR THE ORANGE UMBRELLA!\u003Cbr\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E \u003Cstrong\u003ETwo Aliados Avenue\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003Etraditional streets\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003Eviewpoints\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EClerics Tower\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003ELello bookstore\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003ESao Bento Train Station\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EPorto Cathedral\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003EMedieval city\u003C/strong\u003E\u003C/li\u003E\u003Cli\u003E \u003Cstrong\u003ERibeira (the river bank)\u003C/strong\u003E\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003E This tour includes an interval for water and service. The guides help you with practical recommendations.\u003Cbr\u003E Porto is a very old city, full of surveys so don't forget to bring comfortable shoes.\u003Cbr\u003E See you!\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://d1i21eq0w7p1n3.cloudfront.net/hlgxkzuza62o924sfkcrx3zjq83m",
                "https://d1i21eq0w7p1n3.cloudfront.net/hrdwwcuh7y8hnj8dt4s0zskz0bt1",
                "https://d1i21eq0w7p1n3.cloudfront.net/fnmh5neopgmndx5n13f3wsz1n8qg",
                "https://d1i21eq0w7p1n3.cloudfront.net/ieng59x6bc4d5ihlowahvq5hnsgv",
                "https://d1i21eq0w7p1n3.cloudfront.net/xt9xz3275mw95tew2ewazk8z6ku2"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "PORTO Free Walking Tour: The Unvanquished City, its Soul and Plenty of Tips (Available in English, Spanish, French, Italian)",
            "geoCode": {
                "latitude": 41.149512,
                "longitude": -8.610778
            },
            "description": {
                "full": "\u003Cp\u003E\u003Cstrong\u003EOur\u003C/strong\u003E Heart of Porto \u003Cstrong\u003EFree Walking Tour\u003C/strong\u003E was \u003Cstrong\u003Ecreated to present you the very best of this charismatic city.\u003C/strong\u003E Stone by stone, corner by corner, \u003Cstrong\u003Ewe will reveal to you the city that gave name to a country, a wine, and a way of life. \u003C/strong\u003EThis walk is the perfect introduction to the city and we will have dozens of suggestions and advice to share. A tour to remember in an unforgettable city. Our visit \u003Cstrong\u003Ewill cover all the historical area of the city\u003C/strong\u003E and plenty of must see \u003Cstrong\u003Emonuments and places\u003C/strong\u003E like the \u003Cstrong\u003ETower of Clérigos, Lello’s Bookshop, the Catheral, the Train Station of São Bento\u003C/strong\u003E, the ancient\u003Cstrong\u003E district of Barred\u003C/strong\u003Eo and the riverside of \u003Cstrong\u003Ethe Douro\u003C/strong\u003E. Join us and learn the meaning of the word Invicta.\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [
                "4.5"
            ],
            "pictures": [
                "https://d1i21eq0w7p1n3.cloudfront.net/2akl62s7qgdf8qwf6vx9a3f2v8im",
                "https://d1i21eq0w7p1n3.cloudfront.net/t46hln588lcgf0nzhfnkg7hjz1i2",
                "https://d1i21eq0w7p1n3.cloudfront.net/j7iok8xj66g6u01y4juextdagj5c",
                "https://d1i21eq0w7p1n3.cloudfront.net/03vm1s1hn2md1ctf5fexai3totd3",
                "https://d1i21eq0w7p1n3.cloudfront.net/aekv3110289h8j9p6zz3wh428jki"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "Free Tour Porto: Discover the soul of Porto Invicta (Available in Spanish)",
            "geoCode": {
                "latitude": 41.14596,
                "longitude": -8.606891
            },
            "description": {
                "full": "Discover the soul of the city with our Invicta Tour: a tour of the monumental area of Porto, that is, its top ten. You will know its most famous monuments, but not only. In this tour there will be wars, tiles, republican monarchs, betrayals, invisible doors, luxury and decadence, trips to the unknown, sweets and wines ... You will finish the tour not only knowing the most important and unique history of Porto, but asking as a Portuguese in any bar, a word of guidance. And saying, OH! Porto !, of course. You will discover: 1. IGREJA DE SAN ILDEFONSO 2. CAFÉ MAJESTIC 3. CAPELA DAS ALMAS 4. SÃO BENTO STATION 5. AVENIDA DOS ALIADOS 6. LIVRARÍA LELLO 7. IGLESIAS GEMELAS 8. PRAÇA CARLOS ALBERTO 9. TORRE DOS CLÉRIGOS 10. MIRADOURO VITÓRIA\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://d1i21eq0w7p1n3.cloudfront.net/ufmioxhkvzubrdv9mqtp9mwgmwd5",
                "https://d1i21eq0w7p1n3.cloudfront.net/3oayyrt6as5k6gfbxgh2hd25ooe5",
                "https://d1i21eq0w7p1n3.cloudfront.net/rofe0tu2unnipjnmkhw6dtncrgng",
                "https://d1i21eq0w7p1n3.cloudfront.net/jeg0c2qcs1ib726gu40v2bphx893",
                "https://d1i21eq0w7p1n3.cloudfront.net/ym3tgslkrp4cj63bmgfe7uyk9k91"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "Free Walking Tour Porto: overview of the Old Town (Available in English)",
            "geoCode": {
                "latitude": 41.145325,
                "longitude": -8.610598
            },
            "description": {
                "full": "\u003Cp\u003EAvenida dos Aliados... The Cathedral... Clérigos' Church... the Ribeira... Luiz I bridge...\u003Cbr\u003E\u003Cbr\u003E\u003Cstrong\u003EEverything you saw highlighted in big bold letters while researching what to see in Porto is here! \u003C/strong\u003EWhether you have limited time in Porto or just want to be introduced to the city,\u003Cstrong\u003E this tour will absolutely leave you hungry for more. \u003C/strong\u003EJoin me on a walk through\u003Cstrong\u003E the city's most famous landmarks while being introduced to its history\u003C/strong\u003E and how it intertwines with the history of Porto and Portugal!\u003Cbr\u003E\u003Cbr\u003EPorto is over 1000 years old and has seen massive changes throughout its history. The best way to honor that history is by making sure it is presented correctly to everyone who wishes to learn about it. That's my commitment.\u003C/p\u003E\u003Cp\u003EFree tour: Book for free and pay what you want at the end\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://d1i21eq0w7p1n3.cloudfront.net/e4etcobg0s57gjykjjd5xj7pf9yk",
                "https://d1i21eq0w7p1n3.cloudfront.net/e2gbehu1h9umipykhawh5xm8wy2u",
                "https://d1i21eq0w7p1n3.cloudfront.net/u7os0a7nbnde2gyuoe5e863et6lg",
                "https://d1i21eq0w7p1n3.cloudfront.net/6u0ch9im0yylnntls15s6zx8cpb1"
            ],
            "price": {
                "amount": "0.0"
            }
        },
        {
            "name": "Surfing lessons in Porto",
            "geoCode": {
                "latitude": 41.177187,
                "longitude": -8.691513
            },
            "description": {
                "short": "Learn or improve your surfing skills in the beautiful beaches of Matosinhos and Leça da Palmeira with the two hour lessons!",
                "full": "\u003Cp\u003EFor this activity you will meet with the instructor at the Matosinhos Beach (near Vagas Bar at the southern tip of the beach) but, if you wish to they can always go pick you up at your accommodation (no extra cost).\u003C/p\u003E\n\u003Cp\u003EThe lesson is 2 hours long and you can choose the starting time that better adapts to your schedule. The maximum number of participants is 8 people and you will be taught according to your level &amp; goals. Depending on this the spots change:\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong\u003EMatosinhos beach:\u003C/strong\u003E\u003Cbr /\u003E The gold sand beach is the longest&nbsp;beach in the city. It extends through the north shore from the Duero estuary up to the west boarding with the Atlantic Ocean. It is surrounded by a&nbsp;fishing port and Fort of Castelo de Queijo. &nbsp;\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong\u003ELe&ccedil;a da Palmeira beach:\u003C/strong\u003E\u003Cbr /\u003E Favourite amongst surfers &amp; body boarders due to its long sandy shore and rough waves, the beach is located in Matosinhos. The spot is also known for the&nbsp;Piscinas de Mar&eacute;s,&nbsp;two pools filled with fresh sea water that overlook the beach, created by Portuguese Architech&nbsp;Alvaro Siza in 1973.\u003C/p\u003E\n\u003Cp\u003E&nbsp;\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2016/05/5ff651cf1c417e2ee536cba541935cc6.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2018/03/36311640a527a5fe22052f5c991100b1.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2016/05/41560dbce66fa2e7abb4f59f813f7df4.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2018/03/87050b54237d13046814f3b2c80b0e95.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2016/05/95e12881d3480223d2c211653fe8c178.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2016/05/ab84e05435bdc27a212ee633e23e346c.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2016/05/43f7020a2ff40a87b84897e22e8d972f.jpeg"
            ],
            "price": {
                "amount": "35.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Private surfing lessons in Matosinhos, Porto",
            "geoCode": {
                "latitude": 41.174662,
                "longitude": -8.690209
            },
            "description": {
                "short": "Group surfing lessons in Matosinhos: learn to ride the tide in Matosinhos, one of Europe's best surfing spots",
                "full": "\u003Cp\u003EGet ready to hit the waves with professional surfing lessons in Porto&rsquo;s best learning beach!\u003C/p\u003E\n\u003Cp\u003EThe private surf lessons are focused on initiating new surfers or perfecting the techniques of those with previous experience. Beginners can have their first taste on the board and fall in love with this amazing sport during an introductory class. Those who want to join the wave community several lessons in which they will master the basics and become independent surfers.\u003C/p\u003E\n\u003Cp\u003EAfter being briefed by your coaches at the school, you will get your equipment. Depending on the group&rsquo;s level, you will practice at the beach or go directly into the water and practice. The important thing is you will have a lot a fun and your instructor will take good care of you!\u003C/p\u003E\n\u003Cp\u003ESurfaventura aims to provide the participants with all necessary knowledge so they can practice in total safety and adapted to their particular characteristics.\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/2d050f1d03488278b45a0a018d49ccff.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/9ca7371808207864a17c9cff6b19edf9.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/449c86f902d7329b0da3031f826f5081.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/4a7a288e9d0c6b200793ab73881ff922.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/a705c0c5cb446afbcfc1a741703717b0.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/a4522d64a970c45d2dc0c2dab143b3bb.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/a51e55e9f261dc7d0072dbf51aada27b.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/f80b190155a47b15b8fc20d63d954260.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/13f5825ceb21045180ac8835abffa61d.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/4a97375a350efc41b59eb1575d2da602.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/1c565ebabb95bf67026895d82955f145.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/1a199916623684a18586c41ca6bb4891.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/01ae3b79a2165ef01865047ce39cc784.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/02/530d9e8942668ecfe3147d6bf52da108.jpeg"
            ],
            "price": {
                "amount": "30.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Beginner Surf camp in Porto",
            "geoCode": {
                "latitude": 41.143205,
                "longitude": -8.606662
            },
            "description": {
                "short": "Get to know the excellent beach of Porto and learn how to surf with an innovative training programme by Onda Pura and its experienced surfing instructors",
                "full": "\u003Cp style=\"text-align: justify;\"\u003EOnda Pura Surf School now presents an innovative program for your holidays that features beginner surf classes at the best beach breaks of northern Portugal. Over 2 or 5 days you will have 2 hours of course per day to become the surfer you always dreamt of! \u003C/p\u003E\n\u003Cp style=\"text-align: justify;\"\u003EWhen not on a surfboard, be prepared for unforgettable entertainment in Oporto, a city whose beautiful downtown is part of the World&rsquo;s Historical Patrimony. Oporto is becoming a popular surf destination for beginner and intermediate surfers.\u003C/p\u003E\n\u003Cp style=\"text-align: justify;\"\u003ECome and see for yourself what makes this city one of&nbsp;the most desirable places to combine surf &amp; culture during your holidays. This is a unique way to experience all that Oporto has to offer: a huge cultural heritage and an endless number of beautiful beaches with a wide variety of waves for every level, just 15 minutes away. In the North of Portugal you will be able to surf more than&nbsp;20 surf spots during your surf holidays and have everything&nbsp;planned by the staff of Onda Pura.\u003C/p\u003E\n\u003Cp style=\"text-align: justify;\"\u003E\u003Cem\u003EGet to live the most incredible surf holidays, in a relaxing environment!&nbsp;\u003C/em\u003E\u003C/p\u003E\n\u003Cp style=\"text-align: justify;\"\u003EThe hostel \u003C/p\u003E\n\u003Cp style=\"text-align: justify;\"\u003EYou'll be staying in Casa Rietsh HOSTEL, one of the newest hostels in Porto. Enjoy the fantastic beaches of northern Portugal. You'll also enjoy the superb cuisine, culture and the best corners of the Portuguese city known for its imposing bridges. It is a two minute walk from the surfing centre.\u003C/p\u003E\n\u003Cp style=\"text-align: justify;\"\u003EThe surfing spot\u003C/p\u003E\n\u003Cp style=\"text-align: justify;\"\u003EGet to know the&nbsp;excellent, crowd-less beach breaks, where you can enjoy great surf sessions, every day, and all year long. In this region you&rsquo;ll find a temperate climate with consistent surf, a culturally rich city, full of surprises, which will make your holidays unique!\u003C/p\u003E\n\u003Cp style=\"text-align: justify;\"\u003EThe programme\u003C/p\u003E\n\u003Cp style=\"text-align: justify;\"\u003EThere are two options to choose from: either the 3 nights/3 days options either the 5 nights/6 days option. In both cases you will have two hours of surfing class per day. The programme is specialised for beginners who really wish to progress rapidly in a \"surfer's\" environment. You will learn the basic techniques and how to choose the right wave! The experienced instructors of Onda Pura will teach you everything they've learned through the years - which board is the best for every type of wave, the tricks and hops, and the technique to be the best surfer in the area! All classes are done in groups of 8 people max.&nbsp;\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/03/ddef9c61c37629d0c9705e4078182bad.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/03/df30f1d983ec2a32e27bf45f6c06bfa7.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2020/01/dc004c55c2f048ec77d1618a187b4ef7.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/03/644986f83db9614464a3e5abf80991f7.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/03/a72e956345e4e8e8a3a764d37e7a3c1f.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/03/f287d2a9ffd0aa2a5d0ca0ef3558bc43.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/03/00eaa616a04d7ce267d74fb2053837a3.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/03/395237b1ae7a1dd5f408938c336c7f4b.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/03/c79806ba92e056696d33e1a0283fdd4d.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/03/f91965fc6cd02331bde201dbb2f8eaa2.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2020/01/672ab328d7db6d0a165c5a6415c3472f.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/03/b9bba15931d384fc391d51731370ca3f.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2020/01/bb4fdc5636232d826a4c67aa313298b5.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/03/672f3700f4ee19f11f1d6ad2bdc6ecd7.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/03/5d5a4b0c5653a488257d4890af9fb265.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2020/01/397ff8e60fa4f7365dea8d46f7b3b40c.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/03/09a1f218e401372eb4be8416ad456ecb.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2020/01/f8564ce79f5c33560a9476dd7924be76.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2020/01/71524b0c1ccf10380cefb52d58eacff1.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2020/01/d24cd1c7ef79b43e4e02c62b2310bbc7.jpeg"
            ],
            "price": {
                "amount": "270.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Surf lessons on Matosinhos Beach, Porto",
            "geoCode": {
                "latitude": 41.174333,
                "longitude": -8.688314
            },
            "description": {
                "short": "Fish Surf School guarantees that with the support of their certified coaches, you’ll learn to surf quickly and safely!",
                "full": "\u003Cp\u003EFish Surf School guarantees that with the support of their certified coaches, you&rsquo;ll learn to surf quickly and safely!\u003C/p\u003E\n\u003Cp\u003EBeing split up by experience levels means you will progress easily thanks to the experienced guides, who'll help you move towards becoming an independent surfer. It doesn&rsquo;t matter if you&rsquo;re a beginner or you can already ride some waves, you will definitely be able to improve your skills, learn some theory, and have a great time.\u003C/p\u003E\n\u003Cp\u003EThe Praia de Matosinhos Beach is the largest beach with easy access from central Porto. Matosinhos Beach has two different spots, one is a beach sheltered by a large breakwater, which makes it a good option in massive swells. The other is a much more consistent wave and best at lower tide, and these will be the waves that you will start your learning.\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong\u003EGroup lessons\u003C/strong\u003E\u003Cbr /\u003EYou will have 2 hours of pure surfing with the support and training with certified coaches, including all the stuff you need (surfboard adjusted to your level and nice &amp; clean wetsuit). The expert team has taught 5-year olds, and their grandfathers, and even if you are not at ease with the sea, they know exactly where to get the waves suited for you!\u003C/p\u003E\n\u003Cp\u003E\u003Cstrong\u003EPrivate lessons\u003C/strong\u003E\u003Cbr /\u003EFor those wishing a more tailor-made service, this is the most personalized surf lessons you can get. With a surf coach just for you, you'll have the support you need! They will tweak your moves, give you detailed tips for increasing performance, and make sure you get the most out of your surf lesson!\u003C/p\u003E\n\u003Cdiv id=\"gtx-trans\" style=\"position: absolute; left: -83px; top: -14px;\"\u003E&nbsp;\u003C/div\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2020/05/ece81a2f2f370255d9b699e43a533974.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/06/8a03404cb1145c86b01fd75c3bc7fc09.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/06/aacc447c7559eb14fd63760fe2f96ff4.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/06/8051a7321f4e43ab0b71fc5c5c540819.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2020/05/d707a4f837e092a123a07a8959e4d28c.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2020/05/39ade9d6a2d14045ba7590c779cfda48.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/06/b55d5df24f578fcf24816b32f35d7c2f.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2020/05/c82c49d0db01217171c6e311ed98c4af.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/06/4a168a4462d00a82048fd5c3ccb7f654.jpeg"
            ],
            "price": {
                "amount": "20.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Surf lessons and courses on Matosinhos Beach, Porto",
            "geoCode": {
                "latitude": 41.174574,
                "longitude": -8.690133
            },
            "description": {
                "short": "Surfing Life Club is based on Matosinhos Beach in Porto, one of the most spectacular Portuguese surf spots coveted by water sport lovers around the world.",
                "full": "\u003Cp\u003ESurfing Life Club is based on Matosinhos Beach&nbsp;in Porto, one of the most spectacular Portuguese surf spots coveted by water sport lovers around the world. \u003C/p\u003E\n\u003Cp\u003EThe surf lessons&nbsp;focus on 5 key areas to have you up and surfing with confidence and style. With years of experience the expert team at Surfing Life Club has developed superior instructional techniques to assist all levels of surfers from beginners to advanced. You can find lessons for beginners, intermediate, pre-competition and&nbsp;competition levels.\u003C/p\u003E\n\u003Cp\u003EFor those of you who want to try a more one to one approach can go for the private surf lessons.\u003C/p\u003E\n\u003Cp\u003EPrivate lessons are ideal for those who are looking to evolve quickly with constant monitoring.\u003C/p\u003E\n\u003Cp\u003EWith private lessons, students experience all the comfort and enjoyment that result from individualised attention. In this type of lesson the teacher can give exclusive attention to the student, giving indications to the student's reality, adapting better the equipment, sea conditions and your surfing level, aiming to achieve faster and more efficient results.\u003C/p\u003E\n\u003Cp\u003EAnother advantage is that classes can be on different beaches and on dates and times that meet the needs of the client, making surfing even easier.\u003C/p\u003E\n\u003Cp\u003EPrivate lessons can be given up to 3 students, provided with the consent of each person.&nbsp;\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/06/5ae9d84dade8a5cace8c04d8ce46a4b6.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/06/624ca6180809f0d21fbaf4b245787126.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/06/bf485139384bd48250ee8fb5bacbbd7d.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/06/b537b5c483efe17d6f709c4125e9b2bf.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/03/7e0070ffb1ba85d298a1b323df7fc155.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/06/2353bf3cb1838bc57e695752cdf81574.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/06/5f8eb19e15b8cdcda973fa767035c0e7.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/06/561f88cc4da733f324b47c6cb39139f9.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/06/683fdffb111067b8c7fe2e47e3c3ad2e.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/03/51d41d1cc1a230f9833f3f3e4cd32e30.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/03/90f14ce9b15cd48055606eb10c661725.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/03/38481f5ec20bb4a973272a02631b78a1.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/06/e6956aa60c995e8b930913383f10bb6e.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/06/16ba9d6ef8495c4102634d8a14f6bad2.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2017/06/553d2efd925a4b2b61b63cc7f0be20cf.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/03/cae8c23f3fbb8deada79758a197b0a81.jpeg"
            ],
            "price": {
                "amount": "20.0",
                "currencyCode": "EUR"
            }
        },
        {
            "name": "Canyon of Rio de Frades near Porto",
            "geoCode": {
                "latitude": 41.157211,
                "longitude": -8.62855
            },
            "description": {
                "short": "The Rio de Frades canyon is located in Serra da Freita, a mountain range in Portugal, situated an hour away from Porto",
                "full": "\u003Cp\u003EAre you looking to do something different whilst on vacation in the beautiful city of Porto? Then you must try out the canyoning adventures Detours has for you!\u003C/p\u003E\n\u003Cp\u003EThe Rio de Frades canyon is located in Serra da Freita, a mountain range in Portugal,&nbsp;situated an&nbsp;hour away from Porto. It has two sections lower part&nbsp;&amp; upper part; depending on your level of experience, the tour will be adapted to you.&nbsp;\u003C/p\u003E\n\u003Cp\u003EThe lower part, which happens to be the easiest part, has two abseils, one of&nbsp;7 m. and another one of 13 m. and jumps that vary&nbsp;between&nbsp;2 m. up to&nbsp;10 m. high! \u003Cbr /\u003EThe upper part is much more challenging; you&rsquo;ll abseil down&nbsp;70 m. high, jump off heights that go from&nbsp;4 m. up to 11 m. and swim in natural water pools!\u003C/p\u003E\n\u003Cp\u003EOnce the journey is done, you will enjoy a picnic, provided by Detours, so you can relax and enjoy the beautiful scenery!\u003C/p\u003E"
            },
            "rating": [null],
            "pictures": [
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/07/69b62aa5b5bbec0fbc71ab9c1ecda2ea.png",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/07/5938f00f7e02149b39473de8107a6801.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/07/0ada8ed2a7ef0b98496ebcd0415d1cd5.jpeg",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/07/6bcd7b272d680abd3b2119640fb7d9ca.png",
                "https://media.manawa.com/cache/activity_gallery_zoom_770x500/media/2019/07/25d9ddaed6cabc3ae1e8d93602f18e7d.png"
            ],
            "price": {
                "amount": "85.0",
                "currencyCode": "EUR"
            }
        }
    ]
}