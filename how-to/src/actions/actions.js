import { axiosWithAuth } from "../utilities/axiosWithAuth";

// Action Types

export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const LOGOUT_USER = "LOGOUT_USER";
export const FETCH_HOWTO_START = "FETCH_HOWTO_START";
export const FETCH_HOWTO_SUCCESS = "FETCH_HOWTO_SUCCESS";
export const FETCH_HOWTO_FAILURE = "FETCH_HOWTO_FAILURE";
export const UPDATE_HOWTO_START = "UPDATE_HOWTO_START";
export const UPDATE_HOWTO_SUCCESS = "UPDATE_HOWTO_SUCCESS";
export const UPDATE_HOWTO_FAILURE = "UPDATE_HOWTO_FAILURE";

export const ADD_HOWTO_START = "ADD_HOWTO_START";
export const ADD_HOWTO_SUCCESS = "ADD_HOWTO_SUCCESS";
export const ADD_HOWTO_FAILURE = "ADD_HOWTO_FAILURE";
export const EDIT_HOWTO_START = "EDIT_HOWTO_START";
export const EDIT_HOWTO_SUCCESS = "EDIT_HOWTO_SUCCESS";
export const EDIT_HOWTO_FAILURE = "EDIT_HOWTO_FAILURE";
export const DELETE_HOWTO_START = "DELETE_HOWTO_START";
export const DELETE_HOWTO_SUCCESS = "DELETE_HOWTO_SUCCESS";
export const DELETE_HOWTO_FAILURE = "DELETE_HOWTO_FAILURE";

// Action Creators

export const loginUser = (user) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_START });
    return axiosWithAuth()
      .post("/api/auth/register", user)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data.user });
      })
      .catch((error) => {
        dispatch({ type: LOGIN_USER_FAILURE, payload: error.message });
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: LOGOUT_USER });
  };
};

export const fetchUser = (user) => {
  return (dispatch) => {
    dispatch({ type: FETCH_HOWTO_START });
    axiosWithAuth()
      .get("")
      .then((response) => {
        dispatch({ type: FETCH_HOWTO_SUCCESS, payload: response.data.user });
      })
      .catch((error) => {
        dispatch({ type: FETCH_HOWTO_FAILURE, payload: error.message });
      });
  };
};

// export const updateUser = (user) => {
//   return (dispatch) => {
//     dispatch({ type: UPDATE_USER_START });
//     axiosWithAuth()
//       .put(`/users/${user.id}`, user)
//       .then((response) => {
//         dispatch({
//           type: UPDATE_USER_SUCCESS,
//           payload: response.data.updatedUser,
//         });
//       })
//       .catch((error) => {
//         dispatch({ type: UPDATE_USER_FAILURE, payload: error.message });
//       });
//   };
// };

export const fetchHowTo = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_HOWTO_START });
    console.log("Called in line 84");

    axiosWithAuth()
      .get()
      .then((response) => {
        console.log("Called in line 89");
        dispatch({ type: FETCH_HOWTO_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        console.log("Called in line 93");
        dispatch({ type: FETCH_HOWTO_FAILURE, payload: error.message });
      });
  };
};

export const addHowTo = (howTo) => {
  return (dispatch) => {
    // dispatch({ type: ADD_HOWTO_START });
    // axiosWithAuth()
    //   .post("", howTo)
    //   .then((response) => {
    //     dispatch({ type: ADD_HOWTO_SUCCESS, payload: response.data });
    //   })
    //   .catch((error) => {
    //     dispatch({ type: ADD_HOWTO_FAILURE, payload: error.message });
    //   });
    dispatch({ type: ADD_HOWTO_SUCCESS, payload: howTo });
  };
};

export const editHowTo = (howTo) => {
  return (dispatch) => {
    // dispatch({ type: EDIT_HOWTO_START });
    // axiosWithAuth()
    //   .put("", howTo)
    //   .then((response) => {
    //     dispatch({
    //       type: EDIT_HOWTO_SUCCESS,
    //       payload: { ...response.data, id: howTo.id },
    //     });
    //   })
    //   .catch((error) => {
    //     dispatch({ type: EDIT_HOWTO_FAILURE, payload: error.message });
    //   });
    dispatch({
      type: EDIT_HOWTO_SUCCESS,
      payload: howTo,
    });
  };
};

export const deleteHowTo = (id) => {
  return (dispatch) => {
    // dispatch({ type: DELETE_HOWTO_START });
    // axiosWithAuth()
    //   .delete(`/api/howtos/${id})
    //   .then((response) => {
    dispatch({ type: DELETE_HOWTO_SUCCESS, payload: id });
    // })
    // .catch((error) => {
    //   dispatch({ type: DELETE_HOWTO_FAILURE, payload: error.message });
    // });
  };
};
