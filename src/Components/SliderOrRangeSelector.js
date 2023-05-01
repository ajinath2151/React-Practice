import { Grid, makeStyles, Slider, Typography } from "@material-ui/core";
import { VolumeDown, VolumeUp } from "@material-ui/icons";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    width: 200,
    textAlign: "center",
  },
  root2: {
    width: 300,
    textAlign: "center",
  },
  mb: {    
   marginTop:50,
  },
}));

const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 10,
    label: "10°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 30,
    label: "30°C",
  },
  {
    value: 40,
    label: "40°C",
  },
  {
    value: 50,
    label: "50°C",
  },
  {
    value: 60,
    label: "60°C",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

function SliderOrRangeSelector() {
  const classes = useStyle();

  // usestates

  const [value, setValue] = React.useState(30);
  const [value2, setValue2] = React.useState([20, 37]);
  // functions
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange2 = (event, newValue2) => {
    setValue2(newValue2);
  };
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <>
      <header className="App-header">
        <h2>slider or range-selector</h2>
        <div className={classes.root}>
          <p>continous slider</p>
          <Typography id="continous-slider" gutterBottom>
            {" "}
            Volume{" "}
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <VolumeDown />
            </Grid>
            <Grid item xs>
              <Slider
                value={value}
                onChange={handleChange}
                aria-labelledby="contionous-slider"
              />
            </Grid>
            <Grid item>
              <VolumeUp />
            </Grid>
          </Grid>
        </div>
        <div className={classes.root2}>
          <p>Restricted values</p>
          <Typography id="discrete-slider-restrict" gutterBottom></Typography>
          <Slider
            defaultValue={20}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-restrict"
            step={null}
            valueLabelDisplay="auto"
            marks={marks}
          />
          {/* valueLabelDisplay="on"   if this on in above property then continue display lable above line      */}
        </div>
        <div className={classes.root2}>
          <p>Temperature range</p>
          <Typography id="range-slider" gutterBottom></Typography>
          <Slider
          className={classes.mb}
            value={value2}
            onChange={handleChange2}
            valueLabelDisplay="on"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
          />
        </div>
      </header>
    </>
  );
}

export default SliderOrRangeSelector;
