import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClerText = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div
          className="container"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          <textarea
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
          ></textarea>
        </div>
        <div
          className="container my-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h1>Your text summary</h1>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Mintues read</p>

          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>

          <button className="btn btn-primary mx-1" onClick={handleLowClick}>
            Convert to Lowercase
          </button>

          <button className="btn btn-primary mx-1" onClick={handleClerText}>
            Clear Text
          </button>
          <div
            className="container my-4"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            <h2>Preview</h2>
            <p>
              {text.length > 0 ? text : "Write something here for the preview"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
