import React, { Component } from "react";
import DealToggle from "./DealToggle";

class Deals extends Component {
  data = [
    {
      restaurantName: "21 Steps",
      dealTitle: "Fall Special - 3 Course $40",
      dealDetails: [
        "Steaks and lamb chop have additional charge",
        "Open daily from 5:30 PM"
      ],
      website: "http://www.21steps.ca/",
      phoneNumber: "604-966-2121",
      image: "https://imgur.com/TOt1HVz.jpg"
    },
    {
      restaurantName: "All Seasons Grill",
      dealTitle: "Three Course Menu $24.95 Everyday",
      dealDetails: [
        "Include soup or salad + any main course + dessert",
        "Happy hour 3-closing everyday"
      ],
      website: "https://www.bgurbangrillwhistler.com/",
      phoneNumber: "604-905-5090",
      image: "https://imgur.com/IYOVhyE.jpg"
    },
    {
      restaurantName: "Alta Bistro",
      dealTitle: "Fall Three Course Special $39",
      dealDetails: ["Sunday - Friday", "Book ahead to get in"],
      website: "http://www.altabistro.com/",
      phoneNumber: "604-932-2582",
      image: "https://imgur.com/bs5s1IC.jpg"
    },
    {
      restaurantName: "Araxi",
      dealTitle: "$38 - Five Course Anniversary Menu",
      dealDetails: [
        "Beginning September 29th",
        "Offered Sundays - Thursdays",
        "Reservations recommended"
      ],
      website: "https://www.araxi.com/",
      phoneNumber: "604-932-4540",
      image: "https://imgur.com/8HhdvI9.jpg"
    },
    {
      restaurantName: "Aura Restaurant",
      dealTitle: "3 Courses For $39 + Wine Pairings For $29",
      dealDetails: [
        "Try our new prix fixe dinner menu!",
        "Located at Nita Lake lodge"
      ],
      website: "http://www.nitalakelodge.com/dining/aura-restaurant-en.html",
      phoneNumber: "604-966-5711",
      image: "https://imgur.com/4OOZ9lu.jpg"
    },
    {
      restaurantName: "Bar Oso",
      dealTitle: "$25 3-Course Dinner",
      dealDetails: [
        "Beginning September 29th",
        "Available Sundays - Thursdays from 5 PM"
      ],
      website: "https://baroso.ca/",
      phoneNumber: "604-962-4540",
      image: "https://imgur.com/Wz0VzGi.jpg"
    },
    {
      restaurantName: "Basalt Wine & Salumeria",
      dealTitle: "3 Course Seasonal Dinner Menu",
      dealDetails: [
        "$26 weekdays",
        "$30 weekends and holidays",
        "Closed Tuesdays & Wednesdays"
      ],
      website: "https://www.basaltwhistler.com/",
      phoneNumber: "604-962-9011",
      image: "https://imgur.com/Iv2t8ZS.jpg"
    },
    {
      restaurantName: "Brickworks",
      dealTitle: "Signature Of The Day - $18",
      dealDetails: [
        "Enjoy a different daily Signature Dish from Sunday to Thursday, 5pm-12am",
        "$15 Burger & Bev, Daily 12-5pm"
      ],
      website: "http://thebrickworks.ca/",
      phoneNumber: "604-962-2929",
      image: "https://imgur.com/4G5Vtwo.jpg"
    },
    {
      restaurantName: "Hunter Gather",
      dealTitle: "$9.99 Fall Down Menu Deal",
      dealDetails: ["All day every day from noon to 9 PM"],
      website: "https://huntergatherwhistler.com/",
      phoneNumber: "604-966-2372",
      image: "https://imgur.com/ek7rXys.jpg"
    },
    {
      restaurantName: "Il Caminetto",
      dealTitle: "$39 - Four Course Prix Fixe Menu",
      dealDetails: [
        "Offered Sundays - Thursdays",
        "Dinner from 5:30 PM",
        "Reservations recommended"
      ],
      website: "https://www.ilcaminetto.ca/",
      phoneNumber: "604-932-4442",
      image: "https://imgur.com/QJLwg5L.jpg"
    },
    {
      restaurantName: "Main Street Noodles",
      dealTitle: "Free Delivery With Code BROKETOBER",
      dealDetails: [
        "Spend 20$ or more and use code BROKETOBER for free delivery",
        "5 PM - 12 AM"
      ],
      website: "http://www.mainstnoodles.com/",
      phoneNumber: "604-962-1068",
      image: "https://imgur.com/zzuZCCK.jpg"
    },
    {
      restaurantName: "Nagomi Sushi",
      dealTitle: "$30 Fall Special Menu",
      dealDetails: [
        "Available 7 days a week until Sunday Oct 13th",
        "Bookings strongly recommended"
      ],
      website: "http://nagomisushi.com/",
      phoneNumber: "604-962-0404",
      image: "https://imgur.com/igPhzmC.jpg"
    },
    {
      restaurantName: "Pasta Lupino",
      dealTitle: "Dinner for 2 for $49",
      dealDetails: [
        "Comes with a bottle of wine (or a jug of beer)",
        "Special available for dine-in only from 5-9pm",
        "No reservations"
      ],
      website: "http://pastalupino.com/",
      phoneNumber: "604-905-0400",
      image: "https://i.imgur.com/IIiVuHb.jpg"
    },
    {
      restaurantName: "Quattro",
      dealTitle: "3 Course Menu On Now",
      dealDetails: [
        "$35 Sunday - Thursday",
        "$45 Friday - Saturday",
        "Reservations recommended"
      ],
      website: "http://quattrorestaurants.com/",
      phoneNumber: "604-905-4844",
      image: "https://imgur.com/XO7YYWK.jpg"
    },
    {
      restaurantName: "The Raven Room",
      dealTitle: "$33 3 Course Dinner",
      dealDetails: ["5:30 - 10 PM", "Available 7 days a week"],
      website: "http://www.theravenroom.ca/",
      phoneNumber: "604-962-0311",
      image: "https://i.imgur.com/prc3Egb.jpg"
    },
    {
      restaurantName: "Rimrock Café",
      dealTitle: "3 Courses For $49",
      dealDetails: [
        "7 days a week",
        "Only until Saturday October 19th",
        "Call for reservations"
      ],
      website: "http://rimrockcafe.com/",
      phoneNumber: "604-932-5565",
      image: "https://imgur.com/2ASAVKS.jpg"
    },
    {
      restaurantName: "Splitz Grill Whistler",
      dealTitle: "Fall Specials",
      dealDetails: [
        "$4.99 Splitz & Lentil Burgers",
        "$9.99 meals 11-3 Mon-Thurs",
        "4$ beer / 5$ poutine 3-5pm daily",
        "15$ burger and beer 6pm to close",
        "(+ tax)($17.50 Fri & Sat)"
      ],
      website: "http://www.splitzgrill.com/",
      phoneNumber: "604-938-9300",
      image: "https://i.imgur.com/UsLPmUK.jpg"
    },
    {
      restaurantName: "Stonesedge Kitchen",
      dealTitle: "25$ - Wine and Charcuterie Deal",
      dealDetails: [
        "Every Thursday, get 2 glasses of wine, and a charcuterie board for $25",
        "12:00 PM until 1:00 AM"
      ],
      website: "http://www.stonesedgewhistler.com/",
      phoneNumber: "604-962-9292",
      image: "https://i.imgur.com/FS4a21A.jpg"
    },
    {
      restaurantName: "Sushi Village",
      dealTitle: "$26 4 Courses",
      dealDetails: [
        "$13 Sake Marg Jugs",
        "Available Sunday to Thursday for groups of 14 or less"
      ],
      website: "https://sushivillage.com/",
      phoneNumber: "604-932-3330",
      image: "https://imgur.com/k7wywT5.jpg"
    },
    {
      restaurantName: "Teppan Village",
      dealTitle: "Fall Feature",
      dealDetails: [
        "Filet Mignon, Teriyaki Chicken, Tiger Prawns & Jumbo Scallops $35",
        "$5 Asahi Beer",
        "1/2 price hot sake",
        "Sunday - Thursday (excluding holidays)"
      ],
      website: "http://www.teppanvillage.ca/",
      phoneNumber: "604-932-2223",
      image: "https://imgur.com/UKX0iZl.jpg"
    },
    {
      restaurantName: "Three Below",
      dealTitle: "Dinner & a Movie - $24",
      dealDetails: [
        "Dinner & a Movie $24, Sunday to Thursday from 5pm",
        "2 for $20 Appetizers, Daily"
      ],
      website: "http://www.threebelow.com/",
      phoneNumber: "604-962-0601",
      image: undefined
    }
  ];
  render() {
    return (
      <div className="Deals">
        {this.data.map((deal, i) => (
          <DealToggle deal={deal} key={i} />
        ))}
      </div>
    );
  }
}

export default Deals;
