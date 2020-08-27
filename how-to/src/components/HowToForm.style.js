import styled from "styled-components";

export const HowToFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;

  input {
    margin-top: 10px;
    min-width: 20em;
    height: 40px;
    padding: 0px 10px;
    font-size: 1rem;
    font-family: "Playfair Display", "Open Sans Condensed", sans-serif;
    background-color: #f3f3f3;
    border: 0;
    border-radius: 4px;
    margin-bottom: 2px;
    transition: all 250ms ease-in-out;
  }
  input:hover {
    background-color: #ffffff;
    box-shadow: 0px 0px 14px 0.3px #0e81ce96;
  }

  input:focus {
    outline: none;
    box-shadow: 0px 0px 12px 0.8px #3474dbb2;
  }
`;

export const HowToWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 4px;

  .name {
    font-size: 1.8rem;
    color: white;
  }
  .category {
    font-size: 1.4rem;
    font-style: italic;
    color: goldenrod;
  }
  .description {
    color: darkcyan;
  }
  .how-to-display {
    padding: 4px 4px;
    margin: 2%;
    background-color: #22222b;
    width: 60%;
    border-radius: 30px;
  }
`;

export const Button = styled.button`
  font-family: "Playfair Display";
  font-size: 18px;
  margin: 1%;
  padding: 5px 20px;
  border: 0;
  background-color: grey;
  color: white;
  border-radius: 3px;
  transition: all 250ms ease-in-out;
`;

export const FormContainer = styled.div`
  margin-top: 0.8em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;

  input {
    margin-top: 10px;
    min-width: 40em;
    height: 40px;
    padding: 0px 20px;
    font-size: 1rem;
    font-family: "Playfair Display", "Open Sans Consensed", sans-serif;
    background-color: #f3f3f3;
    border: 0;
    border-radius: 4px;
    margin-bottom: 5px;
    transition: all 250ms ease-in-out;
  }
  input:hover {
    background-color: #ffffff;
    box-shadow: 0px 0px 14px 0.3px #0e81ce96;
  }

  input:focus {
    outline: none;
    box-shadow: 0px 0px 12px 0.8px #3474dbb2;
  }
  .description {
    height: 100px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    min-width: 100%;
    cursor: pointer;
    margin-right: 0.25em;
    margin-top: 1em;
    padding: 0.938em;
    border: none;
    border-radius: 4px;
    background-color: #22223b;
    color: #fefefe;
  }
  button:hover {
    background-color: #4a4e69;
    color: #fefefe;
  }
  button:disabled {
    opacity: 0.2;
  }
`;
