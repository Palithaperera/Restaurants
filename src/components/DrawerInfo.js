import React from 'react';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import { addToFavourites } from '../actions';

class DrawerInfo extends React.Component {
    getContent = (selected = null) => {
        return (
            selected ?
            <div>
                <Card style={{width: "35vw"}}>
                    <CardHeader
                        avatar={
                            <Avatar src={selected.logo} />
                        }
                        title={selected.restaurantInfo.name}
                    />
                    <CardMedia
                        style={{height: "40vh"}}
                        image={selected.img}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {selected.restaurantInfo.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton
                            aria-label="Add to favorites"
                            onClick={() => this.props.addToFavourites(selected.id)}
                        >
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="Share">
                            <ShareIcon />
                    </IconButton>
                    </CardActions>
                </Card>
            </div>: "Not selected"
        );
    };

    render(){
        const { drawerOpened, toggleDrawer} = this.props;
        return (
                <Drawer 
                    anchor="left" 
                    open={drawerOpened} 
                    onClose={() => 
                    toggleDrawer(false)}
                >                
                    {this.getContent(this.props.selected)}
                </Drawer>                
        )
    };
}

const mapStateToProps = state => {
    return { selected: state.selected }
}

export default connect(mapStateToProps, {addToFavourites})(DrawerInfo);