const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var restaurants = []
var lat = 1.389506;
var lng = 103.687679;
var type = 'Vegetarian'
var start = 800;
var end = 1700;

for(var i = 0; i < 25; i++){
  lng += 0.008000;
  lat += 0.004400;
  if(i>= 0 && i<15){
    type = 'Pizza & Burgers';
  }else if(i >= 15 && i < 25){
    type = 'Pasta/Noodles';
  }else {
    type = 'Rice Bowls';
    start = 1700;
    end = 800;
  }
  restaurants.push(
    {
      id:i,
      lat:lat.toPrecision(9),
      lng:lng.toPrecision(9),
      restaurantInfo:{
        name:`My Restaurant ${i}`,
        description: `My Restaurant ${i}'s Lounge & Restaurant will feature an outstanding New American-Swedish menu with a touch of Asian influence in an upscale and cozy atmosphere.The menu is inspired from different cuisine's specialties and will appeal to a wide and varied clientele. We will offer a three course ‘business lunch' prix fixe and a three course dinner prix fixe in addition to the regular menu.`,
        Place: `Place ${i}`,
        Ratings: 8,
        menu: `Menu ${i}`,
        time: {
          start: start,
          end: end
        }        
      },
      type: type,
      logo:'https://cdn2.vectorstock.com/i/1000x1000/48/11/cottage-beach-hotel-logo-vector-21274811.jpg',
      img: "https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg"  
    }
  );
}

app.get('/api/restaurants',cors(), (req, res) => {
  res.send(restaurants);
});


app.get('/api/favourites',cors(), (req, res) => {
  var fav = restaurants.slice(0,8).map(
    (restaurant) => { 
      return {
        id: restaurant.id,
        restaurantInfo: restaurant.restaurantInfo,
        PersonalNotes: `Personal Note for ${restaurant.name}`
      }
    });
  res.send(fav);
});

app.listen(port, () => console.log(`Listening on port ${port}`));