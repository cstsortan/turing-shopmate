import { combineReducers } from "redux";
import signinReducer from "./signin.reducer";

const auth = combineReducers({
    signin: signinReducer,
});

export default auth;
