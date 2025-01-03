import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div className="app-logo">CheatMeal</div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Offers</li>
                    <li>Login</li>
                    <li>Signin</li>
                </ul>
            </div>
        </div>
    );
};
const Restrocard = (props) => {
    const { resData} = props;

// const {image.url, name, rating.aggregate_rating, cfo.text, } = resData?.info;

    return (
        <div className="res-card">
            <img className="res-image"
            src={resData.info.image.url} alt="resimage"></img>
            <h3>{resData.info.name}</h3>
            {/* <h4>{resData.info.cuisine.join().name} </h4> */}
            <h4>{resData.info.rating.aggregate_rating} stars</h4>
            <h4>{resData.info.cfo.text}</h4>
            <h4>{resData.order.deliveryTime}</h4>
            
        </div>
    );
};

const resList =
 [
    {
        "type": "restaurant",
        "info": {
            "resId": 97380,
            "name": "King Of Kebabs - One Drive In",
            "image": {
                "url": "https://b.zmtcdn.com/data/dish_photos/fd1/612de0e9083f5e531c71b43adc943fd1.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/0/97380/6466d6ac64ca092a98661f86670b7ee5_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.7",
                "rating_text": "3.7",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "3,565",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.3",
                        "reviewCount": "59",
                        "reviewTextSmall": "59 Reviews",
                        "subtext": "59 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.3",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "3,506",
                        "reviewTextSmall": "3,506 Reviews",
                        "subtext": "3,506 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.1"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.9"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.9"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "₹650 for two"
            },
            "cfo": {
                "text": "₹300 for one"
            },
            "locality": {
                "name": "Syala Drive In, Jubilee Hills, Hyderabad",
                "address": "House 8-2-293/82/A/265-J, Road 10, Jubilee Hills, Hyderabad",
                "localityUrl": "hyderabad/restaurants/in/syala-drive-in-jubilee-hills"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/kebab/",
                    "name": "Kebab"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/rolls/",
                    "name": "Rolls"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDlcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/hyderabadi/",
                    "name": "Hyderabadi"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹300 for one"
            }
        },
        "order": {
            "deliveryTime": "31 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/hyderabad/king-of-kebabs-one-drive-in-jubilee-hills/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/king-of-kebabs-one-drive-in-jubilee-hills/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
            "clickActionDeeplink": ""
        },
        "distance": "563 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e6c027d6-70e7-4b2a-a5f3-471ea1041156\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"97380\",\"element_type\":\"listing\",\"rank\":1}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "₹125 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18138627,
            "name": "Madhapur Bawarchi",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/7/18138627/9864d1e2c2390f75bbbfa3301ec8b1df_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/7/18138627/71bb4e951df16417a0590590a7ff87df_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.8",
                "rating_text": "3.8",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "113.3K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.7",
                        "reviewCount": "970",
                        "reviewTextSmall": "970 Reviews",
                        "subtext": "970 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.7",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.0",
                        "reviewCount": "112.4K",
                        "reviewTextSmall": "112.4K Reviews",
                        "subtext": "112.4K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.0",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.0"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.7"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.6"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "₹500 for two"
            },
            "cfo": {
                "text": "₹200 for one"
            },
            "locality": {
                "name": "Madhapur, Hyderabad",
                "address": "1-98/8, Opposite SBI Bank, Madhapur, Hyderabad",
                "localityUrl": "hyderabad/madhapur-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": 
            [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/south-indian/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/kebab/",
                    "name": "Kebab"
                },
                {
                //     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
                //     "url": "https://www.zomato.com/hyderabad/restaurants/mughlai/",
                //     "name": "Mughlai"
                },
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹200 for one"
            }
        },
        "order": {
            "deliveryTime": "18 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/hyderabad/madhapur-bawarchi-madhapur/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/madhapur-bawarchi-madhapur/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
            "clickActionDeeplink": ""
        },
        "distance": "2 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e6c027d6-70e7-4b2a-a5f3-471ea1041156\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18138627\",\"element_type\":\"listing\",\"rank\":2}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "Flat ₹150 OFF + ₹25 cashback",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20183494,
            "name": "Lucky Multicuisine Restaurant",
            "image": {
                "url": "https://b.zmtcdn.com/data/dish_photos/b31/aed81716f4c6f6dc3a633b648af07b31.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/8/18948828/f970cc68d7d250e4ab1614b69ba704e0_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.5",
                "rating_text": "3.5",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "22.9K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.3",
                        "reviewCount": "30",
                        "reviewTextSmall": "30 Reviews",
                        "subtext": "30 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.3",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.9",
                        "reviewCount": "22.8K",
                        "reviewTextSmall": "22.8K Reviews",
                        "subtext": "22.8K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.9",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.9"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.6"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.6"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "₹1,100 for two"
            },
            "cfo": {
                "text": "₹450 for one"
            },
            "locality": {
                "name": "Madhapur, Hyderabad",
                "address": "1-74, Guttalabegumpet, Madhapur, Hyderabad",
                "localityUrl": "hyderabad/madhapur-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/mughlai/",
                    "name": "Mughlai"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/sea-food/",
                    "name": "Seafood"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹450 for one"
            }
        },
        "order": {
            "deliveryTime": "22 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/hyderabad/lucky-multicuisine-restaurant-1-madhapur/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/lucky-multicuisine-restaurant-1-madhapur/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
            "clickActionDeeplink": ""
        },
        "distance": "1.8 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e6c027d6-70e7-4b2a-a5f3-471ea1041156\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20183494\",\"element_type\":\"listing\",\"rank\":3}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "Free Double Ka Metha",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19308872,
            "name": "Raju Gari Biryani",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/2/19308872/4c35ce855e9a2550d168c95cccc49bc1_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/2/19308872/b2c91bfeaa9bf133eb01214dbe987505_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.9",
                "rating_text": "3.9",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "119.7K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.0",
                        "reviewCount": "119.7K",
                        "reviewTextSmall": "119.7K Reviews",
                        "subtext": "119.7K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.0",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.0"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.9"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.7"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "₹300 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "Madhapur, Hyderabad",
                "address": "Plot 84, Survey 11, Khanamet Village, Ayyapa Society Road, Madhapur, Hyderabad",
                "localityUrl": "hyderabad/madhapur-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
                    "name": "Chinese"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        "order": {
            "deliveryTime": "18 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/hyderabad/raju-gari-biryani-1-madhapur/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/raju-gari-biryani-1-madhapur/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
            "clickActionDeeplink": ""
        },
        "distance": "2.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e6c027d6-70e7-4b2a-a5f3-471ea1041156\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19308872\",\"element_type\":\"listing\",\"rank\":4}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "Flat ₹125 OFF + ₹25 cashback",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18597056,
            "name": "Sarvi",
            "image": {
                "url": "https://b.zmtcdn.com/data/dish_photos/268/902c14eec4d665064c6d355930df7268.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/0/93000/d7553709103f219600dae67154ac724e_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "9,131",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.3",
                        "reviewCount": "9,131",
                        "reviewTextSmall": "9,131 Reviews",
                        "subtext": "9,131 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.3"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.2"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.1"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "₹1,000 for two"
            },
            "cfo": {
                "text": "₹400 for one"
            },
            "locality": {
                "name": "Madhapur, Hyderabad",
                "address": "House 1-100/1, Opposite Indian Oil Petrol Pump, Madhapur, Hyderabad",
                "localityUrl": "hyderabad/madhapur-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/mughlai/",
                    "name": "Mughlai"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/kebab/",
                    "name": "Kebab"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/sea-food/",
                    "name": "Seafood"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹400 for one"
            }
        },
        "order": {
            "deliveryTime": "16 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/hyderabad/sarvi-madhapur/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/sarvi-madhapur/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
            "clickActionDeeplink": ""
        },
        "distance": "2 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e6c027d6-70e7-4b2a-a5f3-471ea1041156\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18597056\",\"element_type\":\"listing\",\"rank\":5}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "Flat ₹150 OFF + ₹25 cashback",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18888655,
            "name": "Syala Kitchen",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/5/18888655/8615d93d35f826990e5497544823071f.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/5/18888655/eda4f9d7761c3855ae10b2870e2ed55b_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.9",
                "rating_text": "3.9",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "17.9K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.7",
                        "reviewCount": "107",
                        "reviewTextSmall": "107 Reviews",
                        "subtext": "107 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.7",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "17.8K",
                        "reviewTextSmall": "17.8K Reviews",
                        "subtext": "17.8K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.1"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.1"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.1"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "₹600 for two"
            },
            "cfo": {
                "text": "₹250 for one"
            },
            "locality": {
                "name": "Jubilee Hills, Hyderabad",
                "address": "8/3/229, D 77-79, Road 10-A, Venkatadri Hylam Colony, Jubilee Hills, Hyderabad",
                "localityUrl": "hyderabad/jubilee-hills-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/south-indian/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
                    "name": "North Indian"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹250 for one"
            }
        },
        "order": {
            "deliveryTime": "31 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/hyderabad/syala-kitchen-jubilee-hills/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/syala-kitchen-jubilee-hills/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
            "clickActionDeeplink": ""
        },
        "distance": "864 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e6c027d6-70e7-4b2a-a5f3-471ea1041156\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18888655\",\"element_type\":\"listing\",\"rank\":6}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "Flat ₹150 OFF + ₹25 cashback",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19743291,
            "name": "Krishnas Kitchen",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/1/19743291/3b09b8b86ac399f79f2ae0dfb3feca7a_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/1/19743291/3b09b8b86ac399f79f2ae0dfb3feca7a_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "780",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.3",
                        "reviewCount": "646",
                        "reviewTextSmall": "646 Reviews",
                        "subtext": "646 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.3",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.4",
                        "reviewCount": "134",
                        "reviewTextSmall": "134 Reviews",
                        "subtext": "134 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.4",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.4"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.4"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.1"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "₹1,400 for two"
            },
            "cfo": {
                "text": "₹600 for one"
            },
            "locality": {
                "name": "Madhapur, Hyderabad",
                "address": "Door 1-62/2/140, Kavuri Hills, Guttala Begumpet, Madhapur, Hyderabad",
                "localityUrl": "hyderabad/madhapur-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMlwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/andhra/",
                    "name": "Andhra"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹600 for one"
            }
        },
        "order": {
            "deliveryTime": "23 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/hyderabad/krishnas-kitchen-2-madhapur/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/krishnas-kitchen-2-madhapur/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
            "clickActionDeeplink": ""
        },
        "distance": "1.5 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e6c027d6-70e7-4b2a-a5f3-471ea1041156\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19743291\",\"element_type\":\"listing\",\"rank\":7}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 21509049,
            "name": "Dasara",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/9/21509049/710ed5060e9c7f54297242053d5533b9_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/9/21509049/710ed5060e9c7f54297242053d5533b9_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "575",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "575",
                        "reviewTextSmall": "575 Reviews",
                        "subtext": "575 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.2"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.0"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "4.0"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "₹1,200 for two"
            },
            "cfo": {
                "text": "₹500 for one"
            },
            "locality": {
                "name": "Jubilee Hills, Hyderabad",
                "address": "117/1, 8-2-293/82/A, Icrisat Colony, Circle 18, Sravanthi Nagar, Road 10, Jubilee Hills, Hyderabad",
                "localityUrl": "hyderabad/jubilee-hills-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/south-indian/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/mughlai/",
                    "name": "Mughlai"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/shake/",
                    "name": "Shake"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹500 for one"
            }
        },
        "order": {
            "deliveryTime": "28 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/hyderabad/dasara-jubilee-hills/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/dasara-jubilee-hills/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
            "clickActionDeeplink": ""
        },
        "distance": "1.1 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e6c027d6-70e7-4b2a-a5f3-471ea1041156\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21509049\",\"element_type\":\"listing\",\"rank\":8}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "Flat ₹125 OFF + ₹25 cashback",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18487720,
            "name": "Hitech Bawarchi Food Court",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/0/18487720/d6d79c5ae3960c7d484d27f703905ade_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": false
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.5",
                "rating_text": "3.5",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "20K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.2",
                        "reviewCount": "182",
                        "reviewTextSmall": "182 Reviews",
                        "subtext": "182 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.9",
                        "reviewCount": "19.8K",
                        "reviewTextSmall": "19.8K Reviews",
                        "subtext": "19.8K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.9",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.9"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.9"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.9"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "₹600 for two"
            },
            "cfo": {
                "text": "₹250 for one"
            },
            "locality": {
                "name": "Madhapur, Hyderabad",
                "address": "1-21/1, Madhapur, Hyderabad",
                "localityUrl": "hyderabad/madhapur-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/mughlai/",
                    "name": "Mughlai"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/sichuan/",
                    "name": "Sichuan"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹250 for one"
            }
        },
        "order": {
            "deliveryTime": "15 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/hyderabad/hitech-bawarchi-food-court-madhapur/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/hitech-bawarchi-food-court-madhapur/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
            "clickActionDeeplink": ""
        },
        "distance": "2 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e6c027d6-70e7-4b2a-a5f3-471ea1041156\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18487720\",\"element_type\":\"listing\",\"rank\":9}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "Flat ₹125 OFF + ₹25 cashback",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20375138,
            "name": "10 Biryanis",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/8/20375138/3ea25b890759c0da01ac0d284422ba8a_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/8/20375138/61c41b235d8e302cc9f3c2a3ec39fae2_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.9",
                "rating_text": "3.9",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "3,849",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.0",
                        "reviewCount": "118",
                        "reviewTextSmall": "118 Reviews",
                        "subtext": "118 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.0",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.9",
                        "reviewCount": "3,731",
                        "reviewTextSmall": "3,731 Reviews",
                        "subtext": "3,731 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.9",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.9"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.9"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.6"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "₹1,500 for two"
            },
            "cfo": {
                "text": "₹600 for one"
            },
            "locality": {
                "name": "Jubilee Hills, Hyderabad",
                "address": "House 8-2-293/82/A/70/401, Plot 70, Circle 18, Road 1, Jubilee Hills, Hyderabad",
                "localityUrl": "hyderabad/jubilee-hills-restaurants"
            },
            "timing": {
                "text": "Closes in 1 hour 32 minutes",
                "color": "#e5521f"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/mughlai/",
                    "name": "Mughlai"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/south-indian/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹600 for one"
            }
        },
        "order": {
            "deliveryTime": "32 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/hyderabad/10-biryanis-1-jubilee-hills/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/10-biryanis-1-jubilee-hills/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
            "clickActionDeeplink": ""
        },
        "distance": "1.1 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e6c027d6-70e7-4b2a-a5f3-471ea1041156\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20375138\",\"element_type\":\"listing\",\"rank\":10}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "10% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20492297,
            "name": "Dum Safar Biryani",
            "image": {
                "url": "https://b.zmtcdn.com/data/dish_photos/03f/d2b9a9014937533f32f81b11b46e203f.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/8/20492278/592a8cca200e838f3e3eac6eccf7917c_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.0",
                "rating_text": "4.0",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "300",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "300",
                        "reviewTextSmall": "300 Reviews",
                        "subtext": "300 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.1"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.8"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.8"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "₹350 for two"
            },
            "cfo": {
                "text": "₹150 for one"
            },
            "locality": {
                "name": "Jubilee Hills, Hyderabad",
                "address": "498, Alcazar Mall, Road 36, Venkatagiri, Jubilee Hills, Hyderabad",
                "localityUrl": "hyderabad/jubilee-hills-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/kebab/",
                    "name": "Kebab"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTkzXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/bbq/",
                    "name": "BBQ"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/beverages/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/desserts/",
                    "name": "Desserts"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹150 for one"
            }
        },
        "order": {
            "deliveryTime": "35 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/hyderabad/dum-safar-biryani-jubilee-hills/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/dum-safar-biryani-jubilee-hills/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
            "clickActionDeeplink": ""
        },
        "distance": "125 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e6c027d6-70e7-4b2a-a5f3-471ea1041156\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20492297\",\"element_type\":\"listing\",\"rank\":11}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19249315,
            "name": "Tilak's Kitchen",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/5/19249315/f422110fec4b864874401448c03e747d_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/5/19249315/f422110fec4b864874401448c03e747d_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.4",
                "rating_text": "4.4",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "871",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.5",
                        "reviewCount": "255",
                        "reviewTextSmall": "255 Reviews",
                        "subtext": "255 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.5",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "800"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.4",
                        "reviewCount": "616",
                        "reviewTextSmall": "616 Reviews",
                        "subtext": "616 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.4",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.4"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.2"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.1"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "₹600 for two"
            },
            "cfo": {
                "text": "₹250 for one"
            },
            "locality": {
                "name": "Madhapur, Hyderabad",
                "address": "Plot 111, Road 1, Kakathiya Hills, Madhapur, Hyderabad",
                "localityUrl": "hyderabad/madhapur-restaurants"
            },
            "timing": {
                "text": "Closes in 1 hour 2 minutes",
                "color": "#e5521f"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMlwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/andhra/",
                    "name": "Andhra"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/hyderabad/restaurants/south-indian/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/hyderabad/restaurants/desserts/",
                    "name": "Desserts"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹250 for one"
            }
        },
        "order": {
            "deliveryTime": "21 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/hyderabad/tilaks-kitchen-madhapur/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/hyderabad/tilaks-kitchen-madhapur/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
            "clickActionDeeplink": ""
        },
        "distance": "1.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"e6c027d6-70e7-4b2a-a5f3-471ea1041156\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19249315\",\"element_type\":\"listing\",\"rank\":12}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "Flat 10% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    }
]



const Body = () => {
    return (
        <div className="body">

            <div className="search-section">
                <div className="logo">CheatMeal</div>
                <div className="search">
                    search & button
                </div>
                <div className="location-filter">locations</div>
            </div>

            <div className="cards-container">
                {resList.map((restaurant) => ( <Restrocard key={restaurant.info.resId} resData= {restaurant} /> ))}
            </div>

        </div>
    );
};

const Footer = () => {
    return (
        <div></div>
    );
};


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)



