import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { HeaderAdvanedSearch } from './../../components/partials'
import { HeaderAdvancedSearchComponentStyle } from './../../styles/js'
import { ItemBeerCard } from '../../components/beer_item';
import { BeerDetails } from '../../components/dialogs';
import InfiniteScroll from "react-infinite-scroll-component";
import { BeersService } from './../../services/api'
import { newSearchFave, newUnFave } from './../../actions/beers/Index'
import { connect } from 'react-redux'
import { EmptyList, ListLoading } from '../../components/ListUtils';

var itemsPerPage = 15;
var start = 1;
var AVERAGE_USER_INTERACTION_DURATION_MS = 400;

class AdvancedSearchComponent extends Component {

  state = {
    firstQueryDone: false,
    errorFetching: false,
    hasMore: false,
    start,
    itemsPerPage,
    searchParameters: {},
    fieldData: {
      ibu_gt: {
        label: 'Min ibu',
        type: 'number',
      },
      ibu_lt: {
        label: 'Max ibu',
        type: 'number',
      },
      abv_lt: {
        label: 'Min abv',
        type: 'number',
      },
      abv_gt: {
        label: 'Max abv',
        type: 'number',
      },
      ebc_lt: {
        label: 'Min ebc',
        type: 'number'
      },
      ebc_gt: {
        type: 'number',
        label: 'Max ebc',
      },
      brewed_before: {
        type: 'date',
        label: 'Brewed before',
      },
      brewed_after: {
        type: 'date',
        label: 'Brewed after',
      },
    },
    beers: [],
  }
  timeout;

  generateSearchQuery = ignored => {
    console.log('here')
    const { searchParameters } = this.state
    return Object.keys(searchParameters).reduce((acc, key) => {
      let value = searchParameters[key]
      if (value && value !== null && value !== '' && value !== undefined) {
        if (key === 'name') {
          const splits = searchParameters[key].split(' ')
          if (splits.length > 1)
            value = splits.join('_')
        }
        return `${acc}&${key}=${value}`
      }
      return acc
    }, '')
  }

  handleChange = fieldname => event => {
    const { searchParameters } = this.state
    const brewedPeriods = ['brewed_before', 'brewed_after',]
    if (brewedPeriods.includes(fieldname)) {
      brewedPeriods.forEach(period => {
        if (period === fieldname) {
          const splits = event.target.value.split('-')
          console.log({ splits })
          const toBeStoredValue = `${splits[splits.length - 2]}-${splits[0]}`
          searchParameters[fieldname] = toBeStoredValue
        }
      })
    } else {
      searchParameters[fieldname] = event.target.value
    }
    this.setState({ searchParameters })
    this.debounceRequest()
  }

  debounceRequest = ignored => {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(ignored1 => this.performSearch(false, true), AVERAGE_USER_INTERACTION_DURATION_MS)
  }


  performSearch = (isLoadingMore = false, isNewQuery = false) => {
    const { firstQueryDone } = this.state
    if (!firstQueryDone) this.setState({ firstQueryDone: true })

    const searchQuery = this.generateSearchQuery()
    let searchOptions = {
      page: this.state.start,
      perPage: this.state.itemsPerPage,
      searchQuery,
    }

    if (isLoadingMore) {
      const { start } = this.state
      searchOptions.page = start + 1
      this.setState({ start: start + 1 })
    }

    if (isNewQuery) {
      searchOptions.page = 1
      this.setState({ start: 1 })
    }

    BeersService.advancedSearchBeer(searchOptions)
      .then(async response => {
        if (response.status === 200) {
          const beers = await response.json()
          if (isLoadingMore) {
            console.log({ length: beers.length, itemsPerPage, hasmore: beers.length >= itemsPerPage })
            this.setState({ beers: [...this.state.beers, ...beers], hasMore: beers.length >= itemsPerPage, errorFetching: false })
          } else {
            console.log({ length: beers.length, itemsPerPage, hasmore: beers.length >= itemsPerPage })
            this.setState({ beers, hasMore: beers.length >= itemsPerPage, errorFetching: false })
          }
        } else {
          this.setState({ errorFetching: true })
        }
      })
      .catch(err => this.setState({ errorFetching: true }))
  }

  fetchMoreData = () => {
    this.performSearch(true)
  };

  onLike = beerId => {
    const { beers } = this.state
    const index = beers.findIndex(beer => beer.id === beerId)
    if (index === -1) return;
    this.props.onNewFave(beers[index])
    beers[index].isFave = true
    this.setState({ beers })
  }

  onUnLike = beerId => {
    const { beers } = this.state
    const index = beers.findIndex(beer => beer.id === beerId)
    if (index === -1) return;
    beers[index].isFave = false
    this.setState({ beers })
    this.props.onNewUnFave(beerId)
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <HeaderAdvanedSearch onChange={this.handleChange} fieldData={this.state.fieldData} />
        <InfiniteScroll
          dataLength={this.state.beers.length}
          next={this.fetchMoreData}
          hasMore={this.state.firstQueryDone ? this.state.hasMore : false}
          className={classes.searchResults}
          loader={this.state.errorFetching ? (
            <EmptyList
              primaryText="Error loading beers..."
              classNames={{ root: classes.gridRow }}
            />
          ) : (
              <ListLoading />
            )
          }
          endMessage={
            this.state.firstQueryDone ? (
              <Fragment>
                {this.state.beers.length === 0 ? (
                  <EmptyList
                    secondaryText='Try searching with a different keyword'
                    primaryText="Ooops!! no beers found..."
                    classNames={{ root: classes.gridRow }}
                  />
                ) : (
                    <EmptyList
                      primaryText="All beers loaded..."
                      classNames={{ root: classes.gridRow }}
                    />
                  )
                }
              </Fragment>
            ) : (
                <EmptyList
                  primaryText="Enter text to search for beers..."
                  classNames={{ root: classes.gridRow }}
                />
              )
          }
        >
          {this.state.beers.map((beer, index) => (
            <BeerDetails
              key={beer.id}
              beer={beer}
              beers={this.state.beers}
              trigger={(onTrigger, beer) => (
                <ItemBeerCard
                  onClick={onTrigger}
                  onStarClicked={beer.isFave ? this.onUnLike : this.onLike}
                  beer={beer}
                />
              )}
            />
          ))}
        </InfiniteScroll>

      </div>
    );
  }
}

AdvancedSearchComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapDispatchToProps = {
  onNewFave: newSearchFave,
  onNewUnFave: newUnFave,
}

const mapStateToProps = state => ({
  beers: state.beersState.beers,
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(HeaderAdvancedSearchComponentStyle)(AdvancedSearchComponent)
)