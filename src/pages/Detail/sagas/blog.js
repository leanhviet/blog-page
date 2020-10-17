// Libs
import { takeLatest, put } from 'redux-saga/effects'

// Constants
import { BLOGS_URL } from '../../../constants/api'

// Types action
import { Types } from '../redux/blog'

// Handle API
import { getAPI } from '../../../api'

/**
 * worker saga for fetching blog by
 * @param {Object} action | contain action type and param by request
 */
export function* getBlogByIdWorker(action) {
  try {
    // get blog by id
    const getBlogById = yield getAPI(`${BLOGS_URL}/${action?.id}`)

    if (getBlogById.status === 200) {
      yield put({
        type: Types.GET_BLOG_BY_ID_SUCCESS,
        blog: getBlogById.data,
      })
    } else {
      yield put({
        type: Types.GET_BLOG_BY_ID_FAILURE,
        error: getBlogById.data,
      })
    }
  } catch (error) {
    yield put({ type: Types.GET_BLOG_BY_ID_FAILURE, error })
  }
}

export function* getBlogByIdSaga() {
  yield takeLatest(Types.GET_BLOG_BY_ID_REQUEST, getBlogByIdWorker)
}
