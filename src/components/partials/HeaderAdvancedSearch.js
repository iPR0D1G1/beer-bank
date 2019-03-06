import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { HeaderAdvancedSearchComponentStyle } from '../../styles/js'
import classNames from 'classnames'
import { NotchedTextField } from './../textfield'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';


class HeaderAdavancedSearchComponent extends Component {

  // handleChangeDate = name => date => {
  //   let object = {
  //     target: {
  //       value: date,
  //     }
  //   }
  //   this.props.onChange(name)(object)
  // }

  render() {
    const { classes, fieldData, onChange } = this.props;
    return (
      <div className={classes.searchBox}>
        <Typography
          align='center'
          className={classNames(classes.headerText, classes.title)}
          variant="h5"
        // gutterBottom
        >
          Advanced Search
          </Typography>
        <NotchedTextField
          variant='outlined'
          label={`Beer name`}
          type='text'
          min={0}
          name={'beer_name'}
          onChange={onChange('name')}
          classNames={{
            textFieldInput: classes.textFieldInput,
            notchedOutline: classNames(
              classes.notchedOutline,
            ),
          }}
          className={classes.beerName}
        />
        {Object.keys(fieldData).map(key => (
          <NotchedTextField
            variant='outlined'
            label={fieldData[key].label}
            type={fieldData[key].type}
            min={0}
            name={key}
            onChange={onChange(key)}
            classNames={{
              textFieldInput: classes.textFieldInput,
              notchedOutline: classes.notchedOutline,
            }}
            key={key}
          />
        ))}
        {/* <NotchedTextField
          variant='outlined'
          label='Brewed before'
          name='brewed_before'
          onChange={onChange('brewed_before')}
          defaultValue='2017-05-24'
          type='date'
          classNames={{
            textFieldInput: classes.textFieldInput,
            notchedOutline: classes.notchedOutline,
          }}
        />
        <NotchedTextField
          variant='outlined'
          label='Brewed after'
          name='brewed_after'
          onChange={onChange('brewed_after')}
          defaultValue='2017-05-24'
          type='date'
          classNames={{
            textFieldInput: classes.textFieldInput,
            notchedOutline: classes.notchedOutline,
          }}
        /> */}
      </div>
    );
  }
}

HeaderAdavancedSearchComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(HeaderAdvancedSearchComponentStyle)(HeaderAdavancedSearchComponent);