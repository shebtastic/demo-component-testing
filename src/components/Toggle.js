import {useState} from "react";
import styled from "styled-components";

function Toggle({ className }) {
  const [value, setValue] = useState(false)

  return (
    <div className={className}>
      <input
        id="toggle"
        type="range"
        value={value ? 1 : 0}
        min={0}
        max={1}
        onClick={() => setValue((value) => !value)}
        readOnly
      />
      <label htmlFor="toggle" data-testid="toggle-label">
        <span>the toggle</span>&nbsp;<span>{value ? "is on!" : "is off."}</span>
      </label>
    </div>
  )
}

const StyledToggle = styled(Toggle)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5em;
  width: 100%;
  background: darkgray;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10em;
    margin-left: 2rem;
    padding: 1em;
    background: turquoise;
    border-radius: 0.25em;
    
    span:last-of-type {
      /* width: 3em; */
    }
  }

  // courtesy of https://range-input-css.netlify.app
  /*********** Baseline, reset styles ***********/
  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    /* width: 4rem; */
    margin-right: 2rem;
  }

  /* Removes default focus */
  input[type="range"]:focus {
    outline: none;
  }

  /******** Chrome, Safari, Opera and Edge Chromium styles ********/
  /* slider track */
  input[type="range"]::-webkit-slider-runnable-track {
    background-color: #3a88fe;
    border-radius: 1.5rem;
    height: 1.5rem;
  }

  /* slider thumb */
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    margin-top: -4px; /* Centers thumb on the track */
    background-color: deepskyblue;
    border-radius: 1.5rem;
    height: 2rem;
    width: 2.5rem;
  }

  input[type="range"]:focus::-webkit-slider-thumb {
    outline: 3px solid deepskyblue;
    outline-offset: 0.125rem;
  }

  /*********** Firefox styles ***********/
  /* slider track */
  input[type="range"]::-moz-range-track {
    background-color: #3a88fe;
    border-radius: 1.5rem;
    height: 1.5rem;
  }

  /* slider thumb */
  input[type="range"]::-moz-range-thumb {
    background-color: deepskyblue;
    border: none; /*Removes extra border that FF applies*/
    border-radius: 1.5rem;
    height: 2rem;
    width: 2.5rem;
  }

  input[type="range"]:focus::-moz-range-thumb{
    outline: 3px solid deepskyblue;
    outline-offset: 0.125rem;
  }
`

export default StyledToggle
