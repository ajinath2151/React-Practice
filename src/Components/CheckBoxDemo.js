import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import { CheckBox, Favorite, FavoriteBorder } from "@material-ui/icons";
import React, { useState } from "react";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

export default function CheckBoxDemo() {
  const [checked, setChecked] = React.useState(true);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleChange2 = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const chengeLabel = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <div>
        <h1>simple check boxex</h1>
        <Checkbox
          // checked={checked}
          defaultChecked
          onChange={handleChange}
          color="default"
          // inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <Checkbox
          // checked={checked}
          onChange={handleChange}
          color="primary"
        />
        <Checkbox
          // checked={checked}
          onChange={handleChange}
          color="secondary"
        />
        <Checkbox disabled inputProps={{ "aria-label": "disabled checkbox" }} />
      </div>
      <div>
        <h1>with lables</h1>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={handleChange2}
                name="checkedA"
                size="medium"
              />
            }
            label="Mail"
          />
          <FormControlLabel
            control={
              <Checkbox
                color="default"
                checked={state.checkedB}
                onChange={handleChange2}
                name="checkedB"
                size="small"
              />
            }            
            label="Female"
          />
          <FormControlLabel
            control={
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                name="checkedH"                
              />
            }
            label="Custom icon"
          />
          <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />} 
            name="checkedI"
          />
        }
        label="Custom size"
      />
        </FormGroup>
      </div>
    </>
  );
}
