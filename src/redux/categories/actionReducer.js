import actions from "./actions";
import { getCategoryData } from "../../firebase/config";

const { fetchCategoryBegin, fetchCategorySuccess, fetchCategoryErr } = actions;

const getCategory = (category) => {
  console.log(category);
  return async (dispatch) => {
    try {
      dispatch(fetchCategoryBegin());
      dispatch(fetchCategorySuccess(await getCategoryData(category)));
    } catch (err) {
      dispatch(fetchCategoryErr(err.toString()));
    }
  };
};

export { getCategory };
