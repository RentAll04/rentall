import actions from "./actions";

const { FETCH_CATEGORY_BEGIN, FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_ERR } =
  actions;

const initialState = {
  loading: false,
  response: null,
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  const { type, data, err } = action;

  switch (type) {
    case FETCH_CATEGORY_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        response: data,
        loading: false,
      };
    case FETCH_CATEGORY_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    default:
      return state;
  }
};

export default categoryReducer;
