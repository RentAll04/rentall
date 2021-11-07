import { combineReducers } from "redux";
import categoryReducer from "./categories/reducer";

const rootReducers = combineReducers({
  categoryData: categoryReducer,
});

export default rootReducers;
