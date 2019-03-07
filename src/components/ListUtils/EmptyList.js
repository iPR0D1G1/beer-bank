import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        height: '100%',
        width: '100%',
        margin: 'auto auto',
        padding: theme.spacing.unit * 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        flexDirection: 'column',
        color: theme.palette.secondary.main,
    },
})

class EmptyList extends Component {


    render() {
        const { primaryText, secondaryText, classes, classNames } = this.props
        return (
            <div className={`${classes.root} ${classNames && classNames.root}`}>
                <span>{primaryText}</span>
                <span
                    style={{
                        fontSize: 15,
                        wordBreak: 'break-all',
                        textAlign: 'justify'
                    }}
                >
                    {secondaryText}
                </span>
            </div>
        )
    }
}

export default withStyles(styles)(EmptyList);


