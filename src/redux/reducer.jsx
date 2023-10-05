import { TOGGLE_NAVBAR } from "./actions.jsx";

const initialState = {
  isNavbarOpen: false,
};

function navbarReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return {
        ...state,
        isNavbarOpen: !state.isNavbarOpen,
      };
    default:
      return state;
  }
}

export default navbarReducer;
