import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchHowTo } from "../actions/actions";

import HowTo from "./HowTo";

const HowToList = (props) => {
console.log(props)
  useEffect(() => {
    console.log(props)

    props.fetchHowTo();
  }, []);

  return (
    <div className="howto-list-wrapper">
      {props.howTo.length > 0 &&
        props.howTo.map((item) => {
          return (
            <HowTo
              key={item.id}
              id={item.id}
              name={item.name}
              category={item.category}
              description={item.description}
              image={item.image}
            />
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    howTo: state.howTo,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchHowTo })(HowToList);
