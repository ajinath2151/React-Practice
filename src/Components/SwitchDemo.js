import { FormControl, FormControlLabel, FormGroup, Switch } from '@material-ui/core'
import React from 'react'





function SwitchDemo() {

const [state, setState] = React.useState({
    checkedA:true,
    checkedB:true
});
// functions

const handleChange =(event)=>{
    setState({...state, [event.target.name]:event.target.checked});    
};
  return (    
    <>
    <div>
    <FormGroup row>
      <FormControlLabel
        control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Secondary"
      />
      <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Primary"
      />
      <FormControlLabel control={<Switch />} label="Uncontrolled" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
      <FormControlLabel disabled control={<Switch checked />} label="Disabled" />
    </FormGroup>
    </div>
    <div>
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Switch color="primary" />}
          label="Top"
          labelPlacement="top"
        />
        <FormControlLabel
          control={<Switch color="primary" />}
          value="start"
          label="Start"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<Switch color="primary" />}
          label="Bottom"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="end"
          control={<Switch color="primary" />}
          label="End"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
    </div>
    </>
  )
}

export default SwitchDemo
