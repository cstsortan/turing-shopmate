import { combineReducers } from "redux";
import all_categoriesReducer from './all_categories.reducer';
import selected_categoryReducer from './selected_category.reducer';

const categories = combineReducers({
    allCategories: all_categoriesReducer,
    selectedCategory: selected_categoryReducer,
})

export default categories;
