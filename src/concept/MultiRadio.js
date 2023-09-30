import React from 'react'

const MultiRadio = () => {
  return (
    <>
    <h1>   
     <div className="input-group">
     <div class="form-check">
        <input class="form-check-input" type="radio" name="genderRadio" id="flexRadioDefault1"/>
        <label class="form-check-label" for="flexRadioDefault1">
            Male
        </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="genderRadio" id="flexRadioDefault2" />
        <label class="form-check-label" for="flexRadioDefault2">
            Female
        </label>
    </div>
     </div>     
     
     
     <div className="input-group">
     <div class="form-check">
        <input class="form-check-input" type="radio" name="yesNoRadio" id="flexRadioDefault1"/>
        <label class="form-check-label" for="flexRadioDefault1">
            Yes
        </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="radio" name="yesNoRadio" id="flexRadioDefault2" />
        <label class="form-check-label" for="flexRadioDefault2">
            No
        </label>
    </div>
     </div>     
    
    </h1>
    </>
  )
}

export default MultiRadio
