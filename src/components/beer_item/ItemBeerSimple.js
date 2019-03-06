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
        const { classes, isFavourited, onClick, beer, ...rest } = this.props;
        return (
            <div className={classes.wrapper}>
                <img
                    src={beer.image_url}
                    alt={`${beer.name} ${beer.tagline}`}
                    className={classes.beerImage}
                />
                <Typography
                    className={classes.fullWidth}
                    variant='h4'
                    fullWidth
                    className={classes.beerName}
                    align='center'
                >
                    {beer.name}
                </Typography>
            </div>
        );
    }
}

ItemBeerSimple.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(ItemBeerSimpleComponentStyle)(ItemBeerSimple);