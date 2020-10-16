// Libs
import { takeLatest, put } from 'redux-saga/effects'

// Constants
import { BLOGS_URL } from '../../../constants/api'

// Types action
import { Types } from '../redux/blogs'

// Handle API
import { getAPI } from '../../../api'

/**
 * worker saga for fetching data from home page
 * @param {Object} action | contain action type and param by request
 */
export function* getBlogs(action) {
  try {
    // get list blogs by params
    const getBlogs = yield getAPI(BLOGS_URL, action?.param)

    if (getBlogs.status === 200) {
      yield put({
        type: Types.GET_BLOGS_SUCCESS,
        blogs: getBlogs.data,
      })
    } else {
      yield put({
        type: Types.GET_BLOGS_FAILURE,
        error: getBlogs.data,
      })
    }
  } catch (error) {
    yield put({ type: Types.GET_BLOGS_FAILURE, error })
  }
}

/**
 * worker saga for get total records from home page
 * @param {Object} action | contain action type and param by request
 */
export function* getTotalRecords(action) {
  try {
    // get list blogs
    const getBlogs = yield getAPI(BLOGS_URL, action?.option)

    if (getBlogs.status === 200) {
      yield put({
        type: Types.GET_TOTAL_RECORDS_SUCCESS,
        totalRecords: getBlogs.data.length,
      })
    } else {
      yield put({
        type: Types.GET_TOTAL_RECORDS_FAILURE,
        error: getBlogs.data,
      })
    }
  } catch (error) {
    yield put({ type: Types.GET_BLOGS_FAILURE, error })
  }
}

export function* getTotalRecordsSaga() {
  yield takeLatest(Types.GET_TOTAL_RECORDS_REQUEST, getTotalRecords)
}

export function* getBlogsSaga() {
  yield takeLatest(Types.GET_BLOGS_REQUEST, getBlogs)
}
