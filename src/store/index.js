// Libs
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'

// Root
import rootReducer from '../reducers'
import rootSaga from '../sagas'

// middleware
const sagaMiddleware = createSagaMiddleware({})

const middlewares = [sagaMiddleware]

// Only use logger on development env
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

// create a redux store with our reducer above and middleware
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)

// run the saga
sagaMiddleware.run(rootSaga)
