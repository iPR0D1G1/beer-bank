import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import classNameAgregator from 'classnames'

const styles = theme => ({
    textField: {
        width: "100%",
    },
    cssFocused: {
        backgroundColor: '#9c9c9ccf',
    },
    cssOutlinedInput: {
        height: 42,
        '&::before': {
            border: 'unset !important',
        },
        '&::after': {
            border: 'unset !important',
        },
        // backgroundColor: "rgba(255, 255, 255, 0.21)",
        backgroundColor: "#f5f5f5",
        fontWeight: 400
    },
    notchedOutline: {
        borderRadius: 2,
        border: 'unset',
    },
    cssLabel: {
        top: -7,
        transitionDuration: 300,
        fontStyle: 'italic',
        height: 19,
        opacity: 0.8,
        color: '#000000',
        fontSize: 14,
    },
    cssShrinkFocused: {
        top: -4,
        fontStyle: 'unset',
    },
    cssLabelFocused: {
        top: -theme.spacing.unit / 2
    },
    menu: {
        width: 200,
    },
})

class BorderlessTextField extends React.Component {
    render() {
        const { classes, background, InputProps, classNames, ...rest } = this.props
        return (
            <TextField
                {...rest}
                InputProps={{
                    classes: {
                        root: classNameAgregator(classes.cssOutlinedInput, classNames && classNames.input),
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline
                    },
                    ...InputProps
                }}
                classes={{
                    root: classNames && classNames.root
                }}
                SelectProps={{
                    native: true,
                    MenuProps: {
                        className: classes.menu,
                    },
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.cssLabel,
                        focused: classes.cssLabelFocused,
                        shrink: classes.cssShrinkFocused
                    },
                    // shrink: false,
                }}
                className={classes.textField}
            >
                {this.props.children}
            </TextField>
        )
    }
}

BorderlessTextField.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(BorderlessTextField)
