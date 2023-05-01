import {
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
  TextField,
} from "@material-ui/core";
import {
  Accessibility,
  AccountBalance,
  AccountCircle,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "25ch",
    },
    margin: {
      margin: theme.spacing(2),
    },
  },
}));

function TextFieldDemo() {
  const classes = useStyle();

  const [value, setValue] = React.useState();

  // functions

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className={classes.root} noValidate autoComplete="off">
        <h2> TextField </h2>
        <TextField id="standared-basic" label="standared"></TextField>
        <TextField
          id="filled-basic"
          label="filled"
          variant="filled"
        ></TextField>
        <TextField
          id="outlined-basic"
          label="outlined"
          variant="outlined"
        ></TextField>
      </div>
      <div className={classes.root}>
        <h3>with all types textfields</h3>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="standard-search" label="Search field" type="search" />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          helperText="Incorrect entry."
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="outlined"
        />
      </div>
      <div className={classes.root}>
        <h3>multiline textbox</h3>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
        />
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
      </div>
      <div>
        <h3>with icon</h3>
        <div className={classes.root}>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="input-with-icon-adornment">
              With a start adornment
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="end">
                  <AccountBalance />
                </InputAdornment>
              }
            />
          </FormControl>
          <TextField
            className={classes.margin}
            id="input-with-icon-textfield"
            label="TextField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Accessibility />
                </InputAdornment>
              ),
            }}
          />
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="With a grid" />
              </Grid>
            </Grid>
          </div>
          <h3>with color</h3>
          <TextField id="standard-secondary" label="Standard secondary" color="secondary" />
        </div>
      </div>      
    </>
  );
}

export default TextFieldDemo;
