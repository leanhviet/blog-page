// Libs
import { takeLatest, put } from 'redux-saga/effects'

// Constants
import { BLOGS_URL } from '../../../constants/api'

// Types action
import { Types } from '../redux/blogs'

// Handle API
import { getAPI } from '../../../api'

// worker saga for fetching data from home
export function* getBlogs() {
  try {
    // get list blogs by params
    const getBlogs = yield getAPI(BLOGS_URL)
    console.log('getBlogs', getBlogs)

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

export function* getBlogsSaga() {
  yield takeLatest(Types.GET_BLOGS_REQUEST, getBlogs)
}
