// Libs
import { all } from 'redux-saga/effects'

// Sagas
import { getBlogsSaga } from '../pages/Home/sagas/blogs'

function* rootSaga() {
  yield all([getBlogsSaga()])
}

export default rootSaga
