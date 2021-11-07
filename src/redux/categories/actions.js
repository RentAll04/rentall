const actions = {
  FETCH_CATEGORY_BEGIN: "FETCH_CATEGORY_BEGIN",
  FETCH_CATEGORY_SUCCESS: "FETCH_CATEGORY_SUCCESS",
  FETCH_CATEGORY_ERR: "FETCH_CATEGORY_ERR",

  fetchCategoryBegin: () => {
    return {
      type: actions.FETCH_CATEGORY_BEGIN,
    };
  },

  fetchCategorySuccess: (data) => {
    return {
      type: actions.FETCH_CATEGORY_SUCCESS,
      data,
    };
  },

  fetchCategoryErr: (err) => {
    return {
      type: actions.FETCH_CATEGORY_ERR,
      err,
    };
  },
};

export default actions;
