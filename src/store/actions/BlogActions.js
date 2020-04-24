import firebase from "../../config";
import moment from "moment";
export const CREATE_BLOG = "CREATE_BLOG";
export const REMOVE_BLOG = "REMOVE_BLOG";
export const UPDATE_BLOG = "UPDATE_BLOG";
export const GET_BLOGS = "GET_BLOGS";
export const SET_SINGLE_BLOG = "SET_SINGLE_BLOG";
export const ERROR = "ERROR";

export const createBlog = inputData => {
  return async dispatch => {
    try {
      console.log();

      const res = await firebase
        .firestore()
        .collection("blogs")
        .add({ ...inputData });
      console.log(res);
      return dispatch({ type: CREATE_BLOG });
    } catch (err) {
      return dispatch({ type: ERROR });
    }
  };
};
export const getBlogs = () => {
  return async dispatch => {
    try {
      const res = await firebase
        .firestore()
        .collection("blogs")
        .get();
      let blogs = [];
      res.forEach(doc => blogs.push({ bID: doc.id, ...doc.data() }));

      return dispatch({ type: GET_BLOGS, blogs });
    } catch (err) {
      return dispatch({ type: ERROR });
    }
  };
};
export const setSingleBlog = blog => {
  return async dispatch => {
    try {
      return dispatch({ type: SET_SINGLE_BLOG, blog });
    } catch (err) {
      return dispatch({ type: ERROR });
    }
  };
};
