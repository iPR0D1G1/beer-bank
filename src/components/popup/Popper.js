import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const styles = theme => ({
  root: {
    background: "#fafafa",
    boxShadow: theme.shadows[1],
    borderRadius: 4,
  }
});

class SimplePopper extends React.Component {
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
      <div style={{ zIndex: 1 }}>
        {this.props.trigger(this.handleClick)}
        {/* {this.props.views(this.closePopper)} */}

        <Popper
          id={id}
          open={open}
          style={{
            zIndex: 10000,
            position: 'realtive',
            top: 20,
          }}
          anchorEl={anchorEl}
          transition
          placement={'bottom-end'}
        >
          {({ TransitionProps }) => (
            <ClickAwayListener onClickAway={this.handleClickAway}>
              <Fade {...TransitionProps} timeout={350}>
                <div
                  // onClick={this.closePopper}
                  className={classes.root + ' arrowTopRight'}
                // style={{
                //   display: 'contents'
                // }}
                >
                  {this.props.views(this.closePopper)}
                </div>
              </Fade>
            </ClickAwayListener>
          )}
        </Popper>
      </div>
    );
  }
}

SimplePopper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimplePopper);
