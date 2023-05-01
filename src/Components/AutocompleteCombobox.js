import { Autocomplete } from '@material-ui/lab'
import React from 'react'
import TextField from '@material-ui/core/TextField'

function AutocompleteDemoCombobox() {
  return (
    <>
        <div>
            <h3>auto complete combobox demo</h3>
            <h6>value must choose , not insert</h6>
            <Autocomplete
            id='combo-box-demo'
            options={top100Films}
            getOptionLabel={(options)=>options.title}
            style={{width:300}}
            renderInput={(param)=> <TextField {...param} label="combo box" variant="outlined" />}
            >             
            </Autocomplete>            
        </div>      
    </>
  )
}

export default AutocompleteDemoCombobox

const top100Films = [
  {title: 'Herapheri', year: 2000},
  {title: 'Herapheri', year:2004},
  {title:'golmal2', year: 2010},
  {title: 'Herapheri', year: 2000},
  {title: 'Herapheri', year:2004},
  {title:'golmal2', year: 2010},
  {title: 'Herapheri', year: 2000},
  {title: 'Herapheri', year:2004},
  {title:'golmal2', year: 2010},
  {title: 'Herapheri', year: 2000},
  {title: 'Herapheri', year:2004},
  {title:'golmal2', year: 2010},
  {title: 'Herapheri', year: 2000},
  {title: 'Herapheri', year:2004},
  {title:'golmal2', year: 2010},
  {title: 'Herapheri', year: 2000},
  {title: 'Herapheri', year:2004},
  {title:'golmal2', year: 2010},
  
]