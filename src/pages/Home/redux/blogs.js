// Libs
import { createReducer, createActions } from 'reduxsauce'
import Immutable, { merge } from 'seamless-immutable'

export const { Types, Creators } = createActions({
  getBlogsRequest: [''],
  getBlogsSuccess: ['blogs'],
  getBlogsFailure: ['error'],
})

const INITIAL_STATE = Immutable({
  fetching: false,
  blogs: [],
  error: null,
  type: null,
})

const getBlogsRequest = (state = INITIAL_STATE, action) => merge(state, { type: action.type, fetching: true, error: null })

const getBlogsSuccess = (state = INITIAL_STATE, action) => merge(state, {
  type: action.type,
  fetching: false,
  blogs: action.blogs,
})

const getBlogsFailure = (state = INITIAL_STATE, action) => merge(state, {
  type: action.type,
  fetching: false,
  blogs: [],
  error: action.error,
})

export default createReducer(INITIAL_STATE, {
  [Types.GET_BLOGS_REQUEST]: getBlogsRequest,
  [Types.GET_BLOGS_SUCCESS]: getBlogsSuccess,
  [Types.GET_BLOGS_FAILURE]: getBlogsFailure,
})
