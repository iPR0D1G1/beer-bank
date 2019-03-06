import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    root: {
        height: '100%',
        width: '100%',
        minHeight: 400,
        margin: 'auto auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        flexDirection: 'column',
        color: theme.palette.secondary.main,
    },
    progress: {
        margin: theme.spacing.unit * 2,
    },
})

class ListLoading extends Component {


    render() {
        const { primaryText, secondaryText, classes } = this.props
        return (
            <div className={classes.root}>
                <CircularProgress className={classes.progress} color="secondary" />
            </div>
        )
    }
}

export default withStyles(styles)(ListLoading);


