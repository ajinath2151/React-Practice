
import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyle = makeStyles((theme)=> ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}))


export default function MaterialUIPickers() {

  const classes = useStyle();
  // The first commit of Material-UI  
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
          <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <form className={classes.container} noValidate>
  <TextField
    id="date"
    label="Birthday"
    type="date"
    defaultValue="2017-05-24"
    className={classes.TextField}
    InputLabelProps={{
      shrink: true,
    }}
  />
</form>
<form className={classes.container} noValidate>
  <TextField
    id="datetime-local"
    label="Next appointment"
    type="datetime-local"
    defaultValue="2017-05-24T10:30"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
</form>
<form className={classes.container} noValidate>
  <TextField
    id="time"
    label="Alarm clock"
    type="time"
    defaultValue="07:30"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      step: 300, // 5 min
    }}
  />
</form>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
