import { createStore } from "redux";
import navbarReducer from "./reducer.jsx";

const store = createStore(navbarReducer);

export default store;
