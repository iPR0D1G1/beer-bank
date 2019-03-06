import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { HeaderMinimalSearch } from './../../components/partials'
import { connect } from 'react-redux'
import { BeersService } from './../../services/api'
import {
  newBeer,
  newBeers,
  replaceAllBeers,
  newFave,
} from './../../actions/beers/Index'
import InfiniteScroll from "react-infinite-scroll-component";
import { ItemBeerCard } from '../../components/beer_item';
import { BeerDetails } from '../../components/dialogs';
import { HomeComponentStyle } from './../../styles/js'

var itemsPerPage = 15;
var start = 1;

class HomeComponent extends Component {

  state = {
    start,
    itemsPerPage,
    beers: [],
    hasMore: true,
    firstLoadDone: false,
    errorFetching: false,
  }

  getBeers = (isLoadingMore = false) => {
    let object = {
      page: this.state.start,
      perPage: this.state.itemsPerPage,
    }

    if (isLoadingMore) {
      object.page = this.state.start + 1
      this.setState({ start: this.state.start + 1 })
    }


    //get products
    BeersService.getBeers(object)
      .then(async response => {
        if (response.status !== 200) {
          this.setState({ firstLoadDone: true, errorFetching: true })
          return
        }
        const beers = await response.json()
        this.setState({ hasMore: beers.length >= 0, firstLoadDone: true, errorFetching: false })
        if (isLoadingMore) {
          this.props.onNewBeers(beers)
        } else {
          this.props.onReplaceAllBeers(beers)
        }
      })
      .catch(err => this.setState({ firstLoadDone: true, errorFetching: true }))
    if (!isLoadingMore && this.props.beers) {
      this.setState({ beers: this.props.beers, firstLoadDone: true, })
    }
  }

  componentDidMount() {
    this.getBeers()
  }

  componentDidUpdate() {
    if (this.props.beers && this.props.beers.length !== this.state.beers.length) {
      this.setState({ beers: this.props.beers })
    }
  }

  onFavourite = beerId => {
    this.props.onNewFave(beerId)
  }

  render() {
    const { classes } = this.props;
    const { start, itemsPerPage, beers, hasMore } = this.state
    // const totalItems = ( start + 1) * itemsPerPage

    return (
      <Fragment>
        <HeaderMinimalSearch />
        <InfiniteScroll
          dataLength={hasMore ? beers.length + 1 : beers.length}
          next={() => {
            console.log('fetching more')
            this.getBeers(true)
          }}
          hasMore={this.state.firstLoadDone ? this.state.hasMore : false}
          className={classes.beerList}
          loader={this.state.errorFetching ? (
            <div
              style={{ gridColumn: '1/-1' }}
            >
              Error loading beers
            </div>
          ) : (
              <h4>Loading...</h4>
            )
          }
        >
          {
            this.state.beers.map((beer, index) => (
              <BeerDetails
                key={beer.id}
                beer={beer}
                trigger={(onTrigger, beer) => (
                  <ItemBeerCard
                    beer={beer}
                    onClick={onTrigger}
                    onStarClicked={this.onFavourite}
                  />
                )}
              />
            ))
          }
        </InfiniteScroll >
      </Fragment >
    );
  }
}

HomeComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  onNewBeer: newBeer,
  onNewBeers: newBeers,
  onReplaceAllBeers: replaceAllBeers,
  onNewFave: newFave,
}

const mapStateToProps = state => ({
  beers: state.beersState.beers ? state.beersState.beers.filter(beer => !beer.isFave) : state.beersState.beers,
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(HomeComponentStyle)(HomeComponent))