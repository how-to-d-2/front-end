import React, { useState } from "react";

import HowToForm from "./HowToForm";
import { connect } from "react-redux";
import { deleteHowTo } from "../actions/actions";
import { HowToWrapper, Button } from "./HowToForm.style";
import FlipMove from "react-flip-move";

const HowTo = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const onClicked = () => {
    setIsClicked(!isClicked);
  };
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
        <div onClick={onClicked} className="how-to-display">
          <p className="name">{props.name}</p>
          <p className="category">{props.category}</p>
          <p className="description">{props.description}</p>
          {props.image && <img src={props.image} alt={props.category} />}
          {isClicked && (
            <div>
              <Button onClick={onEditClick}>Edit</Button>

              <Button onClick={onDeleteClick}>Delete</Button>
            </div>
          )}
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
