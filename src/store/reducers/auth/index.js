import { combineReducers } from "redux";
import signinReducer from "./signin.reducer";
import authstateReducer from "./authstate.reducer";
import registerReducer from "./register.reducer";

const auth = combineReducers({
    signin: signinReducer,
    authstate: authstateReducer,
    register: registerReducer,
});

export default auth;
