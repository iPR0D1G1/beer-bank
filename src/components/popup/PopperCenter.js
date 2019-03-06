import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const styles = theme => ({
  root: {
    background: "#fafafa",
    boxShadow: theme.shadows[1],
    borderRadius: 4,
    top: 10,
    position: 'relative',
  }
});

class PopperCenter extends Component {
  state = {
    anchorEl: null,
    open: false,
  };

  handleClick = event => {
    const { currentTarget } = event;
    this.setState(state => ({
      anchorEl: currentTarget,
      open: !state.open,
    }));
  }

  closePopper = () => {
    console.log("clossing popper")
    this.setState(state => ({
      anchorEl: null,
      open: !state.open,
    }))
  };

  handleClickAway = () => {
    this.closePopper()
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, open } = this.state;
    const id = open ? 'simple-popper' : null;

    return (
      <Fragment>
        {this.props.trigger(this.handleClick)}

        <Popper
          id={id}
          open={open}
          style={{
            position: 'realtive',
            top: 20,
          }}
          anchorEl={anchorEl}
          transition
          placement={'bottom-center'}
        >
          {({ TransitionProps }) => (
            <ClickAwayListener onClickAway={this.handleClickAway}>
              <Fade {...TransitionProps} timeout={350}>
                <div
                  className={classes.root + ' arrowTopCenter'}
                >
                  {this.props.views(this.closePopper)}
                </div>
              </Fade>
            </ClickAwayListener>
          )}
        </Popper>
      </Fragment>
    );
  }
}

PopperCenter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PopperCenter);
