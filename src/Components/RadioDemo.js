import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

function RadioDemo() {
  const [value, setValue] = React.useState("female");
  const [value2, setValue2] = React.useState("male");

  const classes = useStyles();
  // const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "best") {
      setHelperText("You got it!");
      setError(false);
    } else if (value === "worst") {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };

  return (
    <>
      <div>
        <p style={{ marginBottom: 10 }}>radio button demo example</p>
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <h2>Quiz</h2>
        <form onSubmit={handleSubmit}>
          <FormControl
            component="fieldset"
            error={error}
            className={classes.formControl}
          >
            <FormLabel component="legend">
              Pop quiz: Material-UI is...
            </FormLabel>
            <RadioGroup
              aria-label="quiz"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="best"
                control={<Radio />}
                label="The best!"
              />
              <FormControlLabel
                value="worst"
                control={<Radio />}
                label="The worst."
              />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Check Answer
            </Button>
          </FormControl>
        </form>
      </div>
      <div>
      <p style={{ marginBottom: 10 }}>radio button demo example</p>
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender2"
            value={value2}
            onChange={handleChange2}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />            
          </RadioGroup>
        </FormControl>        
      </div>
    </>
  );
}

export default RadioDemo;
