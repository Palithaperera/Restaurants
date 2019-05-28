import React from 'react';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { selectRestaurant } from '../actions';

class DrawerFavourites extends React.Component {

    sideList = (favourites = []) => {
        return (
            <div>
                <List>
                    {favourites.map((restaurant, index) => (
                        <ListItem button key={restaurant.restaurantInfo.name}>
                            <ListItemText
                                primary={restaurant.restaurantInfo.name}
                                onMouseUp={() => this.props.selectRestaurant(restaurant.id)}
                            />
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    };

    render(){
        console.log(this.props.favourites);
        const { drawerOpened, toggleDrawer} = this.props;
        return (
                <Drawer anchor="right" open={drawerOpened} onClose={() => toggleDrawer(false)}>                
                    {this.sideList(this.props.favourites)}
                </Drawer>
                )
    };
}

const mapStateToProps = state => {
    return { favourites: state.favourites }
}

export default connect(mapStateToProps, { selectRestaurant })(DrawerFavourites);