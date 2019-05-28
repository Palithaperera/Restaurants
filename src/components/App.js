import React from 'react';
import MyMap from './MyMap';
import HeaderPanel from './HeaderPanel';
import DrawerFavourites from './DrawerFavourites';
import DrawerInfo from './DrawerInfo';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            drawerFavOpened: false,
            drawerInfoOpened: false,
        }
    }
    
    toggleDrawerFav = (open) => {
        this.setState({
            drawerFavOpened: open,
        });
    };

    toggleDrawerInfo = (open) => {
        this.setState({
            drawerInfoOpened: open,
        });
    };
    

    render() {
        return (
        <div>
            <HeaderPanel toggleDrawer={this.toggleDrawerFav} />
            <DrawerFavourites
                drawerOpened={this.state.drawerFavOpened}
                toggleDrawer={this.toggleDrawerFav}
            />
            <DrawerInfo 
                drawerOpened={this.state.drawerInfoOpened} 
                toggleDrawer={this.toggleDrawerInfo}
            />
            <MyMap toggleDrawerInfo={this.toggleDrawerInfo}/>

        </div>
        );
    }
};

export default App;