// Libs
import { all } from 'redux-saga/effects'

// Sagas
import { getBlogsSaga, getTotalRecordsSaga } from '../pages/Home/sagas/blogs'
import { getBlogByIdSaga } from '../pages/Detail/sagas/blog'

function* rootSaga() {
  yield all([getBlogsSaga(), getTotalRecordsSaga(), getBlogByIdSaga()])
}

export default rootSaga
