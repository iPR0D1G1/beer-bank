import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import WrapperRoutes from './../routes/WrapperRoutes'
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom'
import { WrapperComponentStyles } from './../styles/js'
import classNames from 'classnames'

class WrapperComponent extends Component {

  render() {
    const { classes, match } = this.props;
    const { url } = match
    return (
      <div>
        <header className={classes.header}>
          <Button
            className={classNames(classes.btnLink)}
            color='secondary'
            margin='normal'
            component={NavLink}
            to='/'
          >
            Home
          </Button>
          <Button
            className={classNames(classes.btnLink)}
            color='secondary'
            margin='normal'
            component={NavLink}
            to='/faves'
          >
            Favourite
          </Button>

        </header>
        
        <WrapperRoutes url={`${url}`} />
      </div>
    );
  }
}

WrapperComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(WrapperComponentStyles)(WrapperComponent);