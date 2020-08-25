import * as actions from "../actions/actions";
import FAKE_DATA from "../utilities/data";

const initialState = {
  isLoading: false,
  error: "",
  howTo: FAKE_DATA,
  user: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case actions.LOGIN_USER_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: "",
      };
    case actions.LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actions.UPDATE_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case actions.UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: {
          ...state.user,
          number: action.payload.number,
          password: action.payload.password,
        },
        error: "",
      };
    case actions.UPDATE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actions.FETCH_HOWTO_START:
      return {
        ...state,
        isLoading: true,
      };
    case actions.FETCH_HOWTO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        plants: action.payload,
        error: "",
      };
    case actions.FETCH_HOWTO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actions.ADD_HOWTO_START:
      return {
        ...state,
        isLoading: true,
      };
    case actions.ADD_HOWTO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        howTo: [...state.howTo, action.payload],
        error: "",
      };
    case actions.ADD_HOWTO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actions.EDIT_HOWTO_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case actions.EDIT_HOWTO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        howTo: state.howTo.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        }),
      };
    case actions.EDIT_HOWTO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actions.DELETE_HOWTO_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case actions.DELETE_HOWTO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        howTo: state.howTo.filter((item) => {
          if (item.id !== action.payload) {
            return true;
          }
          return false;
        }),
      };
    case actions.DELETE_HOWTO_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
