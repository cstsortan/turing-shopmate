import { combineReducers } from "redux";
import all_categoriesReducer from './all_categories.reducer';

const categories = combineReducers({
    allCategories: all_categoriesReducer,
})

export default categories;
