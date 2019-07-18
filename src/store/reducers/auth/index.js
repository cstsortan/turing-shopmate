import { combineReducers } from "redux";
import signinReducer from "./signin.reducer";
import authstateReducer from "./authstate.reducer";

const auth = combineReducers({
    signin: signinReducer,
    authstate: authstateReducer,
});

export default auth;
