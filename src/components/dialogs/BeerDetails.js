import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import Dialog from '@material-ui/core/Dialog';
import Scrollbar from 'react-scrollbars-custom';
import DialogContent from '@material-ui/core/DialogContent';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { BeerDetailsComponentStyle } from './../../styles/js'
import { withStyles, IconButton, Typography, Divider } from '@material-ui/core';
import Clear from '@material-ui/icons/Clear'
import ItemBeerSimple from '../beer_item/ItemBeerSimple';
import { connect } from 'react-redux'

class ResponsiveDialog extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    const { fullScreen, classes, beer, beers } = this.props;

    return (
      <div>
        {this.props.trigger(this.handleClickOpen, beer)}
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          scroll='paper'
          onClose={this.handleClose}
          classes={{
            root: classes.dialogRoot,
            paperScrollPaper: classes.scrollPaper,
          }}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContent
            classes={{
              root: classes.contentRoot
            }}
          >
            <div className={classes.header}>
              <IconButton
                onClick={this.handleClose}
                className={classes.btnClose}
              >
                <Clear fontSize='small' />
              </IconButton>
            </div>
            <div className={classes.content}>

              <div className={classes.top}>
                <div className={classes.beerImagecontainer}>
                  <img
                    src={beer.image_url}
                    alt="beer"
                    className={classes.beerImage}
                  />
                </div>
                <div className={classes.beerDetails}>
                  <Typography
                    className={classNames(
                      classes.beerName,
                      classes.marginBottomX2
                    )}
                    color='secondary'
                    variant='h4'
                    style={{ marginBottom: 10 }}
                  >
                    {beer.name}
                  </Typography>
                  <span
                    className={classNames(
                      classes.beerTag,
                      classes.marginBottomX2
                    )}
                    variant='h4'
                  >
                    {beer.tagline}
                  </span>
                  <Divider
                    className={classNames(
                      classes.divider,
                      classes.marginBottomX2
                    )} />
                  <div
                    className={classNames(
                      classes.gridRow,
                      classes.marginBottomX2
                    )}
                  >
                    {['ibu', 'abv', 'ebc'].map((key, index) => (
                      <div
                        className={classes.bold}
                        key={index}
                      >
                        {key.toUpperCase()}:
                        <span className={classes.unBold}>{beer[key]}</span>
                      </div>
                    ))}
                  </div>
                  <Typography
                    variant='body2'
                    aling='left'
                    className={classNames(
                      classes.marginBottomX2,
                      classes.beerDescription
                    )}
                  >
                    {beer.description}
                  </Typography>
                  <span className={classNames(
                    classes.bold,
                    classes.servings
                  )}>Best served with:</span>
                  <ul className={classes.list}>
                    {beer.food_pairing.map(paring => (
                      <li>{paring}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <Typography
                className={classes.otherLikes}
                color='secondary'
                variant='h4'
                gutterBottom
              >
                You might also like:
                </Typography>
              {/* <Scrollbar> */}
              <div className={classes.bottomRow}>
                {[1, 2, 3,].map(key => (
                  <Fragment>
                    {beers && (
                      <ItemBeerSimple beer={beers[this.getRandomInt(0, beers.length - 1)]} />
                    )}
                  </Fragment>
                ))}
              </div>
              {/* </Scrollbar> */}

            </div>

          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

// const mapStateToProps = state => ({
//   beers: state.beersState.beers,
// })

export default withStyles(BeerDetailsComponentStyle)(
  //  connect(mapStateToProps)(
  withMobileDialog()(ResponsiveDialog))
// )