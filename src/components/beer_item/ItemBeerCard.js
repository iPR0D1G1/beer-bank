import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ItemBeerCardComponentStyle } from './../../styles/js'
import { IconButton, Typography, Paper, ButtonBase, Tooltip } from '@material-ui/core';
import StarIcon from '@material-ui/icons/StarBorderRounded'
import StarIconFilled from '@material-ui/icons/StarRounded'
import classNames from 'classnames'
// import LazyLoad from 'react-lazyload';

class AdvancedSearchComponent extends Component {
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
        const { classes, onClick, beer, onStarClicked, ...rest } = this.props;
        return (
            // <LazyLoad >
            <div className={classes.wrapper}>
                <Paper
                    className={classes.container}
                    elevation={1}
                    onMouseEnter={ignore => this.setState({ hovered: true })}
                    onMouseLeave={ignore => this.setState({ hovered: false })}
                    component={ButtonBase}
                    {...rest}
                    onClick={onClick}
                >
                    <div className={classes.rowCentered}>
                        <img
                            src={beer.image_url}
                            alt={beer.name + ' ' + beer.tagline}
                            className={classes.beerImage}
                        />
                    </div>
                    <div
                        className={classes.bottomSection}
                    >
                        <Tooltip title={beer.name}>
                            <Typography
                                className={classNames(
                                    classes.fullWidth,
                                    classes.marquee,
                                )}
                                variant='h4'
                                color='secondary'
                                fullWidth
                                align='center'
                            >
                                {beer.name}
                            </Typography>
                        </Tooltip>
                        <Tooltip title={beer.tagline}>
                            <Typography
                                className={classNames(
                                    classes.fullWidth,
                                    classes.marquee,
                                )}
                                variant='body2'
                                fullWidth
                                gutterBottom
                                align='center'
                            >
                                {beer.tagline}
                            </Typography>
                        </Tooltip>
                    </div>
                </Paper>
                <IconButton
                    className={classNames(
                        classes.btnFavourite,
                        classes.btnStar,
                    )}
                    onClick={event => {
                        onStarClicked(beer.id)
                        console.log('start')
                    }}
                >
                    {beer.isFave ? (
                        <StarIconFilled color='secondary' />
                    ) : (
                            <StarIcon />
                        )}
                </IconButton>
            </div>
            //  </LazyLoad> 
        );
    }
}

AdvancedSearchComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(ItemBeerCardComponentStyle)(AdvancedSearchComponent);