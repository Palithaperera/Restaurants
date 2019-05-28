const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

var restaurants = []
var lat = 1.419709;
var lng = 103.724071;
var type = ''
var start = 800;
var end = 1700;

for(var i = 0; i < 50; i++){
  lng += 0.004000;
  lat += 0.000040;
  if(i>= 0 && i<20){
    type = 'Vegetarian';
  }else if(i >= 20 && i < 30){
    if(i === 20){
      lat = 1.394998;
      lng = 103.870327;
    }
    type = 'Pasta/Noodles';
  }else if (i >= 30 && i < 40) {
    if(i === 30){
      lat = 1.307131;
      lng = 103.733684;
    }
    type = 'Pizza & Burgers';
    start = 1700;
    end = 800;
  }else {
    if(i === 40){
      lat = 1.334590;
      lng = 103.851787;
    }
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
        place: `Place ${i}`,
        rating: 8,
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
  var fav = restaurants.slice(18,20).map(
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