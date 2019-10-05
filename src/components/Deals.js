import React, { Component } from "react";
import DealToggle from "./DealToggle";

class Deals extends Component {
  data = [
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
