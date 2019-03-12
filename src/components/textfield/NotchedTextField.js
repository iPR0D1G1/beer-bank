import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const styles = theme => ({
    cssFocused: {
    },
    cssOutlinedInput: {
        height: 30
    },
    notchedOutline: {
        borderRadius: 2,
        // border: '1px solid rgba(0, 0, 0, 0.5)',
        border: `1px solid rgba(255, 255, 255, 0.53) !important`,
    },
    cssLabel: {
        top: -12,
        transitionDuration: 300,
        fontStyle: 'italic',
        height: 19,
        opacity: 0.8,
        color: theme.palette.common.white,
        fontSize: 14,
    },
    cssShrinkFocused: {
        color: `${theme.palette.common.white} !important`,
        top: -4,
        fontStyle: 'unset',
    },
    cssLabelFocused: {
        color: theme.palette.common.white,
        top: -theme.spacing.unit / 2
    },
    cssInputOutlined: {
        color: `rgba(255, 255, 255, 0.53)`,
        color: `rgba(255, 255, 255, 0.83)`,
    }
})

class NotchedTextField extends React.Component {
    render() {
        const { classes, InputProps, classNames, InputLabelProps, ...rest } = this.props
        return (
            <TextField
                {...rest}
                InputProps={{
                    classes: {
                        root: `${classes.cssOutlinedInput} ${classNames && classNames.textFieldInput}`,
                        focused: classes.cssFocused,
                        input: `${classes.cssInputOutlined} ${classNames && classNames.inputOutlined}`,
                        notchedOutline: `${classes.notchedOutline} ${classNames && classNames.notchedOutline}`,
                    },
                    ...InputProps
                }
                }
                InputLabelProps={{
                    classes: {
                        root: classes.cssLabel,
                        focused: classes.cssLabelFocused,
                        shrink: classes.cssShrinkFocused
                    },
                    ...InputLabelProps
                }}
            />
        )
    }
}

NotchedTextField.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(NotchedTextField)
