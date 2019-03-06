import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import classNameAgregator from 'classnames'

const styles = theme => ({
    cssFocused: {
        // backgroundColor: '#9c9c9ccf',
    },
    cssOutlinedInput: {
        fontSize: 13,
        height: 40,
        '&::before': {
            border: 'unset !important',
        },
        '&::after': {
            border: 'unset !important',
        },
        // backgroundColor: '#f5f5f5',
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

class BorderlessTransparentTextField extends React.Component {
    render() {
        const { classes, InputProps, classNames, onClick, onChange, value, ...rest } = this.props
        return (
            <TextField
                {...rest}
                onClick={onClick}
                onChange={onChange}
                value={value}
                InputProps={{
                    classes: {
                        root: classNameAgregator(classNames && classNames.root, classes.cssOutlinedInput),
                        focused: classes.cssFocused,
                        notchedOutline: classNameAgregator(classNames && classNames.input, classes.notchedOutline)
                    },
                    ...InputProps
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
                    }
                }}
            >
                {this.props.children}
            </TextField>
        )
    }
}

BorderlessTransparentTextField.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(BorderlessTransparentTextField)
