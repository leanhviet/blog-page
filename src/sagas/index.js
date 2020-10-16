// Libs
import { all } from 'redux-saga/effects'

// Sagas
import { getBlogsSaga, getTotalRecordsSaga } from '../pages/Home/sagas/blogs'

function* rootSaga() {
  yield all([getBlogsSaga(), getTotalRecordsSaga()])
}

export default rootSaga
