import React, { useReducer } from "react";
import axios from "axios";
import { CASE_GET_COMMENTS, CASE_GET_ONE_COMMENT } from "../helpers/cases";
import { COMMENTS_API } from "../helpers/const";

export const commentsContext = React.createContext();

const INIT_STATE = {
  comments: [],
  oneComment: null,
};

const reducer = (state = INIT_STATE, action) => {
  console.log(action, "action");
  switch (action.type) {
    case CASE_GET_COMMENTS: {
      return {
        ...state,
        comments: action.payload.data,
      };
    }
    case CASE_GET_ONE_COMMENT: {
      return {
        ...state,
        oneComment: action.payload.data,
      };
    }
    default:
      return state;
  }
};

const CommentsContextProvider = ({ children }) => {
  // console.log(state, "state");
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function createComment(newComment) {
    await axios.post(COMMENTS_API, newComment);
    getComments();
  }

  async function getComments() {
    let result = await axios.get(`${COMMENTS_API}`);
    dispatch({
      type: CASE_GET_COMMENTS,
      payload: result,
    });
  }

  async function getOneComment(id) {
    let result = await axios.get(`${COMMENTS_API}/${id}`);
    dispatch({
      type: CASE_GET_ONE_COMMENT,
      payload: result,
    });
  }
  async function deleteComment(id) {
    await axios.delete(`${COMMENTS_API}/${id}`);
    getComments();
  }
  async function updateComment(id, editedComment) {
    await axios.patch(`${COMMENTS_API}/${id}`, editedComment);
    getComments();
  }
  return (
    <commentsContext.Provider
      value={{
        comments: state.comments,
        oneComment: state.oneComment,
        getComments,
        createComment,
        updateComment,
        deleteComment,
        getOneComment,
      }}
    >
      {children}
    </commentsContext.Provider>
  );
};
export default CommentsContextProvider;
