import { FormControl, FormHelperText, InputLabel, makeStyles, MenuItem, NativeSelect, Select } from '@material-ui/core'
import React from 'react'
import { useState } from 'react';

const useStyle = makeStyles((theme)=>({
    formControl: {
        margin:theme.spacing(1),
        minWidth:120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
      },
}))


function SelectOrCombobox() {

const classes =  useStyle();

const [age, setAge] = useState('');
const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });


const handelChangeForAge= (event)=> {
    setAge(event.target.value)  
}

const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
}
  return (
    <>
    <div>
        <h1>select or combobox in react js  </h1>
        <FormControl className={classes.formControl}>            
            <InputLabel id='select-age-label'>Age</InputLabel>
            <Select
            labelId='select-age-label'
            id='select-age'
            value={age}
            onChange={handelChangeForAge}            
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>                

            </Select>
        </FormControl>
        
    </div>
    <div>
        <h3>disabled control</h3>
    <FormControl className={classes.formControl} disabled >
        <InputLabel htmlFor="age-native-helper">Age</InputLabel>
        <NativeSelect
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-native-helper',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>with helper text</FormHelperText>
      </FormControl>
    </div>
    <div>
    <FormControl className={classes.formControl}>
        <Select
          value={age}
          onChange={handelChangeForAge}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
    </div>
    <div>
    <FormControl className={classes.formControl}>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          Age
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={age}
          onChange={handelChangeForAge}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Label + placeholder</FormHelperText>
      </FormControl>
    </div>
    <div>
    <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handelChangeForAge}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
    </>
  )
}

export default SelectOrCombobox
