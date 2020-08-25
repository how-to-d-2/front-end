import React, { useState } from "react";
import { connect } from "react-redux";
import { editHowTo, addHowTo } from "../actions/actions";

import {
  HowToFormWrapper,
  FormContainer,
  FormGroup,
  Footer,
} from "./HowToForm.style";

const initialFormState = {
  name: "",
  category: "",
  description: "", //how to implement?
  image: "", //optional
};

const HowToForm = (props) => {
  const [formState, setFormState] = useState(
    props.isEditing ? props.howTo : initialFormState
  );
  const [formError, setFormError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // validation here
    if (
      formState.name !== "" &&
      formState.category !== "" &&
      formState.description !== ""
    ) {
      setFormError(false);

      if (props.isEditing) {
        props.editHowTo(formState);
        props.toggleIsEditing();
      } else {
        props.addHowTo(formState);
      }

      setFormState(initialFormState); // reset form state if successful
    } else {
      setFormError(true);
    }
  };

  const handleChanges = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <FormContainer>
      <FormGroup>
        <HowToFormWrapper onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChanges}
          />
          <label htmlFor="category">Category:</label>
          <input
            id="category"
            name="category"
            value={formState.category}
            onChange={handleChanges}
          />
          <label className="description" htmlFor="description">
            Description:
          </label>
          <input
            id="description"
            name="description"
            value={formState.description}
            onChange={handleChanges}
          />
          <Footer>
            <button className="btn" type="submit">
              Submit
            </button>
          </Footer>
        </HowToFormWrapper>
      </FormGroup>
    </FormContainer>
  );
};

const mapStateToProps = (state) => {
  return { error: state.error };
};

export default connect(mapStateToProps, { addHowTo, editHowTo })(HowToForm);
