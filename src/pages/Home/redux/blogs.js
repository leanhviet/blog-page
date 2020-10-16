// Libs
import { createReducer, createActions } from 'reduxsauce'
import Immutable, { merge } from 'seamless-immutable'

export const { Types, Creators } = createActions({
  getBlogsRequest: ['param'],
  getBlogsSuccess: ['blogs'],
  getBlogsFailure: ['error'],

  getTotalRecordsRequest: ['option'],
  getTotalRecordsSuccess: ['totalRecords'],
  getTotalRecordsFailure: ['error'],
})

const INITIAL_STATE = Immutable({
  fetching: false,
  blogs: [],
  error: null,
  type: null,
  totalRecords: 0,
})

// Get Blogs
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

// Get TotalRecords
const getTotalRecordsRequest = (state = INITIAL_STATE, action) => merge(state, { type: action.type, fetching: true, error: null })

const getTotalRecordsSuccess = (state = INITIAL_STATE, action) => merge(state, {
  type: action.type,
  fetching: false,
  totalRecords: action.totalRecords,
})

const geTotalRecordsFailure = (state = INITIAL_STATE, action) => merge(state, {
  type: action.type,
  fetching: false,
  totalRecords: 0,
  error: action.error,
})

export default createReducer(INITIAL_STATE, {
  [Types.GET_BLOGS_REQUEST]: getBlogsRequest,
  [Types.GET_BLOGS_SUCCESS]: getBlogsSuccess,
  [Types.GET_BLOGS_FAILURE]: getBlogsFailure,

  [Types.GET_TOTAL_RECORDS_REQUEST]: getTotalRecordsRequest,
  [Types.GET_TOTAL_RECORDS_SUCCESS]: getTotalRecordsSuccess,
  [Types.GET_TOTAL_RECORDS_FAILURE]: geTotalRecordsFailure,
})
