import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchComponent from './SearchComponent';
import { HeaderMinimalSearchComponentStyle } from './../../styles/js'
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

class HeaderMinimalSearchComponent extends Component {

  render() {
    const { classes, match } = this.props;
    return (
      <div className={classes.searchBox}>
        <Typography
          align='center'
          className={classNames(classes.headerText, classes.title)}
          variant="h5"
          gutterBottom
        >
          The Beer Bank
          </Typography>
        <Typography
          align='center'
          className={classNames(classes.headerText, classes.subTitle)}
          variant="body2"
          gutterBottom
        >
          Find your favourite beer here
          </Typography>
        <SearchComponent />
        <Typography
          className={classNames(classes.headerText, classes.advancedSearchLink)}
          variant="body2"
          gutterBottom
          component={Link}
          to='/advanced_search'
        >
          Advanced search
          </Typography>
      </div>
    );
  }
}

HeaderMinimalSearchComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(HeaderMinimalSearchComponentStyle)(HeaderMinimalSearchComponent);