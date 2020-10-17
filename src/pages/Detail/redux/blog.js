// Libs
import { createReducer, createActions } from 'reduxsauce'
import Immutable, { merge } from 'seamless-immutable'

export const { Types, Creators } = createActions({
  getBlogByIdRequest: ['id'],
  getBlogByIdSuccess: ['blog'],
  getBlogByIdFailure: ['error'],
})

const INITIAL_STATE = Immutable({
  fetching: false,
  blog: {},
  error: null,
  type: null,
})

// Get Blogs
const getBlogByIdRequest = (state = INITIAL_STATE, action) => merge(state, { type: action.type, fetching: true, error: null })

const getBlogByIdSuccess = (state = INITIAL_STATE, action) => merge(state, {
  type: action.type,
  fetching: false,
  blog: action.blog,
})

const getBlogByIdFailure = (state = INITIAL_STATE, action) => merge(state, {
  type: action.type,
  fetching: false,
  blog: {},
  error: action.error,
})

export default createReducer(INITIAL_STATE, {
  [Types.GET_BLOG_BY_ID_REQUEST]: getBlogByIdRequest,
  [Types.GET_BLOG_BY_ID_SUCCESS]: getBlogByIdSuccess,
  [Types.GET_BLOG_BY_ID_FAILURE]: getBlogByIdFailure,
})
