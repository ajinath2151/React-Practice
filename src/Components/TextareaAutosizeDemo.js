import { TextareaAutosize } from "@material-ui/core";
import React from "react";

function TextareaAutosizeDemo() {
  return (
    <div>
      <h3>Textarea Autosize</h3>
      <TextareaAutosize
        aria-label="Address"
        placeholder="auto size textarea"
      ></TextareaAutosize>{" "}
      <br />
      <TextareaAutosize
        aria-label="minimum height"
        minRows={3}
        placeholder="Minimum 3 rows"
      />{" "}
      <br />
      <TextareaAutosize
        maxRows={4}
        aria-label="maximum height"
        placeholder="Maximum 4 rows"
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
      />
    </div>
  );
}

export default TextareaAutosizeDemo;
