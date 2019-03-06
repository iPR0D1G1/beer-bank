import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { HeaderMinimalSearch } from './../../components/partials'
import { connect } from 'react-redux'
import {
  newUnFave
} from './../../actions/beers/Index'
// import InfiniteScroll from "react-infinite-scroll-component";
import { ItemBeerCard } from '../../components/beer_item';
import { BeerDetails } from '../../components/dialogs';
import { FavouriteComponentStyle } from './../../styles/js'

class FavesComponent extends Component {
  state = {
    beers: [],
  }

  componentDidMount() {
    if (this.props.beers && this.props.beers.length !== this.state.beers.length) {
      this.setState({ beers: this.props.beers })
    }
  }

  componentDidUpdate() {
    if (this.props.beers && this.props.beers.length !== this.state.beers.length) {
      this.setState({ beers: this.props.beers })
    }
  }

  onUnFavourite = beerId => {
    this.props.onUnFave(beerId)
  }


  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <HeaderMinimalSearch />
        <div
          // dataLength={this.state.beers.length}
          // next={this.getBeers}
          // hasMore={true}
          // loader={<h4>Loading...</h4>}
          className={classes.beerList}
        >
          {this.state.beers.map((beer, index) => (
            <BeerDetails
              key={beer.id}
              beer={beer}
              trigger={(onTrigger, beer) => (
                <ItemBeerCard
                  beer={beer}
                  onClick={onTrigger}
                  onStarClicked={this.onUnFavourite}
                />
              )}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

FavesComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  onUnFave: newUnFave,
}

const mapStateToProps = state => ({
  beers: state.beersState.beers ? state.beersState.beers.filter(beer => beer.isFave) : state.beersState.beers,
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(FavouriteComponentStyle)(FavesComponent)
)