import { combineReducers } from "redux";
import attributesReducer from "./attributes.reducer";

export default combineReducers({
    all: attributesReducer,
});;
