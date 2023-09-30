import React from "react";

const FormDemo = () => {
  return (
    <>
      <form action="">
        <h1>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              style={{ width: 200 }}
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="Textarea1" class="form-label">
              Example textarea
            </label>
            <textarea
              style={{ width: 200 }}
              class="form-control"
              id="Textarea1"
              rows="3"
            ></textarea>
          </div>
          <div>
            <label for="text" class="form-label">
              password
            </label>
            <input type="password" name="password1" id="text" />
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">
              Default file input example
            </label>
            <input class="form-control" type="file" id="formFile" />
          </div>
          <label for="exampleColorInput" class="form-label">
            Color picker
          </label>
          <input
            type="color"
            class="form-control form-control-color"
            id="exampleColorInput"
            value="#563d7c"
            title="Choose your color"
          ></input>

          {/* checkboxes */}
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Default checkbox
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label class="form-check-label" for="flexCheckChecked">
              Checked checkbox
            </label>
          </div>

          {/* rddio buttons */}
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Male
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Female
            </label>
          </div>

          
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Yes
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                No
              </label>
            </div>
          
          <button type="button" class="btn btn-primary">
            Primary
          </button>
          <button type="button" class="btn btn-secondary">
            Secondary
          </button>
          <button type="button" class="btn btn-success">
            Success
          </button>
          <button type="button" class="btn btn-danger">
            Danger
          </button>
          <button type="button" class="btn btn-warning">
            Warning
          </button>
          <button type="button" class="btn btn-info">
            Info
          </button>
          <button type="button" class="btn btn-light">
            Light
          </button>
          <button type="button" class="btn btn-dark">
            Dark
          </button>
          <button type="button" class="btn btn-link">
            Link
          </button>

          {/* multiple input */}
          <div class="input-group">
            <span class="input-group-text">First and last name</span>
            <input type="text" aria-label="First name" class="form-control"/>
            <input type="text" aria-label="Last name" class="form-control"/>
        </div>
          
          {/* range */}
          <label for="customRange1" class="form-label">Example range</label>
          <input type="range" class="form-range" id="customRange1"></input>
        </h1>
      </form>
    </>
  );
};

export default FormDemo;
