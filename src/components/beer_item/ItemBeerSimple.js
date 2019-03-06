import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ItemBeerSimpleComponentStyle } from '../../styles/js'
import { IconButton, Typography, Paper, ButtonBase } from '@material-ui/core';
import StarIcon from '@material-ui/icons/StarBorderRounded'
import StarIconFilled from '@material-ui/icons/StarRounded'
import classNames from 'classnames'

class ItemBeerSimple extends Component {
    state = {
        hovered: false,
    }

    dislikeBeer = (index) => {
        console.log('dislike')
    }
    likeBeer = (index) => {
        console.log('liking')
    }

    render() {
        const { classes, isFavourited, onClick, ...rest } = this.props;
        return (
            <div className={classes.wrapper}>
                <img
                    src="https://images.punkapi.com/v2/192.png"
                    alt="beer image"
                    className={classes.beerImage}
                />
                <Typography
                    className={classes.fullWidth}
                    variant='h4'
                    fullWidth
                    className={classes.beerName}
                    align='center'
                >
                    Blushy beer
                </Typography>
            </div>
        );
    }
}

ItemBeerSimple.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(ItemBeerSimpleComponentStyle)(ItemBeerSimple);