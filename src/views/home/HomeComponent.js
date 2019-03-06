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
  }

  getBeers = (isLoadingMore = true) => {
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
          //error getting products. notify user here
          return
        }
        const responseData = await response.json()
        const { beers } = this.state
        this.setState({ beers: [...beers, ...responseData] })
        this.props.onNewBeers(responseData)
      })
    if (!isLoadingMore) {
      this.setState({ beers: this.props.beers })
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
    const { start, itemsPerPage } = this.state
    // const totalItems = ( start + 1) * itemsPerPage

    return (
      <Fragment>
        <HeaderMinimalSearch />
        <InfiniteScroll
          dataLength={218}
          next={this.getBeers}
          hasMore={true}
          className={classes.beerList}
          loader={<h4>Loading...</h4>}
        >
          {this.state.beers.map((beer, index) => (
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
          ))}
        </InfiniteScroll>
      </Fragment>
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