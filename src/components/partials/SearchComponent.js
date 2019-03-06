import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { PopperCenter } from './../popup'
import { BorderlessTransparentTextField } from './../textfield'
import { SearchComponentStyles } from './../../styles/js'
import { EmptyList, ListLoading } from './../ListUtils'
import {
  newQuery
} from './../../actions/search/Index'
import { connect } from 'react-redux'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Scrollbar from 'react-scrollbars-custom';
import { BeersService } from './../../services/api'
import InfiniteScroll from "react-infinite-scroll-component";
import { BeerDetails } from '../dialogs';
import LazyLoad from 'react-lazyload'
// import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchIcon from '@material-ui/icons/Search'
var AVERAGE_USER_INTERACTION_DURATION_MS = 400;
var itemsPerPage = 15;
var start = 1;

class SearchComponent extends Component {

  state = {
    inSearchComponent: false,
    start,
    itemsPerPage,
    beers: [],
    query: '',
    firstQueryDone: false,
    loading: false,
  }
  scrollBars = null;
  timeout = null


  getBeers = (isLoadingMore = false, newQuery = false) => {
    this.setState({ loading: true })
    let object = {
      page: this.state.start,
      perPage: this.state.itemsPerPage,
      query: this.state.query,
    }

    if (isLoadingMore) {
      object.page = this.state.start + 1
      this.setState({ start: this.state.start + 1 })
    }

    if (newQuery) {
      object.page = 1
      this.setState({ start: 1 })
    }


    //get products
    BeersService.searchBeer(object)
      .then(async response => {
        this.setState({ loading: false })
        if (response.status !== 200) {
          //error getting products. notify user here
          return
        }
        const responseData = await response.json()
        const { beers } = this.state
        if (newQuery) {
          this.setState({ beers: responseData })
        } else {
          this.setState({ beers: [...beers, ...responseData] })
        }
      })
      .catch(err => {
        this.setState({ loading: false })
        this.setState({ errorLoadingData: true })
      })
    if (!this.state.firstQueryDone) {
      this.setState({ firstQueryDone: true, })
    }
  }

  debounceRequest = ignored => {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(ignored => {
      this.getBeers(true, true)
    }, AVERAGE_USER_INTERACTION_DURATION_MS)

  }

  handleChangeSearchField = event => {
    const query = event.target.value
    this.setState({ query })
    if (query.length > 1)
      this.debounceRequest()
  }

  render() {
    const { classes } = this.props;
    return (
      <PopperCenter
        trigger={onTrigger => (
          <BorderlessTransparentTextField
            placeholder={`Search for beer name`}
            ref={this.searchFieldRef}
            classNames={{
              input: classes.searchBoxInput,
              root: classes.searchBoxRoot,
            }}
            onClick={event => {
              const { beers } = this.state
              this.setState({ beers: [] })
              setTimeout(ignored1 => {
                this.setState({ beers })
              }, 50)
              onTrigger(event)
            }}
            onChange={this.handleChangeSearchField}
            value={this.state.query}
            className={classes.searchField}
            InputProps={{
              startAdornment: < div className={classes.root}>
                {this.state.loading ? (
                  <CircularProgress className={classes.progress} color="secondary" size={12} />
                ) : (
                    <SearchIcon fontSize='14' className={classes.searchIcon} />
                  )}
              </div>
            }}
          />
        )}
        views={onClose => (
          <Scrollbar
            className={classes.listContainer}
          >
            {this.state.beers.length > 0 ? (
              <List dense={true} >
                {this.state.beers.map(beer => (
                  <LazyLoad once>
                    <BeerDetails
                      beer={beer}
                      trigger={onTrigger => (
                        <ListItem
                          button
                          onClick={onTrigger}
                        >
                          <ListItemAvatar>
                            <Avatar>
                              <img
                                src={beer.image_url}
                                alt={`${beer.name} ${beer.tagline}`}
                                style={{
                                  maxHeight: 54,
                                  height: 'unset',
                                  width: 'unset',
                                }}
                              />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={beer.name}
                            secondary={beer.tagline}
                          />
                        </ListItem>
                      )}
                    />
                  </LazyLoad>
                ))}
              </List>
            ) : (
                <EmptyList
                  primaryText={`No results found`}
                  secondaryText={`Try searching a different keyword`}
                />
              )}
          </Scrollbar>
        )}
      />
    );
  }
}

SearchComponent.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapDispatchToProps = {
  onNewQuery: newQuery,
}

const mapStateToProps = state => ({
  beers: state.searchState.beers,
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(SearchComponentStyles)(SearchComponent)
)