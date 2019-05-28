import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants, selectRestaurant, fetchFavourites } from '../actions';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

class SimpleMap extends Component {
  constructor(){
    super();
    this.state = {
      center: {
        lat: 1.3521,
        lng: 103.8198
      },
      zoom: 12,
    };
  };

  componentDidMount(){
      this.props.fetchRestaurants();
      this.props.fetchFavourites();
  }

  handleMarkerClick = (id) => {
    this.props.selectRestaurant(id);
    this.props.toggleDrawerInfo(true);
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
          defaultCenter={this.state.center}
          defaultZoom={this.props.selected ? 16 : this.state.zoom}
        >
          {this.props.places ? this.props.places.map(
            (place)=>{
              return(
                <Marker
                  imgUrl={place.logo}
                  label={place.restaurantInfo.name}
                  lat={place.lat}
                  lng={place.lng}
                  key={place.restaurantInfo.name}
                  id={place.id}
                  onMarkerClick={this.handleMarkerClick}
                  selected={this.props.selected}
                  start={place.restaurantInfo.time.start}
                  end={place.restaurantInfo.time.end}
                />
              );
            }): null}
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.filtered,
    selected: state.selected
  }
}

export default connect(mapStateToProps, {
  fetchRestaurants, selectRestaurant, fetchFavourites})(SimpleMap);