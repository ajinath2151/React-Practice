import React, { useState } from "react";  
import DatePicker from "react-datepicker";   
import "react-datepicker/dist/react-datepicker.css";  

const DatePickerExample = () => {
    const [startDate, setStartDate] = useState(new Date());  
  return (
    <div>
        <h1 className="container" style={{margin:20}}>
            <DatePicker  selected={startDate} onChange={(date)=>
            setStartDate(date)}/>
        </h1>
    </div>
  )
}

export default DatePickerExample
