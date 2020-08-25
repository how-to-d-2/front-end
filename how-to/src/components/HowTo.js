import React, { useState } from "react";

import HowToForm from "./HowToForm";
import { connect } from "react-redux";
import { deleteHowTo } from "../actions/actions";
import { HowToWrapper, Button } from "./HowToForm.style";

const HowTo = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const onEditClick = () => {
    toggleIsEditing();
  };

  const onDeleteClick = () => {
    props.deleteHowTo(props.id);
  };

  return (
    <HowToWrapper>
      {!isEditing && (
        <div className="how-to-display">
          <p>{props.name}</p>
          <p>{props.category}</p>
          <p>{props.description}</p>
          {props.image && <img src={props.image} alt={props.category} />}
          <Button onClick={onEditClick}>Edit</Button>
          <Button onClick={onDeleteClick}>Delete</Button>
        </div>
      )}
      {isEditing && (
        <HowToForm
          toggleIsEditing={toggleIsEditing}
          isEditing={isEditing}
          howTo={{
            id: props.id,
            name: props.name,
            category: props.category,
            description: props.description,
            image: props.image,
          }}
        />
      )}
    </HowToWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};

export default connect(mapStateToProps, { deleteHowTo })(HowTo);
