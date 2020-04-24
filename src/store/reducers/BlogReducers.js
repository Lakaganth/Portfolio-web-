import {
  CREATE_BLOG,
  GET_BLOGS,
  SET_SINGLE_BLOG
} from "./../actions/BlogActions";

const initialState = {
  blogs: [],
  blog: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BLOG:
      return state;
    case GET_BLOGS:
      return { ...state, blogs: action.blogs };
    case SET_SINGLE_BLOG:
      return { ...state, blog: action.blog };
    default:
      return state;
  }
};
