import React from "react";
import ReactDOM from "react-dom/client";
import resimg from "./res-image.avif";


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

    return (
        <div className="res-card">
            <img className="res-image"
            src={resimg} alt="resimage"></img>
            <h3>{resData.info.name}</h3>
            {/* <h4>{resData.info.cuisine.join().name}</h4> */}
            <h4>{resData.info.rating.aggregate_rating} stars</h4>
            <h4>{resData.info.cfo.text}</h4>
            <h4>{resData.order.deliveryTime}</h4>
            
        </div>
    );
};

const resObj =
//  [
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
    }
    // {
    //     "type": "restaurant",
    //     "info": {
    //         "resId": 18138627,
    //         "name": "Madhapur Bawarchi",
    //         "image": {
    //             "url": "https://b.zmtcdn.com/data/pictures/7/18138627/9864d1e2c2390f75bbbfa3301ec8b1df_o2_featured_v2.jpg"
    //         },
    //         "o2FeaturedImage": {
    //             "url": "https://b.zmtcdn.com/data/pictures/chains/7/18138627/71bb4e951df16417a0590590a7ff87df_o2_featured_v2.jpg"
    //         },
    //         "rating": {
    //             "has_fake_reviews": 0,
    //             "aggregate_rating": "3.8",
    //             "rating_text": "3.8",
    //             "rating_subtitle": "Good",
    //             "rating_color": "9ACD32",
    //             "votes": "113.3K",
    //             "subtext": "REVIEWS",
    //             "is_new": false
    //         },
    //         "ratingNew": {
    //             "newlyOpenedObj": null,
    //             "suspiciousReviewObj": null,
    //             "ratings": {
    //                 "DINING": {
    //                     "rating_type": "DINING",
    //                     "rating": "3.7",
    //                     "reviewCount": "970",
    //                     "reviewTextSmall": "970 Reviews",
    //                     "subtext": "970 Dining Reviews",
    //                     "color": "#1C1C1C",
    //                     "ratingV2": "3.7",
    //                     "subtitle": "DINING",
    //                     "sideSubTitle": "Dining Ratings",
    //                     "bgColorV2": {
    //                         "type": "green",
    //                         "tint": "600"
    //                     },
    //                     "newOnDining": false
    //                 },
    //                 "DELIVERY": {
    //                     "rating_type": "DELIVERY",
    //                     "rating": "4.0",
    //                     "reviewCount": "112.4K",
    //                     "reviewTextSmall": "112.4K Reviews",
    //                     "subtext": "112.4K Delivery Reviews",
    //                     "color": "#E23744",
    //                     "ratingV2": "4.0",
    //                     "subtitle": "DELIVERY",
    //                     "sideSubTitle": "Delivery Ratings",
    //                     "bgColorV2": {
    //                         "type": "green",
    //                         "tint": "700"
    //                     },
    //                     "newOnDelivery": false,
    //                     "bucketRatings": {
    //                         "buckets": [
    //                             {
    //                                 "title": "Under 4 km",
    //                                 "bgColor": {
    //                                     "type": "green",
    //                                     "tint": "700"
    //                                 },
    //                                 "rating": "4.0"
    //                             },
    //                             {
    //                                 "title": "4 km to 7 km",
    //                                 "bgColor": {
    //                                     "type": "green",
    //                                     "tint": "600"
    //                                 },
    //                                 "rating": "3.7"
    //                             },
    //                             {
    //                                 "title": "Above 7 km",
    //                                 "bgColor": {
    //                                     "type": "green",
    //                                     "tint": "600"
    //                                 },
    //                                 "rating": "3.6"
    //                             }
    //                         ],
    //                         "tooltip": {
    //                             "title": "For orders under 4 km",
    //                             "bgColor": {
    //                                 "type": "green",
    //                                 "tint": "050"
    //                             },
    //                             "borderColor": {
    //                                 "type": "green",
    //                                 "tint": "300"
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         },
    //         "cft": {
    //             "text": "₹500 for two"
    //         },
    //         "cfo": {
    //             "text": "₹200 for one"
    //         },
    //         "locality": {
    //             "name": "Madhapur, Hyderabad",
    //             "address": "1-98/8, Opposite SBI Bank, Madhapur, Hyderabad",
    //             "localityUrl": "hyderabad/madhapur-restaurants"
    //         },
    //         "timing": {
    //             "text": "",
    //             "color": ""
    //         },
    //         "cuisine": 
    //         [
    //             {
    //                 "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
    //                 "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
    //                 "name": "Biryani"
    //             },
    //             {
    //                 "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
    //                 "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
    //                 "name": "Chinese"
    //             },
    //             {
    //                 "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
    //                 "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
    //                 "name": "North Indian"
    //             },
    //             {
    //                 "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
    //                 "url": "https://www.zomato.com/hyderabad/restaurants/south-indian/",
    //                 "name": "South Indian"
    //             },
    //             {
    //                 "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
    //                 "url": "https://www.zomato.com/hyderabad/restaurants/kebab/",
    //                 "name": "Kebab"
    //             },
    //             {
    //             //     "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
    //             //     "url": "https://www.zomato.com/hyderabad/restaurants/mughlai/",
    //             //     "name": "Mughlai"
    //             },
    //         ],
    //         "should_ban_ugc": false,
    //         "costText": {
    //             "text": "₹200 for one"
    //         }
    //     },
    //     "order": {
    //         "deliveryTime": "18 min",
    //         "isServiceable": true,
    //         "hasOnlineOrdering": true,
    //         "actionInfo": {
    //             "text": "Order Now",
    //             "clickUrl": "/hyderabad/madhapur-bawarchi-madhapur/order"
    //         }
    //     },
    //     "gold": [],
    //     "takeaway": [],
    //     "cardAction": {
    //         "text": "",
    //         "clickUrl": "/hyderabad/madhapur-bawarchi-madhapur/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
    //         "clickActionDeeplink": ""
    //     },
    //     "distance": "2 km",
    //     "isPromoted": false,
    //     "promotedText": "",
    //     "trackingData": [
    //         {
    //             "table_name": "zsearch_events_log",
    //             "payload": "{\"search_id\":\"e6c027d6-70e7-4b2a-a5f3-471ea1041156\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18138627\",\"element_type\":\"listing\",\"rank\":2}",
    //             "event_names": {
    //                 "tap": "{\"action\":\"tap\"}",
    //                 "impression": "{\"action\":\"impression\"}"
    //             }
    //         }
    //     ],
    //     "allCTA": [],
    //     "promoOffer": "",
    //     "checkBulkOffers": true,
    //     "bulkOffers": [
    //         {
    //             "text": "Flat ₹150 OFF + ₹25 cashback",
    //             "color": {
    //                 "tint": "500",
    //                 "type": "blue"
    //             }
    //         }
    //     ],
    //     "isDisabled": false,
    //     "bottomContainers": []
    // },
    // {
    //     "type": "restaurant",
    //     "info": {
    //         "resId": 20183494,
    //         "name": "Lucky Multicuisine Restaurant",
    //         "image": {
    //             "url": "https://b.zmtcdn.com/data/dish_photos/b31/aed81716f4c6f6dc3a633b648af07b31.jpg"
    //         },
    //         "o2FeaturedImage": {
    //             "url": "https://b.zmtcdn.com/data/pictures/chains/8/18948828/f970cc68d7d250e4ab1614b69ba704e0_o2_featured_v2.jpg"
    //         },
    //         "rating": {
    //             "has_fake_reviews": 0,
    //             "aggregate_rating": "3.5",
    //             "rating_text": "3.5",
    //             "rating_subtitle": "Good",
    //             "rating_color": "9ACD32",
    //             "votes": "22.9K",
    //             "subtext": "REVIEWS",
    //             "is_new": false
    //         },
    //         "ratingNew": {
    //             "newlyOpenedObj": null,
    //             "suspiciousReviewObj": null,
    //             "ratings": {
    //                 "DINING": {
    //                     "rating_type": "DINING",
    //                     "rating": "3.3",
    //                     "reviewCount": "30",
    //                     "reviewTextSmall": "30 Reviews",
    //                     "subtext": "30 Dining Reviews",
    //                     "color": "#1C1C1C",
    //                     "ratingV2": "3.3",
    //                     "subtitle": "DINING",
    //                     "sideSubTitle": "Dining Ratings",
    //                     "bgColorV2": {
    //                         "type": "green",
    //                         "tint": "500"
    //                     },
    //                     "newOnDining": false
    //                 },
    //                 "DELIVERY": {
    //                     "rating_type": "DELIVERY",
    //                     "rating": "3.9",
    //                     "reviewCount": "22.8K",
    //                     "reviewTextSmall": "22.8K Reviews",
    //                     "subtext": "22.8K Delivery Reviews",
    //                     "color": "#E23744",
    //                     "ratingV2": "3.9",
    //                     "subtitle": "DELIVERY",
    //                     "sideSubTitle": "Delivery Ratings",
    //                     "bgColorV2": {
    //                         "type": "green",
    //                         "tint": "600"
    //                     },
    //                     "newOnDelivery": false,
    //                     "bucketRatings": {
    //                         "buckets": [
    //                             {
    //                                 "title": "Under 4 km",
    //                                 "bgColor": {
    //                                     "type": "green",
    //                                     "tint": "600"
    //                                 },
    //                                 "rating": "3.9"
    //                             },
    //                             {
    //                                 "title": "4 km to 7 km",
    //                                 "bgColor": {
    //                                     "type": "green",
    //                                     "tint": "600"
    //                                 },
    //                                 "rating": "3.6"
    //                             },
    //                             {
    //                                 "title": "Above 7 km",
    //                                 "bgColor": {
    //                                     "type": "green",
    //                                     "tint": "600"
    //                                 },
    //                                 "rating": "3.6"
    //                             }
    //                         ],
    //                         "tooltip": {
    //                             "title": "For orders under 4 km",
    //                             "bgColor": {
    //                                 "type": "green",
    //                                 "tint": "050"
    //                             },
    //                             "borderColor": {
    //                                 "type": "green",
    //                                 "tint": "300"
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         },
    //         "cft": {
    //             "text": "₹1,100 for two"
    //         },
    //         "cfo": {
    //             "text": "₹450 for one"
    //         },
    //         "locality": {
    //             "name": "Madhapur, Hyderabad",
    //             "address": "1-74, Guttalabegumpet, Madhapur, Hyderabad",
    //             "localityUrl": "hyderabad/madhapur-restaurants"
    //         },
    //         "timing": {
    //             "text": "",
    //             "color": ""
    //         },
    //         "cuisine": [
    //             {
    //                 "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
    //                 "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
    //                 "name": "Chinese"
    //             },
    //             {
    //                 "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
    //                 "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
    //                 "name": "North Indian"
    //             },
    //             {
    //                 "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
    //                 "url": "https://www.zomato.com/hyderabad/restaurants/mughlai/",
    //                 "name": "Mughlai"
    //             },
    //             {
    //                 "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
    //                 "url": "https://www.zomato.com/hyderabad/restaurants/sea-food/",
    //                 "name": "Seafood"
    //             }
    //         ],
    //         "should_ban_ugc": false,
    //         "costText": {
    //             "text": "₹450 for one"
    //         }
    //     },
    //     "order": {
    //         "deliveryTime": "22 min",
    //         "isServiceable": true,
    //         "hasOnlineOrdering": true,
    //         "actionInfo": {
    //             "text": "Order Now",
    //             "clickUrl": "/hyderabad/lucky-multicuisine-restaurant-1-madhapur/order"
    //         }
    //     },
    //     "gold": [],
    //     "takeaway": [],
    //     "cardAction": {
    //         "text": "",
    //         "clickUrl": "/hyderabad/lucky-multicuisine-restaurant-1-madhapur/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
    //         "clickActionDeeplink": ""
    //     },
    //     "distance": "1.8 km",
    //     "isPromoted": false,
    //     "promotedText": "",
    //     "trackingData": [
    //         {
    //             "table_name": "zsearch_events_log",
    //             "payload": "{\"search_id\":\"e6c027d6-70e7-4b2a-a5f3-471ea1041156\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20183494\",\"element_type\":\"listing\",\"rank\":3}",
    //             "event_names": {
    //                 "tap": "{\"action\":\"tap\"}",
    //                 "impression": "{\"action\":\"impression\"}"
    //             }
    //         }
    //     ],
    //     "allCTA": [],
    //     "promoOffer": "",
    //     "checkBulkOffers": true,
    //     "bulkOffers": [
    //         {
    //             "text": "Free Double Ka Metha",
    //             "color": {
    //                 "tint": "500",
    //                 "type": "blue"
    //             }
    //         }
    //     ],
    //     "isDisabled": false,
    //     "bottomContainers": []
    // },
    // {
    //     "type": "restaurant",
    //     "info": {
    //         "resId": 19308872,
    //         "name": "Raju Gari Biryani",
    //         "image": {
    //             "url": "https://b.zmtcdn.com/data/pictures/2/19308872/4c35ce855e9a2550d168c95cccc49bc1_o2_featured_v2.jpg"
    //         },
    //         "o2FeaturedImage": {
    //             "url": "https://b.zmtcdn.com/data/pictures/2/19308872/b2c91bfeaa9bf133eb01214dbe987505_o2_featured_v2.jpg"
    //         },
    //         "rating": {
    //             "has_fake_reviews": 0,
    //             "aggregate_rating": "3.9",
    //             "rating_text": "3.9",
    //             "rating_subtitle": "Good",
    //             "rating_color": "9ACD32",
    //             "votes": "119.7K",
    //             "subtext": "REVIEWS",
    //             "is_new": false
    //         },
    //         "ratingNew": {
    //             "newlyOpenedObj": null,
    //             "suspiciousReviewObj": null,
    //             "ratings": {
    //                 "DINING": {
    //                     "rating_type": "DINING",
    //                     "rating": "",
    //                     "reviewCount": "0",
    //                     "reviewTextSmall": "0 Reviews",
    //                     "subtext": "Does not offer Dining",
    //                     "color": "",
    //                     "ratingV2": "-",
    //                     "subtitle": "DINING",
    //                     "sideSubTitle": "Dining Ratings",
    //                     "bgColorV2": {
    //                         "type": "grey",
    //                         "tint": "500"
    //                     },
    //                     "newOnDining": false
    //                 },
    //                 "DELIVERY": {
    //                     "rating_type": "DELIVERY",
    //                     "rating": "4.0",
    //                     "reviewCount": "119.7K",
    //                     "reviewTextSmall": "119.7K Reviews",
    //                     "subtext": "119.7K Delivery Reviews",
    //                     "color": "#E23744",
    //                     "ratingV2": "4.0",
    //                     "subtitle": "DELIVERY",
    //                     "sideSubTitle": "Delivery Ratings",
    //                     "bgColorV2": {
    //                         "type": "green",
    //                         "tint": "700"
    //                     },
    //                     "newOnDelivery": false,
    //                     "bucketRatings": {
    //                         "buckets": [
    //                             {
    //                                 "title": "Under 4 km",
    //                                 "bgColor": {
    //                                     "type": "green",
    //                                     "tint": "700"
    //                                 },
    //                                 "rating": "4.0"
    //                             },
    //                             {
    //                                 "title": "4 km to 7 km",
    //                                 "bgColor": {
    //                                     "type": "green",
    //                                     "tint": "600"
    //                                 },
    //                                 "rating": "3.9"
    //                             },
    //                             {
    //                                 "title": "Above 7 km",
    //                                 "bgColor": {
    //                                     "type": "green",
    //                                     "tint": "600"
    //                                 },
    //                                 "rating": "3.7"
    //                             }
    //                         ],
    //                         "tooltip": {
    //                             "title": "For orders under 4 km",
    //                             "bgColor": {
    //                                 "type": "green",
    //                                 "tint": "050"
    //                             },
    //                             "borderColor": {
    //                                 "type": "green",
    //                                 "tint": "300"
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         },
    //         "cft": {
    //             "text": "₹300 for two"
    //         },
    //         "cfo": {
    //             "text": "₹150 for one"
    //         },
    //         "locality": {
    //             "name": "Madhapur, Hyderabad",
    //             "address": "Plot 84, Survey 11, Khanamet Village, Ayyapa Society Road, Madhapur, Hyderabad",
    //             "localityUrl": "hyderabad/madhapur-restaurants"
    //         },
    //         "timing": {
    //             "text": "",
    //             "color": ""
    //         },
    //         "cuisine": [
    //             {
    //                 "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
    //                 "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
    //                 "name": "Biryani"
    //             },
    //             {
    //                 "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
    //                 "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
    //                 "name": "Chinese"
    //             }
    //         ],
    //         "should_ban_ugc": false,
    //         "costText": {
    //             "text": "₹150 for one"
    //         }
    //     },
    //     "order": {
    //         "deliveryTime": "18 min",
    //         "isServiceable": true,
    //         "hasOnlineOrdering": true,
    //         "actionInfo": {
    //             "text": "Order Now",
    //             "clickUrl": "/hyderabad/raju-gari-biryani-1-madhapur/order"
    //         }
    //     },
    //     "gold": [],
    //     "takeaway": [],
    //     "cardAction": {
    //         "text": "",
    //         "clickUrl": "/hyderabad/raju-gari-biryani-1-madhapur/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
    //         "clickActionDeeplink": ""
    //     },
    //     "distance": "2.3 km",
    //     "isPromoted": false,
    //     "promotedText": "",
    //     "trackingData": [
    //         {
    //             "table_name": "zsearch_events_log",
    //             "payload": "{\"search_id\":\"e6c027d6-70e7-4b2a-a5f3-471ea1041156\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308697137140465664\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19308872\",\"element_type\":\"listing\",\"rank\":4}",
    //             "event_names": {
    //                 "tap": "{\"action\":\"tap\"}",
    //                 "impression": "{\"action\":\"impression\"}"
    //             }
    //         }
    //     ],
    //     "allCTA": [],
    //     "promoOffer": "",
    //     "checkBulkOffers": true,
    //     "bulkOffers": [
    //         {
    //             "text": "Flat ₹125 OFF + ₹25 cashback",
    //             "color": {
    //                 "tint": "500",
    //                 "type": "blue"
    //             }
    //         }
    //     ],
    //     "isDisabled": false,
    //     "bottomContainers": []
    // }
// ]



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
                <Restrocard resData= {resObj}/>
                
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



